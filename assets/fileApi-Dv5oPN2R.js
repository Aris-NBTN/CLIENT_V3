import{cd as o,y as a,I as r,X as i}from"./index-CLgyQ1vx.js";const c=new Date,t=o.create({baseURL:a,timeout:1e4,headers:{"Content-Type":"multipart/form-data"}});t.interceptors.request.use(function(e){const s=localStorage.getItem("token");return s&&(e.headers.Authorization=`Bearer ${s}`),e});t.interceptors.response.use(e=>e.data,e=>(r(c,"Có Lỗi Xảy Ra!",e.response.data.message),Promise.reject(e.response.data)));const n="/v1/file",p=async e=>await t.post(`${n}`,e),u=async e=>await i.post(`${n}/base64`,e),d=async e=>await t.post(`${n}/3d`,e),l=async e=>await t.post(`${n}/video`,e),m={uploadFile:p,fileBase64:u,file3D:d,video:l};export{m as f};
