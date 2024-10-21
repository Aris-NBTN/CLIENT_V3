import{c as q,d as k,r as s,j as e,b9 as A,ba as $,bb as X,as as u,N as Q,V as n,bc as R,k as H,bd as J,be as K,bf as U,bg as W,bh as Y,bi as Z,bj as ee}from"./index-BEMMc-Wv.js";import{ba as te,b7 as ae}from"./Layout-ByDJ3VPX.js";import{E as C}from"./Table-3BJmQTgA.js";import{F as d,a as re}from"./Filter-4DJCBbrX.js";import{f as ne,e as ie}from"./Format-CO1drAWl.js";import{T as g,v as se,w as le,x as S}from"./index-zW8wCJZn.js";import{e as oe}from"./export-BpjaptRU.js";import{F as l}from"./index-BrynHdzE.js";import{B as o,M as w}from"./index-B9rq9Sxl.js";import{I as N}from"./index-DMj1J3Ao.js";import{T as de}from"./index-BEWjulqE.js";import"./index-C23GNj4V.js";import"./index-5VtID4YU.js";import"./index-IpmdJtin.js";import"./index-_7Iq03Cy.js";import"./Overflow-Hak1BuQe.js";import"./useVariants-CE3LDwgn.js";import"./index-D8lp3ImF.js";import"./CheckOutlined-B9Fc6Ff7.js";import"./SearchOutlined-GNztLwhD.js";import"./Table-C7AHD0RC.js";import"./iconUtil-BPDrZdBV.js";import"./EllipsisOutlined-BSMhHKw8.js";import"./index-CmHKE_Nb.js";import"./index-CCudNGs-.js";import"./index-_6mEeVbY.js";import"./index-D5_m5zmX.js";import"./index-Dqv8LrFk.js";import"./html2canvas.esm-CBrSDip1.js";const _e=()=>{const r=q(),P=te({query:"(max-width: 576px)"}),[x]=l.useForm(),[m]=l.useForm(),{pages:i,loading:f}=k(t=>t.pages),{groupPages:b,loading:c}=k(t=>t.groupPages),a=b==null?void 0:b.newData,[D,y]=s.useState(!1),[E,j]=s.useState(!1),[F,I]=s.useState(localStorage.getItem("drag")==="true"),T=s.useMemo(()=>{var t;return(t=i==null?void 0:i.newData)==null?void 0:t.map(h=>({...h,key:h._id}))},[i]),v=s.useMemo(()=>a==null?void 0:a.map(t=>({...t,key:t._id})),[a]),p=({searchText:t,searchedColumn:h})=>{t?n(r,ee({[h]:t})):r(A({page:1,limit:localStorage.getItem("pageSize")||10}))},G=[{title:"Tên trang",dataIndex:"name",width:"15%",editable:!0,...d({dataIndex:"name",handleTableChange:p})},{title:"Link Trang",dataIndex:"slug",width:"15%",editable:!1,...d({dataIndex:"slug",handleTableChange:p}),render:t=>e.jsx(e.Fragment,{children:e.jsx(g.Paragraph,{className:"!mb-0",ellipsis:{suffix:""},copyable:{text:`/${t}`},children:t})})},{title:"Tiêu đề trang",dataIndex:"title",width:"15%",editable:!0,...d({dataIndex:"title",handleTableChange:p})},{title:"Mô tả",dataIndex:"description",width:"15%",editable:!0,...d({dataIndex:"description",handleTableChange:p})},{title:"Từ khóa",dataIndex:"keywords",width:"15%",type:"tag",editable:!0,render:t=>e.jsx(ne,{keywords:t})},{title:"Nhóm",dataIndex:"group",width:"8%",type:"select",editable:!0,optionSelect:Array.isArray(a)&&(a==null?void 0:a.length)>0?a==null?void 0:a.map(t=>({label:t.group,value:t._id})):[],render:t=>t&&a&&Array.isArray(a)&&(a==null?void 0:a.length)>0?ie(t,a,"group"):null,...Array.isArray(a)&&(a==null?void 0:a.length)>0?re("group",a==null?void 0:a.map(t=>({text:t.group,value:t._id}))):{}}],M=[{title:"Tên nhóm",dataIndex:"group",width:"60%",type:"text",editable:!0,...d({dataIndex:"group"})}],B=t=>{n(r,J(t),()=>{y(!1),x.resetFields()})},z=t=>{n(r,K(t))},L=t=>{n(r,U(t))},_=t=>{n(r,W(t),()=>{j(!1),m.resetFields()})},O=t=>{n(r,Y(t))},V=t=>{n(r,Z(t))};return s.useEffect(()=>{f&&r(A({page:1,limit:localStorage.getItem("pageSize")||10}))},[]),s.useEffect(()=>{c===!0&&r($())},[]),e.jsxs(ae,{title:"Bài viết",header:"BÀI VIẾT",button:e.jsxs(e.Fragment,{children:[F?e.jsx(o,{onClick:()=>{I(!1),localStorage.setItem("drag","false")},children:e.jsx(g,{children:"Tắt sắp xếp"})}):e.jsx(o,{type:"primary",onClick:()=>{I(!0),localStorage.setItem("drag","true")},children:"Bật sắp xếp"}),e.jsx(o,{type:"primary",onClick:()=>j(!0),children:"Thêm nhóm"}),e.jsx(o,{type:"primary",onClick:()=>y(!0),children:"Thêm trang"}),e.jsx(o,{onClick:()=>oe(T,"Pages.xlsx"),type:"primary",children:"Xuất file Excel"})]}),children:[e.jsx(C,{dragMode:F,Api:A,ApiPut:X,total:i==null?void 0:i.totalItems,loading:f,data:T,columns:G,onSave:z,onDelete:L,width:"12%",button:t=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Xem trang",children:e.jsx(Q,{to:t.slug==="trang-chu"?"/":`/${t.slug}`,target:"_blank",children:e.jsx(se,{size:22,color:"#006aff"})})}),e.jsx(u,{title:"Sao chép trang",children:e.jsx(g,{onClick:()=>n(r,R(t._id)),children:e.jsx(le,{size:22,color:"#55ff00"})})}),P?e.jsx(e.Fragment,{children:e.jsx(u,{title:"Chỉnh sửa trang",children:e.jsx(g.Link,{onClick:()=>H("","Bạn không thể truy cập trang này!","Vui lòng sử dụng máy tính để trãi nghiệm tốt nhất!"),children:e.jsx(S,{size:22,color:"rgb(255 127 0)"})})})}):e.jsx(u,{title:"Chỉnh sửa trang",children:e.jsx("a",{href:`/admin/page/${t.slug}`,children:e.jsx(S,{size:22,color:"rgb(255 127 0)"})})})]})}),e.jsx(w,{title:"Thêm trang",centered:!0,open:D,onOk:()=>x.submit(),onCancel:()=>y(!1),confirmLoading:f,width:500,children:e.jsx(l,{form:x,name:"customForm",layout:"vertical",onFinish:B,children:e.jsx(l.Item,{label:"Tên trang",className:"mb-2",name:"name",rules:[{required:!0,message:"Vui lòng nhập tên trang!"}],children:e.jsx(N,{className:"mb-2",placeholder:"Nhập tên trang"})})})}),e.jsx(w,{centered:!0,open:E,confirmLoading:c,onOk:()=>m.submit(),onCancel:()=>j(!1),footer:null,width:600,children:e.jsx(de,{centered:!0,items:[{label:"Thêm nhóm",key:"1",children:e.jsx(e.Fragment,{children:e.jsxs(l,{form:m,name:"customForm",layout:"vertical",onFinish:_,children:[e.jsx(l.Item,{className:"mb-3",name:"group",label:"Tên nhóm",rules:[{required:!0,message:"Nhập tên nhóm!"}],children:e.jsx(N,{placeholder:"Nhập nhóm"})}),e.jsx(o,{type:"primary",loading:c,onClick:()=>m.submit(),className:"flex float-end",children:"Thêm nhóm"})]})})},{label:"Chỉnh sửa nhóm",key:"2",children:e.jsx(e.Fragment,{children:e.jsx(C,{loading:c,data:v,isScroll:!1,columns:M,width:"10%",onSave:O,onDelete:V})})}]})})]})};export{_e as default};
