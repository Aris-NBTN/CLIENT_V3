import{d,r as p,j as i}from"./index-CPBF7azd.js";import{b7 as s}from"./Layout-6kY_fdgg.js";import{d as l,h as n}from"./Format-CjK6yOC7.js";import{E as h}from"./Table-CbyYs7d6.js";import"./index-BHMnDpbp.js";import"./index-DyMsIEIg.js";import"./useVariants-Ze9mRC4L.js";import"./EllipsisOutlined-B-j67AQY.js";import"./Overflow-RRO2j2Cn.js";import"./CheckOutlined-BbMCFcVc.js";import"./index-8AvD9LWa.js";import"./index-1hNFGOL1.js";import"./index-BhEU4BKS.js";import"./index-D-mep5xd.js";import"./index-B6k8cXum.js";import"./SearchOutlined-B1l8Mw2x.js";import"./index-B7vBM7Fg.js";import"./Table-B5D3q3rB.js";import"./iconUtil-DGEcPig7.js";import"./index-B3yZo8E7.js";import"./index-BC0FDAf3.js";import"./index-DjHjjRka.js";import"./index-CZw2qTD0.js";import"./index-BSWmn8Nf.js";const R=()=>{const{notification:e,loading:o}=d(t=>t.notification),a=[{title:"Tiêu đề thông báo",dataIndex:"title",width:"25%",editable:!0,ellipsis:{showTitle:!0}},{title:"Nội dung thông báo",dataIndex:"content",width:"25%",editable:!0,ellipsis:{showTitle:!0}},{title:"Ngày tạo",dataIndex:"createdAt",width:"10%",render:t=>l(t)},{title:"Cập nhập",dataIndex:"updatedAt",width:"10%",render:t=>n(t)}],m=p.useMemo(()=>{var t;return(t=e==null?void 0:e.newData)==null?void 0:t.map(r=>({...r,key:r._id}))},[e==null?void 0:e.newData]);return i.jsx(s,{title:"Thông báo",header:"THÔNG BÁO",children:i.jsx(h,{dragMode:!1,loading:o,data:m,columns:a,colEdit:!1,width:"12%"})})};export{R as default};
