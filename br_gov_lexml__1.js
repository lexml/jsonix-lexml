var br_gov_lexml__1_Module_Factory = function () {
  var br_gov_lexml__1 = {
    n: 'br_gov_lexml__1',
    dens: 'http:\/\/www.lexml.gov.br\/1.0',
    deps: ['org_w3__1998_math_mathml'],
    tis: [{
        ln: 'Evento',
        tn: null,
        ps: [{
            n: 'criacao',
            rq: true,
            en: 'Criacao',
            ti: '.Criacao'
          }, {
            n: 'publicacao',
            rq: true,
            en: 'Publicacao',
            ti: '.RefURNAlvo'
          }, {
            n: 'entradaEmVigor',
            rq: true,
            en: 'EntradaEmVigor',
            ti: '.RefURNAlvo'
          }, {
            n: 'retificacao',
            rq: true,
            en: 'Retificacao',
            ti: '.RefURNAlvo'
          }, {
            n: 'republicacao',
            rq: true,
            en: 'Republicacao',
            ti: '.RefURNAlvo'
          }, {
            n: 'revogacaoTotal',
            rq: true,
            en: 'RevogacaoTotal',
            ti: '.RefURNAlvo'
          }, {
            n: 'anulamentoTotal',
            rq: true,
            en: 'AnulamentoTotal',
            ti: '.RefURNAlvo'
          }, {
            n: 'alteracaoFragmento',
            rq: true,
            en: 'AlteracaoFragmento',
            ti: '.AlteracaoFragmento'
          }, {
            n: 'data',
            rq: true,
            ti: 'Date',
            an: {
              lp: 'data'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Recurso',
        tn: null,
        ps: [{
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'CabecalhoAcordao',
        tn: null,
        ps: [{
            n: 'epigrafe',
            rq: true,
            en: 'Epigrafe',
            ti: '.GenInline'
          }, {
            n: 'dataJulgamento',
            rq: true,
            en: 'DataJulgamento',
            ti: 'Date'
          }, {
            n: 'orgaoJulgador',
            rq: true,
            en: 'OrgaoJulgador'
          }, {
            n: 'relator',
            rq: true,
            en: 'Relator',
            ti: '.ParticipaType'
          }, {
            n: 'partesProcesso',
            rq: true,
            mno: 2,
            col: true,
            en: 'PartesProcesso',
            ti: '.PartesProcesso'
          }]
      }, {
        ln: 'Recursos',
        tn: null,
        ps: [{
            n: 'recurso',
            rq: true,
            col: true,
            en: 'Recurso',
            ti: '.Recurso'
          }]
      }, {
        ln: 'Anexos',
        tn: null,
        ps: [{
            n: 'referenciaAnexo',
            rq: true,
            col: true,
            en: 'ReferenciaAnexo',
            ti: '.RefURNAlvo'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Assinatura',
        tn: null,
        ps: [{
            n: 'nomePessoa',
            rq: true,
            col: true,
            en: 'NomePessoa'
          }, {
            n: 'cargo',
            mno: 0,
            col: true,
            en: 'Cargo'
          }]
      }, {
        ln: 'OpenStructure',
        ps: [{
            n: 'partePrincipal',
            en: 'PartePrincipal',
            ti: '.PartePrincipal'
          }, {
            n: 'anexos',
            en: 'Anexos',
            ti: '.Anexos'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Hierarchy',
        tn: 'hierarchy',
        ps: [{
            n: 'rotulo',
            en: 'Rotulo'
          }, {
            n: 'nomeAgrupador',
            en: 'NomeAgrupador',
            ti: '.GenInline'
          }, {
            n: 'lXhier',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'Parte',
                ti: '.Hierarchy'
              }, {
                en: 'Livro',
                ti: '.Hierarchy'
              }, {
                en: 'Titulo',
                ti: '.Hierarchy'
              }, {
                en: 'Subtitulo',
                ti: '.Hierarchy'
              }, {
                en: 'Capitulo',
                ti: '.Hierarchy'
              }, {
                en: 'Secao',
                ti: '.Hierarchy'
              }, {
                en: 'Artigo',
                ti: '.DispositivoType'
              }, {
                en: 'Omissis',
                ti: '.Omissis'
              }, {
                en: 'Subsecao',
                ti: '.Hierarchy'
              }, {
                en: 'AgrupamentoHierarquico',
                ti: '.Hierarchy'
              }],
            t: 'ers'
          }, {
            n: 'nome',
            an: {
              lp: 'nome'
            },
            t: 'a'
          }, {
            n: 'abreAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'abreAspas'
            },
            t: 'a'
          }, {
            n: 'fechaAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'fechaAspas'
            },
            t: 'a'
          }, {
            n: 'notaAlteracao',
            an: {
              lp: 'notaAlteracao'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'HTMLlist',
        ps: [{
            n: 'li',
            rq: true,
            col: true,
            ti: '.Li'
          }]
      }, {
        ln: 'Marcador',
        tn: null,
        ps: [{
            n: 'nome',
            rq: true,
            an: {
              lp: 'nome'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'AlteracaoFragmento',
        tn: null,
        ps: [{
            n: 'modificacaoTextual',
            mno: 0,
            col: true,
            en: 'ModificacaoTextual',
            ti: '.RefURNAlvo'
          }, {
            n: 'revogacaoParcial',
            mno: 0,
            col: true,
            en: 'RevogacaoParcial',
            ti: '.RefURNAlvo'
          }, {
            n: 'anulamentoParcial',
            mno: 0,
            col: true,
            en: 'AnulamentoParcial',
            ti: '.RefURNAlvo'
          }, {
            n: 'derrubadaVetoParcial',
            mno: 0,
            col: true,
            en: 'DerrubadaVetoParcial',
            ti: '.RefURNAlvo'
          }]
      }, {
        ln: 'EventoList',
        ps: [{
            n: 'evento',
            mno: 0,
            col: true,
            en: 'Evento',
            ti: '.Evento'
          }]
      }, {
        ln: 'MetadadoProprietario',
        tn: null,
        ps: [{
            n: 'any',
            mno: 0,
            col: true,
            typed: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'fonte',
            rq: true,
            an: {
              lp: 'fonte'
            },
            t: 'a'
          }]
      }, {
        ln: 'AssinaturaGrupo',
        tn: null,
        ps: [{
            n: 'nomeGrupo',
            rq: true,
            en: 'NomeGrupo'
          }, {
            n: 'assinaturas',
            mno: 0,
            col: true,
            en: 'Assinaturas',
            ti: '.Assinaturas'
          }, {
            n: 'assinatura',
            mno: 0,
            col: true,
            en: 'Assinatura',
            ti: '.Assinatura'
          }]
      }, {
        ln: 'BlockContainer',
        tn: 'blockContainer',
        ps: [{
            n: 'pOrUlOrOl',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'p',
                ti: '.GenInline'
              }, {
                en: 'ul',
                ti: '.HTMLlist'
              }, {
                en: 'ol',
                ti: '.HTMLlist'
              }, {
                en: 'table',
                ti: '.Table'
              }, {
                en: 'ConteudoExterno',
                ti: '.ConteudoExterno'
              }, {
                en: 'Bloco',
                ti: '.GenInline'
              }],
            t: 'ers'
          }, {
            n: 'nome',
            an: {
              lp: 'nome'
            },
            t: 'a'
          }, {
            n: 'abreAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'abreAspas'
            },
            t: 'a'
          }, {
            n: 'fechaAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'fechaAspas'
            },
            t: 'a'
          }, {
            n: 'notaAlteracao',
            an: {
              lp: 'notaAlteracao'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'PartePrincipal',
        tn: null,
        ps: [{
            n: 'agrupamentoHierarquicoOrDivOrAgrupamento',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'AgrupamentoHierarquico',
                ti: '.Hierarchy'
              }, {
                en: 'div',
                ti: '.BlockContainer'
              }, {
                en: 'Agrupamento',
                ti: '.BlockContainer'
              }, {
                en: 'p',
                ti: '.GenInline'
              }, {
                en: 'ul',
                ti: '.HTMLlist'
              }, {
                en: 'ol',
                ti: '.HTMLlist'
              }, {
                en: 'table',
                ti: '.Table'
              }, {
                en: 'ConteudoExterno',
                ti: '.ConteudoExterno'
              }, {
                en: 'Bloco',
                ti: '.GenInline'
              }],
            t: 'ers'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'RefURNAlvo',
        tn: 'refURNAlvo',
        ps: [{
            n: 'fonteURN',
            an: {
              lp: 'FonteURN'
            },
            t: 'a'
          }, {
            n: 'alvoURN',
            an: {
              lp: 'AlvoURN'
            },
            t: 'a'
          }, {
            n: 'alvoLocal',
            ti: 'IDREFS',
            an: {
              lp: 'AlvoLocal'
            },
            t: 'a'
          }, {
            n: 'fonteLocal',
            ti: 'IDREFS',
            an: {
              lp: 'FonteLocal'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Li',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: 'Remissao',
                ti: '.GenInline'
              }, {
                en: 'RemissaoMultipla',
                ti: '.GenInline'
              }, {
                en: 'Formula',
                ti: '.Formula'
              }, {
                en: 'span',
                ti: '.GenInline'
              }, {
                en: 'b',
                ti: '.GenInline'
              }, {
                en: 'i',
                ti: '.GenInline'
              }, {
                en: 'a',
                ti: '.GenInline'
              }, {
                en: 'sub',
                ti: '.GenInline'
              }, {
                en: 'sup',
                ti: '.GenInline'
              }, {
                en: 'ins',
                ti: '.GenInline'
              }, {
                en: 'del',
                ti: '.GenInline'
              }, {
                en: 'dfn',
                ti: '.GenInline'
              }, {
                en: 'NotaReferenciada',
                ti: '.NotaReferenciada'
              }, {
                en: 'EmLinha',
                ti: '.GenInline'
              }, {
                en: 'img',
                ti: '.Img'
              }, {
                en: 'Marcador',
                ti: '.Marcador'
              }, {
                en: 'ul',
                ti: '.HTMLlist'
              }, {
                en: 'ol',
                ti: '.HTMLlist'
              }, {
                en: 'p',
                ti: '.GenInline'
              }],
            t: 'ers'
          }, {
            n: 'value',
            an: {
              lp: 'value'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Assinaturas',
        tn: null,
        ps: [{
            n: 'assinatura',
            rq: true,
            col: true,
            en: 'Assinatura',
            ti: '.Assinatura'
          }]
      }, {
        ln: 'Nota',
        tn: null,
        bti: '.TextoType',
        ps: [{
            n: 'exporta',
            ti: 'Boolean',
            an: {
              lp: 'exporta'
            },
            t: 'a'
          }, {
            n: 'dataInclusao',
            ti: 'Date',
            an: {
              lp: 'dataInclusao'
            },
            t: 'a'
          }, {
            n: 'autor',
            ti: 'IDREF',
            an: {
              lp: 'autor'
            },
            t: 'a'
          }]
      }, {
        ln: 'Notas',
        tn: null,
        ps: [{
            n: 'nota',
            rq: true,
            col: true,
            en: 'Nota',
            ti: '.Nota'
          }]
      }, {
        ln: 'Metadado',
        tn: null,
        ps: [{
            n: 'identificacao',
            rq: true,
            en: 'Identificacao',
            ti: '.Identificacao'
          }, {
            n: 'cicloDeVida',
            en: 'CicloDeVida',
            ti: '.EventoList'
          }, {
            n: 'eventosGerados',
            en: 'EventosGerados',
            ti: '.EventoList'
          }, {
            n: 'notas',
            mno: 0,
            col: true,
            en: 'Notas',
            ti: '.Notas'
          }, {
            n: 'recursos',
            en: 'Recursos',
            ti: '.Recursos'
          }, {
            n: 'metadadoProprietario',
            mno: 0,
            col: true,
            en: 'MetadadoProprietario',
            ti: '.MetadadoProprietario'
          }]
      }, {
        ln: 'DispositivoType',
        ps: [{
            n: 'tituloDispositivo',
            en: 'TituloDispositivo',
            ti: '.GenInline'
          }, {
            n: 'rotulo',
            en: 'Rotulo'
          }, {
            n: 'p',
            mno: 0,
            col: true,
            ti: '.GenInline'
          }, {
            n: 'alteracao',
            en: 'Alteracao',
            ti: '.Alteracao'
          }, {
            n: 'lXcontainersOmissis',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'Caput',
                ti: '.DispositivoType'
              }, {
                en: 'Paragrafo',
                ti: '.DispositivoType'
              }, {
                en: 'Inciso',
                ti: '.DispositivoType'
              }, {
                en: 'Alinea',
                ti: '.DispositivoType'
              }, {
                en: 'Item',
                ti: '.DispositivoType'
              }, {
                en: 'DispositivoGenerico',
                ti: '.DispositivoType'
              }, {
                en: 'Omissis',
                ti: '.Omissis'
              }],
            t: 'ers'
          }, {
            n: 'pena',
            en: 'Pena',
            ti: '.DispositivoType'
          }, {
            n: 'nome',
            an: {
              lp: 'nome'
            },
            t: 'a'
          }, {
            n: 'textoOmitido',
            ti: '.TipoMarcador',
            an: {
              lp: 'textoOmitido'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'abreAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'abreAspas'
            },
            t: 'a'
          }, {
            n: 'fechaAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'fechaAspas'
            },
            t: 'a'
          }, {
            n: 'notaAlteracao',
            an: {
              lp: 'notaAlteracao'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextoType',
        tn: 'textoType',
        ps: [{
            n: 'p',
            mno: 0,
            col: true,
            ti: '.GenInline'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'abreAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'abreAspas'
            },
            t: 'a'
          }, {
            n: 'fechaAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'fechaAspas'
            },
            t: 'a'
          }, {
            n: 'notaAlteracao',
            an: {
              lp: 'notaAlteracao'
            },
            t: 'a'
          }]
      }, {
        ln: 'ParteInicial',
        tn: null,
        ps: [{
            n: 'formulaPromulgacao',
            en: 'FormulaPromulgacao',
            ti: '.ParsType'
          }, {
            n: 'epigrafe',
            en: 'Epigrafe',
            ti: '.GenInline'
          }, {
            n: 'ementa',
            en: 'Ementa',
            ti: '.GenInline'
          }, {
            n: 'preambulo',
            en: 'Preambulo',
            ti: '.TextoType'
          }]
      }, {
        ln: 'ParteFinal',
        tn: null,
        ps: [{
            n: 'localDataFecho',
            en: 'LocalDataFecho',
            ti: '.ParsType'
          }, {
            n: 'assinaturaTexto',
            mno: 0,
            col: true,
            en: 'AssinaturaTexto',
            ti: '.ParsType'
          }, {
            n: 'assinaturaGrupo',
            mno: 0,
            col: true,
            en: 'AssinaturaGrupo',
            ti: '.AssinaturaGrupo'
          }, {
            n: 'assinaturas',
            mno: 0,
            col: true,
            en: 'Assinaturas',
            ti: '.Assinaturas'
          }, {
            n: 'assinatura',
            mno: 0,
            col: true,
            en: 'Assinatura',
            ti: '.Assinatura'
          }]
      }, {
        ln: 'Tr',
        tn: null,
        ps: [{
            n: 'tableCellElement',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'th',
                ti: '.GenInline'
              }, {
                en: 'td',
                ti: '.GenInline'
              }],
            t: 'ers'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'HierarchicalStructure',
        ps: [{
            n: 'parteInicial',
            en: 'ParteInicial',
            ti: '.ParteInicial'
          }, {
            n: 'articulacao',
            rq: true,
            en: 'Articulacao',
            ti: '.Articulacao'
          }, {
            n: 'parteFinal',
            en: 'ParteFinal',
            ti: '.ParteFinal'
          }, {
            n: 'anexos',
            en: 'Anexos',
            ti: '.Anexos'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Criacao',
        tn: null,
        ps: [{
            n: 'projetoNormaOrigem',
            mno: 0,
            col: true,
            en: 'ProjetoNormaOrigem',
            ti: '.RefURNAlvo'
          }, {
            n: 'julgadoOrigemAnulacao',
            mno: 0,
            col: true,
            en: 'JulgadoOrigemAnulacao',
            ti: '.RefURNAlvo'
          }, {
            n: 'mensagemVetoAplicado',
            mno: 0,
            col: true,
            en: 'MensagemVetoAplicado',
            ti: '.RefURNAlvo'
          }]
      }, {
        ln: 'Articulacao',
        tn: null,
        ps: [{
            n: 'lXhier',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'Parte',
                ti: '.Hierarchy'
              }, {
                en: 'Livro',
                ti: '.Hierarchy'
              }, {
                en: 'Titulo',
                ti: '.Hierarchy'
              }, {
                en: 'Subtitulo',
                ti: '.Hierarchy'
              }, {
                en: 'Capitulo',
                ti: '.Hierarchy'
              }, {
                en: 'Secao',
                ti: '.Hierarchy'
              }, {
                en: 'Artigo',
                ti: '.DispositivoType'
              }, {
                en: 'Omissis',
                ti: '.Omissis'
              }, {
                en: 'Subsecao',
                ti: '.Hierarchy'
              }, {
                en: 'AgrupamentoHierarquico',
                ti: '.Hierarchy'
              }],
            t: 'ers'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Table',
        tn: null,
        ps: [{
            n: 'tr',
            rq: true,
            col: true,
            ti: '.Tr'
          }, {
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'border',
            ti: 'Integer',
            an: {
              lp: 'border'
            },
            t: 'a'
          }, {
            n: 'cellspacing',
            ti: 'Integer',
            an: {
              lp: 'cellspacing'
            },
            t: 'a'
          }, {
            n: 'cellpadding',
            ti: 'Integer',
            an: {
              lp: 'cellpadding'
            },
            t: 'a'
          }, {
            n: 'id',
            rq: true,
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'ParsType',
        tn: 'parsType',
        ps: [{
            n: 'p',
            rq: true,
            col: true,
            ti: '.GenInline'
          }]
      }, {
        ln: 'Identificacao',
        tn: null,
        ps: [{
            n: 'urn',
            rq: true,
            an: {
              lp: 'URN'
            },
            t: 'a'
          }]
      }, {
        ln: 'Img',
        tn: null,
        ps: [{
            n: 'src',
            rq: true,
            an: {
              lp: 'src'
            },
            t: 'a'
          }, {
            n: 'alt',
            an: {
              lp: 'alt'
            },
            t: 'a'
          }, {
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Formula',
        tn: null,
        ps: [{
            n: 'math',
            rq: true,
            en: {
              lp: 'math',
              ns: 'http:\/\/www.w3.org\/1998\/Math\/MathML'
            },
            ti: 'org_w3__1998_math_mathml.Math'
          }, {
            n: 'fonte',
            an: {
              lp: 'fonte'
            },
            t: 'a'
          }, {
            n: 'tipo',
            an: {
              lp: 'tipo'
            },
            t: 'a'
          }]
      }, {
        ln: 'TextoSimplesOptType',
        tn: 'textoSimplesOptType',
        ps: [{
            n: 'p',
            ti: '.GenInline'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'abreAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'abreAspas'
            },
            t: 'a'
          }, {
            n: 'fechaAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'fechaAspas'
            },
            t: 'a'
          }, {
            n: 'notaAlteracao',
            an: {
              lp: 'notaAlteracao'
            },
            t: 'a'
          }]
      }, {
        ln: 'Acordao',
        tn: null,
        ps: [{
            n: 'cabecalhoAcordao',
            rq: true,
            en: 'CabecalhoAcordao',
            ti: '.CabecalhoAcordao'
          }, {
            n: 'ementaTexto',
            rq: true,
            en: 'EmentaTexto',
            ti: '.OpenStructure'
          }, {
            n: 'acordaoTexto',
            rq: true,
            en: 'AcordaoTexto',
            ti: '.OpenStructure'
          }, {
            n: 'relatorioTexto',
            rq: true,
            en: 'RelatorioTexto',
            ti: '.OpenStructure'
          }, {
            n: 'votoTexto',
            rq: true,
            en: 'VotoTexto',
            ti: '.OpenStructure'
          }, {
            n: 'debateTexto',
            en: 'DebateTexto',
            ti: '.OpenStructure'
          }, {
            n: 'extratoAtaTexto',
            rq: true,
            en: 'ExtratoAtaTexto',
            ti: '.OpenStructure'
          }]
      }, {
        ln: 'PartesProcesso',
        tn: null,
        ps: [{
            n: 'parteProcesso',
            rq: true,
            col: true,
            en: 'ParteProcesso',
            ti: '.ParticipaType'
          }, {
            n: 'advogadosParte',
            mno: 0,
            col: true,
            en: 'AdvogadosParte',
            ti: '.ParticipaType'
          }]
      }, {
        ln: 'Alteracao',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: 'FormulaPromulgacao',
                ti: '.ParsType'
              }, {
                en: 'Epigrafe',
                ti: '.GenInline'
              }, {
                en: 'Ementa',
                ti: '.GenInline'
              }, {
                en: 'Preambulo',
                ti: '.TextoType'
              }, {
                en: 'Parte',
                ti: '.Hierarchy'
              }, {
                en: 'Livro',
                ti: '.Hierarchy'
              }, {
                en: 'Titulo',
                ti: '.Hierarchy'
              }, {
                en: 'Subtitulo',
                ti: '.Hierarchy'
              }, {
                en: 'Capitulo',
                ti: '.Hierarchy'
              }, {
                en: 'Secao',
                ti: '.Hierarchy'
              }, {
                en: 'Artigo',
                ti: '.DispositivoType'
              }, {
                en: 'Omissis',
                ti: '.Omissis'
              }, {
                en: 'Subsecao',
                ti: '.Hierarchy'
              }, {
                en: 'AgrupamentoHierarquico',
                ti: '.Hierarchy'
              }, {
                en: 'div',
                ti: '.BlockContainer'
              }, {
                en: 'Agrupamento',
                ti: '.BlockContainer'
              }, {
                en: 'p',
                ti: '.GenInline'
              }, {
                en: 'ul',
                ti: '.HTMLlist'
              }, {
                en: 'ol',
                ti: '.HTMLlist'
              }, {
                en: 'table',
                ti: '.Table'
              }, {
                en: 'ConteudoExterno',
                ti: '.ConteudoExterno'
              }, {
                en: 'Bloco',
                ti: '.GenInline'
              }, {
                en: 'Caput',
                ti: '.DispositivoType'
              }, {
                en: 'Paragrafo',
                ti: '.DispositivoType'
              }, {
                en: 'Inciso',
                ti: '.DispositivoType'
              }, {
                en: 'Alinea',
                ti: '.DispositivoType'
              }, {
                en: 'Item',
                ti: '.DispositivoType'
              }, {
                en: 'DispositivoGenerico',
                ti: '.DispositivoType'
              }],
            t: 'ers'
          }, {
            n: 'base',
            an: {
              lp: 'base',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'Anexo',
        tn: null,
        ps: [{
            n: 'documentoArticulado',
            rq: true,
            en: 'DocumentoArticulado',
            ti: '.HierarchicalStructure'
          }, {
            n: 'documentoGenerico',
            rq: true,
            en: 'DocumentoGenerico',
            ti: '.OpenStructure'
          }]
      }, {
        ln: 'RefURNSimples',
        tn: 'refURNSimples',
        ps: [{
            n: 'urn',
            an: {
              lp: 'URN'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'ConteudoExterno',
        tn: null,
        ps: [{
            n: 'any',
            rq: true,
            dom: false,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'LexML',
        tn: null,
        ps: [{
            n: 'metadado',
            rq: true,
            en: 'Metadado',
            ti: '.Metadado'
          }, {
            n: 'norma',
            rq: true,
            en: 'Norma',
            ti: '.HierarchicalStructure'
          }, {
            n: 'projetoNorma',
            rq: true,
            en: 'ProjetoNorma',
            ti: '.ProjetoNorma'
          }, {
            n: 'jurisprudencia',
            rq: true,
            en: 'Jurisprudencia',
            ti: '.Jurisprudencia'
          }, {
            n: 'documentoGenerico',
            rq: true,
            en: 'DocumentoGenerico',
            ti: '.OpenStructure'
          }, {
            n: 'anexo',
            rq: true,
            en: 'Anexo',
            ti: '.Anexo'
          }]
      }, {
        ln: 'Sumula',
        tn: null,
        ps: [{
            n: 'epigrafe',
            rq: true,
            en: 'Epigrafe',
            ti: '.GenInline'
          }, {
            n: 'ementa',
            rq: true,
            en: 'Ementa',
            ti: '.GenInline'
          }, {
            n: 'observacao',
            en: 'Observacao',
            ti: '.ParsType'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        ln: 'ParticipaType',
        tn: 'participaType',
        ps: [{
            n: 'rotulo',
            rq: true,
            en: 'Rotulo'
          }, {
            n: 'tratamento',
            en: 'Tratamento'
          }, {
            n: 'nomeAgente',
            rq: true,
            en: 'NomeAgente'
          }]
      }, {
        ln: 'Omissis',
        tn: null,
        ps: [{
            n: 'id',
            rq: true,
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'abreAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'abreAspas'
            },
            t: 'a'
          }, {
            n: 'fechaAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'fechaAspas'
            },
            t: 'a'
          }, {
            n: 'notaAlteracao',
            an: {
              lp: 'notaAlteracao'
            },
            t: 'a'
          }]
      }, {
        ln: 'ProjetoNorma',
        tn: null,
        ps: [{
            n: 'norma',
            rq: true,
            en: 'Norma',
            ti: '.HierarchicalStructure'
          }, {
            n: 'justificacao',
            mno: 0,
            col: true,
            en: 'Justificacao',
            ti: '.OpenStructure'
          }, {
            n: 'autorProjeto',
            mno: 0,
            col: true,
            en: 'AutorProjeto'
          }]
      }, {
        ln: 'Jurisprudencia',
        tn: null,
        ps: [{
            n: 'sumula',
            rq: true,
            en: 'Sumula',
            ti: '.Sumula'
          }, {
            n: 'acordao',
            rq: true,
            en: 'Acordao',
            ti: '.Acordao'
          }]
      }, {
        ln: 'GenInline',
        tn: 'genInline',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: 'Remissao',
                ti: '.GenInline'
              }, {
                en: 'RemissaoMultipla',
                ti: '.GenInline'
              }, {
                en: 'Formula',
                ti: '.Formula'
              }, {
                en: 'span',
                ti: '.GenInline'
              }, {
                en: 'b',
                ti: '.GenInline'
              }, {
                en: 'i',
                ti: '.GenInline'
              }, {
                en: 'a',
                ti: '.GenInline'
              }, {
                en: 'sub',
                ti: '.GenInline'
              }, {
                en: 'sup',
                ti: '.GenInline'
              }, {
                en: 'ins',
                ti: '.GenInline'
              }, {
                en: 'del',
                ti: '.GenInline'
              }, {
                en: 'dfn',
                ti: '.GenInline'
              }, {
                en: 'NotaReferenciada',
                ti: '.NotaReferenciada'
              }, {
                en: 'EmLinha',
                ti: '.GenInline'
              }, {
                en: 'img',
                ti: '.Img'
              }, {
                en: 'Marcador',
                ti: '.Marcador'
              }],
            t: 'ers'
          }, {
            n: 'nome',
            an: {
              lp: 'nome'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'base',
            an: {
              lp: 'base',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'target',
            an: {
              lp: 'target'
            },
            t: 'a'
          }, {
            n: 'rowspan',
            ti: 'Integer',
            an: {
              lp: 'rowspan'
            },
            t: 'a'
          }, {
            n: 'colspan',
            ti: 'Integer',
            an: {
              lp: 'colspan'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }, {
            n: 'abreAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'abreAspas'
            },
            t: 'a'
          }, {
            n: 'fechaAspas',
            ti: '.TipoMarcador',
            an: {
              lp: 'fechaAspas'
            },
            t: 'a'
          }, {
            n: 'notaAlteracao',
            an: {
              lp: 'notaAlteracao'
            },
            t: 'a'
          }]
      }, {
        ln: 'NotaReferenciada',
        tn: null,
        ps: [{
            n: 'nota',
            rq: true,
            ti: 'IDREF',
            an: {
              lp: 'nota'
            },
            t: 'a'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'eventoInicial',
            an: {
              lp: 'eventoInicial'
            },
            t: 'a'
          }, {
            n: 'eventoFinal',
            an: {
              lp: 'eventoFinal'
            },
            t: 'a'
          }, {
            n: 'situacao',
            ti: '.TipoSituacao',
            an: {
              lp: 'situacao'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang',
              ns: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'TipoMarcador',
        vs: ['s']
      }, {
        t: 'enum',
        ln: 'TipoSituacao',
        vs: ['omissis', 'revogado', 'suspenso', 'vetado', 'superado']
      }],
    eis: [{
        ti: '.RefURNAlvo',
        en: 'MensagemVetoAplicado'
      }, {
        ti: '.RefURNAlvo',
        en: 'ReferenciaAnexo'
      }, {
        ti: '.RefURNAlvo',
        en: 'JulgadoOrigemAnulacao'
      }, {
        en: 'OrgaoJulgador'
      }, {
        ti: '.NotaReferenciada',
        en: 'NotaReferenciada'
      }, {
        ti: '.GenInline',
        en: 'i'
      }, {
        ti: '.OpenStructure',
        en: 'EmentaTexto'
      }, {
        ti: '.AlteracaoFragmento',
        en: 'AlteracaoFragmento'
      }, {
        ti: '.Evento',
        en: 'Evento'
      }, {
        en: 'AutorProjeto'
      }, {
        ti: '.Anexo',
        en: 'Anexo'
      }, {
        ti: '.ConteudoExterno',
        en: 'ConteudoExterno'
      }, {
        ti: '.ParsType',
        en: 'AssinaturaTexto'
      }, {
        ti: '.DispositivoType',
        en: 'Pena'
      }, {
        ti: '.ParticipaType',
        en: 'AdvogadosParte'
      }, {
        ti: '.MetadadoProprietario',
        en: 'MetadadoProprietario'
      }, {
        ti: '.GenInline',
        en: 'Epigrafe'
      }, {
        ti: '.RefURNAlvo',
        en: 'DerrubadaVetoParcial'
      }, {
        en: 'NomeGrupo'
      }, {
        ti: '.ParsType',
        en: 'LocalDataFecho'
      }, {
        ti: '.DispositivoType',
        en: 'Item'
      }, {
        ti: '.GenInline',
        en: 'ins'
      }, {
        ti: '.ProjetoNorma',
        en: 'ProjetoNorma'
      }, {
        ti: '.Hierarchy',
        en: 'Subsecao'
      }, {
        ti: '.Recurso',
        en: 'Recurso'
      }, {
        ti: '.Hierarchy',
        en: 'Subtitulo'
      }, {
        ti: '.RefURNAlvo',
        en: 'ModificacaoTextual'
      }, {
        ti: '.RefURNAlvo',
        en: 'RevogacaoParcial'
      }, {
        ti: '.LexML',
        en: 'LexML'
      }, {
        ti: '.OpenStructure',
        en: 'DebateTexto'
      }, {
        ti: '.GenInline',
        en: 'p'
      }, {
        ti: '.Alteracao',
        en: 'Alteracao'
      }, {
        ti: '.GenInline',
        en: 'th'
      }, {
        ti: '.Criacao',
        en: 'Criacao'
      }, {
        ti: '.GenInline',
        en: 'EmLinha'
      }, {
        ti: '.HierarchicalStructure',
        en: 'DocumentoArticulado'
      }, {
        ti: '.EventoList',
        en: 'EventosGerados'
      }, {
        en: 'Rotulo'
      }, {
        ti: '.BlockContainer',
        en: 'Agrupamento'
      }, {
        ti: '.Assinaturas',
        en: 'Assinaturas'
      }, {
        ti: '.Omissis',
        en: 'Omissis'
      }, {
        en: 'NomeAgente'
      }, {
        ti: '.GenInline',
        en: 'TituloDispositivo'
      }, {
        ti: '.Img',
        en: 'img'
      }, {
        ti: '.Identificacao',
        en: 'Identificacao'
      }, {
        ti: '.PartesProcesso',
        en: 'PartesProcesso'
      }, {
        ti: '.Jurisprudencia',
        en: 'Jurisprudencia'
      }, {
        ti: '.DispositivoType',
        en: 'Caput'
      }, {
        ti: '.RefURNAlvo',
        en: 'Republicacao'
      }, {
        ti: '.GenInline',
        en: 'a'
      }, {
        ti: '.RefURNAlvo',
        en: 'Publicacao'
      }, {
        ti: '.HTMLlist',
        en: 'ul'
      }, {
        ti: '.RefURNAlvo',
        en: 'RevogacaoTotal'
      }, {
        ti: '.Table',
        en: 'table'
      }, {
        ti: '.GenInline',
        en: 'Ementa'
      }, {
        ti: '.CabecalhoAcordao',
        en: 'CabecalhoAcordao'
      }, {
        ti: '.OpenStructure',
        en: 'AcordaoTexto'
      }, {
        ti: '.Sumula',
        en: 'Sumula'
      }, {
        ti: '.RefURNAlvo',
        en: 'ProjetoNormaOrigem'
      }, {
        ti: '.ParsType',
        en: 'Observacao'
      }, {
        ti: '.BlockContainer',
        en: 'div'
      }, {
        ti: '.Hierarchy',
        en: 'Capitulo'
      }, {
        ti: '.Articulacao',
        en: 'Articulacao'
      }, {
        ti: '.DispositivoType',
        en: 'Paragrafo'
      }, {
        ti: '.OpenStructure',
        en: 'VotoTexto'
      }, {
        ti: '.DispositivoType',
        en: 'Inciso'
      }, {
        ti: '.Nota',
        en: 'Nota'
      }, {
        ti: '.Recursos',
        en: 'Recursos'
      }, {
        ti: '.HierarchicalStructure',
        en: 'Norma'
      }, {
        ti: '.GenInline',
        en: 'Bloco'
      }, {
        ti: '.GenInline',
        en: 'span'
      }, {
        ti: '.GenInline',
        en: 'td'
      }, {
        ti: '.RefURNAlvo',
        en: 'AnulamentoTotal'
      }, {
        ti: '.GenInline',
        en: 'NomeAgrupador'
      }, {
        ti: '.Acordao',
        en: 'Acordao'
      }, {
        ti: '.Hierarchy',
        en: 'Secao'
      }, {
        ti: '.Hierarchy',
        en: 'AgrupamentoHierarquico'
      }, {
        ti: '.DispositivoType',
        en: 'DispositivoGenerico'
      }, {
        ti: '.Hierarchy',
        en: 'Titulo'
      }, {
        ti: '.GenInline',
        en: 'Remissao'
      }, {
        ti: '.ParticipaType',
        en: 'ParteProcesso'
      }, {
        ti: '.OpenStructure',
        en: 'DocumentoGenerico'
      }, {
        ti: '.ParticipaType',
        en: 'Relator'
      }, {
        ti: '.DispositivoType',
        en: 'Artigo'
      }, {
        ti: 'Date',
        en: 'DataJulgamento'
      }, {
        en: 'Cargo'
      }, {
        ti: '.GenInline',
        en: 'sup'
      }, {
        ti: '.GenInline',
        en: 'b'
      }, {
        ti: '.Notas',
        en: 'Notas'
      }, {
        ti: '.Hierarchy',
        en: 'Parte'
      }, {
        ti: '.GenInline',
        en: 'dfn'
      }, {
        ti: '.OpenStructure',
        en: 'RelatorioTexto'
      }, {
        en: 'NomePessoa'
      }, {
        ti: '.Li',
        en: 'li'
      }, {
        ti: '.GenInline',
        en: 'del'
      }, {
        en: 'Tratamento'
      }, {
        ti: '.Marcador',
        en: 'Marcador'
      }, {
        ti: '.ParsType',
        en: 'FormulaPromulgacao'
      }, {
        ti: '.RefURNAlvo',
        en: 'NormaFonte'
      }, {
        ti: '.HTMLlist',
        en: 'ol'
      }, {
        ti: '.AssinaturaGrupo',
        en: 'AssinaturaGrupo'
      }, {
        ti: '.Tr',
        en: 'tr'
      }, {
        ti: '.Hierarchy',
        en: 'Livro'
      }, {
        ti: '.RefURNAlvo',
        en: 'EntradaEmVigor'
      }, {
        ti: '.ParteInicial',
        en: 'ParteInicial'
      }, {
        ti: '.Assinatura',
        en: 'Assinatura'
      }, {
        ti: '.TextoType',
        en: 'Preambulo'
      }, {
        ti: '.DispositivoType',
        en: 'Alinea'
      }, {
        ti: '.BlockContainer',
        en: 'Texto'
      }, {
        ti: '.EventoList',
        en: 'CicloDeVida'
      }, {
        ti: '.ParteFinal',
        en: 'ParteFinal'
      }, {
        ti: '.Formula',
        en: 'Formula'
      }, {
        ti: '.Anexos',
        en: 'Anexos'
      }, {
        ti: '.Metadado',
        en: 'Metadado'
      }, {
        ti: '.RefURNAlvo',
        en: 'Retificacao'
      }, {
        ti: '.RefURNAlvo',
        en: 'AnulamentoParcial'
      }, {
        ti: '.GenInline',
        en: 'sub'
      }, {
        ti: '.PartePrincipal',
        en: 'PartePrincipal'
      }, {
        ti: '.OpenStructure',
        en: 'ExtratoAtaTexto'
      }, {
        ti: '.GenInline',
        en: 'RemissaoMultipla'
      }, {
        ti: '.OpenStructure',
        en: 'Justificacao'
      }]
  };
  return {
    br_gov_lexml__1: br_gov_lexml__1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], br_gov_lexml__1_Module_Factory);
}
else {
  var br_gov_lexml__1_Module = br_gov_lexml__1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.br_gov_lexml__1 = br_gov_lexml__1_Module.br_gov_lexml__1;
  }
  else {
    var br_gov_lexml__1 = br_gov_lexml__1_Module.br_gov_lexml__1;
  }
}