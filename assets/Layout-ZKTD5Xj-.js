import{r as s,q,s as c,y as w,b3 as k,b4 as I,b5 as R,j as d,I as g,A as O,b6 as W,t as G}from"./index-Bl_pZCeN.js";import{b7 as J}from"./Layout-Cr3VXxUG.js";import{P as N,p as U,b as _,a as z,B as a}from"./index-CLvWn2UW.js";import{p as K,a as Q,S as B}from"./index-BLZGZfSB.js";import"./index-FpgqAsqH.js";import"./EllipsisOutlined-Dv0U7LQh.js";import"./Overflow-B2U5bHyH.js";import"./context-CeT_YlOn.js";import"./index-CZycZjMr.js";import"./index-k6j_HrSw.js";import"./index-Ch5hctbl.js";import"./row-BAzrWk1M.js";import"./index-Cil4O1hR.js";import"./styleChecker-Ck8JMnEb.js";import"./useLocale-BY4459aG.js";import"./TextArea-BanZLPmh.js";import"./index-Cg5YuCgZ.js";import"./useVariants-B1zc-sRz.js";import"./CheckOutlined-BPHqeFCx.js";import"./index-Bev9D8vS.js";import"./PurePanel-ryEM3orR.js";import"./index-Bh9zOY6B.js";import"./SearchOutlined-Bm-v0bMy.js";import"./index-DK56_scK.js";import"./Dropdown-BgYRO9jp.js";import"./index-B65SxrxW.js";import"./fileApi-B1MZT04M.js";const Lt=()=>{var E,v;const[C,j]=s.useState(""),[h,T]=s.useState(!1),f=q(),S=c(t=>t.pluginsScript.pluginsScript),M=c(t=>t.pluginsScript.loading),{plugins:i,loading:b}=c(t=>t.plugins),{pluginsScript:A}=c(t=>t.pluginsScript),D=s.useMemo(()=>{var t;return(t=i==null?void 0:i.newData)==null?void 0:t.map(o=>({id:o.id,src:`${w}/uploads/${o.src}`}))},[i]),$=(t,o)=>{const r=new Date,{html:n,css:l,js:e}=o,y=new DOMParser().parseFromString(n,"text/html"),p=y.querySelector("#Header"),u=y.querySelector("#Footer");let x="",L="";const P=n.match(/<body[^>]*>([\s\S]*?)<\/body>/i);if(P&&P[1].trim()===""&&console.log("không có dữ liệu"),!p){g("Chưa có Header!");return}if(!u){g("Chưa có Footer!");return}p&&(x=`<div class="${p.className}">${p.innerHTML}</div>`),u&&(L=`<div id="Footer">${u.innerHTML}</div>`),O(r,"Đang cập nhật..."),k.putLayout(W,{header:x,footer:L,css:l,js:e,edit:t}).then(()=>{G(r,"Cập nhật thành công")}).catch(H=>{g(H.response.data.message)})},F=t=>{t.loadProjectData(C.edit);const o=["video","map","video","bootstrapIcon","map","model-3D","Masonry","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],r=["gjs-open-import-webpage","open-templates","link-page","export-template"],n=["Extra","Blog","Layout","Short Codes"],{models:l}=t.BlockManager.getCategories();o.forEach(e=>t.BlockManager.remove(e)),r.forEach(e=>{t.Panels.removeButton("options",e)}),l.forEach(e=>{var m;return n.includes((m=e.get)==null?void 0:m.call(e,"id"))&&e.set("open",!1)})};return s.useEffect(()=>{k.getLayoutEdit().then(t=>{j(t[0]),T(!0)})},[]),s.useEffect(()=>{M===!0&&f(I())},[]),s.useEffect(()=>{b===!0&&f(R())},[]),d.jsxs(J,{margin:0,header:"BỐ CỤC WEBSITE",children:[!h&&d.jsx("div",{children:"LOAdding"}),h&&!b&&d.jsx(N,{height:"calc(100vh - 56px)",configGrapeJs:F,scripts:(E=S[0])==null?void 0:E.scripts,styles:(v=S[0])==null?void 0:v.styles,pluginss:D,plugins:[U,_,z,K,Q,a.imageLink,a.header,a.footer,a.container,a.user,B.customType,B.customTypeSelect],canvas:A[0],savePage:$})]})};export{Lt as default};