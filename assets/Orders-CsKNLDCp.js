import{d as y,r as n,c as C,j as e,aT as l,F,t as T,k as S,V as b,aU as w}from"./index-_ypI0F_1.js";import{b7 as E}from"./Layout-BvBWVB06.js";import{E as N}from"./Table-2pmcAeah.js";import{F as h,b as x,a as A}from"./Filter-qFW8v7vu.js";import{I as k}from"./Invoice-fZBCwsFr.js";import{e as v,a as D}from"./export-BU0GngYu.js";import{i as g}from"./Format-B_c3Da6I.js";import{B as r,M as H}from"./index-CV_nyqji.js";import"./index-C3H4z0p8.js";import"./EllipsisOutlined-BDD7BBGF.js";import"./Overflow-C2mG9Ibm.js";import"./useVariants-7fT5Kw8J.js";import"./CheckOutlined-ZzPgNfBr.js";import"./index-CK5a60u3.js";import"./index-ZfKfo4Jn.js";import"./index-DsFhX4f0.js";import"./index-C3t78VW8.js";import"./index-DK7lNpsH.js";import"./SearchOutlined-yRdI2ge9.js";import"./Table-DToRcFpP.js";import"./iconUtil-CXm19lgl.js";import"./index-D6mCrjB3.js";import"./index-DpDQjYUX.js";import"./index-Cltbj2CO.js";import"./index-BJP39Tjo.js";import"./index-D6v2_2dC.js";import"./index-D-ikePUT.js";import"./index-D7qB6B1O.js";import"./html2canvas.esm-CBrSDip1.js";import"./index-aY_swZQh.js";const he=()=>{const{order:a,loading:c}=y(t=>t.order),[f,s]=n.useState(!1),[u,m]=n.useState(),o=C(),p=n.useRef(null),d=({searchText:t,searchedColumn:i})=>{t?b(o,w({[i]:t})):o(l({page:1,limit:localStorage.getItem("pageSize")||10}))},I=[{title:"Mã ĐH",dataIndex:"orderId",width:"7%",...h({dataIndex:"orderId",handleTableChange:d})},{title:"Tên",dataIndex:"name",width:"14%",...h({dataIndex:"name",handleTableChange:d})},{title:"Email",dataIndex:"email",width:"14%",...h({dataIndex:"email",handleTableChange:d})},{title:"Điện thoại",dataIndex:"phone",width:"10%",...h({dataIndex:"phone",handleTableChange:d})},{title:"Ngày đặt",dataIndex:"createdAt",width:"12%",...x({dataIndex:"createdAt"}),render:t=>g(t)},{title:"Ngày thanh toán",dataIndex:"updatedAt",width:"12%",...x({dataIndex:"updatedAt"}),render:t=>g(t)},{title:"Trạng thái",dataIndex:"status",width:"10%",...A("status",[{value:!0,text:"Đã thanh toán"},{value:!1,text:"Chưa thanh toán"}]),render:t=>t===!0?e.jsx("span",{className:"text-success",children:"Đã thanh toán"}):e.jsx("span",{className:"text-danger",children:"Chưa thanh toán"})},{title:e.jsx("div",{className:"flex justify-center",children:"Thông tin"}),dataIndex:"info",width:"8%",render:(t,i)=>e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{type:"primary",ghost:!0,onClick:()=>{s(!0),m(i)},children:"Chi tiết"})})}],j=n.useMemo(()=>{var t;return(t=a==null?void 0:a.newData)==null?void 0:t.map(i=>({...i,key:i._id}))},[a]);return n.useEffect(()=>{c&&o(l({page:1,limit:localStorage.getItem("pageSize")||10}))},[]),e.jsxs(E,{header:e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center",children:e.jsx("h6",{className:"mb-0",children:"ĐƠN HÀNG"})})}),button:e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>{F.delUnPaid().then(t=>{o(l({page:1,limit:localStorage.getItem("pageSize")||10})),T("data","Xóa Đơn Hàng Chưa Thanh Toán Thành Công!",t.message)}).catch(t=>S("data","Không Thể Xóa Đơn Hàng!",t.message))},type:"primary",children:"Xóa đơn hàng chưa thanh toán"}),e.jsx(r,{onClick:()=>v(a,"Order.xlsx"),type:"primary",children:"Xuất file Excel"})]}),children:[e.jsx(N,{dragMode:!1,Api:l,total:a==null?void 0:a.totalItems,loading:c,data:j,columns:I,colEdit:!1}),e.jsx(H,{centered:!0,open:f,onOk:()=>s(!1),onCancel:()=>{s(!1),m()},footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>{s(!1),m()},children:"Hủy"}),e.jsx(r,{type:"primary",onClick:()=>D(p),children:"Xuất file PDF"})]}),width:800,children:e.jsx("div",{ref:p,children:e.jsx(k,{info:u})})})]})};export{he as default};