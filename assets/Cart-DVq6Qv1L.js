const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CardCourse-BAVBlg9E.js","assets/index-Bl_pZCeN.js","assets/index-CVAZXOAS.css","assets/Format-Cdb_63wG.js","assets/index-uqfG7IHM.js","assets/context-CeT_YlOn.js","assets/index-Cg5YuCgZ.js","assets/index-FpgqAsqH.js","assets/EllipsisOutlined-Dv0U7LQh.js","assets/Overflow-B2U5bHyH.js","assets/index-B-gXXBrj.css","assets/index-Ch5hctbl.js","assets/ListCart-DT1b2ttv.js","assets/index-Cil4O1hR.js","assets/styleChecker-Ck8JMnEb.js","assets/useLocale-BY4459aG.js","assets/TextArea-BanZLPmh.js","assets/useVariants-B1zc-sRz.js","assets/CheckOutlined-BPHqeFCx.js","assets/ListCart-j-EGslUW.css","assets/index-CZycZjMr.js","assets/index-B5ETzEVc.js","assets/index-DjArs4z8.js","assets/Dropdown-BgYRO9jp.js","assets/index-Bh9zOY6B.js","assets/CardCourse-DnyFPSBO.css"])))=>i.map(i=>d[i]);
import{j as s,r as h,J as T,a as C,q as k,v as L,s as m,L as b,M as _}from"./index-Bl_pZCeN.js";import{F as d}from"./Format-Cdb_63wG.js";import{L as w}from"./Layout-DEMDuyoa.js";import{L as E}from"./ListCart-DT1b2ttv.js";import{a as F}from"./index-CZycZjMr.js";import{R as x,C as r}from"./row-BAzrWk1M.js";import{C as I}from"./index-B5ETzEVc.js";import{S as p}from"./context-CeT_YlOn.js";import{u as D}from"./Cart-Dpu5cjqM.js";import{T as t}from"./index-Cil4O1hR.js";import{E as P}from"./index-Bh9zOY6B.js";import{D as R}from"./index-BUB79iBC.js";import{B as S}from"./TextArea-BanZLPmh.js";import"./index-uqfG7IHM.js";import"./index-Cg5YuCgZ.js";import"./index-FpgqAsqH.js";import"./EllipsisOutlined-Dv0U7LQh.js";import"./Overflow-B2U5bHyH.js";import"./index-DjArs4z8.js";import"./Dropdown-BgYRO9jp.js";import"./styleChecker-Ck8JMnEb.js";import"./useLocale-BY4459aG.js";import"./CheckOutlined-BPHqeFCx.js";import"./useVariants-B1zc-sRz.js";const z=({active:a,quantity:l=1})=>s.jsx(s.Fragment,{children:s.jsx(x,{gutter:[18,18],children:[...Array(l)].map((u,n)=>s.jsx(r,{span:24,children:s.jsx(I,{children:s.jsxs("div",{className:"flex gap-2 justify-between items-center",children:[s.jsx(p.Image,{className:"!size-20",active:a}),s.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[s.jsx(p.Input,{className:"!w-full",active:a}),s.jsx(p.Input,{className:"!w-full",active:a})]})]})})},n))})}),A=h.lazy(()=>T(()=>import("./CardCourse-BAVBlg9E.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))),os=()=>{const a=C(),l=k(),{token:{colorPrimary:u}}=L.useToken(),{outstand:n,loading:o}=m(e=>e.outstand),j=m(e=>{var i;return(i=e.auth)==null?void 0:i.user}),{carts:c,estimated:g,total:f,discountedTotal:N,loading:v}=D(),{cart:y}=m(e=>e.cart);return h.useEffect(()=>{o&&l(b({ids:y,limit:6}))},[]),s.jsx(w,{title:"Giỏ hàng",children:s.jsx("section",{children:s.jsxs(x,{gutter:[22,22],children:[s.jsx(r,{xl:{span:16},lg:{span:14},md:{span:24,order:1},span:24,xs:{order:2},children:s.jsxs("div",{className:"w-full",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx(t.Title,{level:4,children:"Khóa học nổi bật"}),s.jsxs(t.Link,{href:"/courses",className:"flex gap-1 items-center",children:["Xem thêm ",s.jsx(F,{size:20})]})]}),s.jsx(x,{gutter:[20,20],children:o?s.jsx(_,{}):s.jsx(s.Fragment,{children:n.map((e,i)=>e.status!=="Chưa bán"&&s.jsx(r,{sm:{span:12},md:{span:12},lg:{span:12},xl:{span:8},span:24,children:s.jsx(h.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx(A,{openList:!1,ellipsisRow:1,loading:o,info:e})})},i))})})]})}),s.jsx(r,{xl:{span:8},lg:{span:10},md:{span:24},order:2,span:24,xs:{order:1},children:s.jsxs("div",{className:"app-right sticky top-24",children:[s.jsx("div",{className:"app-right-content",children:s.jsx("ul",{className:"product-list",children:v?s.jsx(z,{active:!0,quantity:4}):s.jsx(s.Fragment,{children:c.length===0?s.jsx(P,{}):s.jsx(E,{carts:c})})})}),s.jsx("div",{style:{padding:15,marginTop:"auto"},children:s.jsxs("div",{className:"product-details fadeIn",children:[s.jsxs("div",{className:"product-details-line",children:[s.jsx(t.Title,{className:"!my-0",level:5,children:"Tạm tính"}),s.jsx(t.Title,{className:"!my-0",level:5,children:d(g)})]}),s.jsxs("div",{className:"product-details-line",children:[s.jsx(t.Title,{className:"!my-0",level:5,children:"Giảm giá"}),s.jsx(t.Title,{className:"!my-0",level:5,children:d(N)})]}),s.jsx(R,{className:"m-0"}),s.jsxs("div",{className:"product-details-summary !pt-1",children:[s.jsx(t.Title,{className:"!my-0",level:4,children:"Tổng cộng"}),s.jsx(t.Title,{className:"my-0",type:"danger",level:4,children:d(f)})]})]})}),c.length===0?s.jsx("button",{className:"checkout-button",children:" Chưa có sản phẩm!"}):j.userType==="user"?s.jsx(s.Fragment,{children:s.jsx(S,{type:"primary",size:"large",onClick:()=>a("/checkout"),children:"Tiến Hành Thanh Toán"})}):s.jsx(s.Fragment,{children:s.jsx("button",{className:"checkout-button",style:{backgroundColor:u},onClick:()=>a("/login",{state:{from:"/checkout"}}),children:"Đăng nhập để tiếp tục"})})]})})]})})})};export{os as default};