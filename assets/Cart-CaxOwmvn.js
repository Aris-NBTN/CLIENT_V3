const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CardCourse-BLyPfgh8.js","assets/index-CaETGd4H.js","assets/index-Cf6R5YZm.css","assets/Format-De7xR3Ef.js","assets/index-CirsKE9O.js","assets/context-CAOTC38D.js","assets/index-DkJhzmJq.js","assets/index-B62C_hIZ.js","assets/EllipsisOutlined-DpLw87te.js","assets/Overflow-Cq5KU3-G.js","assets/index-B-gXXBrj.css","assets/index-VFH58Qy_.js","assets/ListCart-DV6RPXI1.js","assets/index-BvgbevL2.js","assets/styleChecker-BtECRdwW.js","assets/useLocale-GZyPud6I.js","assets/TextArea-DL9E7QDS.js","assets/useVariants-CICMN0jD.js","assets/CheckOutlined-BMludgPW.js","assets/ListCart-j-EGslUW.css","assets/index-DOXKbhtK.js","assets/index-ByFwYyr4.js","assets/index-fxAJc3ok.js","assets/Dropdown-Ex9EsV8x.js","assets/index-EkK5Af3H.js","assets/CardCourse-DnyFPSBO.css"])))=>i.map(i=>d[i]);
import{j as s,r as h,J as T,a as C,q as k,v as L,s as m,L as b,M as _}from"./index-CaETGd4H.js";import{F as d}from"./Format-De7xR3Ef.js";import{L as w}from"./Layout-pOyStzfb.js";import{L as E}from"./ListCart-DV6RPXI1.js";import{a as F}from"./index-DOXKbhtK.js";import{R as x,C as r}from"./row-DEKWsijG.js";import{C as I}from"./index-ByFwYyr4.js";import{S as p}from"./context-CAOTC38D.js";import{u as D}from"./Cart-DvRikj5_.js";import{T as t}from"./index-BvgbevL2.js";import{E as P}from"./index-EkK5Af3H.js";import{D as R}from"./index-B2Rdd1Hd.js";import{B as S}from"./TextArea-DL9E7QDS.js";import"./index-CirsKE9O.js";import"./index-DkJhzmJq.js";import"./index-B62C_hIZ.js";import"./EllipsisOutlined-DpLw87te.js";import"./Overflow-Cq5KU3-G.js";import"./index-fxAJc3ok.js";import"./Dropdown-Ex9EsV8x.js";import"./styleChecker-BtECRdwW.js";import"./useLocale-GZyPud6I.js";import"./CheckOutlined-BMludgPW.js";import"./useVariants-CICMN0jD.js";const z=({active:a,quantity:l=1})=>s.jsx(s.Fragment,{children:s.jsx(x,{gutter:[18,18],children:[...Array(l)].map((u,n)=>s.jsx(r,{span:24,children:s.jsx(I,{children:s.jsxs("div",{className:"flex gap-2 justify-between items-center",children:[s.jsx(p.Image,{className:"!size-20",active:a}),s.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[s.jsx(p.Input,{className:"!w-full",active:a}),s.jsx(p.Input,{className:"!w-full",active:a})]})]})})},n))})}),A=h.lazy(()=>T(()=>import("./CardCourse-BLyPfgh8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))),os=()=>{const a=C(),l=k(),{token:{colorPrimary:u}}=L.useToken(),{outstand:n,loading:o}=m(e=>e.outstand),j=m(e=>{var i;return(i=e.auth)==null?void 0:i.user}),{carts:c,estimated:g,total:f,discountedTotal:N,loading:v}=D(),{cart:y}=m(e=>e.cart);return h.useEffect(()=>{o&&l(b({ids:y,limit:6}))},[]),s.jsx(w,{title:"Giỏ hàng",children:s.jsx("section",{children:s.jsxs(x,{gutter:[22,22],children:[s.jsx(r,{xl:{span:16},lg:{span:14},md:{span:24,order:1},span:24,xs:{order:2},children:s.jsxs("div",{className:"w-full",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx(t.Title,{level:4,children:"Khóa học nổi bật"}),s.jsxs(t.Link,{href:"/courses",className:"flex gap-1 items-center",children:["Xem thêm ",s.jsx(F,{size:20})]})]}),s.jsx(x,{gutter:[20,20],children:o?s.jsx(_,{}):s.jsx(s.Fragment,{children:n.map((e,i)=>e.status!=="Chưa bán"&&s.jsx(r,{sm:{span:12},md:{span:12},lg:{span:12},xl:{span:8},span:24,children:s.jsx(h.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx(A,{openList:!1,ellipsisRow:1,loading:o,info:e})})},i))})})]})}),s.jsx(r,{xl:{span:8},lg:{span:10},md:{span:24},order:2,span:24,xs:{order:1},children:s.jsxs("div",{className:"app-right sticky top-24",children:[s.jsx("div",{className:"app-right-content",children:s.jsx("ul",{className:"product-list",children:v?s.jsx(z,{active:!0,quantity:4}):s.jsx(s.Fragment,{children:c.length===0?s.jsx(P,{}):s.jsx(E,{carts:c})})})}),s.jsx("div",{style:{padding:15,marginTop:"auto"},children:s.jsxs("div",{className:"product-details fadeIn",children:[s.jsxs("div",{className:"product-details-line",children:[s.jsx(t.Title,{className:"!my-0",level:5,children:"Tạm tính"}),s.jsx(t.Title,{className:"!my-0",level:5,children:d(g)})]}),s.jsxs("div",{className:"product-details-line",children:[s.jsx(t.Title,{className:"!my-0",level:5,children:"Giảm giá"}),s.jsx(t.Title,{className:"!my-0",level:5,children:d(N)})]}),s.jsx(R,{className:"m-0"}),s.jsxs("div",{className:"product-details-summary !pt-1",children:[s.jsx(t.Title,{className:"!my-0",level:4,children:"Tổng cộng"}),s.jsx(t.Title,{className:"my-0",type:"danger",level:4,children:d(f)})]})]})}),c.length===0?s.jsx("button",{className:"checkout-button",children:" Chưa có sản phẩm!"}):j.userType==="user"?s.jsx(s.Fragment,{children:s.jsx(S,{type:"primary",size:"large",onClick:()=>a("/checkout"),children:"Tiến Hành Thanh Toán"})}):s.jsx(s.Fragment,{children:s.jsx("button",{className:"checkout-button",style:{backgroundColor:u},onClick:()=>a("/login",{state:{from:"/checkout"}}),children:"Đăng nhập để tiếp tục"})})]})})]})})})};export{os as default};