import{Y as pe,c as xe,d as f,r as s,j as a,Z as q,$ as fe,a0 as ye,a1 as E,V as c,a2 as ge,a3 as P,a4 as be,a5 as ve,a6 as Ce,i as O,t as je,w as ke}from"./index-D1twGZ3Z.js";import{b7 as Se}from"./Layout-DnOueL-M.js";import{E as U}from"./Table-CV13tQ_a.js";import{F as y,a as S,b as Fe,c as we}from"./Filter-Bbg4mPE5.js";import{d as Ae,e as Ie,f as De}from"./Format-B63FgtZj.js";import{e as Te}from"./export-Bc9RwKXc.js";import{b as Ne}from"./index-ydiNlzYj.js";import{l as Re}from"./lodash-DCKqUy4m.js";import{F as r}from"./index-CdlybJdo.js";import{T as F}from"./index-BddFcSMz.js";import{B as p,M as w}from"./index-3t2dR2Qx.js";import{T as Me}from"./index-DesCQbv_.js";import{T as qe}from"./index-OgyVthAO.js";import{I as z}from"./index-ABG0vLxO.js";import{T as _}from"./index-CKA590iT.js";import{S as A}from"./index-Djmlvon0.js";import"./index-CJ-jR0EN.js";import"./index-B2WZndIg.js";import"./useVariants-FsczrwmZ.js";import"./Table-D66CHkwD.js";import"./iconUtil-BxKQ3HoK.js";import"./EllipsisOutlined-oEcpAQlt.js";import"./Overflow-BVKK6jMn.js";import"./index-DkJs-5uS.js";import"./index-CY4fJX-W.js";import"./index-D41y7oX1.js";import"./SearchOutlined-DnKBSmV6.js";import"./index-ClEi16nY.js";import"./index-CXyldGPh.js";import"./CheckOutlined-D4YI-g4j.js";import"./html2canvas.esm-CBrSDip1.js";function Ee(i){return pe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"},child:[]}]})(i)}const ua=()=>{const i=xe(),H=f(e=>{var t,l;return(l=(t=e.auth)==null?void 0:t.user)==null?void 0:l.userType}),{users:o,loading:x}=f(e=>e.users),{roles:d,loading:I}=f(e=>e.roles),{courses:n,loading:K}=f(e=>e.courses),[g]=r.useForm(),[m]=r.useForm(),[D]=r.useForm(),[V,b]=s.useState(!1),[B,v]=s.useState(!1),[L,C]=s.useState(!1),[W,G]=s.useState({}),[Q,T]=s.useState(!1),N=s.useMemo(()=>{var e,t;return(t=(e=o==null?void 0:o.newData)==null?void 0:e.filter(l=>(l==null?void 0:l.userType)!=="admin"))==null?void 0:t.map(l=>({...l,key:l==null?void 0:l._id,activeStatus:l!=null&&l.activeStatus?"Cho phép":"Chặn"}))},[o]),X=s.useMemo(()=>d.map(e=>({...e,key:e._id})),[d]),R=s.useMemo(()=>{var e;return(e=n==null?void 0:n.newData)==null?void 0:e.filter(t=>t.price!==0).map(t=>({key:t._id,label:t.name,value:t._id}))},[n]),Y=s.useMemo(()=>{var e;return(e=n==null?void 0:n.newData)==null?void 0:e.filter(t=>t.price!==0).map(t=>({key:t._id,text:t.name,value:t._id}))},[n]),j=({searchText:e,searchedColumn:t})=>{e?(c(i,E({[t]:e,page:1,limit:localStorage.getItem("pageSize")||10})),T(!0),G({[t]:e})):T(!1)},Z=[{title:"Name",dataIndex:"name",width:"8%",editable:!1,...y({dataIndex:"name",handleTableChange:j})},{title:"Email",dataIndex:"email",width:"10%",editable:!1,...y({dataIndex:"email",handleTableChange:j})},{title:"Phone",dataIndex:"phone",width:"6%",editable:!1,...y({dataIndex:"phone",handleTableChange:j})},{title:"Gender",dataIndex:"gender",width:"4%",type:"select",editable:!1,...S("gender",[{value:"Nam",text:"Nam"},{value:"Nữ",text:"Nữ"}])},{title:"Active",dataIndex:"activeStatus",width:"5%",editable:!0,type:"select",optionSelect:[{value:!0,label:"Cho phép"},{value:!1,label:"Chặn"}],...S("activeStatus",[{value:"Cho phép",text:"Cho phép"},{value:"Chặn",text:"Chặn"}])},...H==="admin"?[{title:"Role",dataIndex:"userType",width:"5%",editable:!0,type:"select",optionSelect:Array.isArray(d)?d.map(e=>({value:e._id,label:e.nameRole})):[],...Array.isArray(d)&&d.length>0?S("userType",d.map(e=>({text:e.nameRole,value:e._id}))):{}}]:[],{title:"Day Cr",dataIndex:"createdAt",width:"5%",...Fe({dataIndex:"createdAt"}),render:e=>Ae(e)},{title:a.jsxs("div",{className:"flex justify-center items-center gap-2",children:[a.jsx(F,{children:"Course"}),a.jsx(p,{onClick:()=>C(!0),icon:a.jsx(Ee,{size:25}),type:"text"})]}),children:[{title:a.jsx("div",{className:"text-center",children:"Add"}),width:"3%",editable:!1,render:(e,t)=>a.jsx("div",{className:"flex justify-center",children:a.jsx(p,{type:"text",icon:a.jsx(Ne,{size:20}),onClick:()=>{m.setFieldsValue(t),v(!0)}})})},{title:a.jsx("div",{className:"text-center",children:"Purchased courses"}),dataIndex:"courses",width:"10%",type:"select",editable:!1,...we("courses",Y),render:(e,t)=>e==null?void 0:e.map((l,h)=>{var u;return l&&(n!=null&&n.newData)&&Array.isArray(n==null?void 0:n.newData)&&((u=n==null?void 0:n.newData)==null?void 0:u.length)>0?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex flex-col my-1",children:a.jsxs(Me,{color:"warning",children:[" ",Ie(l,n==null?void 0:n.newData,"name")," "]})})}):null})}]}],$=[{title:"Tên quyền",dataIndex:"nameRole",width:"20%",editable:!0,...y({dataIndex:"nameRole"}),render:e=>a.jsx(F.Text,{ellipsis:{suffix:""},children:e})},{title:"Quản lý",dataIndex:"role",width:"40%",type:"select-multi",optionSelect:[{value:"adminWebsite",label:"Bài Viết"},{value:"adminCourses",label:"Khóa Học"},{value:"adminOrders",label:"Đơn Hàng"},{value:"adminFileManager",label:"File"}],editable:!0,render:e=>a.jsx(a.Fragment,{children:a.jsx(De,{keywords:e})})}],J=e=>{c(i,ge(e))},ee=e=>{e.activeStatus=e.activeStatus==="Chặn"?!1:e.activeStatus==="Cho phép"?!0:e.activeStatus,c(i,P(e))},ae=e=>{c(i,be(e),()=>{b(!1),g.resetFields()})},te=e=>{c(i,ve(e))},le=e=>{c(i,Ce(e))},ne=e=>{e.id=e.key,c(i,P(e),()=>{v(!1)})},se=e=>{O.putCourseByEmails(e).then(()=>{je("put","Cập nhập thành công!"),C(!1)})};function ie({fetchOptions:e,debounceTimeout:t=800,...l}){const[h,u]=s.useState(!1),[oe,M]=s.useState([]),k=s.useRef(0),de=s.useMemo(()=>{const ce=me=>{k.current+=1;const he=k.current;M([]),u(!0),e(me).then(ue=>{he===k.current&&(M(ue),u(!1))})};return Re.debounce(ce,t)},[e,t]);return a.jsx(A,{size:"large",filterOption:!1,onSearch:de,notFoundContent:h?a.jsx(ke,{size:"small"}):null,...l,options:oe})}async function re(e){var l;const t=await O.search({email:e});return(l=t==null?void 0:t.newData)==null?void 0:l.map(h=>({label:h.email,value:h.email}))}return s.useEffect(()=>{x&&(i(q({page:1,limit:localStorage.getItem("pageSize")||10})),i(fe()))},[]),s.useEffect(()=>{K===!0&&i(ye())},[]),a.jsxs(Se,{header:"NGƯỜI DÙNG",button:a.jsxs(a.Fragment,{children:[a.jsx(p,{onClick:()=>b(!0),type:"primary",children:"Phân quyền"}),a.jsx(p,{onClick:()=>Te(N,"Users.xlsx"),type:"primary",children:"Xuất file Excel"})]}),children:[a.jsx(U,{isSearch:Q,Api:q,ApiSearch:E,search:W,total:o==null?void 0:o.totalItems,dragMode:!1,width:"4%",loading:x,data:N,columns:Z,onSave:ee,onDelete:J}),a.jsx(w,{centered:!0,open:V,onCancel:()=>b(!1),footer:null,width:750,children:a.jsx(qe,{centered:!0,items:[{label:"Thêm quyền quản trị",key:"1",children:a.jsx(a.Fragment,{children:a.jsxs(r,{form:g,name:"customForm",layout:"vertical",onFinish:ae,children:[a.jsx(r.Item,{className:"mb-3",name:"nameRole",label:"Tên quyền",rules:[{required:!0,message:"Nhập tên quyền!"}],children:a.jsx(z,{placeholder:"Nhập tên quyền"})}),a.jsx(r.Item,{className:"mb-3",name:"role",label:"Chức năng quản lý",rules:[{required:!0,message:"Chọn các quyền!"}],children:a.jsx(_,{treeDefaultExpandAll:!0,showSearch:!1,showCheckedStrategy:_.SHOW_PARENT,treeCheckable:!0,treeData:[{title:"Admin",value:"admin",key:"admin",children:[{key:"adminDashboard",value:"adminDashboard",label:"Trang chủ"},{key:"adminWebsite",value:"adminWebsite",label:"Bài Viết"},{key:"adminPlugins",value:"adminPlugins",label:"Plugins"},{key:"adminUsers",value:"adminUsers",label:"Người dùng"},{key:"adminWebsite",value:"adminCourses",label:"Khóa Học"},{key:"adminOrders",value:"adminOrders",label:"Đơn Hàng"},{key:"adminWebsite",value:"adminEmail",label:"Email"},{key:"adminFileManager",value:"adminFileManager",label:"File"},{key:"adminData",value:"adminData",label:"Dữ Liệu"},{key:"adminPayment",value:"adminPayment",label:"Key Thanh Toán"}]},{title:"User",value:"user",key:"user",children:[{title:"Trang chủ",value:"userDashboard",key:"userDashboard"},{title:"Thông tin",value:"userInfo",key:"userInfo"},{title:"Khóa học",value:"userCourses",key:"userCourses"},{title:"Lịch sử mua hàng",value:"userOrders",key:"userOrders"},{title:"Đổi mật khẩu",value:"userChangePassword",key:"userChangePassword"}]}],placeholder:"Chọn các quyền"})}),a.jsx(p,{type:"primary",loading:I,onClick:()=>g.submit(),className:"flex float-end",children:"Thêm quyền"})]})})},{label:"Chỉnh sửa quyền quản trị",key:"2",children:a.jsx(a.Fragment,{children:a.jsx(U,{loading:I,data:X,columns:$,scroll:{x:500,y:350},width:"10%",onSave:te,onDelete:le})})}]})}),a.jsx(w,{title:a.jsxs(a.Fragment,{children:["Khóa học của học viên: ",a.jsx(F.Text,{type:"danger",children:m.getFieldValue("name")})]}),centered:!0,open:B,onOk:()=>{m.submit()},onCancel:()=>{v(!1),m.resetFields()},confirmLoading:x,width:600,children:a.jsxs(r,{form:m,name:"customFormCourses",layout:"vertical",onFinish:ne,children:[a.jsx(r.Item,{className:"mb-4 hidden",name:"key",label:"Khóa học",rules:[{required:!0,message:"Chọn khóa học cần kích hoạt!"}],children:a.jsx(z,{})}),a.jsx(r.Item,{className:"mb-4",name:"courses",label:"Kích hoạt khóa học",children:a.jsx(A,{mode:"multiple",options:R,placeholder:"Chọn khóa học cần kích hoạt"})})]})}),a.jsx(w,{title:"Thêm nhiều khóa học cho học viên",centered:!0,open:L,onOk:()=>{D.submit()},onCancel:()=>C(!1),confirmLoading:x,width:600,children:a.jsxs(r,{form:D,name:"customFormMultiAdd",layout:"vertical",onFinish:se,children:[a.jsx(r.Item,{className:"mb-4",name:"email",label:"Email người dùng",rules:[{required:!0,message:"Chọn email người dùng!"}],children:a.jsx(ie,{mode:"multiple",placeholder:"Nhập email người dùng",fetchOptions:re,style:{width:"100%"}})}),a.jsx(r.Item,{className:"mb-4",name:"courses",label:"Khóa học",rules:[{required:!0,message:"Chọn khóa học!"}],children:a.jsx(A,{size:"large",mode:"multiple",options:R,placeholder:"Chọn khóa học cần kích hoạt"})})]})})]})};export{ua as default};
