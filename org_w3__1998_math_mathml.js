var org_w3__1998_math_mathml_Module_Factory = function () {
  var org_w3__1998_math_mathml = {
    n: 'org_w3__1998_math_mathml',
    dens: 'http:\/\/www.w3.org\/1998\/Math\/MathML',
    tis: [{
        ln: 'Math',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'any',
            dom: false,
            mx: false,
            t: 'ae'
          }]
      }],
    eis: [{
        ti: '.Math',
        en: 'math'
      }]
  };
  return {
    org_w3__1998_math_mathml: org_w3__1998_math_mathml
  };
};
if (typeof define === 'function' && define.amd) {
  define([], org_w3__1998_math_mathml_Module_Factory);
}
else {
  var org_w3__1998_math_mathml_Module = org_w3__1998_math_mathml_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.org_w3__1998_math_mathml = org_w3__1998_math_mathml_Module.org_w3__1998_math_mathml;
  }
  else {
    var org_w3__1998_math_mathml = org_w3__1998_math_mathml_Module.org_w3__1998_math_mathml;
  }
}