import{q as g,s as m,r as i,j as t,dB as j}from"./index-CLgyQ1vx.js";import{b7 as I}from"./Layout-Bo8X0zbn.js";import{E as N}from"./Table-BASKfIV3.js";import{F as y,b as p}from"./Filter-ByHhxKaB.js";import"./html2canvas.esm-CBrSDip1.js";import"./jspdf.es.min-BIQw-QNZ.js";import{i as l}from"./Format-D-jAu6wH.js";import{I as T}from"./Invoice-B5EZH82e.js";import{T as O}from"./index-ObwxId4A.js";import{B as w}from"./button-CFZW2Fak.js";import{M as A}from"./index-CL0RwYER.js";import"./index-CnibHaQp.js";import"./EllipsisOutlined-gz3vguox.js";import"./Overflow-aWC-KCIQ.js";import"./context-DZ0uDIsf.js";import"./index-DRxWoPIf.js";import"./index-BC037qWw.js";import"./index-DeFNh6Jp.js";import"./row-CbKX7NA9.js";import"./index-BUe_r4_5.js";import"./PurePanel-BuBTzN3G.js";import"./useVariants-Dd3vmZmf.js";import"./index-wxIFWymk.js";import"./useLocale-WrgrvLJQ.js";import"./compact-item-DR52_Oht.js";import"./CheckOutlined-DL5js1cp.js";import"./SearchOutlined-DECFkpI7.js";import"./Dropdown-BhJCOC9m.js";import"./iconUtil-DMDmVrIZ.js";import"./index-BSB5CEy1.js";import"./index-DzniCgZh.js";import"./TextArea-Bz2hpPvr.js";import"./index-C5fE5rqD.js";import"./index-DNERIO6W.js";import"./index-BKrmvUfW.js";import"./index-BjEFqTht.js";import"./index-C1zwpvBp.js";import"./index-CYVR9qbG.js";const pt=()=>{const c=g(),{orderUser:a,loading:n}=m(e=>e.orderUser),{user:s}=m(e=>e.auth),[h,o]=i.useState(!1),[x,u]=i.useState(),f=[{title:"Mã đơn hàng",dataIndex:"orderId",width:"10%",...y({dataIndex:"orderId"})},{title:"Ngày đặt",dataIndex:"createdAt",width:"8%",...p({dataIndex:"createdAt"}),render:e=>l(e)},{title:"Ngày thanh toán",dataIndex:"updatedAt",width:"8%",...p({dataIndex:"updatedAt"}),render:(e,r)=>r.status===!0?t.jsx(O.Text,{type:"danger",children:l(e)}):t.jsx(t.Fragment,{children:"Chưa thanh toán"})},{title:"Trạng thái",dataIndex:"status",width:"8%",render:e=>e===!0?t.jsx("span",{className:"text-success",children:"Đã thanh toán"}):t.jsx("span",{className:"text-danger",children:"Chưa thanh toán"})},{title:"Thông tin",dataIndex:"info",width:"15%",render:(e,r)=>t.jsx("div",{className:"flex gap-2",children:t.jsx(w,{onClick:()=>{o(!0),u(r)},children:" Chi tiết đơn hàng "})})}],d=i.useMemo(()=>{var e;return(e=a==null?void 0:a.filter(r=>(r==null?void 0:r.status)===!0))==null?void 0:e.map(r=>({...r,key:r._id}))},[a]);return console.log(d),i.useEffect(()=>{s._id&&n&&c(j(s._id))},[s]),t.jsxs(I,{title:"Đơn hàng",header:t.jsx(t.Fragment,{children:t.jsx("div",{className:"flex items-center",children:t.jsx("h6",{className:"mb-0",children:"ĐƠN HÀNG"})})}),children:[t.jsx(N,{loading:n,data:d,columns:f,colEdit:!1,dragMode:!1}),t.jsx(A,{centered:!0,closeIcon:!1,open:h,onOk:()=>o(!1),onCancel:()=>o(!1),width:800,children:t.jsx(T,{info:x})})]})};export{pt as default};
