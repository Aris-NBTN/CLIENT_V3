import{c as u,d as x,r as c,g as j,j as e,V as b,W as g,X as N}from"./index-_ypI0F_1.js";import{b7 as f}from"./Layout-BvBWVB06.js";import{F as r}from"./index-BJP39Tjo.js";import{B as I}from"./index-CV_nyqji.js";import{R as m,C as s}from"./index-C3H4z0p8.js";import{C as l}from"./index-BY379eDO.js";import{I as i}from"./index-Cltbj2CO.js";import"./index-CK5a60u3.js";import"./index-ZfKfo4Jn.js";import"./index-DsFhX4f0.js";import"./index-C3t78VW8.js";import"./Overflow-C2mG9Ibm.js";import"./useVariants-7fT5Kw8J.js";import"./index-DK7lNpsH.js";import"./CheckOutlined-ZzPgNfBr.js";import"./SearchOutlined-yRdI2ge9.js";import"./EllipsisOutlined-BDD7BBGF.js";import"./index-DZ4TB2Lo.js";const v=()=>{const[n]=r.useForm(),p=u(),{info:t,loading:o}=x(a=>a.info),d=a=>{b(p,g({id:N,...a}))};return c.useEffect(()=>{o&&p(j())},[]),c.useEffect(()=>{var a,h;(a=t==null?void 0:t.newData)!=null&&a[0]&&n.setFieldsValue((h=t==null?void 0:t.newData)==null?void 0:h[0])},[t]),e.jsx(f,{title:"Thông tin Website",header:"WEBSITE",button:e.jsx(e.Fragment,{children:e.jsx(I,{type:"primary",onClick:()=>n.submit(),children:"Lưu thông tin"})}),children:e.jsx(r,{form:n,className:"w-full",name:"customForm",layout:"vertical",onFinish:d,children:e.jsxs(m,{gutter:[24,24],children:[e.jsx(s,{span:24,children:e.jsx(l,{className:"h-full",title:"Thông tin webstie",children:e.jsxs(m,{gutter:[18,18],children:[e.jsx(s,{md:{span:12},span:24,children:e.jsx(r.Item,{className:"mb-2",name:"name",label:"Tên Website",rules:[{required:!0,message:"Nhập tên Website!"}],children:e.jsx(i,{size:"large",className:"mb-2",placeholder:"Nhập tên Website"})})}),e.jsx(s,{md:{span:12},span:24,children:e.jsx(r.Item,{className:"mb-2",name:"manage",label:"Tên quản lý",rules:[{required:!0,message:"Nhập tên quản lý!"}],children:e.jsx(i,{size:"large",className:"mb-2",placeholder:"Nhập tên quản lý"})})}),e.jsx(s,{md:{span:12},span:24,children:e.jsx(r.Item,{className:"mb-2",name:"phone",label:"Số điện thoại",validateFirst:!0,rules:[{required:!0,message:"Vui lòng nhập số điện thoại!"},{pattern:/^0/,message:"Số điện thoại phải bắt đầu bằng số 0!"},{len:10,message:"Số điện thoại phải có đúng 10 số!"}],children:e.jsx(i,{size:"large",placeholder:"Nhập số điện thoại",onKeyPress:a=>{/[0-9]/.test(a.key)||a.preventDefault()}})})}),e.jsx(s,{md:{span:12},span:24,children:e.jsx(r.Item,{className:"mb-2",name:"email",label:"Email",rules:[{required:!0,message:"Nhập email!"}],children:e.jsx(i,{size:"large",className:"mb-2",placeholder:"Nhập email"})})}),e.jsx(s,{md:{span:12},span:24,children:e.jsx(r.Item,{className:"mb-2",name:"address",label:"Địa chỉ",rules:[{required:!0,message:"Nhập địa chỉ!"}],children:e.jsx(i,{size:"large",className:"mb-2",placeholder:"Nhập địa chỉ"})})}),e.jsx(s,{md:{span:12},span:24,children:e.jsx(r.Item,{className:"mb-2",name:"description",label:"Mô tả webiste",rules:[{required:!0,message:"Nhập Mô tả!"}],children:e.jsx(i,{size:"large",className:"mb-2",placeholder:"Nhập Mô tảỉ"})})}),e.jsx(s,{md:{span:12},span:24,children:e.jsx(r.Item,{className:"mb-2",name:"keywords",label:"Từ khóa tìm kiếm",rules:[{required:!0,message:"Nhập từ khóa !"}],children:e.jsx(i,{size:"large",className:"mb-2",placeholder:"Nhập từ khóa"})})})]})})}),e.jsx(s,{className:"mb-6",span:24,children:e.jsx(l,{title:"Ảnh website",children:e.jsxs(m,{gutter:[24,24],children:[e.jsx(s,{xl:{span:8},lg:{span:12},span:24,children:e.jsx(l,{title:"Icon website"})}),e.jsx(s,{xl:{span:8},lg:{span:12},span:24,children:e.jsx(l,{title:"Ảnh trang Login"})})]})})})]})})})};export{v as default};