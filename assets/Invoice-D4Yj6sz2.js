import{j as e}from"./index-DFgtkTYC.js";import{i as n,F as d}from"./Format-C0LvXISn.js";import{T as s,R as r,C as a}from"./index-B38hVekn.js";import{D as t}from"./index-DMsNn1v6.js";const N=({info:l})=>{const m=c=>{let i=0;return c.map(x=>{i+=x.price}),i};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"invoice-wrapper",children:e.jsx("div",{className:"invoice",children:e.jsxs("div",{className:"invoice-container",children:[e.jsxs("div",{className:"invoice-head",children:[e.jsx(s.Title,{type:"warning",level:3,children:"Thông Tin Hóa Đơn"}),e.jsxs(r,{children:[e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Mã Hóa Đơn:"}),e.jsx(s.Text,{className:"!mb-1",children:l.orderId})]})}),e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Trạng Thái:"}),e.jsx(s.Text,{className:"!mb-1",children:l.status===!0?e.jsx(s.Text,{className:"!mb-0",children:"Đã Thanh Toán"}):e.jsx(s.Text,{className:"!mb-0",children:"Chưa Thanh Toán"})})]})}),e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Ngày Đặt Hàng:"}),e.jsx(s.Text,{className:"!mb-1",children:n(l.createdAt)})]})}),e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Ngày Thanh Toán:"}),e.jsx(s.Text,{className:"!mb-1",children:n(l.updatedAt)})]})})]}),e.jsx(t,{}),e.jsx(s.Title,{type:"warning",level:3,children:"Thông Tin Khách Hàng"}),e.jsxs(r,{children:[e.jsx(a,{span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Họ Và Tên:"}),e.jsx(s.Text,{className:"!mb-1",children:l.name})]})}),e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Số Điện Thoại:"}),e.jsx(s.Text,{className:"!mb-1",children:l.phone})]})}),e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Email:"}),e.jsx(s.Text,{className:"!mb-1",children:l.email})]})}),e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Tỉnh/Thành Phố"}),e.jsx(s.Text,{className:"!mb-1",children:l.province})]})}),e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Quận/Huyện"}),e.jsx(s.Text,{className:"!mb-1",children:l.district})]})}),e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Xã/Phường"}),e.jsx(s.Text,{className:"!mb-1",children:l.ward})]})}),e.jsx(a,{md:{span:12},span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Địa Chỉ:"}),e.jsx(s.Text,{className:"!mb-1",children:l.address})]})}),e.jsx(a,{span:24,children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s.Title,{className:"!mb-1",level:5,children:"Ghi Chú:"}),e.jsx(s.Text,{className:"!mb-1",children:l.note})]})})]})]}),e.jsx(t,{}),e.jsx(s.Title,{type:"warning",level:3,children:"Khóa Học Đã Mua"}),e.jsx("div",{className:"overflow-view pt-2",children:e.jsxs("div",{className:"invoice-body",children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"text-bold",children:"Mã Khóa Học"}),e.jsx("td",{className:"text-bold",children:"Tên Khóa Học"}),e.jsx("td",{className:"text-bold",children:"Giá Tiền"})]})}),l.product.map((c,i)=>e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:c.id}),e.jsx("td",{children:c.name}),e.jsx("td",{className:"text-start",children:e.jsx(s.Text,{type:"danger",children:d(c.price)})})]})},i))]}),e.jsx("div",{className:"invoice-body-bottom",children:e.jsxs("div",{className:"invoice-body-info-item",children:[e.jsx("div",{className:"info-item-td text-end text-bold",children:"Thành Tiền:"}),e.jsx(s.Text,{strong:!0,type:"danger",className:"info-item-td text-end",children:d(m(l.product))})]})})]})}),e.jsx("div",{className:"invoice-foot text-center",children:e.jsxs("p",{children:[e.jsx("span",{className:"text-bold text-center",children:"NOTE: "}),"This is computer generated receipt and does not require physical signature."]})}),e.jsx("div",{className:"invoice-foot text-center",children:l.status===!0?e.jsx(s.Title,{level:5,className:"!!mb-0",type:"danger",children:"Đã Thanh Toán"}):e.jsx(s.Title,{level:5,className:"!!mb-0",type:"danger",children:"Chưa Thanh Toán"})})]})})})})};export{N as I};
