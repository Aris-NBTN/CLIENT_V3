import{c as d,d as c,r,bq as h,j as i,as as u}from"./index-CPBF7azd.js";import{x}from"./index-BHMnDpbp.js";import{b7 as E}from"./Layout-6kY_fdgg.js";import{E as f}from"./Table-CbyYs7d6.js";import"./index-DyMsIEIg.js";import"./useVariants-Ze9mRC4L.js";import"./EllipsisOutlined-B-j67AQY.js";import"./Overflow-RRO2j2Cn.js";import"./CheckOutlined-BbMCFcVc.js";import"./index-8AvD9LWa.js";import"./index-1hNFGOL1.js";import"./index-BhEU4BKS.js";import"./index-D-mep5xd.js";import"./index-B6k8cXum.js";import"./SearchOutlined-B1l8Mw2x.js";import"./Table-B5D3q3rB.js";import"./iconUtil-DGEcPig7.js";import"./index-B3yZo8E7.js";import"./index-BC0FDAf3.js";import"./index-DjHjjRka.js";import"./index-CZw2qTD0.js";import"./index-BSWmn8Nf.js";const B=()=>{const s=[{title:"Email",dataIndex:"name",editable:!0,ellipsis:{showTitle:!0}},{title:"Chức năng",dataIndex:"fuction",editable:!0,ellipsis:{showTitle:!0}}],l=d(),{email:e,loading:o}=c(t=>t.email),m=r.useMemo(()=>{var t;return(t=e==null?void 0:e.newData)==null?void 0:t.map(a=>({...a,key:a._id}))},[e==null?void 0:e.newData]),n=t=>{console.log(t)},p=t=>{console.log(t)};return r.useEffect(()=>{o&&l(h())},[]),i.jsx(E,{title:"Email",header:"Email",children:i.jsx(f,{dragMode:!1,loading:o,data:m,columns:s,onSave:n,onDelete:p,width:"12%",button:t=>i.jsx(i.Fragment,{children:i.jsx(u,{title:"Chỉnh sửa trang",children:i.jsx("a",{href:`/admin/email/${t._id}`,children:i.jsx(x,{size:22,color:"rgb(255 127 0)"})})})})})})};export{B as default};
