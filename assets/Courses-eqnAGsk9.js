const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CardCourse-CUbS9pfo.js","assets/index-CLgyQ1vx.js","assets/index-CVAZXOAS.css","assets/Format-D-jAu6wH.js","assets/context-DZ0uDIsf.js","assets/index-DzniCgZh.js","assets/index-CnibHaQp.js","assets/EllipsisOutlined-gz3vguox.js","assets/Overflow-aWC-KCIQ.js","assets/index-B-gXXBrj.css","assets/index-DeFNh6Jp.js","assets/ListCart-Dro1PQgH.js","assets/index-ObwxId4A.js","assets/useLocale-WrgrvLJQ.js","assets/TextArea-Bz2hpPvr.js","assets/useVariants-Dd3vmZmf.js","assets/compact-item-DR52_Oht.js","assets/CheckOutlined-DL5js1cp.js","assets/ListCart-j-EGslUW.css","assets/index-DRxWoPIf.js","assets/index-CWEcXkBE.js","assets/index-BbsGW53p.js","assets/Dropdown-BhJCOC9m.js","assets/button-CFZW2Fak.js","assets/index-wxIFWymk.js","assets/CardCourse-DnyFPSBO.css"])))=>i.map(i=>d[i]);
import{r as l,J as v,q as b,a as L,s as o,L as T,dy as E,dz as N,j as s}from"./index-CLgyQ1vx.js";import{b7 as A}from"./Layout-Bo8X0zbn.js";import{S as g}from"./SkeletonCourse-Dff5B6C8.js";import{R as c,C as a}from"./row-CbKX7NA9.js";import{C as x}from"./index-CWEcXkBE.js";import{T as r}from"./index-ObwxId4A.js";import{E as C}from"./index-wxIFWymk.js";import{B as y}from"./button-CFZW2Fak.js";import"./index-CnibHaQp.js";import"./EllipsisOutlined-gz3vguox.js";import"./Overflow-aWC-KCIQ.js";import"./context-DZ0uDIsf.js";import"./index-DRxWoPIf.js";import"./index-BC037qWw.js";import"./index-DeFNh6Jp.js";import"./index-BUe_r4_5.js";import"./PurePanel-BuBTzN3G.js";import"./useVariants-Dd3vmZmf.js";import"./compact-item-DR52_Oht.js";import"./CheckOutlined-DL5js1cp.js";import"./SearchOutlined-DECFkpI7.js";import"./useLocale-WrgrvLJQ.js";import"./Dropdown-BhJCOC9m.js";import"./index-CL0RwYER.js";import"./index-BbsGW53p.js";import"./TextArea-Bz2hpPvr.js";import"./index-DzniCgZh.js";const j=l.lazy(()=>v(()=>import("./CardCourse-CUbS9pfo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))),is=()=>{const p=b(),h=L(),{user:i}=o(e=>e.auth),{courseUser:u,loading:t}=o(e=>e.courseUser),{outstand:k,loading:f}=o(e=>e.outstand),{free:d,loading:m}=o(e=>e.free);return l.useEffect(()=>{f&&(i!=null&&i.courses)&&p(T({ids:i==null?void 0:i.courses,limit:4}))},[i]),l.useEffect(()=>{t&&(i!=null&&i.courses)&&p(E({ids:i.courses}))},[i]),l.useEffect(()=>{m&&p(N({ids:i.courses}))},[i]),console.log(d),s.jsx(A,{title:"Khóa học của tôi",header:"KHÓA HỌC CỦA TÔI",children:s.jsxs(c,{gutter:[24,24],children:[s.jsx(a,{span:24,children:s.jsxs(x,{className:"ant-card-box",children:[s.jsx(r.Title,{level:3,children:"Khóa học của tôi"}),s.jsx(c,{gutter:[20,20],children:t?s.jsx(a,{span:24,children:s.jsx(g,{loading:t,quantity:4})}):u.length===0?s.jsx(a,{span:24,children:s.jsx("div",{className:"flex justify-center",children:s.jsx(C,{imageStyle:{height:150},description:s.jsxs(r.Text,{children:["Chưa có khóa học ",s.jsx(r.Link,{href:"/cart",children:"được mua"})]}),children:s.jsx(y,{onClick:()=>h("/courses"),type:"primary",children:"Thêm khóa học ngay"})})})}):u.map((e,n)=>s.jsx(a,{sm:{span:24},md:{span:12},lg:{span:12},xl:{span:8},xxl:{span:6},span:24,children:s.jsx(j,{openList:!1,ellipsisRow:1,loading:t,info:e,link:`/user/course/${e.slug}`})},n))})]})}),s.jsx(a,{span:24,children:s.jsxs(x,{className:"ant-card-box",children:[s.jsx(r.Title,{level:3,children:"Khóa học miễn phí"}),s.jsx(c,{gutter:[20,20],children:m?s.jsx(a,{span:24,children:s.jsx(g,{loading:m,quantity:4})}):d.length===0?s.jsx(a,{span:24,children:s.jsx("div",{className:"flex justify-center",children:s.jsx(C,{imageStyle:{height:150},description:s.jsxs(r.Text,{children:["Chưa có khóa học ",s.jsx(r.Link,{href:"/cart",children:"miễn phí"})]}),children:s.jsx(y,{onClick:()=>h("/courses"),type:"primary",children:"Mua các khóa học khác"})})})}):d.map((e,n)=>s.jsx(a,{sm:{span:24},md:{span:12},lg:{span:12},xl:{span:8},xxl:{span:6},span:24,children:s.jsx(j,{openList:!1,ellipsisRow:1,loading:t,info:e,link:`/user/course/${e.slug}`})},n))})]})}),s.jsx(a,{span:24,children:s.jsxs(x,{className:"mb-6",children:[s.jsxs("div",{className:"flex flex-wrap justify-between items-center mb-2",children:[s.jsx(r.Title,{level:3,className:"!mb-0",children:"Có thể bạn sẽ thích"}),s.jsx(r.Link,{onClick:()=>h("/courses"),children:"Xem thêm"})]}),s.jsx(c,{gutter:[24,24],children:k.map((e,n)=>e.status!=="Chưa bán"&&s.jsx(a,{sm:{span:24},md:{span:12},lg:{span:12},xl:{span:8},xxl:{span:6},span:24,children:s.jsx(l.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx(j,{openList:!1,ellipsisRow:1,loading:f,info:e})})},n))})]})})]})})};export{is as default};
