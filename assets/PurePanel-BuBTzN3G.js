import{r as e,aS as y,ar as E,C as S}from"./index-CLgyQ1vx.js";function z(s){return r=>e.createElement(y,{theme:{token:{motion:!1,zIndexPopupBase:0}}},e.createElement(s,Object.assign({},r)))}const I=(s,r,c,l)=>z(o=>{const{prefixCls:m,style:v}=o,i=e.useRef(null),[P,b]=e.useState(0),[h,C]=e.useState(0),[u,O]=E(!1,{value:o.open}),{getPrefixCls:x}=e.useContext(S),f=x(r||"select",m);e.useEffect(()=>{if(O(!0),typeof ResizeObserver<"u"){const p=new ResizeObserver(t=>{const n=t[0].target;b(n.offsetHeight+8),C(n.offsetWidth)}),d=setInterval(()=>{var t;const n=c?`.${c(f)}`:`.${f}-dropdown`,g=(t=i.current)===null||t===void 0?void 0:t.querySelector(n);g&&(clearInterval(d),p.observe(g))},10);return()=>{clearInterval(d),p.disconnect()}}},[]);let a=Object.assign(Object.assign({},o),{style:Object.assign(Object.assign({},v),{margin:0}),open:u,visible:u,getPopupContainer:()=>i.current});l&&(a=l(a));const j={paddingBottom:P,position:"relative",minWidth:h};return e.createElement("div",{ref:i,style:j},e.createElement(s,Object.assign({},a)))});export{I as g,z as w};
