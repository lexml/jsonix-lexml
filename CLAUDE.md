# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`jsonix-lexml` converts structured legislative texts in the LexML Brasil XML format to JSON and back. It ships as an npm library (`toJSON(xml)` / `toXML(json)`), a browser UMD bundle (global `jsonixLexml`), a CLI (`jsonix-lexml tojson|toxml`), standalone `pkg` executables and a Docker image. Code comments, docs, CLI messages and commit messages are in Portuguese.

## Commands

```bash
npm install
npm run build:mappings   # generate mappings/ from schemas/*.xsd (needs mvn + JDK 11+ on PATH)
npm test                 # node test.js — round-trip tests; requires mappings/ to exist
npx rollup -c            # build dist/bundle/jsonix-lexml.js (UMD) and .es.js, copy src + mappings into dist/
npm run build:exe        # full prepublish + pkg → jsonix-lexml-{linux,macos,win.exe}
./build-docker-image.sh [publish]   # Docker build (JDK 11 + Maven + Node 14), produces the executables
```

There is no test framework: `test.js` is a plain Node script using `assert`, with each test as a function called at the bottom of the file. To run a single test, comment out the other calls or run it inline, e.g. `node -e "require('./src/jsonix-lexml.js')..."`.

CLI while developing: `node src/main.js tojson samples/<file>.xml -o out.json` (source/output default to `-` = stdin/stdout).

## Architecture

The runtime code is tiny (`src/jsonix-lexml.js`, ~30 lines); almost all behaviour comes from **generated Jsonix mappings**:

1. `schemas/*.xsd` are the source of truth: `lexml-simples.xsd` (LexML, namespace `http://www.lexml.gov.br/1.0`), `lexedit.xsd` (LexEdit proprietary metadata, namespace `http://www.lexml.gov.br/lexedit/1.0`), plus `math.xsd`, `xlink.xsd`, `xml.xsd`.
2. `npm run build:mappings` installs `node_modules/jsonix/lib/jsonix-schema-compiler-full.jar` into the local Maven repo and runs it via `mvn exec:java` (config in `pom.xml`). It writes `mappings/br_gov_lexml__1.js`, `br_gov_lexml_lexedit__1.js`, `org_w3__1998_math_mathml.js` (+ `.jsonschema`). **`mappings/` is gitignored** — regenerate after any XSD change.
   - Do not run the jar with `java -jar` directly: it fails on JDK ≥ 9 (`javax.activation` missing). The Maven route supplies JAXB/activation deps from `pom.xml`, and `.mvn/jvm.config` adds `--add-opens java.base/java.lang=ALL-UNNAMED` for JDK ≥ 16.
   - The schema list is hard-coded in `pom.xml` `commandlineArgs`; a new XSD must be added there.
3. `src/jsonix-lexml.js` loads all mapping modules into **one** `Jsonix.Context` with fixed namespace prefixes (LexML is the default namespace, `lexedit` for LexEdit). `src/main.js` is the commander-based CLI on top of it.
4. `rollup.config.js` bundles for the browser; it applies string `replace`s to patch two undeclared variables in `jsonix.js` (needed for strict-mode bundling) — keep these if upgrading jsonix.

### LexEdit metadata (`MetadadoProprietario`)

`lexml-simples.xsd` was intentionally changed to `processContents="lax"` on the `xsd:any` inside `MetadadoProprietario`. This is what makes `<lexedit:Metadado>` unmarshal into a typed object (`metadadoProprietario[].any[].value` with `TYPE_NAME: "br_gov_lexml_lexedit__1.Metadado"`) instead of raw DOM — with `"skip"`, Jsonix emits `allowTypedObject: false`. Unknown proprietary metadata still falls back to DOM. `lexml-simples.xsd` is editable in this project.

`RevisaoArticulacao` in `lexedit.xsd` is an `xsd:choice` of 17 LexML elements; JAXB/Jsonix flattens it into 17 separate properties (`parte`, `livro`, …, `artigo`, …, `p`), each marked `required`. Only one may be set; Jsonix does not enforce this on `toXML`. The JAXB `choiceContentProperty` customization is rejected by the bundled compiler, so any union handling must live in JS, not the XSD. Full background and open items: `docs/plano-conversao-jsonix-lexedit.md`.

## Tests and samples

`test.js` round-trips `toJSON → toXML → toJSON` with `deepStrictEqual` over `samples/documento-articulado-exemplo.xml` (LexEdit sample, with specific assertions on the typed metadata and the `RevisaoArticulacao` choice) and a couple of pre-existing `samples/` files as regression. No XSD validation is performed.

## Publishing quirk

`README.md` (GitHub) and `README.npm.md` (npm) are separate hand-maintained files. `prepublish` swaps them (`README.md` → `README.git.md`, `README.npm.md` → `README.md`) and `postpublish` restores; an interrupted publish can leave `README.md` holding the npm version. Only `dist/` is published (`main`/`module` point to `dist/bundle/jsonix-lexml.js`, `bin` to `dist/src/main.js`).
