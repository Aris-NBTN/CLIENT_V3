import{r as o,a0 as I,e as y,j as t,y as v,bs as w,t as N,I as D,q as T,s as A,b5 as c,a5 as d,bt as S,bu as M,bv as k}from"./index-Bl_pZCeN.js";import{b7 as F}from"./Layout-Cr3VXxUG.js";import{E as U}from"./Table-CeY_MlRZ.js";import{U as C}from"./index-_Lh883PF.js";import{B as g}from"./TextArea-BanZLPmh.js";import{d as h,h as E}from"./Format-Cdb_63wG.js";import{F as n}from"./index-CEfktzSB.js";import{M as H}from"./index-B65SxrxW.js";import{I as p}from"./index-_oEg5XM8.js";import{S as K}from"./index-Bev9D8vS.js";import{D as q}from"./index-D2qZIhzW.js";import"./index-FpgqAsqH.js";import"./EllipsisOutlined-Dv0U7LQh.js";import"./Overflow-B2U5bHyH.js";import"./context-CeT_YlOn.js";import"./index-CZycZjMr.js";import"./index-k6j_HrSw.js";import"./index-Ch5hctbl.js";import"./row-BAzrWk1M.js";import"./index-Cil4O1hR.js";import"./styleChecker-Ck8JMnEb.js";import"./useLocale-BY4459aG.js";import"./CheckOutlined-BPHqeFCx.js";import"./useVariants-B1zc-sRz.js";import"./PurePanel-ryEM3orR.js";import"./index-DK56_scK.js";import"./Dropdown-BgYRO9jp.js";import"./Table-CU9gFey1.js";import"./iconUtil-CW9oYwre.js";import"./index-BoV9MRuN.js";import"./index-Cg5YuCgZ.js";import"./index-Bh9zOY6B.js";import"./index-DnInuHaQ.js";import"./SearchOutlined-Bm-v0bMy.js";import"./index-CnsZvPuK.js";import"./progress-D3B2QMjB.js";import"./index-uqfG7IHM.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},V=function(a,s){return o.createElement(I,y({},a,{ref:s,icon:O}))},_=o.forwardRef(V);const z=({name:i,id:a})=>t.jsx(C,{name:"filePlugins",multiple:!1,action:`${v}/v1/plugins/file-plugin`,headers:{Authorization:"Bearer "+localStorage.getItem("token")},onChange:s=>{const{response:l}=s.file;s.file.status==="done"?(w.put({_id:a,src:l.src}),N("upload","Tải file thành công!","Đã thêm plugins mới")):s.file.status==="error"&&D("upload","Tải file không thành công!",l.message)},children:t.jsx(g,{icon:t.jsx(_,{}),children:i})}),De=()=>{const i=T(),[a]=n.useForm(),[s,l]=o.useState(!1),{plugins:r,loading:u}=A(e=>e.plugins),f=o.useMemo(()=>{var e;return(e=r==null?void 0:r.newData)==null?void 0:e.map(m=>({...m,key:m._id}))},[r]),x=[{title:"ID",dataIndex:"id",width:"15%",ellipsis:{showTitle:!0}},{title:"Tên Plugins",dataIndex:"name",width:"15%",editable:!0},{title:"Mô tả",dataIndex:"description",width:"15%",editable:!0,ellipsis:{showTitle:!0}},{title:"Trang thái",dataIndex:"status",type:"select",width:"8%",editable:!0,optionSelect:[{label:"Hoạt động",value:!0},{label:"Không hoạt động",value:!1}],render:e=>e?"Hoạt động":"Không hoạt động"},{title:"Ngày thêm",dataIndex:"createdAt",width:"8%",render:e=>h(e)},{title:"Hết hạn",dataIndex:"expiry",width:"8%",render:e=>e?h(e):"Vĩnh viễn"},{title:"Ngày cập nhập",dataIndex:"updatedAt",width:"10%",render:e=>E(e)},{title:"File",dataIndex:"src",width:"10%",render:(e,m)=>t.jsx("div",{className:"flex justify-center",children:t.jsx(z,{id:m._id,name:e?"Cập nhập":"Tải lên"})})}],b=e=>{d(i,S(e),()=>{l(!1),a.resetFields()})},P=e=>{e._id=e.id,delete e.id,d(i,M(e))},j=e=>{d(i,k(e))};return o.useEffect(()=>{u&&i(c({page:1,limit:localStorage.getItem("pageSize")||10}))},[]),t.jsxs(F,{header:"PLUGINS",button:t.jsx(g,{onClick:()=>l(!0),type:"primary",children:"Thêm Plugins"}),children:[t.jsx(U,{dragMode:!1,Api:c,total:r==null?void 0:r.totalItems,loading:u,data:f,columns:x,onSave:P,onDelete:j}),t.jsx(H,{title:"Thêm Plugins",centered:!0,open:s,onOk:()=>a.submit(),onCancel:()=>l(!1),children:t.jsxs(n,{form:a,onFinish:b,layout:"vertical",children:[t.jsx(n.Item,{name:"name",className:"!mb-2",label:"Tên Plugins",rules:[{required:!0,message:"Nhập tên Plugins!"}],children:t.jsx(p,{placeholder:"Nhập tên pluigns",onKeyDown:e=>e.stopPropagation()})}),t.jsx(n.Item,{name:"id",className:"!mb-2",label:"Mật khẩu",rules:[{required:!0,message:"Nhập id!"}],children:t.jsx(p,{placeholder:"Nhập mật khẩu",onKeyDown:e=>e.stopPropagation()})}),t.jsx(n.Item,{name:"status",className:"!mb-2",label:"Trang thái",rules:[{required:!0,message:"Chọn trang thái!"}],children:t.jsx(K,{placeholder:"Chọn trang thái",options:[{label:"Hoạt động",value:!0},{label:"Không hoạt động",value:!1}]})}),t.jsx(n.Item,{name:"description",className:"!mb-2",label:"Mô tả",rules:[{required:!0,message:"Nhập mô tả!"}],children:t.jsx(p,{placeholder:"Nhập tên pluigns",onKeyDown:e=>e.stopPropagation()})}),t.jsx(n.Item,{name:"expiry",className:"!mb-2",label:"Ngày hết hạn",children:t.jsx(q,{style:{width:"100%"}})})]})})]})};export{De as default};