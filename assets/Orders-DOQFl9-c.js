import{c as g,d,r as s,j as t,dH as j}from"./index-_ypI0F_1.js";import{b7 as I}from"./Layout-BvBWVB06.js";import{E as N}from"./Table-2pmcAeah.js";import{F as y,b as m}from"./Filter-qFW8v7vu.js";import{i as p}from"./Format-B_c3Da6I.js";import{I as T}from"./Invoice-fZBCwsFr.js";import{T as O}from"./index-C3H4z0p8.js";import{B as w,M as A}from"./index-CV_nyqji.js";import"./index-CK5a60u3.js";import"./index-ZfKfo4Jn.js";import"./index-DsFhX4f0.js";import"./index-C3t78VW8.js";import"./Overflow-C2mG9Ibm.js";import"./useVariants-7fT5Kw8J.js";import"./index-DK7lNpsH.js";import"./CheckOutlined-ZzPgNfBr.js";import"./SearchOutlined-yRdI2ge9.js";import"./Table-DToRcFpP.js";import"./iconUtil-CXm19lgl.js";import"./EllipsisOutlined-BDD7BBGF.js";import"./index-D6mCrjB3.js";import"./index-DpDQjYUX.js";import"./index-Cltbj2CO.js";import"./index-BJP39Tjo.js";import"./index-D6v2_2dC.js";import"./index-D-ikePUT.js";import"./index-aY_swZQh.js";import"./index-D7qB6B1O.js";const tt=()=>{const l=g(),{orderUser:r,loading:o}=d(e=>e.orderUser),{user:i}=d(e=>e.auth),[c,n]=s.useState(!1),[h,x]=s.useState(),u=[{title:"Mã đơn hàng",dataIndex:"orderId",width:"10%",...y({dataIndex:"orderId"})},{title:"Ngày đặt",dataIndex:"createdAt",width:"8%",...m({dataIndex:"createdAt"}),render:e=>p(e)},{title:"Ngày thanh toán",dataIndex:"updatedAt",width:"8%",...m({dataIndex:"updatedAt"}),render:(e,a)=>a.status===!0?t.jsx(O.Text,{type:"danger",children:p(e)}):t.jsx(t.Fragment,{children:"Chưa thanh toán"})},{title:"Trạng thái",dataIndex:"status",width:"8%",render:e=>e===!0?t.jsx("span",{className:"text-success",children:"Đã thanh toán"}):t.jsx("span",{className:"text-danger",children:"Chưa thanh toán"})},{title:"Thông tin",dataIndex:"info",width:"15%",render:(e,a)=>t.jsx("div",{className:"flex gap-2",children:t.jsx(w,{onClick:()=>{n(!0),x(a)},children:" Chi tiết đơn hàng "})})}],f=s.useMemo(()=>{var e;return(e=r==null?void 0:r.filter(a=>(a==null?void 0:a.status)===!0))==null?void 0:e.map(a=>({...a,key:a._id}))},[r]);return s.useEffect(()=>{i._id&&o&&l(j(i._id))},[i]),t.jsxs(I,{title:"Đơn hàng",header:t.jsx(t.Fragment,{children:t.jsx("div",{className:"flex items-center",children:t.jsx("h6",{className:"mb-0",children:"ĐƠN HÀNG"})})}),children:[t.jsx(N,{loading:o,data:f,columns:u,colEdit:!1,dragMode:!1}),t.jsx(A,{centered:!0,closeIcon:!1,open:c,onOk:()=>n(!1),onCancel:()=>n(!1),width:800,children:t.jsx(T,{info:h})})]})};export{tt as default};