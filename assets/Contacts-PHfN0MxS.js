import{r as n,c7 as j,j as o}from"./index-DFgtkTYC.js";import{c as f}from"./contact-C62c3w7I.js";import{b7 as b}from"./Layout-CIm6QYZN.js";import{E as x}from"./Table-Cl0eTZ94.js";import{T as O}from"./index-D0rPzH-E.js";import"./index-B38hVekn.js";import"./index-DUx-6r-C.js";import"./useVariants-Lmi2ebBK.js";import"./EllipsisOutlined-B53JwfDV.js";import"./Overflow-CMIZo8PN.js";import"./CheckOutlined-DAM7Vbmf.js";import"./index-VY5kNFhJ.js";import"./index-DL9K0yEa.js";import"./index-DUmcZH79.js";import"./index-pl73aUh0.js";import"./index-oGcLkKQX.js";import"./SearchOutlined-Dp3Prlso.js";import"./Table-C8c0_nP-.js";import"./iconUtil-px8x-_W9.js";import"./index-BlhFsQVP.js";import"./index-DYOF1zsm.js";import"./index-vh6KeIKW.js";import"./index-D1L2R7lU.js";import"./index-BTyo0h1z.js";const K=()=>{const[r,h]=n.useState(),[u,c]=n.useState([]),[g,p]=n.useState([]);return n.useEffect(()=>{j.filesInFolder({folderName:"uploads/contacts"}).then(s=>{const e=s.newData.children;if(h(e),e.length>0){const a=e[0].name.split(".")[0];return f.get({filename:a}).then(d=>{e[0]={...e[0],details:d},c(e[0].details.data);const l=e[0].details.data.reduce((t,i)=>Object.keys(t).length>Object.keys(i).length?t:i),m=Object.keys(l).map(t=>({title:t.charAt(0).toUpperCase()+t.slice(1),dataIndex:t,key:t}));p(m)})}return e}).catch(s=>console.log(s))},[]),o.jsx(b,{title:"Liên hệ",header:"LIÊN HỆ",children:o.jsx(O,{onChange:s=>{f.get({filename:s.split(".")[0]}).then(e=>{r.map((a,d)=>{if(a.name===s){a.details=e,c(a.details.data);const l=a.details.data.reduce((t,i)=>Object.keys(t).length>Object.keys(i).length?t:i),m=Object.keys(l).map(t=>({title:t.charAt(0).toUpperCase()+t.slice(1),dataIndex:t,key:t}));p(m)}})})},type:"card",tabPosition:"left",items:r==null?void 0:r.map((s,e)=>({label:s.name,key:s.name,children:o.jsx(o.Fragment,{children:o.jsx(x,{colEdit:!1,dragMode:!1,data:u,columns:g})})}))})})};export{K as default};
