import{bj as i}from"./index-BowJM29w.js";function d(e,l){for(var t=0;t<l.length;t++){const a=l[t];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(a,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,f;function s(){if(f)return n;f=1,n=e,e.displayName="llvm",e.aliases=[];function e(l){(function(t){t.languages.llvm={comment:/;.*/,string:{pattern:/"[^"]*"/,greedy:!0},boolean:/\b(?:false|true)\b/,variable:/[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i,label:/(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i,type:{pattern:/\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/,alias:"class-name"},keyword:/\b[a-z_][a-z_0-9]*\b/,number:/[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/,punctuation:/[{}[\];(),.!*=<>]/}})(l)}return n}var b=s();const u=i(b),p=d({__proto__:null,default:u},[b]);export{p as l};