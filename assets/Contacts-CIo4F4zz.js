import{r as n,ca as j,j as o}from"./index-BEMMc-Wv.js";import{c as f}from"./contact-DNpStE0N.js";import{b7 as b}from"./Layout-ByDJ3VPX.js";import{E as x}from"./Table-3BJmQTgA.js";import{T as O}from"./index-BEWjulqE.js";import"./index-zW8wCJZn.js";import"./index-B9rq9Sxl.js";import"./useVariants-CE3LDwgn.js";import"./EllipsisOutlined-BSMhHKw8.js";import"./Overflow-Hak1BuQe.js";import"./CheckOutlined-B9Fc6Ff7.js";import"./index-C23GNj4V.js";import"./index-5VtID4YU.js";import"./index-IpmdJtin.js";import"./index-_7Iq03Cy.js";import"./index-D8lp3ImF.js";import"./SearchOutlined-GNztLwhD.js";import"./Table-C7AHD0RC.js";import"./iconUtil-BPDrZdBV.js";import"./index-CmHKE_Nb.js";import"./index-CCudNGs-.js";import"./index-DMj1J3Ao.js";import"./index-BrynHdzE.js";import"./index-_6mEeVbY.js";const K=()=>{const[r,h]=n.useState(),[u,c]=n.useState([]),[g,p]=n.useState([]);return n.useEffect(()=>{j.filesInFolder({folderName:"uploads/contacts"}).then(a=>{const e=a.newData.children;if(h(e),e.length>0){const s=e[0].name.split(".")[0];return f.get({filename:s}).then(d=>{e[0]={...e[0],details:d},c(e[0].details.data);const l=e[0].details.data.reduce((t,i)=>Object.keys(t).length>Object.keys(i).length?t:i),m=Object.keys(l).map(t=>({title:t.charAt(0).toUpperCase()+t.slice(1),dataIndex:t,key:t}));p(m)})}return e}).catch(a=>console.log(a))},[]),o.jsx(b,{title:"Liên hệ",header:"LIÊN HỆ",children:o.jsx(O,{onChange:a=>{f.get({filename:a.split(".")[0]}).then(e=>{r.map((s,d)=>{if(s.name===a){s.details=e,c(s.details.data);const l=s.details.data.reduce((t,i)=>Object.keys(t).length>Object.keys(i).length?t:i),m=Object.keys(l).map(t=>({title:t.charAt(0).toUpperCase()+t.slice(1),dataIndex:t,key:t}));p(m)}})})},type:"card",tabPosition:"left",items:r==null?void 0:r.map((a,e)=>({label:a.name,key:a.name,children:o.jsx(o.Fragment,{children:o.jsx(x,{colEdit:!1,dragMode:!1,data:u,columns:g})})}))})})};export{K as default};