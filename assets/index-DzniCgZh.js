import{c$ as B,d0 as H,aR as P,r as n,ao as C,ak as F,c_ as V,ck as g,c as x,C as W,ci as G,cv as M,H as R,cR as Z,aZ as J,cx as K}from"./index-CLgyQ1vx.js";const Q=e=>{const{componentCls:t,colorPrimary:o}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${o})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},U=B("Wave",e=>[Q(e)]),N=`${H}-wave-target`;function X(e){const t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}function S(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&X(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function Y(e){const{borderTopColor:t,borderColor:o,backgroundColor:r}=getComputedStyle(e);return S(t)?t:S(o)?o:S(r)?r:null}function w(e){return Number.isNaN(e)?0:e}const ee=e=>{const{className:t,target:o,component:r}=e,i=n.useRef(null),[l,f]=n.useState(null),[v,h]=n.useState([]),[u,s]=n.useState(0),[p,m]=n.useState(0),[T,$]=n.useState(0),[k,L]=n.useState(0),[O,A]=n.useState(!1),y={left:u,top:p,width:T,height:k,borderRadius:v.map(c=>`${c}px`).join(" ")};l&&(y["--wave-color"]=l);function E(){const c=getComputedStyle(o);f(Y(o));const a=c.position==="static",{borderLeftWidth:d,borderTopWidth:b}=c;s(a?o.offsetLeft:w(-parseFloat(d))),m(a?o.offsetTop:w(-parseFloat(b))),$(o.offsetWidth),L(o.offsetHeight);const{borderTopLeftRadius:I,borderTopRightRadius:_,borderBottomLeftRadius:j,borderBottomRightRadius:q}=c;h([I,_,q,j].map(z=>w(parseFloat(z))))}if(n.useEffect(()=>{if(o){const c=C(()=>{E(),A(!0)});let a;return typeof ResizeObserver<"u"&&(a=new ResizeObserver(E),a.observe(o)),()=>{C.cancel(c),a==null||a.disconnect()}}},[]),!O)return null;const D=(r==="Checkbox"||r==="Radio")&&(o==null?void 0:o.classList.contains(N));return n.createElement(F,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(c,a)=>{var d;if(a.deadline||a.propertyName==="opacity"){const b=(d=i.current)===null||d===void 0?void 0:d.parentElement;V(b).then(()=>{b==null||b.remove()})}return!1}},(c,a)=>{let{className:d}=c;return n.createElement("div",{ref:g(i,a),className:x(t,d,{"wave-quick":D}),style:y})})},te=(e,t)=>{var o;const{component:r}=t;if(r==="Checkbox"&&!(!((o=e.querySelector("input"))===null||o===void 0)&&o.checked))return;const i=document.createElement("div");i.style.position="absolute",i.style.left="0px",i.style.top="0px",e==null||e.insertBefore(i,e==null?void 0:e.firstChild),P(n.createElement(ee,Object.assign({},t,{target:e})),i)},oe=(e,t,o)=>{const{wave:r}=n.useContext(W),[,i,l]=G(),f=M(u=>{const s=e.current;if(r!=null&&r.disabled||!s)return;const p=s.querySelector(`.${N}`)||s,{showEffect:m}=r||{};(m||te)(p,{className:t,token:i,component:o,event:u,hashId:l})}),v=n.useRef();return u=>{C.cancel(v.current),v.current=C(()=>{f(u)})}},se=e=>{const{children:t,disabled:o,component:r}=e,{getPrefixCls:i}=n.useContext(W),l=n.useRef(null),f=i("wave"),[,v]=U(f),h=oe(l,x(f,v),r);if(R.useEffect(()=>{const s=l.current;if(!s||s.nodeType!==1||o)return;const p=m=>{!K(m.target)||!s.getAttribute||s.getAttribute("disabled")||s.disabled||s.className.includes("disabled")||s.className.includes("-leave")||h(m)};return s.addEventListener("click",p,!0),()=>{s.removeEventListener("click",p,!0)}},[o]),!R.isValidElement(t))return t??null;const u=Z(t)?g(t.ref,l):l;return J(t,{ref:u})};export{N as T,se as W};
