import{q as D,s as i,r as e,Z as E,Q as F}from"./index-Bl_pZCeN.js";import{a as P,b as T,c as x}from"./Format-Cdb_63wG.js";const v=()=>{const r=D(),{cart:o}=i(s=>s.cart),c=i(s=>s.auth.user),[u,l]=e.useState([]),[m,d]=e.useState(0),[f,p]=e.useState(0),[h,S]=e.useState(0),[C,n]=e.useState(!0);return e.useEffect(()=>{const s=o==null?void 0:o.filter(t=>{var a;return(a=c==null?void 0:c.courses)==null?void 0:a.includes(t)});s.length>0&&s.forEach(t=>{r(E(t))});const g=t=>t.map(a=>({...a,price:a.price*(1-a.sale/100)}));F.cart({ids:o}).then(t=>{l(g(t)),d(P(t)),S(T(t)),p(x(t)),n(!1)}).catch(()=>{n(!1)})},[o,r,c]),{carts:u,estimated:m,total:f,discountedTotal:h,loading:C}};export{v as u};