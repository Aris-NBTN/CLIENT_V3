const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CardCourse-CRX5qLU2.js","assets/index-DFgtkTYC.js","assets/index-Cf6R5YZm.css","assets/Format-C0LvXISn.js","assets/index-wJishLtX.js","assets/index-DUx-6r-C.js","assets/useVariants-Lmi2ebBK.js","assets/index-B38hVekn.js","assets/EllipsisOutlined-B53JwfDV.js","assets/Overflow-CMIZo8PN.js","assets/CheckOutlined-DAM7Vbmf.js","assets/index-B-gXXBrj.css","assets/index-DUmcZH79.js","assets/ListCart-Ch08GDzI.js","assets/ListCart-j-EGslUW.css","assets/index-VY5kNFhJ.js","assets/index-DZp66-aT.js","assets/index-D0rPzH-E.js","assets/index-oGcLkKQX.js","assets/CardCourse-DnyFPSBO.css"])))=>i.map(i=>d[i]);
import{r as s,_ as D,c as S,e as k,d,x as E,y as L,z as a,j as t}from"./index-DFgtkTYC.js";import{L as b}from"./Layout-DS2aAXbT.js";import{S as I}from"./SkeletonCourse-CeKgon6_.js";import{u as _}from"./Cart-BIMRdw2I.js";import{R as f,C as h}from"./index-B38hVekn.js";import{E as $}from"./index-oGcLkKQX.js";import"./index-DUx-6r-C.js";import"./useVariants-Lmi2ebBK.js";import"./Format-C0LvXISn.js";import"./index-wJishLtX.js";import"./EllipsisOutlined-B53JwfDV.js";import"./Overflow-CMIZo8PN.js";import"./CheckOutlined-DAM7Vbmf.js";const w=s.lazy(()=>D(()=>import("./CardCourse-CRX5qLU2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),M=()=>{var u,m;const i=S(),{token:l}=k.useToken();l.colorFillAlter,l.borderRadiusLG;const[n,g]=s.useState(!0),{courses:r,status:c}=d(e=>e.cart),{categoryCourses:N,loading:y}=d(e=>e.categoryCourses),[o,C]=s.useState([]);s.useState({priceCourse:"0-40000000"});const x=_();s.useEffect(()=>{c==="idle"&&i(E()),c==="succeeded"&&g(!1)},[i,c]),s.useEffect(()=>{C(r)},[r]),s.useEffect(()=>{y&&i(L())},[]);const j={"@context":"https://schema.org","@type":"ItemList",itemListElement:(u=r==null?void 0:r.newData)==null?void 0:u.map((e,p)=>({"@type":"ListItem",position:p+1,item:{"@type":"Course",url:`${a}/course/${e.slug}`,name:e.name,description:e.description,provider:{"@type":"Organization",name:"Chicken War Studio",sameAs:`${a}`},offers:[{"@type":"Offer",category:"Blended",priceCurrency:"VND",price:e.price,url:`${a}/course/${e.slug}`,availability:"https://schema.org/InStock"}],hasCourseInstance:[{"@type":"CourseInstance",courseMode:"Blended",location:{"@type":"Place",name:"Chicken War Studio"},courseSchedule:{"@type":"Schedule",duration:"PT3H",repeatFrequency:"Daily",repeatCount:31},instructor:[{"@type":"Person",name:"Nguyen Bac Trung Nam",description:"3D Artist",image:`${a}`}],offers:[{"@type":"Offer",priceCurrency:"VND",price:e.price,url:`${a}/course/${e.slug}`}]},{"@type":"CourseInstance",courseMode:"Online",courseWorkload:"PT22H",offers:[{"@type":"Offer",priceCurrency:"VND",price:1e6,url:"https://www.example.com/courses#intro-to-cs"}]}]}}))};return t.jsx(b,{ldJson:r.length>0?j:{},title:"Danh sách khóa học",children:t.jsx("section",{children:t.jsx(f,{gutter:[24,24],children:t.jsx(h,{className:"mx-auto",md:{span:20},lg:{span:24},xl:{span:20},span:24,children:n?t.jsx(I,{quantity:8,loading:n}):t.jsx(f,{gutter:[24,24],children:o.length===0?t.jsx("div",{className:"size-full",children:t.jsx($,{})}):(m=o==null?void 0:o.newData)==null?void 0:m.map((e,p)=>e.status!=="Chưa bán"&&t.jsx(h,{sm:{span:12},md:{span:12},lg:{span:8},xl:{span:8},xxl:{span:6},span:24,children:t.jsx(s.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(w,{carts:x.carts,openList:!0,ellipsisRow:1,loading:n,info:e})})},p))})})})})})};export{M as default};
