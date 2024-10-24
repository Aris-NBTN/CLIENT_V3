import{r as o,I,J as w,j as t,h as y,bw as v,t as N,k as D,c as T,d as A,b8 as c,V as m,bx as S,by as k,bz as M}from"./index-_ypI0F_1.js";import{b7 as F}from"./Layout-BvBWVB06.js";import{E as U}from"./Table-2pmcAeah.js";import{U as C}from"./index-C0hLG0PG.js";import{B as g,M as E}from"./index-CV_nyqji.js";import{d as h,h as H}from"./Format-B_c3Da6I.js";import{F as r}from"./index-BJP39Tjo.js";import{I as p}from"./index-Cltbj2CO.js";import{S as K}from"./index-C3t78VW8.js";import{D as V}from"./index-D-ikePUT.js";import"./index-C3H4z0p8.js";import"./EllipsisOutlined-BDD7BBGF.js";import"./Overflow-C2mG9Ibm.js";import"./useVariants-7fT5Kw8J.js";import"./CheckOutlined-ZzPgNfBr.js";import"./index-CK5a60u3.js";import"./index-ZfKfo4Jn.js";import"./index-DsFhX4f0.js";import"./Table-DToRcFpP.js";import"./iconUtil-CXm19lgl.js";import"./index-D6mCrjB3.js";import"./index-DK7lNpsH.js";import"./index-DpDQjYUX.js";import"./SearchOutlined-yRdI2ge9.js";import"./index-D6v2_2dC.js";import"./progress-CDgioDJU.js";import"./index-aY_swZQh.js";var z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},O=function(s,i){return o.createElement(I,w({},s,{ref:i,icon:z}))},_=o.forwardRef(O);const q=({name:a,id:s})=>t.jsx(C,{name:"filePlugins",multiple:!1,action:`${y}/v1/plugins/file-plugin`,headers:{Authorization:"Bearer "+localStorage.getItem("token")},onChange:i=>{const{response:l}=i.file;i.file.status==="done"?(v.put({_id:s,src:l.src}),N("upload","Tải file thành công!","Đã thêm plugins mới")):i.file.status==="error"&&D("upload","Tải file không thành công!",l.message)},children:t.jsx(g,{icon:t.jsx(_,{}),children:a})}),fe=()=>{const a=T(),[s]=r.useForm(),[i,l]=o.useState(!1),{plugins:n,loading:u}=A(e=>e.plugins),f=o.useMemo(()=>{var e;return(e=n==null?void 0:n.newData)==null?void 0:e.map(d=>({...d,key:d._id}))},[n]),x=[{title:"ID",dataIndex:"id",width:"15%",ellipsis:{showTitle:!0}},{title:"Tên Plugins",dataIndex:"name",width:"15%",editable:!0},{title:"Mô tả",dataIndex:"description",width:"15%",editable:!0,ellipsis:{showTitle:!0}},{title:"Trang thái",dataIndex:"status",type:"select",width:"8%",editable:!0,optionSelect:[{label:"Hoạt động",value:!0},{label:"Không hoạt động",value:!1}],render:e=>e?"Hoạt động":"Không hoạt động"},{title:"Ngày thêm",dataIndex:"createdAt",width:"8%",render:e=>h(e)},{title:"Hết hạn",dataIndex:"expiry",width:"8%",render:e=>e?h(e):"Vĩnh viễn"},{title:"Ngày cập nhập",dataIndex:"updatedAt",width:"10%",render:e=>H(e)},{title:"File",dataIndex:"src",width:"10%",render:(e,d)=>t.jsx("div",{className:"flex justify-center",children:t.jsx(q,{id:d._id,name:e?"Cập nhập":"Tải lên"})})}],b=e=>{m(a,S(e),()=>{l(!1),s.resetFields()})},P=e=>{e._id=e.id,delete e.id,m(a,k(e))},j=e=>{m(a,M(e))};return o.useEffect(()=>{u&&a(c({page:1,limit:localStorage.getItem("pageSize")||10}))},[]),t.jsxs(F,{header:"PLUGINS",button:t.jsx(g,{onClick:()=>l(!0),type:"primary",children:"Thêm Plugins"}),children:[t.jsx(U,{dragMode:!1,Api:c,total:n==null?void 0:n.totalItems,loading:u,data:f,columns:x,onSave:P,onDelete:j}),t.jsx(E,{title:"Thêm Plugins",centered:!0,open:i,onOk:()=>s.submit(),onCancel:()=>l(!1),children:t.jsxs(r,{form:s,onFinish:b,layout:"vertical",children:[t.jsx(r.Item,{name:"name",className:"!mb-2",label:"Tên Plugins",rules:[{required:!0,message:"Nhập tên Plugins!"}],children:t.jsx(p,{placeholder:"Nhập tên pluigns",onKeyDown:e=>e.stopPropagation()})}),t.jsx(r.Item,{name:"id",className:"!mb-2",label:"Mật khẩu",rules:[{required:!0,message:"Nhập id!"}],children:t.jsx(p,{placeholder:"Nhập mật khẩu",onKeyDown:e=>e.stopPropagation()})}),t.jsx(r.Item,{name:"status",className:"!mb-2",label:"Trang thái",rules:[{required:!0,message:"Chọn trang thái!"}],children:t.jsx(K,{placeholder:"Chọn trang thái",options:[{label:"Hoạt động",value:!0},{label:"Không hoạt động",value:!1}]})}),t.jsx(r.Item,{name:"description",className:"!mb-2",label:"Mô tả",rules:[{required:!0,message:"Nhập mô tả!"}],children:t.jsx(p,{placeholder:"Nhập tên pluigns",onKeyDown:e=>e.stopPropagation()})}),t.jsx(r.Item,{name:"expiry",className:"!mb-2",label:"Ngày hết hạn",children:t.jsx(V,{style:{width:"100%"}})})]})})]})};export{fe as default};