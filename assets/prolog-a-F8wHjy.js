import{bl as u}from"./index-_ypI0F_1.js";function g(r,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const o in e)if(o!=="default"&&!(o in r)){const a=Object.getOwnPropertyDescriptor(e,o);a&&Object.defineProperty(r,o,a.get?a:{enumerable:!0,get:()=>e[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i,l;function s(){if(l)return i;l=1,i=r,r.displayName="prolog",r.aliases=[];function r(t){t.languages.prolog={comment:{pattern:/\/\*[\s\S]*?\*\/|%.*/,greedy:!0},string:{pattern:/(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,greedy:!0},builtin:/\b(?:fx|fy|xf[xy]?|yfx?)\b/,function:/\b[a-z]\w*(?:(?=\()|\/\d+)/,number:/\b\d+(?:\.\d*)?/,operator:/[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,punctuation:/[(){}\[\],]/}}return i}var p=s();const f=u(p),b=g({__proto__:null,default:f},[p]);export{b as p};