import{bi as s}from"./index-Bl_pZCeN.js";function f(e,u){for(var o=0;o<u.length;o++){const r=u[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,i;function b(){if(i)return a;i=1,a=e,e.displayName="jexl",e.aliases=[];function e(u){u.languages.jexl={string:/(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,transform:{pattern:/(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,alias:"function",lookbehind:!0},function:/[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,number:/\b\d+(?:\.\d+)?\b|\B\.\d+\b/,operator:/[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,boolean:/\b(?:false|true)\b/,keyword:/\bin\b/,punctuation:/[{}[\](),.]/}}return a}var l=b();const c=s(l),p=f({__proto__:null,default:c},[l]);export{p as j};