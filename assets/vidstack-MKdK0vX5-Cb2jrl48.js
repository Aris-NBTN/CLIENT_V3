import{y as c,r as n,e as h,l as a,p as d,z as u,A as l,a as b}from"./Video-CWWnO90_.js";function g(r,t=3e3){const e=c();return setTimeout(()=>{const s=r();s&&e.reject(s)},t),e}class p{constructor(t){this.eb=t,this.db=n(""),this.referrerPolicy=null,t.setAttribute("frameBorder","0"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),this.referrerPolicy!==null&&t.setAttribute("referrerpolicy",this.referrerPolicy)}get iframe(){return this.eb}setup(t){h(this.gd.bind(this)),a(window,"message",this.Mg.bind(this)),a(this.eb,"load",this.mc.bind(this))}gd(){const t=this.db();if(!t.length){this.eb.setAttribute("src","");return}const e=d(()=>this.Ue());this.eb.setAttribute("src",u(t,e))}hd(t,e){var s;l||(s=this.eb.contentWindow)==null||s.postMessage(JSON.stringify(t),e??"*")}Mg(t){var o;const e=this.fb();if(t.source===((o=this.eb)==null?void 0:o.contentWindow)&&(!b(e)||e===t.origin)){try{const i=JSON.parse(t.data);i&&this.jd(i,t);return}catch{}t.data&&this.jd(t.data,t)}}}export{p as E,g as t};
