import{u as J,a as K,r as p,c as _,d as x,h as P,b2 as z,b3 as G,j as n,o as H,k as b,p as B,t as O}from"./index-DFgtkTYC.js";import{b7 as U,bb as Q}from"./Layout-CIm6QYZN.js";import{S as V,P as W,p as Y,b as X,a as Z,B as k}from"./index-C3YqwDRX.js";import{p as ss,a as ts,b as as,c as T,B as es,d as os,t as ns}from"./index-CWvfS0Dk.js";import{p as $}from"./index-DpMZEygy.js";import{p as is,a as rs,S as A}from"./index-BLZGZfSB.js";import{m as j}from"./customPageApi-DgbC5V4U.js";import{f as ls}from"./fileApi-XyL6b2Cy.js";import{B as cs}from"./index-DUx-6r-C.js";import"./index-B38hVekn.js";import"./EllipsisOutlined-B53JwfDV.js";import"./Overflow-CMIZo8PN.js";import"./useVariants-Lmi2ebBK.js";import"./CheckOutlined-DAM7Vbmf.js";import"./index-VY5kNFhJ.js";import"./index-DL9K0yEa.js";import"./index-DUmcZH79.js";import"./index-pl73aUh0.js";import"./index-oGcLkKQX.js";import"./SearchOutlined-Dp3Prlso.js";import"./html2canvas.esm-CBrSDip1.js";const Ls=()=>{const o=J(),y=K(),[t,M]=p.useState(""),[d,E]=p.useState(!0),S=_(),{plugins:i,loading:w}=x(s=>s.plugins),{pluginsScript:L,loading:C}=x(s=>s.pluginsScript),D=p.useMemo(()=>{var s;return(s=i==null?void 0:i.newData)==null?void 0:s.map(r=>({id:r.id,src:`${P}/uploads/${r.src}`}))},[i==null?void 0:i.newData]),F=s=>{s.on("component:add",a=>{switch(a.attributes.type){case"Masonry":j.addMasonry({name:o.slug});break}}),s.Panels.addButton("options",[{id:"google-fonts",className:"fa fa-font",attributes:{title:"Cài đặt kiểu chữ"},command:"open-fonts",togglable:!0,visible:!0}]),s.Panels.addButton("options",[{id:"open-link",className:"fa fa-link",attributes:{title:"Public"},command:"open-link",active:!1,togglable:!1}]),s.Commands.add("open-link",{run(a,u){o.slug=="trang-chu"?window.open("/","_blank"):window.open(`/${o.slug}`,"_blank")}});const r=["bootstrapIcon","link","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],l=["open-templates","link-page"],m=["Extra","Blog","Layout","Short Codes"],{models:f}=s.BlockManager.getCategories();r.forEach(a=>s.BlockManager.remove(a)),l.forEach(a=>{s.Panels.removeButton("options",a)}),f.forEach(a=>{var u;return m.includes((u=a.get)==null?void 0:u.call(a,"id"))&&a.set("open",!1)})},N=async(s,r)=>{const l=Date.now();H(l,"Đang cập nhật trang...");const{html:m,css:f,js:a}=r;if(!new DOMParser().parseFromString(m,"text/html").body.innerHTML.trim()){b(l,"Trang không được để trống!");return}const h=new DOMParser().parseFromString(m,"text/html"),q=h.querySelectorAll('img[src^="data:image/"]');for(const c of q){const g=c.getAttribute("src");try{const e=await ls.fileBase64({base64:g});e&&e.file?c.setAttribute("src",`${P}/uploads/${e.file}`):console.warn("Không tìm thấy tệp trong phản hồi:",e)}catch(e){console.error("Lỗi khi chuyển đổi base64:",e)}}const v=h.querySelector('iframe[name="masonry"]');if(v){const g=(await j.getSingleMasonry(o.slug)).img.map((e,I)=>`<div key="${I}" id="${e.idImg}" class="grid-item grid-item--width${e.width}" style="aspect-ratio: ${e.aspectRatio};">
                    <a class="w-full h-full" href="${e.link||"#"}">
                        <img class="w-full h-full" src="${e.imgSrc}" alt="Ảnh mô tả về ${e.imgSrc}" />
                    </a>
                </div>`).join("");v.parentNode.innerHTML=`<div class="grid">${g}</div>`}try{const c={html:h.body.innerHTML,css:f,js:a},g=s;await B.put({id:t._id,content:c,edit:g}),O(l,"Đã cập nhật trang")}catch{b(l,"Cập nhật trang thất bại")}},R=()=>{B.sigEdit(o.slug).then(s=>{M(s),E(!1)}).catch(s=>{b("error",s.message,"Vui lòng thử lại sau!"),y("/admin/pages")})};return p.useEffect(()=>{C===!0&&S(z())},[]),p.useEffect(()=>{w&&S(G())},[]),p.useEffect(()=>{R()},[]),n.jsxs(U,{title:`Trang ${(t==null?void 0:t.name)||""}`,margin:0,header:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs(cs,{onClick:()=>y("/admin/pages"),children:[" ",n.jsx(Q,{size:20})," Trở về"]}),"Tên trang: ",(t==null?void 0:t.name)||""," | Đường dẫn: /",(t==null?void 0:t.slug)||""]}),children:[d&&n.jsx(V,{}),!d&&!w&&n.jsx(n.Fragment,{children:n.jsx(W,{data:(t==null?void 0:t.edit)||"",loadData:d,configGrapeJs:F,height:"calc(100vh - 56px)",slug:o==null?void 0:o.slug,folder:t==null?void 0:t.name,canvas:L[0],pluginss:D,plugins:[Y,X,ss,$,Z,ts,as,T,is,rs,k.model3d,k.imageLink,k.masonry,es,A.customType,A.customTypeSelect,os,ns],pluginsOpts:{[T]:{api_key:"AIzaSyAdJTYSLPlKz4w5Iqyy-JAF2o8uQKd1FKc"},[$]:{options:{extraPlugins:"dialogui,sharedspace,justify,colorbutton,panelbutton,font",language:"vi",toolbarGroups:[{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi","paragraph"]},{name:"links",groups:["links"]},{name:"insert",groups:["insert"]},"/",{name:"styles",groups:["styles"]},{name:"colors",groups:["colors"]},{name:"tools",groups:["tools"]},{name:"others",groups:["others"]}]},position:"center"}},savePage:N})})]})};export{Ls as default};
