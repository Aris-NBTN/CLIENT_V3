import{d,r as p,j as i}from"./index-xq1IhvnX.js";import{b7 as s}from"./Layout-xZ9rI-qc.js";import{d as l,h as n}from"./Format-BcvZhZH2.js";import{E as h}from"./Table-D8rvhgRH.js";import"./index-fL_rF7-I.js";import"./index-BCPS-Hci.js";import"./useVariants-BIfgDl13.js";import"./EllipsisOutlined-rXpF71Wb.js";import"./Overflow-DfJmp3ND.js";import"./CheckOutlined-ElLJZnRB.js";import"./index-pcS8CXTc.js";import"./index-wfLKZGEA.js";import"./index-xq-K3yHD.js";import"./index-C0JrUhgO.js";import"./index-1JKPf1rL.js";import"./SearchOutlined-BGPSXXyr.js";import"./index-BeHqjPFW.js";import"./Table-idjmAEyf.js";import"./iconUtil-CgqHPw5u.js";import"./index-D4ydBNbd.js";import"./index-M41w23l8.js";import"./index-D5cKzEI1.js";import"./index-i_KdcLVM.js";import"./index-CMG4FALh.js";const R=()=>{const{notification:e,loading:o}=d(t=>t.notification),a=[{title:"Tiêu đề thông báo",dataIndex:"title",width:"25%",editable:!0,ellipsis:{showTitle:!0}},{title:"Nội dung thông báo",dataIndex:"content",width:"25%",editable:!0,ellipsis:{showTitle:!0}},{title:"Ngày tạo",dataIndex:"createdAt",width:"10%",render:t=>l(t)},{title:"Cập nhập",dataIndex:"updatedAt",width:"10%",render:t=>n(t)}],m=p.useMemo(()=>{var t;return(t=e==null?void 0:e.newData)==null?void 0:t.map(r=>({...r,key:r._id}))},[e==null?void 0:e.newData]);return i.jsx(s,{title:"Thông báo",header:"THÔNG BÁO",children:i.jsx(h,{dragMode:!1,loading:o,data:m,columns:a,colEdit:!1,width:"12%"})})};export{R as default};
