import{c as d,d as c,r,bu as u,j as i,as as h}from"./index-D1twGZ3Z.js";import{x}from"./index-BddFcSMz.js";import{b7 as E}from"./Layout-DnOueL-M.js";import{E as f}from"./Table-CV13tQ_a.js";import"./index-3t2dR2Qx.js";import"./useVariants-FsczrwmZ.js";import"./EllipsisOutlined-oEcpAQlt.js";import"./Overflow-BVKK6jMn.js";import"./CheckOutlined-D4YI-g4j.js";import"./index-ydiNlzYj.js";import"./index-CJ-jR0EN.js";import"./index-B2WZndIg.js";import"./index-Djmlvon0.js";import"./index-CY4fJX-W.js";import"./SearchOutlined-DnKBSmV6.js";import"./Table-D66CHkwD.js";import"./iconUtil-BxKQ3HoK.js";import"./index-DkJs-5uS.js";import"./index-D41y7oX1.js";import"./index-ABG0vLxO.js";import"./index-CdlybJdo.js";import"./index-ClEi16nY.js";const B=()=>{const s=[{title:"Email",dataIndex:"name",editable:!0,ellipsis:{showTitle:!0}},{title:"Chức năng",dataIndex:"fuction",editable:!0,ellipsis:{showTitle:!0}}],l=d(),{email:e,loading:o}=c(t=>t.email),m=r.useMemo(()=>{var t;return(t=e==null?void 0:e.newData)==null?void 0:t.map(a=>({...a,key:a._id}))},[e==null?void 0:e.newData]),n=t=>{console.log(t)},p=t=>{console.log(t)};return r.useEffect(()=>{o&&l(u())},[]),i.jsx(E,{title:"Email",header:"Email",children:i.jsx(f,{dragMode:!1,loading:o,data:m,columns:s,onSave:n,onDelete:p,width:"12%",button:t=>i.jsx(i.Fragment,{children:i.jsx(h,{title:"Chỉnh sửa trang",children:i.jsx("a",{href:`/admin/email/${t._id}`,children:i.jsx(x,{size:22,color:"rgb(255 127 0)"})})})})})})};export{B as default};
