import{c as d,d as c,r,bu as u,j as i,as as h}from"./index-BEMMc-Wv.js";import{x}from"./index-zW8wCJZn.js";import{b7 as E}from"./Layout-ByDJ3VPX.js";import{E as f}from"./Table-3BJmQTgA.js";import"./index-B9rq9Sxl.js";import"./useVariants-CE3LDwgn.js";import"./EllipsisOutlined-BSMhHKw8.js";import"./Overflow-Hak1BuQe.js";import"./CheckOutlined-B9Fc6Ff7.js";import"./index-C23GNj4V.js";import"./index-5VtID4YU.js";import"./index-IpmdJtin.js";import"./index-_7Iq03Cy.js";import"./index-D8lp3ImF.js";import"./SearchOutlined-GNztLwhD.js";import"./Table-C7AHD0RC.js";import"./iconUtil-BPDrZdBV.js";import"./index-CmHKE_Nb.js";import"./index-CCudNGs-.js";import"./index-DMj1J3Ao.js";import"./index-BrynHdzE.js";import"./index-_6mEeVbY.js";const B=()=>{const s=[{title:"Email",dataIndex:"name",editable:!0,ellipsis:{showTitle:!0}},{title:"Chức năng",dataIndex:"fuction",editable:!0,ellipsis:{showTitle:!0}}],l=d(),{email:e,loading:o}=c(t=>t.email),m=r.useMemo(()=>{var t;return(t=e==null?void 0:e.newData)==null?void 0:t.map(a=>({...a,key:a._id}))},[e==null?void 0:e.newData]),n=t=>{console.log(t)},p=t=>{console.log(t)};return r.useEffect(()=>{o&&l(u())},[]),i.jsx(E,{title:"Email",header:"Email",children:i.jsx(f,{dragMode:!1,loading:o,data:m,columns:s,onSave:n,onDelete:p,width:"12%",button:t=>i.jsx(i.Fragment,{children:i.jsx(h,{title:"Chỉnh sửa trang",children:i.jsx("a",{href:`/admin/email/${t._id}`,children:i.jsx(x,{size:22,color:"rgb(255 127 0)"})})})})})})};export{B as default};