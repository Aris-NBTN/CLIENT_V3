import{c as d,d as c,r,bu as u,j as i,as as h}from"./index-XO_e58Ix.js";import{x}from"./index-DkPaNEOj.js";import{b7 as E}from"./Layout-DXWOGTyT.js";import{E as f}from"./Table-dP2XIcbo.js";import"./index-DxdoIs5n.js";import"./useVariants-CsMAhLjD.js";import"./EllipsisOutlined-Djq8wM5c.js";import"./Overflow-NiKfVzai.js";import"./CheckOutlined-5NHR29ls.js";import"./index-C0VCRbK7.js";import"./index-77pOG4pZ.js";import"./index-DSoyN8jH.js";import"./index-lzr6e5Gt.js";import"./index-zMQpAQ_1.js";import"./SearchOutlined-DiIMcydI.js";import"./Table-g4hurqCm.js";import"./iconUtil-Bf_DyMct.js";import"./index-BoR9LL1P.js";import"./index-kdFebtuv.js";import"./index-D1P3xe9P.js";import"./index-BQIq8Tls.js";import"./index-DopQ4mG_.js";const B=()=>{const s=[{title:"Email",dataIndex:"name",editable:!0,ellipsis:{showTitle:!0}},{title:"Chức năng",dataIndex:"fuction",editable:!0,ellipsis:{showTitle:!0}}],l=d(),{email:e,loading:o}=c(t=>t.email),m=r.useMemo(()=>{var t;return(t=e==null?void 0:e.newData)==null?void 0:t.map(a=>({...a,key:a._id}))},[e==null?void 0:e.newData]),n=t=>{console.log(t)},p=t=>{console.log(t)};return r.useEffect(()=>{o&&l(u())},[]),i.jsx(E,{title:"Email",header:"Email",children:i.jsx(f,{dragMode:!1,loading:o,data:m,columns:s,onSave:n,onDelete:p,width:"12%",button:t=>i.jsx(i.Fragment,{children:i.jsx(h,{title:"Chỉnh sửa trang",children:i.jsx("a",{href:`/admin/email/${t._id}`,children:i.jsx(x,{size:22,color:"rgb(255 127 0)"})})})})})})};export{B as default};