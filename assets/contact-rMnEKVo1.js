import{C as e}from"./index-_ypI0F_1.js";const t="/v1/contact",o=async s=>await e.get(`${t}/${s.filename}`,s),c=async s=>await e.delete(`${t}/${s}`),a=async s=>await e.put(`${t}`,s),p={get:o,del:c,put:a};export{p as c};