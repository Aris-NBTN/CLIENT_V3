import{bj as g}from"./index-CLgyQ1vx.js";function l(r,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const o in e)if(o!=="default"&&!(o in r)){const a=Object.getOwnPropertyDescriptor(e,o);a&&Object.defineProperty(r,o,a.get?a:{enumerable:!0,get:()=>e[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,p;function s(){if(p)return i;p=1,i=r,r.displayName="prolog",r.aliases=[];function r(t){t.languages.prolog={comment:{pattern:/\/\*[\s\S]*?\*\/|%.*/,greedy:!0},string:{pattern:/(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,greedy:!0},builtin:/\b(?:fx|fy|xf[xy]?|yfx?)\b/,function:/\b[a-z]\w*(?:(?=\()|\/\d+)/,number:/\b\d+(?:\.\d*)?/,operator:/[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,punctuation:/[(){}\[\],]/}}return i}var u=s();const f=g(u),b=l({__proto__:null,default:f},[u]);export{b as p};
