import{a as ge,c as pe,e as ye,r as l,d as x,cd as je,ce as ve,cf as C,j as e,cg as D,g as ke}from"./index-DFgtkTYC.js";import{R as we,C as ne,A as H,T as Me,J as Ee,K as _e,L as be,M as Ne,N as Le,O as Se,P as Te,y as Ce}from"./index-B38hVekn.js";import{M as De}from"./index-DUx-6r-C.js";const Fe=({title:se,description:re,keywords:oe,author:ce,ldJson:k={},children:le})=>{var I,R,F,z,B,O,P,q,U,$,K,G,J,Q,V,W,X,Y;const w=ge(),y=pe(),{token:{colorPrimary:j}}=ye.useToken(),[ie,M]=l.useState(!1),E=l.useRef(null),_=l.useRef(null),b=l.useRef(null),[ae,N]=l.useState(!1),[f,ue]=l.useState(),n=x(t=>t.menu),A=x(t=>t.menu.status),{user:i}=x(t=>t.auth),{info:o,loading:de}=x(t=>t.info),{notification:a,loading:he}=x(t=>t.notification),{cart:u}=x(t=>t.cart),fe=t=>{try{if(!t)return[];const c=new DOMParser().parseFromString(t,"text/html"),r=[];return c.querySelectorAll(".nav__menu > ul > li").forEach(h=>{var Z;if(!h)return;const m=h.querySelector(".nav__link > a");if(!m)return;const g={key:m.getAttribute("href")||"#",label:((Z=m.textContent)==null?void 0:Z.trim())||""},xe=h.querySelectorAll(".dropdown__menu.dropdown-aris > li"),v=[];xe.forEach(L=>{var ee;if(!L)return;const S=L.querySelector(".dropdown__link > h4 > a");if(!S)return;const p={key:S.getAttribute("href")||"#",label:((ee=S.textContent)==null?void 0:ee.trim())||"",children:[]};L.querySelectorAll(".dropdown__submenu.dropdown-aris > li > a").forEach(T=>{var te;T&&p.children.push({key:T.getAttribute("href")||"#",label:((te=T.textContent)==null?void 0:te.trim())||""})}),p.children.length>0?v.push(p):v.push({label:p.label,key:p.key})}),v.length>0&&(g.children=v),r.push(g)}),r}catch(s){return console.error("Error parsing menu:",s),[]}};function me(t){return t.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}return l.useEffect(()=>{he&&y(je({type:"public"}))},[]),l.useEffect(()=>{const t=c=>{const r=c.target.closest("a");if(r&&r.href){const d=new URL(r.href),h=d.pathname+d.search+d.hash;d.origin===window.location.origin&&(c.preventDefault(),w(h))}},s=document.getElementById("root");return s&&s.addEventListener("click",t),()=>{s&&s.removeEventListener("click",t)}},[w]),l.useEffect(()=>{A==="idle"&&y(ve())},[y,A]),l.useEffect(()=>{var t;if((t=n==null?void 0:n.menuItems)!=null&&t.header){const s=document.getElementById("menu-mobile"),c=()=>M(!0);return s&&s.addEventListener("click",c),()=>{s&&s.removeEventListener("click",c)}}},[n]),l.useEffect(()=>{const t=document.getElementById("icon-user");if(i!=null&&i.userType&&t){E.current||(E.current=C(t));const s=E.current,c=()=>i!=null&&i.avatar?e.jsx(H,{src:i==null?void 0:i.avatar,size:40}):e.jsx(H,{style:{backgroundColor:j},size:40,children:me(i==null?void 0:i.name)});s.render(e.jsx(e.Fragment,{children:c()}))}},[i,j,n]),l.useEffect(()=>{var c;const t=document.getElementById("icon-notify"),s=(c=a==null?void 0:a.newData)==null?void 0:c.map(r=>({key:r==null?void 0:r._id,label:e.jsxs(we,{onClick:()=>{ue(r),N(!0)},gutter:[24,24],style:{width:350},children:[e.jsx(ne,{span:2,children:e.jsx(H,{style:{backgroundColor:j},children:"AD"})}),e.jsxs(ne,{className:"flex justify-between items-center",span:22,children:[e.jsx(Me.Text,{className:"text-inline-notify ms-2",children:(r==null?void 0:r.title)||"No message"}),e.jsx(D,{color:j})]})]})}));if(t){const r=t.parentNode;_.current||(_.current=C(r));const d=_.current,h=()=>{var m,g;return((m=a==null?void 0:a.newData)==null?void 0:m.length)>0?e.jsx(e.Fragment,{children:e.jsx(Ce,{trigger:["click"],menu:{items:s},children:e.jsx(D,{className:"size-full",count:((g=a==null?void 0:a.newData)==null?void 0:g.length)||0,children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t.outerHTML}})})})}):e.jsx("div",{dangerouslySetInnerHTML:{__html:t.outerHTML}})};d.render(e.jsx(e.Fragment,{children:h()}))}},[a,n]),l.useEffect(()=>{const t=document.getElementById("icon-cart");if(t){const s=t.parentNode;b.current||(b.current=C(s));const c=b.current,r=()=>(u==null?void 0:u.length)>0?e.jsx(D,{className:"size-full",count:u==null?void 0:u.length,children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t.outerHTML}})}):e.jsx("div",{dangerouslySetInnerHTML:{__html:t.outerHTML}});c.render(e.jsx(e.Fragment,{children:r()}))}},[u,n]),l.useEffect(()=>{de&&y(ke())},[]),e.jsxs(Ee,{children:[e.jsxs(_e,{children:[e.jsx("meta",{name:"description",content:re||((I=o[0])==null?void 0:I.description)}),e.jsx("meta",{name:"keywords",content:oe||((R=o[0])==null?void 0:R.keywords)}),e.jsx("meta",{name:"author",content:ce||((F=o[0])==null?void 0:F.manage)}),e.jsx("title",{children:se||((z=o[0])==null?void 0:z.name)}),typeof k=="object"&&Object.keys(k).length>0&&e.jsx("script",{type:"application/ld+json",children:JSON.stringify(k)})]}),((B=n==null?void 0:n.menuItems)==null?void 0:B.css)&&e.jsx(e.Fragment,{children:e.jsx("style",{dangerouslySetInnerHTML:{__html:(O=n==null?void 0:n.menuItems)==null?void 0:O.css}})}),((P=n==null?void 0:n.menuItems)==null?void 0:P.header)&&e.jsx(e.Fragment,{children:e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:500},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:(q=n==null?void 0:n.menuItems)==null?void 0:q.header}})})}),e.jsxs("div",{className:"flex flex-col justify-between items-stretch",style:{minHeight:"100dvh"},children:[e.jsx("div",{children:le}),e.jsx("div",{dangerouslySetInnerHTML:{__html:(U=n==null?void 0:n.menuItems)==null?void 0:U.footer}})]}),e.jsx(be,{title:(K=($=o==null?void 0:o.newData)==null?void 0:$[0])==null?void 0:K.name,placement:"left",onClose:()=>M(!1),open:ie,width:256,children:e.jsxs("div",{className:"flex flex-col justify-between",style:{height:"100%"},children:[e.jsx(Ne,{mode:"inline",onClick:t=>{M(!1),setTimeout(()=>{w(t.key)},500)},style:{width:256},items:fe((G=n==null?void 0:n.menuItems)==null?void 0:G.header)}),e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"flex items-center gap-2 my-2",children:[e.jsx(Le,{size:22}),(Q=(J=o==null?void 0:o.newData)==null?void 0:J[0])==null?void 0:Q.email]}),e.jsxs("div",{className:"flex items-center gap-2 my-2",children:[e.jsx(Se,{size:22}),(W=(V=o==null?void 0:o.newData)==null?void 0:V[0])==null?void 0:W.phone]}),e.jsxs("div",{className:"flex items-center gap-2 my-2",children:[e.jsx(Te,{size:22}),(Y=(X=o==null?void 0:o.newData)==null?void 0:X[0])==null?void 0:Y.address]})]})]})}),e.jsx(De,{title:`Thông báo: ${f==null?void 0:f.title}`,centered:!0,open:ae,onOk:()=>N(!1),onCancel:()=>N(!1),width:1e3,children:f==null?void 0:f.content})]})};export{Fe as L};
