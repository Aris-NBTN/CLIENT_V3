import{c as N,r as d,d as y,j as t,V as s,c8 as v,c9 as w,ca as T}from"./index-CPBF7azd.js";import{b7 as j}from"./Layout-6kY_fdgg.js";import{E as A}from"./Table-CbyYs7d6.js";import{a as p,b as I}from"./Filter-BrxRTPhw.js";import{d as F,h as D}from"./Format-CjK6yOC7.js";import{F as a}from"./index-CZw2qTD0.js";import{B as S,M as C}from"./index-DyMsIEIg.js";import{I as m}from"./index-DjHjjRka.js";import{S as E}from"./index-D-mep5xd.js";import"./index-BHMnDpbp.js";import"./EllipsisOutlined-B-j67AQY.js";import"./Overflow-RRO2j2Cn.js";import"./useVariants-Ze9mRC4L.js";import"./CheckOutlined-BbMCFcVc.js";import"./index-8AvD9LWa.js";import"./index-1hNFGOL1.js";import"./index-BhEU4BKS.js";import"./Table-B5D3q3rB.js";import"./iconUtil-DGEcPig7.js";import"./index-B3yZo8E7.js";import"./index-B6k8cXum.js";import"./index-BC0FDAf3.js";import"./SearchOutlined-B1l8Mw2x.js";import"./index-BSWmn8Nf.js";import"./index-BdMcd5pB.js";import"./index-B7vBM7Fg.js";const le=()=>{const l=N(),[r]=a.useForm(),[u,o]=d.useState(!1),{notification:i,loading:c}=y(e=>e.notification),h=[{title:"Tiêu đề thông báo",dataIndex:"title",width:"15%",editable:!0,ellipsis:{showTitle:!0}},{title:"Nội dung thông báo",dataIndex:"content",width:"15%",editable:!0,ellipsis:{showTitle:!0}},{title:"Loại thông báo",dataIndex:"type",width:"10%",editable:!0,type:"select",ellipsis:{showTitle:!0},optionSelect:[{label:"public",value:"public"},{label:"private",value:"private"}],...p("type",[{value:"public",text:"public"},{value:"private",text:"private"}])},{title:"Ẩn/Hiện",dataIndex:"show",width:"10%",editable:!0,type:"select",ellipsis:{showTitle:!0},render:e=>e?"Hiển thị":"Ẩn",optionSelect:[{label:"Hiển thị",value:!0},{label:"Ẩn",value:!1}],...p("type",[{value:!0,text:"Hiển thị"},{value:!1,text:"Ẩn"}])},{title:"Ngày tạo",dataIndex:"createdAt",width:"10%",...I({dataIndex:"createdAt"}),render:e=>F(e)},{title:"Cập nhập",dataIndex:"updatedAt",width:"10%",render:e=>D(e)}],b=d.useMemo(()=>{var e;return(e=i==null?void 0:i.newData)==null?void 0:e.map(n=>({...n,key:n._id}))},[i==null?void 0:i.newData]),g=e=>{s(l,v(e),()=>{o(!1),r.resetFields()})},x=e=>{s(l,w(e))},f=e=>{s(l,T(e))};return t.jsxs(j,{header:"Thông báo",button:t.jsx(S,{type:"primary",onClick:()=>o(!0),children:"Thêm thông báo"}),children:[t.jsx(A,{dragMode:!1,loading:c,data:b,columns:h,onSave:x,onDelete:f,width:"12%"}),t.jsx(C,{title:"Thêm thông báo",centered:!0,open:u,onOk:()=>r.submit(),onCancel:()=>o(!1),width:600,children:t.jsxs(a,{form:r,name:"customForm",layout:"vertical",onFinish:g,children:[t.jsx(a.Item,{label:"Tiêu đề",className:"mb-2",name:"title",rules:[{required:!0,message:"Vui lòng tiêu đề!"}],children:t.jsx(m,{size:"large",className:"mb-2",placeholder:"Nhập tiêu đề"})}),t.jsx(a.Item,{label:"Loại thông báo",className:"mb-2",name:"type",rules:[{required:!0,message:"Vui lòng nhập nội dung!"}],children:t.jsx(E,{size:"large",placeholder:"Chọn loại thông báo",options:[{label:"Tất cả người dùng (Chưa Đăng Nhập - Đã Đăng Nhập)",value:"Public"},{label:"Tất cả người dùng đã đăng nhập",value:"Private"}]})}),t.jsx(a.Item,{label:"Nội dung",className:"mb-2",name:"content",rules:[{required:!0,message:"Vui lòng nhập nội dung!"}],children:t.jsx(m.TextArea,{size:"large",style:{height:"200px"},className:"mb-2",placeholder:"Nhập nội dung"})})]})})]})};export{le as default};