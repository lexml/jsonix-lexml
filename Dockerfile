FROM node:14.18.1-bullseye as build-base
RUN npm install -g pkg && \
    echo "console.out('test');" > test.js && \
    pkg -t node14-linux-x64,node14-macos-x64,node14-win-x64 test.js
RUN apt-get update -y && \
    apt-get install -y openjdk-11-jdk-headless && \
    apt-get install -y maven
RUN mkdir /build /build/schemas 
COPY package.json package-lock.json pom.xml /build/
COPY schemas/* /build/schemas/
RUN cd /build && \
    npm install 
RUN cd /build && \
    mvn install:install-file \
    	-Dfile=node_modules/jsonix/lib/jsonix-schema-compiler-full.jar \
	-DgroupId=local \
	-DartifactId=jsonix-schema-compiler-full \
	-Dversion=1.0.0 \
	-Dpackaging=jar \
	-DgeneratePom=true && \
   mvn dependency:go-offline
RUN cd /build && \
    mvn exec:java
COPY src/* /build/src/
COPY rollup.config.js /build/
RUN npm install -g rollup && \
    cd /build && rollup -c && pkg .    

#FROM debian:bullseye-slim
FROM alpine:3.14.3

RUN apk update && apk add gcompat libstdc++
COPY --from=build-base /build/jsonix-lexml-linux /
COPY --from=build-base /build/jsonix-lexml-macos /
COPY --from=build-base /build/jsonix-lexml-win.exe /
RUN mkdir /mappings
COPY --from=build-base /build/mappings/ /mappings/

ENTRYPOINT ["/jsonix-lexml-linux"]
