import{bi as b}from"./index-CaETGd4H.js";import{r as g}from"./ruby-DYsn9XfW.js";import{r as f}from"./markup-templating-BxAVv-bL.js";function p(n,o){for(var t=0;t<o.length;t++){const r=o[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in n)){const a=Object.getOwnPropertyDescriptor(r,e);a&&Object.defineProperty(n,e,a.get?a:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i,u;function c(){if(u)return i;u=1;var n=g(),o=f();i=t,t.displayName="erb",t.aliases=[];function t(r){r.register(n),r.register(o),function(e){e.languages.erb={delimiter:{pattern:/^(\s*)<%=?|%>(?=\s*$)/,lookbehind:!0,alias:"punctuation"},ruby:{pattern:/\s*\S[\s\S]*/,alias:"language-ruby",inside:e.languages.ruby}},e.hooks.add("before-tokenize",function(a){var l=/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g;e.languages["markup-templating"].buildPlaceholders(a,"erb",l)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"erb")})}(r)}return i}var s=c();const d=b(s),v=p({__proto__:null,default:d},[s]);export{v as e};