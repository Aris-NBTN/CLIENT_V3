import{u as J,a as K,r as p,q as _,s as x,y as P,b5 as z,b6 as G,j as n,A as H,I as b,p as B,t as O}from"./index-CLgyQ1vx.js";import{b7 as U,bc as Q}from"./Layout-Bo8X0zbn.js";import{S as V,P as W,p as Y,b as X,a as Z,B as k}from"./index-De-1qxCF.js";import{p as ss,a as T,b as ts,c as as,d as $,B as os,e as es,t as ns}from"./index-Xczx35Ew.js";import{p as is,a as rs,S as A}from"./index-BLZGZfSB.js";import{m as j}from"./customPageApi-n8PTBsTT.js";import{f as ls}from"./fileApi-Dv5oPN2R.js";import{B as cs}from"./button-CFZW2Fak.js";import"./index-CnibHaQp.js";import"./EllipsisOutlined-gz3vguox.js";import"./Overflow-aWC-KCIQ.js";import"./context-DZ0uDIsf.js";import"./index-DRxWoPIf.js";import"./index-BC037qWw.js";import"./index-DeFNh6Jp.js";import"./row-CbKX7NA9.js";import"./index-ObwxId4A.js";import"./useLocale-WrgrvLJQ.js";import"./TextArea-Bz2hpPvr.js";import"./useVariants-Dd3vmZmf.js";import"./compact-item-DR52_Oht.js";import"./CheckOutlined-DL5js1cp.js";import"./index-BUe_r4_5.js";import"./PurePanel-BuBTzN3G.js";import"./index-wxIFWymk.js";import"./SearchOutlined-DECFkpI7.js";import"./Dropdown-BhJCOC9m.js";import"./index-CL0RwYER.js";import"./html2canvas.esm-CBrSDip1.js";import"./index-DzniCgZh.js";const Ks=()=>{const e=J(),y=K(),[t,M]=p.useState(""),[d,E]=p.useState(!0),S=_(),{plugins:i,loading:w}=x(s=>s.plugins),{pluginsScript:L,loading:C}=x(s=>s.pluginsScript),D=p.useMemo(()=>{var s;return(s=i==null?void 0:i.newData)==null?void 0:s.map(r=>({id:r.id,src:`${P}/uploads/${r.src}`}))},[i==null?void 0:i.newData]),F=s=>{s.on("component:add",a=>{switch(a.attributes.type){case"Masonry":j.addMasonry({name:e.slug});break}}),s.Panels.addButton("options",[{id:"google-fonts",className:"fa fa-font",attributes:{title:"Cài đặt kiểu chữ"},command:"open-fonts",togglable:!0,visible:!0}]),s.Panels.addButton("options",[{id:"open-link",className:"fa fa-link",attributes:{title:"Public"},command:"open-link",active:!1,togglable:!1}]),s.Commands.add("open-link",{run(a,u){e.slug=="trang-chu"?window.open("/","_blank"):window.open(`/${e.slug}`,"_blank")}});const r=["bootstrapIcon","link","quote","link-block","text-basic","text-section","column1","column2","column3","column3-7"],l=["open-templates","link-page"],g=["Extra","Blog","Layout","Short Codes"],{models:f}=s.BlockManager.getCategories();r.forEach(a=>s.BlockManager.remove(a)),l.forEach(a=>{s.Panels.removeButton("options",a)}),f.forEach(a=>{var u;return g.includes((u=a.get)==null?void 0:u.call(a,"id"))&&a.set("open",!1)})},q=async(s,r)=>{const l=Date.now();H(l,"Đang cập nhật trang...");const{html:g,css:f,js:a}=r;if(!new DOMParser().parseFromString(g,"text/html").body.innerHTML.trim()){b(l,"Trang không được để trống!");return}const h=new DOMParser().parseFromString(g,"text/html"),N=h.querySelectorAll('img[src^="data:image/"]');for(const c of N){const m=c.getAttribute("src");try{const o=await ls.fileBase64({base64:m});o&&o.file?c.setAttribute("src",`${P}/uploads/${o.file}`):console.warn("Không tìm thấy tệp trong phản hồi:",o)}catch(o){console.error("Lỗi khi chuyển đổi base64:",o)}}const v=h.querySelector('iframe[name="masonry"]');if(v){const m=(await j.getSingleMasonry(e.slug)).img.map((o,R)=>`<div key="${R}" id="${o.idImg}" class="grid-item grid-item--width${o.width}" style="aspect-ratio: ${o.aspectRatio};">
                    <a class="w-full h-full" href="${o.link||"#"}">
                        <img class="w-full h-full" src="${o.imgSrc}" alt="Ảnh mô tả về ${o.imgSrc}" />
                    </a>
                </div>`).join("");v.parentNode.innerHTML=`<div class="grid">${m}</div>`}try{const c={html:h.body.innerHTML,css:f,js:a},m=s;await B.put({id:t._id,content:c,edit:m}),O(l,"Đã cập nhật trang")}catch{b(l,"Cập nhật trang thất bại")}},I=()=>{B.sigEdit(e.slug).then(s=>{M(s),E(!1)}).catch(s=>{b("error",s.message,"Vui lòng thử lại sau!"),y("/admin/pages")})};return p.useEffect(()=>{C===!0&&S(z())},[]),p.useEffect(()=>{w&&S(G())},[]),p.useEffect(()=>{I()},[]),n.jsxs(U,{title:`Trang ${(t==null?void 0:t.name)||""}`,margin:0,header:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs(cs,{onClick:()=>y("/admin/pages"),children:[" ",n.jsx(Q,{size:20})," Trở về"]}),"Tên trang: ",(t==null?void 0:t.name)||""," | Đường dẫn: /",(t==null?void 0:t.slug)||""]}),children:[d&&n.jsx(V,{}),!d&&!w&&n.jsx(n.Fragment,{children:n.jsx(W,{data:(t==null?void 0:t.edit)||"",loadData:d,configGrapeJs:F,height:"calc(100vh - 56px)",slug:e==null?void 0:e.slug,folder:t==null?void 0:t.name,canvas:L[0],pluginss:D,plugins:[Y,X,ss,T,Z,ts,as,$,is,rs,k.model3d,k.imageLink,k.masonry,os,A.customType,A.customTypeSelect,es,ns],pluginsOpts:{[$]:{api_key:"AIzaSyAdJTYSLPlKz4w5Iqyy-JAF2o8uQKd1FKc"},[T]:{options:{extraPlugins:"dialogui,sharedspace,justify,colorbutton,panelbutton,font",language:"vi",toolbarGroups:[{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi","paragraph"]},{name:"links",groups:["links"]},{name:"insert",groups:["insert"]},"/",{name:"styles",groups:["styles"]},{name:"colors",groups:["colors"]},{name:"tools",groups:["tools"]},{name:"others",groups:["others"]}]},position:"center"}},savePage:q})})]})};export{Ks as default};
