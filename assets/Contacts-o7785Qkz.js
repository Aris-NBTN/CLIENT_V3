import{r as n,ca as j,j as o}from"./index-D1twGZ3Z.js";import{c as f}from"./contact-BFrZmWa9.js";import{b7 as b}from"./Layout-DnOueL-M.js";import{E as x}from"./Table-CV13tQ_a.js";import{T as O}from"./index-OgyVthAO.js";import"./index-BddFcSMz.js";import"./index-3t2dR2Qx.js";import"./useVariants-FsczrwmZ.js";import"./EllipsisOutlined-oEcpAQlt.js";import"./Overflow-BVKK6jMn.js";import"./CheckOutlined-D4YI-g4j.js";import"./index-ydiNlzYj.js";import"./index-CJ-jR0EN.js";import"./index-B2WZndIg.js";import"./index-Djmlvon0.js";import"./index-CY4fJX-W.js";import"./SearchOutlined-DnKBSmV6.js";import"./Table-D66CHkwD.js";import"./iconUtil-BxKQ3HoK.js";import"./index-DkJs-5uS.js";import"./index-D41y7oX1.js";import"./index-ABG0vLxO.js";import"./index-CdlybJdo.js";import"./index-ClEi16nY.js";const K=()=>{const[r,h]=n.useState(),[u,c]=n.useState([]),[g,p]=n.useState([]);return n.useEffect(()=>{j.filesInFolder({folderName:"uploads/contacts"}).then(a=>{const e=a.newData.children;if(h(e),e.length>0){const s=e[0].name.split(".")[0];return f.get({filename:s}).then(d=>{e[0]={...e[0],details:d},c(e[0].details.data);const l=e[0].details.data.reduce((t,i)=>Object.keys(t).length>Object.keys(i).length?t:i),m=Object.keys(l).map(t=>({title:t.charAt(0).toUpperCase()+t.slice(1),dataIndex:t,key:t}));p(m)})}return e}).catch(a=>console.log(a))},[]),o.jsx(b,{title:"Liên hệ",header:"LIÊN HỆ",children:o.jsx(O,{onChange:a=>{f.get({filename:a.split(".")[0]}).then(e=>{r.map((s,d)=>{if(s.name===a){s.details=e,c(s.details.data);const l=s.details.data.reduce((t,i)=>Object.keys(t).length>Object.keys(i).length?t:i),m=Object.keys(l).map(t=>({title:t.charAt(0).toUpperCase()+t.slice(1),dataIndex:t,key:t}));p(m)}})})},type:"card",tabPosition:"left",items:r==null?void 0:r.map((a,e)=>({label:a.name,key:a.name,children:o.jsx(o.Fragment,{children:o.jsx(x,{colEdit:!1,dragMode:!1,data:u,columns:g})})}))})})};export{K as default};
