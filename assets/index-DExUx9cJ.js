import{r as B,H as Ve,bL as Le,t as re,k as W,o as ye,h as ie,z as Ee,j as A,bm as ce,bl as de}from"./index-_ypI0F_1.js";import{f as be}from"./fileApi-CAiohmdl.js";import{R as me,C as q}from"./index-C3H4z0p8.js";import{S as $}from"./index-CV_nyqji.js";var we={exports:{}},ae={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge;function Te(){if(ge)return ae;ge=1;var e=Ve,r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function u(m,_,S){var t,p={},i=null,h=null;S!==void 0&&(i=""+S),_.key!==void 0&&(i=""+_.key),_.ref!==void 0&&(h=_.ref);for(t in _)n.call(_,t)&&!w.hasOwnProperty(t)&&(p[t]=_[t]);if(m&&m.defaultProps)for(t in _=m.defaultProps,_)p[t]===void 0&&(p[t]=_[t]);return{$$typeof:r,type:m,key:i,ref:h,props:p,_owner:a.current}}return ae.Fragment=o,ae.jsx=u,ae.jsxs=u,ae}we.exports=Te();var F=we.exports;const xe=B.createContext(null),je=({children:e})=>{const[r,o]=B.useState({setEditor:n=>{o(a=>({...a,editor:n}))}});return F.jsx(xe.Provider,{value:r,children:e})},J=()=>{const e=B.useContext(xe);if(!e)throw new Error("useEditorInstance must be used within EditorInstanceProvider");return e},Ce=B.createContext(null),Ae=({children:e})=>{const[r,o]=B.useState(()=>({setRefCanvas(n){o(a=>({...a,refCanvas:n}))},setCustomModal(n){o(a=>({...a,customModal:n}))},setCustomAssets(n){o(a=>({...a,customAssets:n}))},setCustomBlocks(n){o(a=>({...a,customBlocks:n}))},setCustomRte(n){o(a=>({...a,customRte:n}))},setCustomStyles(n){o(a=>({...a,customStyles:n}))},setCustomLayers(n){o(a=>({...a,customLayers:n}))},setCustomSelectors(n){o(a=>({...a,customSelectors:n}))},setCustomTraits(n){o(a=>({...a,customTraits:n}))},setReady(n){o(a=>({...a,ready:n}))}}));return F.jsx(Ce.Provider,{value:r,children:e})},Y=()=>{const e=B.useContext(Ce);if(!e)throw new Error("useEditorOptions must be used within EditorOptionsProvider");return e};function Be(...e){return(Array.isArray(e[0])?e[0]:[...e]).filter(Boolean).join(" ")}function X(e){return typeof e=="function"}function K(){}const ke=e=>typeof e=="string",Re=async e=>{const r=document.createElement("link");r.href=e,r.rel="stylesheet",document.head.appendChild(r)},_e=e=>{const r=ke(e)?{id:e,src:e}:e;return new Promise((o,n)=>{const a=document.createElement("script");if(document.querySelector(`script[src="${r.src}"]`))return o(r.id);a.src=r.src,a.onload=()=>o(r.id),a.onerror=()=>n(r.id),document.head.appendChild(a)})},Oe=e=>{const r=e.map(o=>_e(o));return Promise.allSettled(r)},he=e=>function(){const r=B.useRef(null);return B.useEffect(()=>{const{current:o}=r;o&&(ke(e)?o.innerHTML=e:o.appendChild(e))},[r.current]),F.jsx("div",{ref:r})},fe=new WeakMap;function ee(e){if(!e)return()=>null;const r=fe.get(e);if(r)return r;const o=function({children:n}){return Le.createPortal(n,e)};return fe.set(e,o),o}B.memo(function({children:e}){const{editor:r}=J(),o=Y(),[n,a]=B.useState(!1),[w,u]=B.useState({assets:[],types:[],close:()=>{},select:()=>{},Container:()=>null});return B.useEffect(()=>{if(!r)return;const m=r.Assets.events.custom,_=({open:S,assets:t,types:p,select:i,close:h,container:c})=>{S&&u({assets:t,types:p,select:i,close:h,Container:ee(c)}),a(S)};return r.on(m,_),()=>{r.off(m,_)}},[r]),B.useEffect(()=>o.setCustomAssets(!0),[]),r&&X(e)?e({open:n,...w}):null});B.memo(function({children:e}){const{editor:r}=J(),o=Y(),[n,a]=B.useState(()=>({blocks:[],dragStart:K,dragStop:K,mapCategoryBlocks:new Map,Container:()=>null}));return B.useEffect(()=>{if(!r)return;const w=r.Blocks.events.custom,u=({blocks:m,container:_,dragStart:S,dragStop:t})=>{const p=m.reduce((i,h)=>{const c=h.getCategoryLabel(),d=i.get(c);return d?d.push(h):i.set(c,[h]),i},new Map);a({blocks:m,dragStart:S,dragStop:t,mapCategoryBlocks:p,Container:ee(_)})};return r.on(w,u),r.Blocks.__trgCustom(),()=>{r.off(w,u)}},[r]),B.useEffect(()=>o.setCustomBlocks(!0),[]),r&&X(e)?e(n):null});B.memo(function({children:e}){const{editor:r}=J(),[o,n]=B.useState(()=>({devices:[],selected:"",select:K}));return B.useEffect(()=>{if(!r)return;const{Devices:a}=r,w=a.events.all,u=()=>{var m;n({devices:a.getDevices(),selected:(m=a.getSelected())==null?void 0:m.id,select:_=>a.select(_)})};return r.on(w,u),u(),()=>{r.off(w,u)}},[r]),r&&X(e)?e(o):null});const Pe=e=>!!(e&&!Array.isArray(e)&&typeof e=="object");async function Ie(e){const r=e.map(({id:w,src:u})=>({id:w,src:u})),o=e.reduce((w,u)=>(w[u.id]=u,w),{}),n=[],a=[];return(await Oe(r)).forEach(w=>{w.status==="fulfilled"?n.push(o[w.value]):a.push(o[w.reason])}),{loaded:n,failed:a}}const ze=async e=>{const r=[...e],o={};if(r.length){const n={},a=[];if(r.forEach((w,u)=>{Pe(w)&&(n[w.id]={index:u},a.push(w))}),a.length){const{loaded:w}=await Ie(a);w.forEach(({id:u,options:m})=>{n[u].loaded=!0,o[u]=m||{}})}Object.keys(n).forEach(w=>{const u=n[w];u.loaded?r[u.index]=w:r[u.index]=!1})}return{plugins:r.filter(Boolean),pluginOptions:o}},Ne=B.memo(function({children:e,className:r,style:o,options:n={},plugins:a=[],grapesjs:w,grapesjsCss:u,onEditor:m=K,onReady:_,onUpdate:S,waitReady:t,...p}){const{setEditor:i}=J(),h=Y(),[c,d]=B.useState(!1),f=B.useRef(null);B.useEffect(()=>{if(!h.ready||!f.current)return;const L=f.current,E=h.refCanvas;let l,s={},y=[];const C=H=>{const T={height:"100%",...n,plugins:[...y,...n.plugins||[]],pluginsOpts:{...n.pluginsOpts,...s},modal:{...n.modal,custom:!!h.customModal},assetManager:{...n.assetManager,custom:!!h.customAssets},styleManager:{...n.styleManager,custom:!!h.customStyles},blockManager:{...n.blockManager,custom:!!h.customBlocks},richTextEditor:{...n.richTextEditor,custom:!!h.customRte},layerManager:{...n.layerManager,custom:!!h.customLayers},traitManager:{...n.traitManager,custom:!!h.customTraits},selectorManager:{...n.selectorManager,custom:!!h.customSelectors},container:E||L,customUI:!!E,...E?{panels:{defaults:[]}}:{}};l=H.init(T),i(l),m(l),S&&l.on("update",()=>{S(l.getProjectData(),l)}),l.onReady(()=>{d(!0),_==null||_(l)})};return(async()=>{u&&await Re(u);const H=await ze(a);y=H.plugins,s=H.pluginOptions,typeof w=="string"?(await _e(w),C(window.grapesjs)):C(w)})(),()=>l==null?void 0:l.destroy()},[h.ready]);const g=n.height??"100%",b=n.width??"100%",V=Be("gjs-editor-wrapper",r),v=t&&!c,k=B.useMemo(()=>({...o,height:g,width:b}),[g,b,o]),x=B.useMemo(()=>({...k,...v?{opacity:0,width:0,height:0}:{}}),[k,v]);return F.jsxs(F.Fragment,{children:[t&&!c?F.jsx("div",{className:V,style:k,children:t}):null,F.jsx("div",{...p,ref:f,className:V,style:x,children:e})]})}),De=B.memo(function(){const e=Y();return B.useEffect(()=>e.setReady(!0),[]),F.jsx(F.Fragment,{})}),Ze=B.memo(function({children:e,...r}){return F.jsx(je,{children:F.jsx(Ae,{children:F.jsxs(Ne,{...r,children:[e,F.jsx(De,{})]})})})});B.memo(function({children:e}){const{editor:r}=J(),o=Y(),[n,a]=B.useState(()=>({root:void 0,Container:()=>null}));return B.useEffect(()=>{if(!r)return;const{Layers:w}=r,u=w.events.custom,m=({container:_})=>{a({root:w.getRoot(),Container:ee(_)})};return r.on(u,m),w.__trgCustom({}),()=>{r.off(u,m)}},[r]),B.useEffect(()=>o.setCustomLayers(!0),[]),r&&X(e)?e(n):null});B.memo(function({children:e}){const{editor:r}=J(),o=Y(),[n,a]=B.useState(!1),[w,u]=B.useState({title:F.jsx(F.Fragment,{}),content:F.jsx(F.Fragment,{}),attributes:{},close:K});return B.useEffect(()=>{if(!r)return;const m="modal",_=({open:S,title:t,content:p,close:i,attributes:h})=>{S&&u({title:B.createElement(he(t)),content:B.createElement(he(p)),attributes:h,close:i}),a(S)};return r.on(m,_),()=>{r.off(m,_)}},[r]),B.useEffect(()=>o.setCustomModal(!0),[]),r&&typeof e=="function"?e({open:n,...w}):null});B.memo(function({children:e}){const{editor:r}=J(),[o,n]=B.useState(()=>({pages:[],selected:void 0,select:K,add:K,remove:K}));return B.useEffect(()=>{if(!r)return;const{Pages:a}=r,w=a.events.all,u=()=>{n({pages:a.getAll(),selected:a.getSelected(),select:(...m)=>a.select(...m),add:(...m)=>a.add(...m),remove:(...m)=>a.remove(...m)})};return r.on(w,u),u(),()=>{r.off(w,u)}},[r]),r&&X(e)?e(o):null});B.memo(function({children:e}){const{editor:r}=J(),o=Y(),[n,a]=B.useState(()=>({selectors:[],states:[],selectedState:"",targets:[],addSelector:K,removeSelector:K,setState:K,Container:()=>null}));return B.useEffect(()=>{if(!r)return;const{Selectors:w}=r,u=w.events.custom,m=({container:_})=>{a({selectors:w.getSelected(),states:w.getStates(),selectedState:w.getState(),targets:w.getSelectedTargets().map(S=>S.getSelectorsString()),addSelector:(...S)=>w.addSelected(...S),removeSelector:(...S)=>w.removeSelected(...S),setState:(...S)=>w.setState(...S),Container:ee(_)})};return r.on(u,m),()=>{r.off(u,m)}},[r]),B.useEffect(()=>o.setCustomSelectors(!0),[]),r&&X(e)?e(n):null});B.memo(function({children:e}){const{editor:r}=J(),o=Y(),[n,a]=B.useState(()=>({sectors:[],Container:()=>null}));return B.useEffect(()=>{if(!r)return;const{Styles:w}=r,u=w.events.custom,m=({container:_})=>{a({sectors:w.getSectors({visible:!0}),Container:ee(_)})};return r.on(u,m),()=>{r.off(u,m)}},[r]),B.useEffect(()=>o.setCustomStyles(!0),[]),r&&X(e)?e(n):null});B.memo(function({children:e}){const{editor:r}=J(),o=Y(),[n,a]=B.useState(()=>({traits:[],Container:()=>null}));return B.useEffect(()=>{if(!r)return;const{Traits:w}=r,u=w.events.custom,m=({container:_})=>{a({traits:w.getCurrent(),Container:ee(_)})};return r.on(u,m),w.__trgCustom(),()=>{r.off(u,m)}},[r]),B.useEffect(()=>o.setCustomTraits(!0),[]),r&&X(e)?e(n):null});const Ge=e=>{e.I18n.addMessages({vi:{assetManager:{addButton:"Thêm ảnh",inputPlh:"Nhập link ảnh: http://image.jpg",modalTitle:"Chọn ảnh",uploadTitle:"Kéo thả file vào đây hoặc click để upload"},blockManager:{labels:{column1:"1 Cột",column2:"2 Cột",column3:"3 Cột","column3-7":"2 Cột (1 nhỏ 1 lớn)",image:"Ảnh",text:"Văn bản",link:"Liên kết",video:"Video",map:"Bản đồ"},categories:{Basic:"Khối cơ bản",Extra:"Khối mở rộng",Blog:"Khối Blog",Contact:"Khối liên hệ",Content:"Khối nội dung",CTA:"Khối CTA",Commerce:"Khối thương mại",Features:"Khối tính năng",Footer:"Khối chân trang",Header:"Khối tiêu đề",Gallery:"Khối thư viện","3D Model":"Mô hình 3D",Hero:"Khối Hero",Pricing:"Khối giá",Statistics:"Khối thống kê",Steps:"Khối bước",Team:"Khối nhóm",Testimonials:"Khối chứng nhận",Layout:"Khối bố cục"}},domComponents:{names:{"":"Box",wrapper:"Body",text:"Text",comment:"Bình luận",image:"Hình ảnh",video:"Video",label:"Nhãn",link:"Liên kết",map:"Google Map",tfoot:"Chân bảng biểu",tbody:"Thân bảng biểu",thead:"Đầu bảng biểu",table:"Bảng biểu",Row:"Hàng",Cell:"Cột"}},deviceManager:{device:"",devices:{desktop:"Máy tính",tablet:"Máy tính bảng",mobileLandscape:"Di động nằm ngang",mobilePortrait:"Di động dọc"}},panels:{buttons:{titles:{Preview:"Xem thử",fullscreen:"Toàn màn hình","sw-visibility":"X-ray","export-template":"Xem mã","open-sm":"Trình soạn thảo style","open-tm":"Thiết lập","open-layers":"Trình soạn thảo lớp","open-blocks":"Mở khối"}}},selectorManager:{label:"Classes",selected:"Đã chọn",emptyState:"- Trạng thái -",states:{hover:"Lướt qua",active:"Chạm","nth-of-type(2n)":"Chẵn/Lẻ"}},styleManager:{empty:"Chọn 1 phần tử trước khi sử dụng",layer:"Lớp",fileButton:"Hình ảnh",sectors:{general:"Chung",layout:"Bố cục",typography:"Kiểu chữ",decorations:"Trang trí",extra:"Mở rộng",flex:"Flex",dimension:"Kích thước"},properties:{"text-shadow-h":"X","text-shadow-v":"Y","text-shadow-blur":"Mờ","text-shadow-color":"Màu","box-shadow-h":"X","box-shadow-v":"Y","box-shadow-blur":"Mờ","box-shadow-spread":"Spread","box-shadow-color":"Màu","box-shadow-type":"Loại","border-top-left-radius-sub":"Trên góc trái","border-top-right-radius-sub":"Trên góc phải","border-bottom-right-radius-sub":"Dưới góc phải","border-bottom-left-radius-sub":"Dưới góc trái","transform-rotate-x":"Rotate X","transform-rotate-y":"Rotate Y","transform-rotate-z":"Rotate Z","transform-scale-x":"Scale X","transform-scale-y":"Scale Y","transform-scale-z":"Scale Z","transition-property-sub":"Thuộc tính","transition-duration-sub":"Duration","transition-timing-function-sub":"Timing","background-image-sub":"Hình ảnh","background-repeat-sub":"Lặp lại","background-position-sub":"Vị trí","background-attachment-sub":"Đính kèm","background-size-sub":"Kích thước"}},traitManager:{empty:"Chọn 1 thành phần trước khi sử dụng",label:"Cấu hình",traits:{labels:{id:"Id",alt:"Mô tả",title:"Tiêu đề",href:"Liên kết",address:"Địa chỉ",mapType:"Bản đồ",zoom:"Phóng to",target:"Mở cửa sổ"},options:{target:{false:"Cửa sổ hiện tại",_blank:"Cửa sổ mới"},mapType:{roadMap:"Đường bộ",sateLlite:"Vệ tinh"}}}},storageManager:{recover:"Bạn có muốn khôi phục những thay đổi chưa được lưu?"}}})},Fe=(e,r)=>{const o={id:"1",label:"File 3D"},n={id:"2",label:"Ánh sáng",open:!1},a={id:"3",label:"Bóng đỗ",open:!1},w={id:"4",label:"Tự động xoay",open:!1},u={id:"5",label:"Môi trường",open:!1},m={id:"7",label:"Skybox",open:!1},_={id:"8",label:"Tùy chọn",open:!0},S={id:"9",label:"Camera",open:!1};e.Components.addType("Model 3D",{model:{defaults:{name:"Model 3D",tagName:"model-viewer",droppable:!1,resizable:!0,script:function(){},traits:[{name:"option-file-glb",type:"option-file",category:_},{name:"input-src-glb",type:"input-file",label:"Link file",category:o},{name:"src",type:"input-file-glb",category:o},{label:"Camera",name:"camera-model",type:"camera-model",category:S},{label:"Min FOV",name:"camera-min-fov",type:"camera-min-fov",category:S},{label:"Max FOV",name:"camera-max-fov",type:"camera-max-fov",category:S},{label:"Độ sáng",name:"exposure",type:"range-light",category:n},{name:"input-src-environment",type:"input-src-environment",label:"Link file",category:u},{label:"Môi trường",name:"environment-image",type:"environment",category:u},{name:"add-environment",type:"add-environment",category:u},{label:"Skybox",name:"skybox",type:"skybox",category:m},{label:"Distance",name:"floor-skybox",type:"floor-skybox",category:m},{label:"Cường độ",name:"shadow-intensity",type:"shadow-intensity",category:a},{label:"Độ mềm",name:"shadow-softness",type:"shadow-softness",category:a},{label:"Vị trí",name:"shadow-placement",type:"shadow-placement",category:a},{label:"Góc xoay",name:"rotation-per-second",type:"rotation-per-second",category:w},{label:"Độ trễ",name:"delay-rotate",type:"delay-rotate",category:w}],attributes:{"camera-controls":!0,"touch-action":"pan-y",src:"http://localhost:8082/uploads/3d/file3d/1.glb"},style:{width:"100%",height:"345px",display:"block"}}}}),e.TraitManager.addType("camera-model",{noLabel:!0,createInput({component:t}){const p=document.createElement("div");return p.classList.add("flex","items-center","justify-center"),p.innerHTML=`
      <button id="a">Đặt làm camera mặc định</button>
      `,p.querySelector("#a").addEventListener("click",()=>{const h=t.view.el,c=h.getCameraOrbit();h.getCameraTarget();const d=h.getFieldOfView();t.addAttributes({"camera-orbit":c}),t.addAttributes({"field-of-view":d}),re("Đã đặt làm camera mặc định","Vui lòng lưu trang !")}),p},onEvent({component:t}){}}),e.TraitManager.addType("camera-max-fov",{createInput({component:t}){var h,c;const p=parseInt((c=(h=t.view.el)==null?void 0:h.getAttribute("max-field-of-view"))==null?void 0:c.replace("deg",""))||t.view.el.getFieldOfView().toFixed(0);console.log(p);const i=document.createElement("div");return i.classList.add("flex","items-center","justify-center","flex-col"),i.innerHTML=`
      <input 
        id="fov" 
        type="range" 
        min="0" max="120" step="10" value="${p}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,i},onEvent({component:t}){var i=this.el.querySelector("#fov").value;t.addAttributes({"max-field-of-view":`${i}deg`})}}),e.TraitManager.addType("camera-min-fov",{createInput({component:t}){var c,d,f,g;const p=parseInt((d=(c=t.view.el)==null?void 0:c.getAttribute("max-field-of-view"))==null?void 0:d.replace("deg",""))||60,i=parseInt((g=(f=t.view.el)==null?void 0:f.getAttribute("min-field-of-view"))==null?void 0:g.replace("deg",""))||30,h=document.createElement("div");return h.classList.add("flex","items-center","justify-center","flex-col"),h.innerHTML=`
      <input 
        id="fov" 
        type="range" 
        min="0" max="${p}" step="1" value="${i}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,h},onEvent({component:t}){var i=this.el.querySelector("#fov").value;t.addAttributes({"min-field-of-view":`${i}deg`})}}),e.TraitManager.addType("option-file",{noLabel:!0,createInput({component:t}){const p=document.createElement("div");p.classList.add("flex","items-center","justify-center"),p.innerHTML=`
      <button id="a">Thêm tùy chọn</button>
      `;const i=t.view.el;return i[Object.getOwnPropertySymbols(i).find(c=>c.description==="scene")],p.querySelector("#a").addEventListener("click",()=>{e.DomComponents.addComponent({tagName:"div",classes:["aaa"],components:`
              <style>
            .aaa{
                position: absolute;
                bottom: 20px;
                right: 0;
                display: flex;
            }

            .aaa:hover .main {
                height: auto;
            }

            .main {
                display: flex;
                flex-wrap: wrap;
                width: 14em;
                height: 0px;
                overflow: hidden;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }

            .card {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 60px;
                border-top-left-radius: text10px;
                background: lightgrey;
                transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
                    0.2s background-image ease-in-out;
                background: none;
                border: 1px solid transparent;
                -webkit-backdrop-filter: blur(5px);
            }

            .card img {
                opacity: 0;
                width: 90%;
                height: 90%;
                border-radius: 5px;
                object-fit: cover;
                transition: 0.2s ease-in-out;
            }

            .card .instagram {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #cc39a4;
            }

            .card:nth-child(2) {
                border-radius: 0px;
            }

            .card:nth-child(2) .twitter {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #03a9f4;
            }

            .card:nth-child(3) {
                border-top-right-radius: 10px;
                border-top-left-radius: 0px;
            }

            .card:nth-child(3) .dribble {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #ffb5d2;
            }

            .card:nth-child(4) {
                border-radius: 0px;
            }

            .card:nth-child(4) .codepen {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: black;
            }

            .card:nth-child(5) {
                border-radius: 0px;
            }

            .card:nth-child(5) .uiverse {
                position: absolute;
                margin-left: 0.2em;
                margin-top: 0.2em;
                opacity: 0;
                transition: 0.2s ease-in-out;
            }

            .card:nth-child(6) {
                border-radius: 0px;
            }

            .card:nth-child(6) .discord {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #8c9eff;
            }

            .card:nth-child(7) {
                border-bottom-left-radius: 10px;
                border-top-left-radius: 0px;
            }

            .card:nth-child(7) .github {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: black;
            }

            .card:nth-child(8) {
                border-radius: 0px;
            }

            .card:nth-child(8) .telegram {
                opacity: 0;
                transition: 0.2s ease-in-out;
                fill: #29b6f6;
            }

            .card:nth-child(9) {
                border-bottom-right-radius: 10px;
                border-top-left-radius: 0px;
            }

            .card:nth-child(9) .reddit {
                opacity: 0;
                transition: 0.2s ease-in-out;
            }

            .main:hover {
                width: 14em;
                cursor: pointer;
            }
            .main:hover .card {
                border-radius: 10px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.3);
                background: rgba(255, 255, 255, 0.2);
            }

            .main:hover .card:nth-child(5) {
                border: transparent;
            }

            .main:hover .text {
                opacity: 0;
                z-index: -3;
            }

            .main:hover img {
                opacity: 1;
            }

            .card:nth-child(1):hover {
                background-color: #cc39a4;
            }

            .card:nth-child(2):hover {
                background-color: #03a9f4;
            }

            .card:nth-child(3):hover {
                background-color: #ffb5d2;
            }

            .card:nth-child(4):hover {
                background-color: #1e1f26;
            }
            .card:nth-child(5):hover {
                animation: backgroundIMG 0.1s;
                animation-fill-mode: forwards;
            }

            @keyframes backgroundIMG {
                100% {
                    background-image: linear-gradient(#bf66ff, #6248ff, #00ddeb);
                }
            }

            .card:nth-child(6):hover {
                background-color: #8c9eff;
            }

            .card:nth-child(7):hover {
                background-color: black;
            }

            .card:nth-child(8):hover {
                background-color: #29b6f6;
            }

            .card:nth-child(9):hover {
                background-color: rgb(255, 69, 0);
            }

            .text {
                bottom: 0px;
                width: 100%;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.7em;
                transition: 0.4s ease-in-out;
                text-align: center;
                font-weight: bold;
                letter-spacing: 0.33em;
                z-index: 3;
            }
        </style>

        <style>
            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 11rem;
                overflow: hidden;
                height: 2.5rem;
                background-size: 300% 300%;
                backdrop-filter: blur(1rem);
                border-radius: 5rem;
                transition: 0.5s;
                animation: gradient_301 5s ease infinite;
                border: double 4px transparent;
                background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #FE53BB 45%, #8F51EA 67%, #0044ff 87%);
                background-origin: border-box;
                background-clip: content-box, border-box;
            }

            #container-stars {
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                overflow: hidden;
                transition: 0.5s;
                backdrop-filter: blur(1rem);
                border-radius: 5rem;
            }

            strong {
                z-index: 2;
                font-family: 'Roboto', sans-serif;
                font-size: 12px;
                letter-spacing: 2px;
                color: #FFFFFF;
            }

            #glow {
                position: absolute;
                display: flex;
                width: 12rem;
            }

            .circle {
                width: 100%;
                height: 30px;
                filter: blur(2rem);
                animation: pulse_3011 4s infinite;
                z-index: -1;
            }

            .circle:nth-of-type(1) {
                background: rgba(254, 83, 186, 0.636);
            }

            .circle:nth-of-type(2) {
                background: rgba(142, 81, 234, 0.704);
            }

            .btn:hover #container-stars {
                z-index: 1;
                background-color: #212121;
            }

            .btn:hover {
                transform: scale(1.1)
            }

            .btn:active {
                border: double 4px #FE53BB;
                background-origin: border-box;
                background-clip: content-box, border-box;
                animation: none;
            }

            .btn:active .circle {
                background: #FE53BB;
            }

            #stars {
                position: relative;
                background: transparent;
                width: 200rem;
                height: 200rem;
            }

            #stars::after {
                content: "";
                position: absolute;
                top: -10rem;
                left: -100rem;
                width: 100%;
                height: 100%;
                animation: animStarRotate 90s linear infinite;
            }

            #stars::after {
                background-image: radial-gradient(#ffffff 1px, transparent 1%);
                background-size: 50px 50px;
            }

            #stars::before {
                content: "";
                position: absolute;
                top: 0;
                left: -50%;
                width: 170%;
                height: 500%;
                animation: animStar 60s linear infinite;
            }

            #stars::before {
                background-image: radial-gradient(#ffffff 1px, transparent 1%);
                background-size: 50px 50px;
                opacity: 0.5;
            }

            @keyframes animStar {
                from {
                    transform: translateY(0);
                }

                to {
                    transform: translateY(-135rem);
                }
            }

            @keyframes animStarRotate {
                from {
                    transform: rotate(360deg);
                }

                to {
                    transform: rotate(0);
                }
            }

            @keyframes gradient_301 {
                0% {
                    background-position: 0% 50%;
                }

                50% {
                    background-position: 100% 50%;
                }

                100% {
                    background-position: 0% 50%;
                }
            }

            @keyframes pulse_3011 {
                0% {
                    transform: scale(0.75);
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
                }

                70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
                }

                100% {
                    transform: scale(0.75);
                    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                }
            }
        </style>
              <div class="main">
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/banner-with-blue-orange-balls-generative-al_169016-28604.jpg" alt="">
                    </div>

                    <div class="text">
                        <button class="btn" type="button">
                            <strong>Chân đế giày Okla</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </button>
                    </div>
                </div>
              `})}),p},onEvent({component:t}){}}),e.TraitManager.addType("loader",{createInput(){const t=[{text:"Neutral",value:"neutral"},{text:"Legacy",value:"legacy"},{text:"Spruit Sunrise",value:""},{text:"Creek Regional",value:""}];let p="";t.forEach(h=>{p+=`<option value="${h.value}">${h.text}</option>`});const i=document.createElement("div");return i.innerHTML=`
      <select id="loader">
        ${p}
      </select>
      `,i},onEvent({component:t}){}}),e.TraitManager.addType("add-loader",{noLabel:!0,createInput(){const t=document.createElement("div");return t.innerHTML=`
      <h4 style="text-align: center;">Html</h4>
      <textarea id="codeHtml" name="code" style="height: 70px;">
        <h1>Hello, world!</h1>
        <p>This is a sample HTML code.</p>
      </textarea>

      <h4 style="text-align: center;">Css</h4>
      <textarea id="codeCss" name="code" style="height: 70px;">
        <h1>Hello, world!</h1>
        <p>This is a sample HTML code.</p>
      </textarea>
      `,t},onEvent({component:t}){}}),e.TraitManager.addType("input-src-glb",{createInput({component:t}){const p=t.view.el.getAttribute("src")||"",i=document.createElement("div");return i.innerHTML=`
      <input id="file" type="text" placeholder="Nhập link file glb" value="${p}" />
    `,i},onEvent({component:t}){function p(h){return/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*(\:[0-9]+)?(\/.*)?$/.test(h)}const i=this.el.querySelector("#file");p(i.value)?fetch(i.value,{method:"HEAD"}).then(h=>{h.ok==!0?(t.addAttributes({src:i.value}),re("File đã được cập nhập")):W("File không tồn tại hoặc đã bị xóa !","Vui lòng nhập lại !")}).catch(()=>{W("Có lỗi xảy ra","Vui lòng thử lại !")}):W("Link không hợp lệ","Vui lòng nhập lại !")}}),e.TraitManager.addType("input-file-glb",{noLabel:!0,createInput(){const t=document.createElement("div");return t.innerHTML=`
      <input id="file-glb" type="file" class="input-file" accept=".glb, .gltf"/>
    `,t},onEvent({component:t}){ye("3d","Đang giảm kích thước..");const p=this.el.querySelector("#file-glb");if(p.files[0]){let i=new FormData;i.append("file3d",p.files[0]),be.file3D(i).then(h=>{re("3d","Đã cập nhập file","Vui lòng lưu trang !"),t.addAttributes({src:`${ie}/uploads/3d/${h.file}`})}).catch(()=>W("Có lỗi xảy ra"))}}}),e.TraitManager.addType("range-light",{createInput({component:t}){const p=t.view.el.getAttribute("exposure")||1,i=document.createElement("div");return i.classList.add("flex","items-center","justify-center","flex-col"),i.innerHTML=`
      <input 
        id="exposure" 
        type="range" 
        min="0" max="5" step="0.2" value="${p}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,i},onEvent({component:t}){var i=this.el.querySelector("#exposure").value;t.addAttributes({exposure:i})}}),e.TraitManager.addType("environment",{createInput({component:t}){const p=t.view.el.getAttribute("environment-image")||"neutral",i=document.createElement("div");i.classList.add("flex","items-center","justify-center");const h=[{text:"Neutral",value:"neutral"},{text:"Legacy",value:"legacy"},{text:"Spruit Sunrise",value:"https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.jpg"},{text:"Creek Regional",value:"https://modelviewer.dev/shared-assets/environments/whipple_creek_regional_park_04_1k.hdr"},{text:"Custom",value:"custom",disabled:!0}];let c="";return h.forEach(d=>{c+=`<option value="${d.value}" ${d.value===p?"selected":""} ${d.disabled?"disabled":""}>${d.text}</option>`}),i.innerHTML=`
      <select id="environment">
        ${c}
      </select>
    `,i},onEvent({component:t}){const p=this.el.querySelector("#environment"),i=t.view.el.getAttribute("skybox-image");var h=p.value;i!=null&&t.addAttributes({"skybox-image":h}),(h=="neutral"||h=="legacy")&&t.removeAttributes("skybox-image"),t.addAttributes({"environment-image":h})}}),e.TraitManager.addType("add-environment",{noLabel:!0,createInput(){const t=document.createElement("div");return t.innerHTML=`
        <input id="file-environment" type="file" class="input-file" accept=".png, .jpg"/>
      `,t},onEvent({component:t}){const p=this.el.querySelector("#file-environment"),i=t.view.el.getAttribute("skybox-image");if(p.files[0]){let h=new FormData;h.append("ev",p.files[0]),settingGlbApi.environment(h).then(c=>{i&&(console.log("skyboxValue",i),t.addAttributes({"skybox-image":`${ie}/uploads/3d/environment/${c.link}`})),t.addAttributes({"environment-image":`${ie}/uploads/3d/environment/${c.link}`})})}}}),e.TraitManager.addType("input-src-environment",{createInput({component:t}){const p=t.view.el.getAttribute("environment-image")||"",i=document.createElement("div");return i.innerHTML=`
      <input id="file" type="text" placeholder="Nhập link môi trường" value="${p}" />
    `,i},onEvent({component:t}){function p(h){return/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*(\:[0-9]+)?(\/.*)?$/.test(h)}const i=this.el.querySelector("#file");p(i.value)?fetch(i.value,{method:"HEAD"}).then(h=>{h.ok==!0?(t.addAttributes({"environment-image":i.value}),re("File đã được cập nhập")):W("File không tồn tại hoặc đã bị xóa !","Vui lòng nhập lại !")}).catch(()=>{W("Có lỗi xảy ra","Vui lòng thử lại !")}):W("Link không hợp lệ","Vui lòng nhập lại !")}}),e.TraitManager.addType("skybox",{createInput({component:t}){const p=!!t.view.el.getAttribute("skybox-image"),i=document.createElement("div");i.classList.add("flex","items-center","justify-center");const h=[{text:"Tắt",value:!1},{text:"Bật",value:!0}];let c="";return h.forEach(d=>{c+=`<option value="${d.value}" ${d.value===p?"selected":""}>${d.text}</option>`}),i.innerHTML=`
      <select id="skybox">
        ${c}
      </select>
    `,i},onEvent({component:t}){const p=this.el.querySelector("#skybox"),i=t.view.el.getAttribute("environment-image");var h=p.value;if(i=="neutral"||i=="legacy"){t.removeAttributes("skybox-image"),W("Môi trường mặc định không hỗ trợ skybox !","Vui lòng chọn môi trường khác !");return}h==="true"?t.addAttributes({"skybox-image":i}):t.removeAttributes("skybox-image")}}),e.TraitManager.addType("floor-skybox",{createInput({component:t}){const p=t.view.el.getAttribute("skybox-height")||1,i=document.createElement("div");return i.classList.add("flex","items-center","justify-center","flex-col"),i.innerHTML=`
      <input 
        id="floor-skybox" 
        type="range" 
        min="0" max="500" step="0.5" value="${p}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,i},onEvent({component:t}){var i=this.el.querySelector("#floor-skybox").value;t.addAttributes({"skybox-height":`${parseFloat(i)}m`})}}),e.TraitManager.addType("shadow-intensity",{createInput({component:t}){const p=t.view.el.getAttribute("shadow-intensity")||1,i=document.createElement("div");return i.classList.add("flex","items-center","justify-center","flex-col"),i.innerHTML=`
      <input 
        id="shadow-intensity" 
        type="range" 
        min="0" max="3" step="0.2" value="${p}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,i},onEvent({component:t}){var i=this.el.querySelector("#shadow-intensity").value;t.addAttributes({"shadow-intensity":i})}}),e.TraitManager.addType("shadow-softness",{createInput({component:t}){const p=t.view.el.getAttribute("shadow-softness")||1,i=document.createElement("div");return i.classList.add("flex","items-center","justify-center","flex-col"),i.innerHTML=`
      <input 
        id="shadow-softness" 
        type="range" 
        min="0" max="1" step="0.1" value="${p}"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,i},onEvent({component:t}){var i=this.el.querySelector("#shadow-softness").value;t.addAttributes({"shadow-softness":i})}}),e.TraitManager.addType("shadow-placement",{createInput({component:t}){const p=t.view.el.getAttribute("ar-placement")||"floor",i=document.createElement("div");i.classList.add("flex","items-center","justify-center","flex-col");const h=[{text:"Mặt đất",value:"floor"},{text:"Bức tường",value:"wall"}];let c="";return h.forEach(d=>{c+=`<option value="${d.value}" ${d.value===p?"selected":""} ${d.disabled?"disabled":""}>${d.text}</option>`}),i.innerHTML=`
      <select id="placement">
        ${c}
      </select>
    `,i},onEvent({component:t}){var i=this.el.querySelector("#placement").value;t.addAttributes({"ar-placement":i})}}),e.TraitManager.addType("delay-rotate",{createInput({component:t}){const p=t.view.el.getAttribute("auto-rotate-delay")||3e3,i=document.createElement("div");return i.classList.add("flex","items-center","justify-center","flex-col"),i.innerHTML=`
      <input 
        id="rotateDelay" 
        type="range" 
        min="0" max="5000" step="500" value="${p}"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,i},onEvent({component:t}){const p=!!t.view.el.getAttribute("auto-rotate");var h=this.el.querySelector("#rotateDelay").value;p||t.addAttributes({"auto-rotate":!0}),t.addAttributes({"auto-rotate-delay":h})}}),e.TraitManager.addType("rotation-per-second",{createInput({component:t}){const p=t.view.el.getAttribute("rotation-per-second")||30,i=document.createElement("div");return i.classList.add("flex","items-center","justify-center","flex-col"),i.innerHTML=`
      <input 
        id="rotation-per-second" 
        type="range" 
        min="0" max="180" step="10" value="${p}"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    `,i},onEvent({component:t}){const p=!!t.view.el.getAttribute("auto-rotate");var h=this.el.querySelector("#rotation-per-second").value;p||t.addAttributes({"auto-rotate":!0}),t.addAttributes({"rotation-per-second":`${h}deg`})}}),e.Blocks.add("model-3D",{label:"3D",media:`<svg width="100%" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19.3297 5.68003L13.0597 2.30003C12.3997 1.94003 11.5997 1.94003 10.9397 2.30003L4.66969 5.68003C4.20969 5.93003 3.92969 6.41003 3.92969 6.96003C3.92969 7.50003 4.20969 7.99003 4.66969 8.24003L10.9397 11.62C11.2697 11.8 11.6397 11.89 11.9997 11.89C12.3597 11.89 12.7297 11.8 13.0597 11.62L19.3297 8.24003C19.7897 7.99003 20.0697 7.51003 20.0697 6.96003C20.0697 6.41003 19.7897 5.93003 19.3297 5.68003Z" fill="currentColor"></path> 
        <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill="currentColor"></path> 
        <path d="M21.3207 9.9299C20.8907 9.6699 20.3707 9.6399 19.9307 9.8699L14.1007 12.7899C13.2507 13.2199 12.7207 14.0699 12.7207 15.0299V20.5399C12.7207 21.0399 12.9707 21.4999 13.4007 21.7599C13.6307 21.8999 13.8907 21.9699 14.1507 21.9699C14.3707 21.9699 14.5907 21.9199 14.7907 21.8199L20.6207 18.8999C21.4707 18.4699 22.0007 17.6199 22.0007 16.6599V11.1499C22.0007 10.6499 21.7507 10.1999 21.3207 9.9299Z" fill="currentColor"></path>
       </svg>`,content:{type:"Model 3D"},category:"Basic"})},$e=e=>{e.Blocks.add("block-link",{label:"Link Block",media:`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM9.198 7.25H9.30203C10.2005 7.24997 10.9497 7.24995 11.5445 7.32991C12.1723 7.41432 12.7391 7.59999 13.1945 8.05546C13.65 8.51093 13.8357 9.07773 13.9201 9.70552C14.0001 10.3003 14 11.0495 14 11.948L14 12C14 12.4142 13.6642 12.75 13.25 12.75C12.8358 12.75 12.5 12.4142 12.5 12C12.5 11.036 12.4984 10.3884 12.4335 9.9054C12.3714 9.44393 12.2642 9.24644 12.1339 9.11612C12.0036 8.9858 11.8061 8.87858 11.3446 8.81654C10.8616 8.7516 10.214 8.75 9.25 8.75C8.28599 8.75 7.63843 8.7516 7.15539 8.81654C6.69393 8.87858 6.49644 8.9858 6.36612 9.11612C6.2358 9.24644 6.12858 9.44393 6.06654 9.9054C6.0016 10.3884 6 11.036 6 12C6 12.964 6.0016 13.6116 6.06654 14.0946C6.12858 14.5561 6.2358 14.7536 6.36612 14.8839C6.49644 15.0142 6.69393 15.1214 7.15539 15.1835C7.63843 15.2484 8.28599 15.25 9.25 15.25C9.66422 15.25 10 15.5858 10 16C10 16.4142 9.66422 16.75 9.25 16.75L9.19798 16.75C8.29951 16.75 7.5503 16.7501 6.95552 16.6701C6.32773 16.5857 5.76093 16.4 5.30546 15.9445C4.84999 15.4891 4.66432 14.9223 4.57991 14.2945C4.49995 13.6997 4.49997 12.9505 4.5 12.052V11.948C4.49997 11.0495 4.49995 10.3003 4.57991 9.70552C4.66432 9.07773 4.84999 8.51093 5.30546 8.05546C5.76093 7.59999 6.32773 7.41432 6.95552 7.32991C7.55029 7.24995 8.29954 7.24997 9.198 7.25ZM16.8446 8.81654C16.3616 8.7516 15.714 8.75 14.75 8.75C14.3358 8.75 14 8.41422 14 8C14 7.58579 14.3358 7.25 14.75 7.25L14.802 7.25C15.7005 7.24997 16.4497 7.24995 17.0445 7.32991C17.6723 7.41432 18.2391 7.59999 18.6945 8.05546C19.15 8.51093 19.3357 9.07773 19.4201 9.70552C19.5001 10.3003 19.5 11.0495 19.5 11.9479V12.052C19.5 12.9505 19.5001 13.6997 19.4201 14.2945C19.3357 14.9223 19.15 15.4891 18.6945 15.9445C18.2391 16.4 17.6723 16.5857 17.0445 16.6701C16.4497 16.7501 15.7005 16.75 14.802 16.75H14.698C13.7995 16.75 13.0503 16.7501 12.4555 16.6701C11.8277 16.5857 11.2609 16.4 10.8055 15.9445C10.35 15.4891 10.1643 14.9223 10.0799 14.2945C9.99995 13.6997 9.99997 12.9505 10 12.052L10 12C10 11.5858 10.3358 11.25 10.75 11.25C11.1642 11.25 11.5 11.5858 11.5 12C11.5 12.964 11.5016 13.6116 11.5665 14.0946C11.6286 14.5561 11.7358 14.7536 11.8661 14.8839C11.9964 15.0142 12.1939 15.1214 12.6554 15.1835C13.1384 15.2484 13.786 15.25 14.75 15.25C15.714 15.25 16.3616 15.2484 16.8446 15.1835C17.3061 15.1214 17.5036 15.0142 17.6339 14.8839C17.7642 14.7536 17.8714 14.5561 17.9335 14.0946C17.9984 13.6116 18 12.964 18 12C18 11.036 17.9984 10.3884 17.9335 9.9054C17.8714 9.44393 17.7642 9.24644 17.6339 9.11612C17.5036 8.9858 17.3061 8.87858 16.8446 8.81654Z"></path> </g></svg>
    `,content:{type:"block-link"},category:"Basic"}),e.Components.addType("block-link",{model:{defaults:{name:"Link Block",tagName:"a",resizable:!0,traits:[{type:"title-link",name:"title-link",label:"title"},{type:"href-next",name:"href",label:"New href"},{type:"target-link",name:"target-link",label:"Mở cửa sổ"}],style:{width:"100%",height:"345px",display:"block",cursor:"pointer"}}}}),e.TraitManager.addType("target-link",{createInput({component:r}){const o=r.view.el.getAttribute("target")||"",n=document.createElement("div");return n.innerHTML=`
        <select id="target-link">
          <option value="" ${o===""?"selected":""}>Cửa sổ trang hiện tại</option>
          <option value="_blank" ${o==="_blank"?"selected":""}>Cửa sổ trang mới</option>
        </select>
      `,n},onEvent({component:r}){const o=this.el.querySelector("#target-link");o.value==="_blank"?(r.addAttributes({target:o.value}),console.log(r.view.el)):r.removeAttributes("target")}}),e.TraitManager.addType("title-link",{createInput({component:r}){const o=r.view.el.getAttribute("title")||"",n=document.createElement("div");return n.innerHTML=`
        <input id="title" type="text" placeholder="Nhập tiêu đề" value="${o}" />
      `,n},onEvent({component:r}){const o=this.el.querySelector("#title");r.addAttributes({title:o.value})}}),e.TraitManager.addType("href-next-link",{createInput({component:r}){const o=r.view.el.getAttribute("href")||"",n=document.createElement("div");return n.innerHTML=`
        <input id="link" type="text" value="${o}" />
      `,n},onEvent({component:r}){const o=this.el.querySelector("#link");r.addAttributes({href:o.value})}})},qe=e=>{e.Components.addType("Slider",{model:{defaults:{name:"Slider",resizable:!0,droppable:!1,copyable:!1,traits:[{name:"navigation",type:"select",options:[{id:"no",label:"Không có"},{id:"yes",label:"Có"}],default:"yes",placeholder:"Chọn ẩn/hiển nút điều hướng",changeProp:!0}],navigation:"yes","script-props":["navigation"],script:function(r){let o=null;function n(a){o&&o.destroy(!0,!0);const w={pagination:{el:".swiper-pagination",dynamicBullets:!0}};a==="yes"&&(w.navigation={nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),o=new Swiper(".mySwiper",w)}n(r.navigation)},components:`
        <style>
          .swiper {
            width: 100%;
            height: 100%;
          }

          .swiper-slide {
            text-align: center;
             overflow: hidden;
          }
        </style>

        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
          </div>

          <div class="button-swiper swiper-button-next"></div>
          <div class="button-swiper swiper-button-prev"></div>

          <div class="swiper-pagination"></div>
        </div>
        `,style:{height:"80vh"}}}}),e.Blocks.add("Slider",{label:"Slider",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,content:{type:"Slider"},category:"Basic"})},Ke=(e,r)=>{e.Components.addType("Masonry",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){var o=document.querySelector(".grid");new Packery(o,{itemSelector:".grid-item"})},content:`
         <iframe
            name="masonry"
            style="width: 100%; height: 100dvh;"
            src="${Ee}/admin/page-custom/masonry/${r}" 
            title="ARIS">
          </iframe>
        `}}}),e.Blocks.add("Masonry",{label:"Masonry",media:`
    <svg width="201px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M22 20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16zm-11-5H4v4h7v-4zm9-4h-7v8h7v-8zm-9-6H4v8h7V5zm9 0h-7v4h7V5z"></path> </g> </g></svg>
    `,content:{type:"Masonry"},category:"Basic"})},Ue=e=>{e.Components.addType("HeaderLayout",{model:{defaults:{droppable:!1,copyable:!1,resizable:!0,script:function(){((n,a)=>{const w=document.getElementById(n),u=document.getElementById(a);w.addEventListener("click",()=>{u.classList.toggle("show-menu"),w.classList.toggle("show-icon")})})("nav-toggle-2","nav-menu-2")},components:`
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");
          root {
            --header-height: 3.5rem;
            --black-color: hsl(220, 24%, 12%);
            --black-color-light: hsl(220, 24%, 15%);
            --black-color-lighten: hsl(220, 20%, 18%);
            --white-color: #fff;
            --body-color: hsl(220, 100%, 97%);
            --body-font: "Montserrat", sans-serif;
            --normal-font-size: .938rem;
            --font-regular: 400;
            --font-semi-bold: 600;
            --z-tooltip: 10;
            --z-fixed: 100;
        }

        @media screen and (min-width: 1024px) {
            :root {
                --normal-font-size: 1rem;
            }
        }

        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }

        body {
            font-family: var(--body-font);
            font-size: var(--normal-font-size);
            background-color: var(--body-color);
        }

        ul {
            list-style: none;
            /* Color highlighting when pressed on mobile devices */
            /*-webkit-tap-highlight-color: transparent;*/
        }

        a {
            text-decoration: none;
        }

        .container {
            max-width: 1120px;
            margin-inline: 1.5rem;
        }

        .headerr {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: var(--black-color);
            box-shadow: 0 2px 16px hsla(220, 32%, 8%, .3);
            z-index: var(--z-fixed);
        }

        .nav__logo,
        .nav__burger,
        .nav__close {
            color: var(--white-color);
        }

        .nav__data {
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav__logo {
            display: inline-flex;
            align-items: center;
            column-gap: .25rem;
            font-weight: var(--font-semi-bold);
            /* Color highlighting when pressed on mobile devices */
            /*-webkit-tap-highlight-color: transparent;*/
        }

        .nav__logo i {
            font-weight: initial;
            font-size: 1.25rem;
        }

        .nav__toggle {
            position: relative;
            width: 32px;
            height: 32px;
        }

        .nav__burger,
        .nav__close {
            position: absolute;
            width: max-content;
            height: max-content;
            inset: 0;
            margin: auto;
            font-size: 1.25rem;
            cursor: pointer;
            transition: opacity .1s, transform .4s;
        }

        .nav__close {
            opacity: 0;
        }

        @media screen and (max-width: 1118px) {}

        .nav__link {
            color: var(--white-color);
            background-color: var(--black-color);
            font-weight: var(--font-semi-bold);
            padding: 1.25rem 1.5rem;
            display: flex;
            height: 100%;
            column-gap: .25rem;
            justify-content: space-between;
            align-items: center;
            transition: background-color .3s;
        }

        .nav__link:hover {
            background-color: var(--black-color-light);
        }

        /* Show menu */
        .show-menu {
            opacity: 1;
            top: 3.5rem;
            pointer-events: initial;
        }

        /* Show icon */
        .show-icon .nav__burger {
            opacity: 0;
            transform: rotate(90deg);
        }

        .show-icon .nav__close {
            opacity: 1;
            transform: rotate(90deg);
        }

        /*=============== DROPDOWN ===============*/
        .dropdown__item {
            cursor: pointer;
        }

       .dropdown__arrow, .submenu-icon  {
            font-size: 1.25rem;
            font-weight: initial;
            transition: transform .4s;
        }

        .dropdown__link{
          background-color: #0a0a0a78;
          border-bottom: 1px solid #fff;
        }

        .dropdown__link,
        .dropdown__sublink {
            padding: 1.25rem;
            color: var(--white-color);
            background-color: var(--black-color-light);
            display: flex;
            align-items: center;
            column-gap: .5rem;
            font-weight: var(--font-semi-bold);
            transition: background-color .3s;
        }

        .dropdown__link i,
        .dropdown__sublink i {
            font-size: 1.25rem;
            font-weight: initial;
        }

        .dropdown__link:hover,
        .dropdown__sublink:hover {
            background-color: var(--black-color);
        }

        .dropdown__menu,
        .dropdown__submenu {
            max-height: 0;
            overflow: hidden;
            transition: max-height .4s ease-out;
        }

        /* Show dropdown menu & submenu */
        .dropdown__item:hover .dropdown__menu,
        .dropdown__subitem:hover>.dropdown__submenu {
            max-height: 1000px;
            transition: max-height .4s ease-in;
        }

        /* Rotate dropdown icon */
        .dropdown__item:hover .dropdown__arrow {
            transform: rotate(180deg);
        }

        /*=============== DROPDOWN SUBMENU ===============*/
        .dropdown__add {
            margin-left: auto;
        }

        .dropdown__sublink {
            background-color: var(--black-color-lighten);
        }

        @media screen and (min-width: 1118px) {
            .nav {
                height: calc(var(--header-height) + 2rem);
                width: 100%;
                display: flex;
                justify-content: center;
            }

            .nav__list {
                height: 100%;
                display: flex;
            }

            .nav__link:hover {
                background-color: transparent;
            }

            .dropdown__item,
            .dropdown__subitem {
                position: relative;
            }

            .dropdown__menu,
            .dropdown__submenu {
                max-height: initial;
                overflow: initial;
                position: absolute;
                left: 0;
                top: 6rem;
                opacity: 0;
                pointer-events: none;
                transition: opacity .3s, top .3s;
            }


            .dropdown__subitem .dropdown__link {
                padding-inline: 1rem;
            }

            .dropdown__submenu {
                position: absolute;
                left: 100%;
                top: .5rem;
            }

            /* Show dropdown menu */
            .dropdown__item:hover .dropdown__menu {
                opacity: 1;
                top: 5.5rem;
                pointer-events: initial;
                transition: top .3s;
            }

            /* Show dropdown submenu */
            .dropdown__subitem:hover .dropdown__submenu {
              opacity: 1;
              top: 0;
              pointer-events: initial;
              transition: top .3s;
            }

            .dropdown__link:hover .submenu-icon {
              transform: rotate(90deg);
            }
        }
    </style>

    <header class="headerr">
        <nav class="nav">
            <div class="nav__data">
              <a href="#" class="nav__logo">
                <i class="ri-planet-line"></i> Company
              </a>

              <div class="nav__toggle" id="nav-toggle">
                <i class="ri-menu-line nav__burger"></i>
                <i class="ri-close-line nav__close"></i>
              </div>
            </div>

            <div class="nav__menu" id="nav-menu">
              <ul class="nav__list">
                <li class="dropdown__item menu-dropdown">
                  <div class="nav__link">
                    <h4 class="menu-text">ABOUT US</h4>
                    <ul class="dropdown__menu dropdown-aris">
                    </ul>
                  </div>
                </li>

                <li class="dropdown__item menu-dropdown">
                    <div class="nav__link">
                        <h4 class="menu-text">COURSES</h4>
                        <div class="dropdown__arrow">
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <ul class="dropdown__menu dropdown-aris">
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                  <i class="ri-bar-chart-line"></i>
                                  <h4 class="menu-text">LOWPOLY HANDPAINTED</h4>
                                  <ul class="dropdown__submenu dropdown-aris">
                                  </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">MODELING HARD SURFACE</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">MODELING CHARACTER</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">CREATURE DESIGN</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="dropdown__item menu-dropdown">
                    <div class="nav__link">
                        <h4 class="menu-text">STUDENT WORKS</h4>
                        <div class="dropdown__arrow">
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <ul class="dropdown__menu dropdown-aris">
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">ALL PROJECTS</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">ENVIRONMENT</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">HARD SURFACE</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">CHARACTER</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">PORTRAIT</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">CREATURE DESIGN ZBRUSH</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="dropdown__item menu-dropdown">
                    <div class="nav__link">
                        <h4 class="menu-text">TUTORIALS</h4>
                        <div class="dropdown__arrow">
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <ul class="dropdown__menu dropdown-aris">
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">All Tutorials</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    <i class="ri-bar-chart-line"></i>
                                    <h4 class="menu-text">Making Of</h4>
                                    <ul class="dropdown__submenu dropdown-aris">
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="dropdown__item menu-dropdown">
                    <div class="nav__link">
                        <h4 class="menu-text">CONTACT US</h4>
                        <ul class="dropdown__menu dropdown-aris">
                        </ul>
                    </div>
                </li>
            </ul>
            </div>
        </nav>
    </header>
        `}}}),e.Blocks.add("HeaderLayout",{label:"Header",title:"Header",media:`
        <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m14.4978951 12.4978973-.0105089-9.99999996c-.0011648-1.10374784-.8962548-1.99789734-2-1.99789734h-9.99999995c-1.0543629 0-1.91816623.81587779-1.99451537 1.85073766l-.00548463.151365.0105133 10.00000004c.0011604 1.1037478.89625045 1.9978973 1.99999889 1.9978973h9.99999776c1.0543618 0 1.9181652-.8158778 1.9945143-1.8507377z"></path> <path d="m4.5 4.5v9.817"></path> <path d="m7-2v14" transform="matrix(0 1 -1 0 12.5 -2.5)"></path> </g> </g></svg>
      `,content:{type:"HeaderLayout"},category:"Layout"}),e.DomComponents.addType("link",{model:{defaults:{traits:[{type:"title-link",name:"title-link",label:"title"},{type:"href-next",name:"href",label:"New href"},{type:"href-next-link",name:"href-link",label:"Link file"},{type:"target-link",name:"target-link",label:"Mở cửa sổ"}]}}}),e.TraitManager.addType("target-link",{createInput({component:o}){const n=o.view.el.getAttribute("target")||"",a=document.createElement("div");return a.innerHTML=`
        <select id="target-link">
          <option value="" ${n===""?"selected":""}>Cửa sổ trang hiện tại</option>
          <option value="_blank" ${n==="_blank"?"selected":""}>Cửa sổ trang mới</option>
        </select>
      `,a},onEvent({component:o}){const n=this.el.querySelector("#target-link");n.value==="_blank"?(o.addAttributes({target:n.value}),console.log(o.view.el)):o.removeAttributes("target")}}),e.TraitManager.addType("title-link",{createInput({component:o}){const n=o.view.el.getAttribute("title")||"",a=document.createElement("div");return a.innerHTML=`
        <input id="title" type="text" placeholder="Nhập tiêu đề" value="${n}" />
      `,a},onEvent({component:o}){const n=this.el.querySelector("#title");o.addAttributes({title:n.value})}}),e.TraitManager.addType("href-next-link",{createInput({component:o}){const n=o.view.el.getAttribute("href")||"",a=document.createElement("div");return a.innerHTML=`
        <input id="link" type="text" value="${n}" />
      `,a},onEvent({component:o}){const n=this.el.querySelector("#link");o.addAttributes({href:n.value})}}),e.Commands.add("addMenu",{run(o){const n=o.getSelected();if(n){const a=n.find(".nav__list")[0];if(a){const w=o.DomComponents.addComponent({tagName:"li",classes:["dropdown__item","menu-dropdown"],components:`
            <div class="nav__link">
              <h4 class="menu-text">New</h4> 
              <ul class="dropdown__menu"></ul>
            </div>
            `});a.append(w)}}}}),e.Commands.add("addNavLink",{run(o){var m,_;const n=o.getSelected(),a=n.find(".dropdown__menu")[0],w=(_=(m=n==null?void 0:n.view)==null?void 0:m.el)==null?void 0:_.querySelector(".dropdown__arrow"),u=()=>{const S=o.DomComponents.addComponent({tagName:"li",classes:["dropdown__subitem"],components:`
          <div class="dropdown__link">
            <h4 class="menu-text">Items</h4> 
              <ul class="dropdown__submenu dropdown-aris">
            </ul>
          </div>
          `});a.append(S)};if(w==null){const S=o.DomComponents.addComponent({tagName:"div",classes:["dropdown__arrow"],components:'<i class="ri-arrow-down-s-line"></i>'});u(),n.append(S)}else u()}}),e.Commands.add("addDropDownLink",{run(o){const n=o.getSelected(),a=n.find(".dropdown__submenu")[0],w=a.view.el.querySelectorAll("li").length,u=()=>{const m=o.DomComponents.addComponent({tagName:"li",components:`
            <a href="#" class="dropdown__sublink">
              <i class="ri-file-list-line"></i> 
              <h4 class="menu-text">Items</h4>
            </a>
          `});a.append(m)};if(w==0){console.log("countLi",w);const m=o.DomComponents.addComponent({tagName:"div",classes:["submenu-icon"],components:`
            <i class="ri-add-line dropdown__add"></i>
          `});n.append(m),u()}else u()}}),e.Commands.add("delMenu",{run(o){var u;const n=o.getSelected().view.el,a=(u=n==null?void 0:n.closest("li.dropdown__item"))==null?void 0:u.querySelector("ul.dropdown__menu"),w=o.getSelected();if(w){const m=w.parent();console.log(m.parent().parent()),m&&(m.remove(w),a&&(a.style.opacity="",a.style.top=""))}}}),e.Commands.add("del-sub-menu",{run(o){var m,_;const n=o.getSelected().view.el,a=o.getSelected(),w=(m=n==null?void 0:n.closest("li.dropdown__item"))==null?void 0:m.querySelector("ul.dropdown__menu"),u=(_=n==null?void 0:n.closest("li.dropdown__subitem"))==null?void 0:_.querySelector("ul.dropdown__submenu");if(a){const S=a.parent();S&&(S.remove(a),u.style.opacity="",u.style.top="",w.style.opacity="",w.style.top="")}}}),e.Commands.add("del-menu-cha",{run(o){const n=o.getSelected();if(n){const a=n.parent();console.log(a),a&&a.remove(n)}}});const r=(o,n,a,w)=>{var f,g;const u=o.view.el,m=o.get("toolbar"),_=u.classList[0],S=m.some(b=>b.id==="new-menu"),t=m.some(b=>b.id==="new-con"),p=m.some(b=>b.id==="del-menu"),i=m.some(b=>b.id==="del-menu-cha"),h=(f=u==null?void 0:u.closest("li.dropdown__item"))==null?void 0:f.querySelector("ul.dropdown__menu"),c=(g=u==null?void 0:u.closest("li.dropdown__subitem"))==null?void 0:g.querySelector("ul.dropdown__submenu"),d=m.filter(b=>b.command!=="tlb-delete"&&b.command!=="tlb-clone"&&b.command!=="tlb-move");switch(_){case"dropdown__sublink":if(!S){const b={label:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',id:"del-sub-menu",command:"del-sub-menu"};d.push(b),o.set("toolbar",d)}break;case"nav__link":if(!i){const b={label:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',id:"del-menu-cha",command:"del-menu-cha"};d.push(b)}if(!S){const b={label:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2zm-7 3v2H3v-2h8zm10-7v2H3v-2h18zm0-7v2H3V4h18z"></path> </g> </g></svg>',id:"new-menu",command:"addNavLink"};d.push(b)}o.set("toolbar",d);break;case"dropdown__link":if(!p){const b={label:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',id:"del-menu",command:"delMenu"};d.push(b)}if(!t){const b={label:'<svg fill="#000000" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 3C.9 3 0 3.9 0 5v2c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 1h21c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H2c-.563 0-1-.437-1-1V5c0-.563.437-1 1-1zm0 17.5v2c0 .262.238.5.5.5h6.813l-1.157 1.125c-.48.497.28 1.157.688.72l2-2c.193-.187.193-.534 0-.72l-2-2c-.397-.397-1.14.268-.688.72L9.312 23H3v-1.5c0-.665-1-.644-1 0zm14-.5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1h12c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H16c-.563 0-1-.437-1-1v-2c0-.563.437-1 1-1zM2 12c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h21c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1h21c.563 0 1 .437 1 1v2c0 .563-.437 1-1 1H2c-.563 0-1-.437-1-1v-2c0-.563.437-1 1-1z"></path></g></svg>',id:"new-con",command:"addDropDownLink"};d.push(b)}o.set("toolbar",d);break;case"nav":if(!t){const b={label:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>',id:"new-menu",command:"addMenu"};d.push(b)}o.set("toolbar",d);break}h&&(h.style.opacity=n,h.style.top=a),c&&(c.style.opacity=n,c.style.top=w)};e.on("component:selected",o=>{r(o,"1","60px","0")}),e.on("component:deselected",o=>{r(o,"","","0")})},We=e=>{e.Components.addType("FooterLayout",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){},components:`
                <div class="mx-auto w-full max-w-screen-xl" style="height: 100%">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
        `,style:{width:"100%",height:"100%",overflow:"hidden"}}}}),e.Blocks.add("FooterLayout",{label:"Footer",media:`
        <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m14.4978951 12.4978973-.0105089-9.99999996c-.0011648-1.10374784-.8962548-1.99789734-2-1.99789734h-9.99999995c-1.0543629 0-1.91816623.81587779-1.99451537 1.85073766l-.00548463.151365.0105133 10.00000004c.0011604 1.1037478.89625045 1.9978973 1.99999889 1.9978973h9.99999776c1.0543618 0 1.9181652-.8158778 1.9945143-1.8507377z"></path> <path d="m4.5 4.5v9.817"></path> <path d="m7-2v14" transform="matrix(0 1 -1 0 12.5 -2.5)"></path> </g> </g></svg>
        `,content:{type:"FooterLayout"},category:"Layout"})},Je=e=>{e.Components.addType("User",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,components:`
                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                `,style:{width:"40px"}}}}),e.Blocks.add("User",{label:"User",media:`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        `,content:{type:"User"},category:"Layout"})},Ye=e=>{infoApi.allInfo().then(r=>{let o="";r.social.forEach(n=>{o+=`
      <a class="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 gap-2">
      ${n.Icon}
      </a>
      `}),e.Components.addType("Social",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,components:o,style:{display:"flex"}}}}),e.Blocks.add("Social",{label:"Social",media:`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H1V18C1 16.1362 2.27477 14.5701 4 14.126M6 10.8293C4.83481 10.4175 4 9.30621 4 7.99999C4 6.69378 4.83481 5.58254 6 5.1707M21 19H23V18C23 16.1362 21.7252 14.5701 20 14.126M18 5.1707C19.1652 5.58254 20 6.69378 20 7.99999C20 9.30621 19.1652 10.4175 18 10.8293M10 14H14C16.2091 14 18 15.7909 18 18V19H6V18C6 15.7909 7.79086 14 10 14ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      `,content:{type:"Social"},category:"Layout"})}).catch(r=>{console.error("Error fetching data from API:",r)})},Xe=e=>{e.Components.addType("Container",{model:{defaults:{resizable:!0,components:`
          <div class="md:container md:mx-auto">
          </div>  
        `,style:{width:"100%",height:"75px","max-width":"100%","max-height":"100%",overflow:"hidden"}}}}),e.Blocks.add("Container",{label:"Container",media:`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 19H1V18C1 16.1362 2.27477 14.5701 4 14.126M6 10.8293C4.83481 10.4175 4 9.30621 4 7.99999C4 6.69378 4.83481 5.58254 6 5.1707M21 19H23V18C23 16.1362 21.7252 14.5701 20 14.126M18 5.1707C19.1652 5.58254 20 6.69378 20 7.99999C20 9.30621 19.1652 10.4175 18 10.8293M10 14H14C16.2091 14 18 15.7909 18 18V19H6V18C6 15.7909 7.79086 14 10 14ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        `,content:{type:"Container"},category:"Layout"})},Qe=e=>{e.Components.addType("ImgSlider",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){setTimeout(()=>{var r=new Packery(".grid",{itemSelector:".grid-item",columnWidth:100});r.getItemElements().forEach(function(n){var a=new Draggabilly(n);r.bindDraggabillyEvents(a)});function o(){r.getItemElements().forEach(function(n,a){n.textContent=a+1})}r.on("layoutComplete",o),r.on("dragItemPositioned",o)},0)},components:`
        <style>
        </style>
        `}}}),e.Blocks.add("ImgSlider",{label:"ImgSlider",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,content:{type:"ImgSlider"},category:"Basic"})},et=e=>{e.Components.addType("ThreeJs1",{model:{defaults:{resizable:!0,copyable:!1,traits:[{type:"range-shadow",name:"Shadow",label:"Test"}],script:function(){},content:`
       <style>
          * {
              box-sizing: border-box;
          }

          body {
              font-family: sans-serif;
          }

          /* ---- grid ---- */

          .grid {
              background: #DDD;
              max-width: 1200px;
          }

          /* clear fix */
          .grid:after {
              content: '';
              display: block;
              clear: both;
          }

          .grid-item {
              float: left;
              width: 100px;
              height: 100px;
              background: #C09;
              border: 2px solid hsla(0, 0%, 0%, 0.5);
          }

          .grid-item--width2 {
              width: 200px;
          }

          .grid-item--height2 {
              height: 200px;
          }
      </style>

      <div class="grid">
        <div class="grid-item grid-item--width2"></div>
        <div class="grid-item grid-item--height2"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item grid-item--width2 grid-item--height2"></div>
        <div class="grid-item grid-item--width2"></div>
        <div class="grid-item grid-item--width2"></div>
        <div class="grid-item grid-item--height2"></div>
        <div class="grid-item"></div>
        <div class="grid-item grid-item--width2"></div>
        <div class="grid-item grid-item--height2"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
        `}}}),e.Blocks.add("ThreeJs1",{label:"ThreeJs1",media:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g font-weight="400" font-family="sans-serif"><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z" overflow="visible"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z" overflow="visible"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M46.914 47.313a1.129 1.129 0 00-1.076 1.399l6.054 24.531a1.129 1.129 0 001.88.543l18.222-17.563a1.129 1.129 0 00-.472-1.898l-24.277-6.968a1.129 1.129 0 00-.331-.044zm1.583 2.751l20.522 5.89L53.614 70.8l-5.117-20.736z" overflow="visible"/><path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M40.902 22.809a1.129 1.129 0 00-.807.316L21.873 40.687a1.129 1.129 0 00.472 1.898l24.273 6.969a1.129 1.129 0 001.408-1.356l-6.051-24.53a1.129 1.129 0 00-1.073-.86zm-.65 3.3l5.114 20.736-20.517-5.89 15.403-14.847zM89.453 36.793a1.129 1.129 0 00-.806.316L70.423 54.67a1.129 1.129 0 00.472 1.899l24.274 6.968a1.129 1.129 0 001.408-1.356l-6.05-24.53a1.129 1.129 0 00-1.074-.859zm-.65 3.3l5.114 20.737L73.4 54.94l15.403-14.846zM52.944 71.864a1.129 1.129 0 00-.74.315L33.982 89.742a1.129 1.129 0 00.472 1.898l24.278 6.968a1.129 1.129 0 001.407-1.355l-6.055-24.531a1.129 1.129 0 00-1.14-.858zm-.582 3.3l5.118 20.737-20.522-5.89 15.404-14.846z" overflow="visible"/></g></svg>
    `,content:{type:"ThreeJs1"},category:"Basic"})},tt=e=>{e.Components.addType("Products",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,script:function(){var r=new Swiper("#thumbs",{slidesPerView:5,spaceBetween:10,mousewheel:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:6,direction:"vertical"}}});new Swiper(".mySwiper2",{mousewheel:!0,effect:"fade",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:r}})},components:`
        <style>
          .swiper {
            width: 100%;
            height: 100%;
          }

          .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          body {
            background: #000;
            color: #000;
          }

          .swiper-container {
            display: flex;
          }

          .mySwiper2 {
            height: 600px;
            width: 100%;
          }

          .mySwiper {
            width: 100px;
            height: 300px;
            margin-right: 10px;
            box-sizing: border-box;
          }

          .mySwiper .swiper-slide {
            height: 75px !important;
            opacity: 0.4;
          }

          .mySwiper .swiper-slide-thumb-active {
            opacity: 1;
          }

          /* Responsive styles */
          @media (max-width: 767px) {
            .swiper-container {
              flex-direction: column-reverse;
            }

            .mySwiper {
              width: 100%;
              height: 80px;
              margin: 10px 0 0 0;
            }

            .mySwiper .swiper-slide {
              width: 25%;
              height: 100%;
            }

            .mySwiper2 {
              height: 350px;
            }
          }
        </style>
         <div class="container mx-auto"> 
            <div class="grid grid-cols-12 md:px-4 px-2">
              <div class="md:col-span-6 col-span-12 lg:flex">
                <div class="swiper mySwiper" id="thumbs">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                  </div>
                </div>

                <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                  </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>

        `}}}),e.Blocks.add("Products",{label:"Products",media:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 640" x="0px" y="0px"><path d="M472,24H40A24.028,24.028,0,0,0,16,48V464a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V48A24.028,24.028,0,0,0,472,24ZM40,40H472a8.009,8.009,0,0,1,8,8V88H32V48A8.009,8.009,0,0,1,40,40ZM472,472H40a8.009,8.009,0,0,1-8-8V104H480V464A8.009,8.009,0,0,1,472,472Z"/><circle cx="120" cy="64" r="8"/><circle cx="88" cy="64" r="8"/><circle cx="56" cy="64" r="8"/><path d="M72,312H264a8,8,0,0,0,8-8V144a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V304A8,8,0,0,0,72,312Zm107.406-31.207L200,253.333,232,296H188.53ZM169.87,296H102.13L136,239.549ZM80,152H256V296h-4l-45.6-60.8a8,8,0,0,0-12.8,0l-23.083,30.778L142.86,219.884a8,8,0,0,0-13.72,0L83.47,296H80Z"/><circle cx="176" cy="192" r="8"/><path d="M440,136H344a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/><path d="M312,184h96a8,8,0,0,0,0-16H312a8,8,0,0,0,0,16Z"/><path d="M312,216h48a8,8,0,0,0,0-16H312a8,8,0,0,0,0,16Z"/><path d="M440,200H408a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z"/><path d="M344,328H328a24,24,0,0,0,0,48h16a24,24,0,0,0,0-48Zm0,32H328a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/><path d="M312,312h96a8,8,0,0,0,8-8V272a8,8,0,0,0-8-8H312a8,8,0,0,0-8,8v32A8,8,0,0,0,312,312Zm88-16H384V280h16Zm-80-16h48v16H320Z"/><path d="M424,328H408a24,24,0,0,0,0,48h16a24,24,0,0,0,0-48Zm0,32H408a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"/><path d="M312,248h32a8,8,0,0,0,0-16H312a8,8,0,0,0,0,16Z"/><circle cx="312" cy="144" r="8"/><path d="M168,424H104a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/><circle cx="72" cy="432" r="8"/><path d="M304,424H240a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/><circle cx="208" cy="432" r="8"/><path d="M440,424H376a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/><circle cx="344" cy="432" r="8"/><path d="M72,392H264a8,8,0,0,0,8-8V336a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v48A8,8,0,0,0,72,392Zm88-16H128V344h32Zm16-32h32v32H176Zm80,32H224V344h32ZM80,344h32v32H80Z"/></svg>
    `,content:{type:"Products"},category:"Basic"})},nt=e=>{e.Components.addType("Three.Js",{model:{defaults:{droppable:!1,resizable:!0,copyable:!1,traits:[{type:"text",name:"delay",placeholder:"Nhập số khoảng thời gian chuyển slide (ms)",changeProp:!0}],delay:"https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj","script-props":["delay"],script:function(r){function o(){const n=document.querySelector("#c"),a=new THREE.WebGLRenderer({canvas:n}),w=45,u=2,m=.1,_=100,S=new THREE.PerspectiveCamera(w,u,m,_);S.position.set(0,10,20);const t=new THREE.OrbitControls(S,n);t.target.set(0,5,0),t.update();const p=new THREE.Scene;p.background=new THREE.Color("black");{const g=new THREE.TextureLoader().load("https://threejsfundamentals.org/threejs/resources/images/checker.png");g.wrapS=THREE.RepeatWrapping,g.wrapT=THREE.RepeatWrapping,g.magFilter=THREE.NearestFilter;const b=40/2;g.repeat.set(b,b);const V=new THREE.PlaneBufferGeometry(40,40),v=new THREE.MeshPhongMaterial({map:g,side:THREE.DoubleSide}),k=new THREE.Mesh(V,v);k.rotation.x=Math.PI*-.5,p.add(k)}{const b=new THREE.HemisphereLight(11657727,12155424,1);p.add(b)}{const g=new THREE.DirectionalLight(16777215,1);g.position.set(5,10,2),p.add(g),p.add(g.target)}const i=new THREE.OBJLoader2;i.loadMtl("https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.mtl",null,d=>{i.setMaterials(d),i.load(r.delay,f=>{const g=f.detail.loaderRootNode;p.add(g)})});function h(d){const f=d.domElement,g=f.clientWidth,b=f.clientHeight,V=f.width!==g||f.height!==b;return V&&d.setSize(g,b,!1),V}function c(){if(h(a)){const d=a.domElement;S.aspect=d.clientWidth/d.clientHeight,S.updateProjectionMatrix()}a.render(p,S),requestAnimationFrame(c)}requestAnimationFrame(c)}o()},content:`
        <style>
        #c{
          width: 100%;
          height: 100%;
        }
        </style>
        <canvas id="c"></canvas>
        `}}}),e.Blocks.add("Three.Js",{label:"Three.Js",media:`
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,content:{type:"Three.Js"},category:"Basic"})},at={model3d:Fe,imageLink:$e,masonry:Ke,header:Ue,footer:We,user:Je,socical:Ye,container:Xe,slider:qe,imgSlider:Qe,threeJs:et,products:tt,test:nt},rt=(e,r)=>{e.Panels.addButton("options",[{id:"link-page",className:"fa fa-link",attributes:{title:"Link"},command:"open-new-page",active:!1,togglable:!1}]),e.Commands.add("open-new-page",{run(o,n){r=="trang-chu"?window.open("/","_blank"):window.open(`/${r}`,"_blank")}})},ot=e=>{e.Panels.addButton("views",[{id:"open-code",attributes:{title:"Open Code"},className:"fa fa-file-code-o",command:"open-code",togglable:!1}])},it=e=>{e.Panels.addButton("options",[{id:"google-fonts",className:"fa-solid fa-font-case",attributes:{title:"Cài đặt kiểu chữ"},command:"open-fonts",active:!1}])},ve={openPage:rt,openCode:ot,openGoogleFont:it},st=()=>A.jsx(A.Fragment,{children:A.jsx("div",{className:"gjs-one-bg",style:{height:40},children:A.jsxs(me,{children:[A.jsxs(q,{className:"overflow-hidden",span:20,children:[A.jsxs("div",{className:"flex justify-between items-center p-2 border",style:{height:40},children:[A.jsx($.Input,{active:!0,size:"default",style:{height:25}}),A.jsx($.Input,{className:"float-right",active:!0,size:"default",style:{height:25}})]}),A.jsx("div",{className:"bg-white flex justify-center items-center",style:{height:"calc(100vh - 100px)"},children:A.jsxs("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[A.jsx("div",{className:"wheel"}),A.jsx("div",{className:"hamster",children:A.jsxs("div",{className:"hamster__body",children:[A.jsxs("div",{className:"hamster__head",children:[A.jsx("div",{className:"hamster__ear"}),A.jsx("div",{className:"hamster__eye"}),A.jsx("div",{className:"hamster__nose"})]}),A.jsx("div",{className:"hamster__limb hamster__limb--fr"}),A.jsx("div",{className:"hamster__limb hamster__limb--fl"}),A.jsx("div",{className:"hamster__limb hamster__limb--br"}),A.jsx("div",{className:"hamster__limb hamster__limb--bl"}),A.jsx("div",{className:"hamster__tail"})]})}),A.jsx("div",{className:"spoke"})]})})]}),A.jsxs(q,{className:"border gjs-one-bg overflow-hidden",span:4,style:{height:"calc(100vh - 56px)"},children:[A.jsx("div",{className:"flex justify-center items-center p-2 border-b",style:{height:38},children:A.jsx($.Button,{active:!0,block:!0,style:{height:25}})}),A.jsx("div",{className:"flex justify-center items-center p-2 border-b",style:{height:38},children:A.jsx($.Button,{active:!0,block:!0,style:{height:25}})}),A.jsxs(me,{className:"p-2",gutter:[12,12],children:[A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})}),A.jsx(q,{span:12,children:A.jsx($.Image,{active:!0,style:{width:"100%"}})})]})]})]})})}),ht=({data:e,canvas:r,pluginss:o,plugins:n,pluginsOpts:a,savePage:w,slug:u,folder:m,configGrapeJs:_,height:S="100vh"})=>{const t=B.useRef(null),[p,i]=B.useState(!0),h=d=>{d.Panels.addButton("options",[{id:"save-page",className:"fa fa-upload",attributes:{title:"Public"},command:"save-page",active:!1,togglable:!1}]),d.Commands.add("save-page",{run(f,g){var b=f.getHtml().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),V=f.getCss(),v=f.getJs();const k=f.getProjectData();w(k,{html:b,css:V,js:v})}})},c=d=>{t.current=d,at.masonry(d,u),ve.openPage(d,u),d.loadProjectData(e),d.Components.addType("image",{model:{defaults:{name:"Ảnh",resizable:!0,droppable:!1,copyable:!0,traits:["alt"],attributes:{"data-fancybox":"gallery"}}}}),ve.openPage(d,u),Ge(d),_(d),h(d),d.on("asset:open",()=>{const f=d.AssetManager;console.log(f)}),i(!1)};return A.jsxs(A.Fragment,{children:[p&&A.jsx(st,{}),A.jsx(Ze,{className:"overflow-hidden",grapesjs:"https://unpkg.com/grapesjs",grapesjsCss:"https://unpkg.com/grapesjs/dist/css/grapes.min.css",onEditor:c,i18n:{locale:"vi"},plugins:o,options:{height:S,canvas:{scripts:r==null?void 0:r.scripts,styles:r==null?void 0:r.styles},plugins:n,pluginsOpts:a,storageManager:!1,undoManager:{trackSelection:!1},canvasCss:`
                        .gjs-dashed *[data-gjs-highlightable]{
                            outline-offset: -1px !important;
                        }
                        .gjs-selected {
                            outline: 3px solid #1677ff !important;
                            outline-offset: -2px;
                        }
                        .gjs-hovered{
                            outline: 2px solid #1677ff !important;
                        }
                        img{
                            width: 100%;
                        }
                    `,assetManager:{uploadFile:d=>{ye("file","Kiên nhẫn đang tải file và resize file","Các tấm ảnh có width > 1300 sẽ được tối ưu hóa!");const f=d.dataTransfer?d.dataTransfer.files:d.target.files;if(!f||f.length===0){W("file","Không có file nào được tải lên");return}const g=new FormData;g.append("file",f[0]),g.append("folder",`${m}`),be.uploadFile(g).then(b=>{t.current.AssetManager.add({type:"image",src:`${ie}/uploads/${b}`,name:`${b}`}),re("file","Tải lên file thành công")}).catch(()=>{W("file","Tải lên file thất bại","Tấm ảnh không được tối ưu hóa!")})}},styleManager:{sectors:[{name:"General",buildProps:["float","display","position","top","right","left","bottom"],properties:[{name:"Alignment",property:"float",type:"radio",defaults:"none",list:[{value:"none",className:"fa fa-times"},{value:"left",className:"fa fa-align-left"},{value:"right",className:"fa fa-align-right"}]},{property:"position",type:"select"}]},{name:"Flex",open:!1,properties:[{name:"Flex Container",property:"display",type:"select",defaults:"block",list:[{value:"block",name:"Disable"},{value:"flex",name:"Enable"}]},{name:"Flex Parent",property:"label-parent-flex",type:"integer"},{name:"Direction",property:"flex-direction",type:"radio",defaults:"row",list:[{value:"row",name:"Row",className:"icons-flex icon-dir-row",title:"Row"},{value:"row-reverse",name:"Row reverse",className:"icons-flex icon-dir-row-rev",title:"Row reverse"},{value:"column",name:"Column",title:"Column",className:"icons-flex icon-dir-col"},{value:"column-reverse",name:"Column reverse",title:"Column reverse",className:"icons-flex icon-dir-col-rev"}]},{name:"Justify",property:"justify-content",type:"radio",defaults:"flex-start",list:[{value:"flex-start",className:"icons-flex icon-just-start",title:"Start"},{value:"flex-end",title:"End",className:"icons-flex icon-just-end"},{value:"space-between",title:"Space between",className:"icons-flex icon-just-sp-bet"},{value:"space-around",title:"Space around",className:"icons-flex icon-just-sp-ar"},{value:"center",title:"Center",className:"icons-flex icon-just-sp-cent"}]},{name:"Align",property:"align-items",type:"radio",defaults:"flex-start",list:[{value:"flex-start",title:"Start",className:"icons-flex icon-al-start"},{value:"flex-end",title:"End",className:"icons-flex icon-al-end"},{value:"stretch",title:"Stretch",className:"icons-flex icon-al-str"},{value:"center",title:"Center",className:"icons-flex icon-al-center"}]},{type:"aris-custom-prop",property:"gap",default:"15",min:0},{name:"Flex Children",property:"label-parent-flex",type:"integer"},{name:"Order",property:"order",type:"integer",defaults:0,min:0},{name:"Flex",property:"flex",type:"composite",properties:[{name:"Grow",property:"flex-grow",type:"integer",defaults:0,min:0},{name:"Shrink",property:"flex-shrink",type:"integer",defaults:0,min:0},{name:"Basis",property:"flex-basis",type:"integer",units:["px","%",""],unit:"",defaults:"auto"}]},{name:"Align",property:"align-self",type:"radio",defaults:"auto",list:[{value:"auto",name:"Auto"},{value:"flex-start",title:"Start",className:"icons-flex icon-al-start"},{value:"flex-end",title:"End",className:"icons-flex icon-al-end"},{value:"stretch",title:"Stretch",className:"icons-flex icon-al-str"},{value:"center",title:"Center",className:"icons-flex icon-al-center"}]}]},{name:"Dimension",open:!1,buildProps:["width","flex-width","height","max-width","min-width","max-height","min-height","margin","padding"],properties:[{id:"flex-width",type:"integer",name:"Width",units:["px","%"],property:"flex-basis",toRequire:1},{property:"margin",properties:[{name:"Top",property:"margin-top"},{name:"Right",property:"margin-right"},{name:"Bottom",property:"margin-bottom"},{name:"Left",property:"margin-left"}]},{property:"padding",properties:[{name:"Top",property:"padding-top"},{name:"Right",property:"padding-right"},{name:"Bottom",property:"padding-bottom"},{name:"Left",property:"padding-left"}]}]},{name:"Typography",open:!1,buildProps:["font-family","font-size","font-weight","letter-spacing","color","line-height","text-align","text-decoration","text-shadow"],properties:[{name:"Font",property:"font-family"},{type:"aris-custom-select",property:"overflow-wrap",options:[{name:"Không có",value:"no"},{name:"Break Word",value:"break-word"}],default:"no"},{name:"Weight",property:"font-weight"},{name:"Font color",property:"color"},{property:"text-align",type:"radio",defaults:"left",list:[{value:"left",name:"Left",className:"fa fa-align-left"},{value:"center",name:"Center",className:"fa fa-align-center"},{value:"right",name:"Right",className:"fa fa-align-right"},{value:"justify",name:"Justify",className:"fa fa-align-justify"}]},{property:"text-decoration",type:"radio",defaults:"none",list:[{value:"none",name:"None",className:"fa fa-times"},{value:"underline",name:"underline",className:"fa fa-underline"},{value:"line-through",name:"Line-through",className:"fa fa-strikethrough"}]},{property:"text-shadow",properties:[{name:"X position",property:"text-shadow-h"},{name:"Y position",property:"text-shadow-v"},{name:"Blur",property:"text-shadow-blur"},{name:"Color",property:"text-shadow-color"}]}]},{name:"Image",open:!1,properties:[{type:"aris-custom-select",property:"object-fit",options:[{name:"Cover",value:"cover"},{name:"Fill",value:"fill"},{name:"Scale Down",value:"scale-down"},{name:"Contain",value:"contain"},{name:"None",value:""}],default:"no"}]},{name:"Decorations",open:!1,buildProps:["opacity","border-radius","border","box-shadow","background"],properties:[{type:"slider",property:"opacity",defaults:1,step:.01,max:1,min:0},{property:"border-radius",properties:[{name:"Top",property:"border-top-left-radius"},{name:"Right",property:"border-top-right-radius"},{name:"Bottom",property:"border-bottom-left-radius"},{name:"Left",property:"border-bottom-right-radius"}]},{property:"box-shadow",properties:[{name:"X position",property:"box-shadow-h"},{name:"Y position",property:"box-shadow-v"},{name:"Blur",property:"box-shadow-blur"},{name:"Spread",property:"box-shadow-spread"},{name:"Color",property:"box-shadow-color"},{name:"Shadow type",property:"box-shadow-type"}]}]},{name:"Extra",open:!1,buildProps:["transition","perspective","transform"],properties:[{property:"transition",properties:[{name:"Property",property:"transition-property"},{name:"Duration",property:"transition-duration"},{name:"Easing",property:"transition-timing-function"}]},{property:"transform",properties:[{name:"Rotate X",property:"transform-rotate-x"},{name:"Rotate Y",property:"transform-rotate-y"},{name:"Rotate Z",property:"transform-rotate-z"},{name:"Scale X",property:"transform-scale-x"},{name:"Scale Y",property:"transform-scale-y"},{name:"Scale Z",property:"transform-scale-z"}]}]}]}}})]})};var He={exports:{}};/*! grapesjs-preset-webpage - 1.0.3 */(function(e,r){(function(o,n){e.exports=n()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:ce,()=>(()=>{var o={d:(c,d)=>{for(var f in d)o.o(d,f)&&!o.o(c,f)&&Object.defineProperty(c,f,{enumerable:!0,get:d[f]})},o:(c,d)=>Object.prototype.hasOwnProperty.call(c,d),r:c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})}},n={};o.r(n),o.d(n,{default:()=>h});var a=function(){return a=Object.assign||function(c){for(var d,f=1,g=arguments.length;f<g;f++)for(var b in d=arguments[f])Object.prototype.hasOwnProperty.call(d,b)&&(c[b]=d[b]);return c},a.apply(this,arguments)},w="gjs-open-import-webpage",u="set-device-desktop",m="set-device-tablet",_="set-device-mobile",S="canvas-clear",t=function(){return t=Object.assign||function(c){for(var d,f=1,g=arguments.length;f<g;f++)for(var b in d=arguments[f])Object.prototype.hasOwnProperty.call(d,b)&&(c[b]=d[b]);return c},t.apply(this,arguments)};const p=function(c,d){var f=c.Commands,g=d.textCleanCanvas;(function(b,V){var v=b.getConfig("stylePrefix"),k=V.modalImportLabel,x=V.modalImportContent;b.Commands.add(w,{codeViewer:null,container:null,run:function(L){var E=typeof x=="function"?x(L):x,l=this.getCodeViewer();L.Modal.open({title:V.modalImportTitle,content:this.getContainer()}).onceClose(function(){return L.stopCommand(w)}),l.setContent(E??""),l.refresh(),setTimeout(function(){return l.focus()},0)},stop:function(){b.Modal.close()},getContainer:function(){if(!this.container){var L=this.getCodeViewer(),E=document.createElement("div");if(E.className="".concat(v,"import-container"),k){var l=document.createElement("div");l.className="".concat(v,"import-label"),l.innerHTML=k,E.appendChild(l)}E.appendChild(L.getElement());var s=document.createElement("button");s.type="button",s.innerHTML=V.modalImportButton,s.className="".concat(v,"btn-prim ").concat(v,"btn-import"),s.onclick=function(){b.Css.clear(),b.setComponents(L.getContent().trim()),b.Modal.close()},E.appendChild(s),this.container=E}return this.container},getCodeViewer:function(){return this.codeViewer||(this.codeViewer=b.CodeManager.createViewer(t({codeName:"htmlmixed",theme:"hopscotch",readOnly:!1},V.importViewerOptions))),this.codeViewer}})})(c,d),f.add(u,{run:function(b){return b.setDevice("Desktop")},stop:function(){}}),f.add(m,{run:function(b){return b.setDevice("Tablet")},stop:function(){}}),f.add(_,{run:function(b){return b.setDevice("Mobile portrait")},stop:function(){}}),f.add(S,function(b){return confirm(g)&&b.runCommand("core:canvas-clear")})};var i=function(){return i=Object.assign||function(c){for(var d,f=1,g=arguments.length;f<g;f++)for(var b in d=arguments[f])Object.prototype.hasOwnProperty.call(d,b)&&(c[b]=d[b]);return c},i.apply(this,arguments)};const h=function(c,d){d===void 0&&(d={});var f=i({blocks:["link-block","quote","text-basic"],block:function(){return{}},modalImportTitle:"Import",modalImportButton:"Import",modalImportLabel:"",modalImportContent:"",importViewerOptions:{},textCleanCanvas:"Are you sure you want to clear the canvas?",showStylesOnChange:!0,useCustomTheme:!0},d);if(f.useCustomTheme&&typeof window<"u"){var g="gjs-",b="";[["one","#463a3c"],["two","#b9a5a6"],["three","#804f7b"],["four","#d97aa6"]].forEach(function(v){var k=v[0],x=v[1];b+=`
        .`.concat(g).concat(k,`-bg {
          background-color: `).concat(x,`;
        }

        .`).concat(g).concat(k,`-color {
          color: `).concat(x,`;
        }

        .`).concat(g).concat(k,`-color-h:hover {
          color: `).concat(x,`;
        }
      `)});var V=document.createElement("style");V.innerText=b,document.head.appendChild(V)}(function(v,k){var x=function(L,E){k.blocks.indexOf(L)>=0&&v.Blocks.add(L,a(a({select:!0,category:"Basic"},E),k.block(L)))};x("link-block",{label:"Link Block",media:`<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,content:{type:"link",editable:!1,droppable:!0,style:{display:"inline-block",padding:"5px","min-height":"50px","min-width":"50px"}}}),x("quote",{label:"Quote",media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </svg>`,content:`<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`}),x("text-basic",{label:"Text section",media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />
    </svg>`,content:`<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`})})(c,f),p(c,f),function(v,k){var x=v.Panels,L=v.getConfig(),E="sw-visibility",l="export-template",s="open-sm",y="open-tm",C="open-layers",H="open-blocks",T="fullscreen",M="preview",j='style="display: block; max-width:22px"';L.showDevices=!1,x.getPanels().reset([{id:"commands",buttons:[{}]},{id:"devices-c",buttons:[{id:u,command:u,active:!0,label:"<svg ".concat(j,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
        </svg>`)},{id:m,command:m,label:"<svg ".concat(j,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`)},{id:_,command:_,label:"<svg ".concat(j,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`)}]},{id:"options",buttons:[{id:E,command:E,context:E,label:"<svg ".concat(j,` viewBox="0 0 24 24">
        <path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />
    </svg>`)},{id:M,context:M,command:function(){return v.runCommand(M)},label:"<svg ".concat(j,' viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>')},{id:T,command:T,context:T,label:"<svg ".concat(j,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
        </svg>`)},{id:l,command:function(){return v.runCommand(l)},label:"<svg ".concat(j,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>`)},{id:"undo",command:function(){return v.runCommand("core:undo")},label:"<svg ".concat(j,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
        </svg>`)},{id:"redo",command:function(){return v.runCommand("core:redo")},label:"<svg ".concat(j,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
        </svg>`)},{id:w,command:function(){return v.runCommand(w)},label:"<svg ".concat(j,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
        </svg>`)},{id:S,command:function(){return v.runCommand(S)},label:"<svg ".concat(j,` viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>`)}]},{id:"views",buttons:[{id:s,command:s,active:!0,label:"<svg ".concat(j,` viewBox="0 0 24 24">
            <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
        </svg>`)},{id:y,command:y,label:"<svg ".concat(j,` viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
      </svg>`)},{id:C,command:C,label:"<svg ".concat(j,` viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
      </svg>`)},{id:H,command:H,label:"<svg ".concat(j,` viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>`)}]}]);var P=x.getButton("views",H);v.on("load",function(){return P==null?void 0:P.set("active",!0)}),k.showStylesOnChange&&v.on("component:selected",function(){var O=x.getButton("views",s),R=x.getButton("views",C);R&&R.get("active")||!v.getSelected()||O==null||O.set("active",!0)})}(c,f)};return n})())})(He);var lt=He.exports;const ft=de(lt);var Me={exports:{}};/*! grapesjs-blocks-basic - 1.0.2 */(function(e,r){(function(o,n){e.exports=n()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:ce,()=>(()=>{var o={d:(m,_)=>{for(var S in _)o.o(_,S)&&!o.o(m,S)&&Object.defineProperty(m,S,{enumerable:!0,get:_[S]})},o:(m,_)=>Object.prototype.hasOwnProperty.call(m,_),r:m=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})}},n={};o.r(n),o.d(n,{default:()=>u});var a=function(){return a=Object.assign||function(m){for(var _,S=1,t=arguments.length;S<t;S++)for(var p in _=arguments[S])Object.prototype.hasOwnProperty.call(_,p)&&(m[p]=_[p]);return m},a.apply(this,arguments)},w=function(){return w=Object.assign||function(m){for(var _,S=1,t=arguments.length;S<t;S++)for(var p in _=arguments[S])Object.prototype.hasOwnProperty.call(_,p)&&(m[p]=_[p]);return m},w.apply(this,arguments)};const u=function(m,_){_===void 0&&(_={}),function(S,t){var p=S.BlockManager,i=t.category,h=t.blocks,c=t.stylePrefix,d=t.flexGrid,f=t.rowHeight,g=t.addBasicStyle,b="".concat(c,"row"),V="".concat(c,"cell"),v=d?`
    .`.concat(b,` {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .`).concat(b,` {
        flex-wrap: wrap;
      }
    }`):`
    .`.concat(b,` {
      display: table;
      padding: 10px;
      width: 100%;
    }
    @media (max-width: 768px) {
      .`).concat(c,"cell, .").concat(c,"cell30, .").concat(c,`cell70 {
        width: 100%;
        display: block;
      }
    }`),k=d?`
    .`.concat(V,` {
      min-height: `).concat(f,`px;
      flex-grow: 1;
      flex-basis: 100%;
    }`):`
    .`.concat(V,` {
      width: 8%;
      display: table-cell;
      height: `).concat(f,`px;
    }`),x=`
  .`.concat(c,`cell30 {
    width: 30%;
  }`),L=`
  .`.concat(c,`cell70 {
    width: 70%;
  }`),E=1,l={tl:0,tc:0,tr:0,cl:0,cr:0,bl:0,br:0,minDim:E},s=a(a({},l),{cr:1,bc:0,currentUnit:1,minDim:E,step:.2});d&&(s.keyWidth="flex-basis");var y={class:b,"data-gjs-droppable":".".concat(V),"data-gjs-resizable":l,"data-gjs-name":"Row"},C={class:V,"data-gjs-draggable":".".concat(b),"data-gjs-resizable":s,"data-gjs-name":"Cell"};d&&(C["data-gjs-unstylable"]=["width"],C["data-gjs-stylable-require"]=["flex-basis"]);var H=[".".concat(b),".".concat(V)];S.on("selector:add",function(R){return H.indexOf(R.getFullName())>=0&&R.set("private",1)});var T=function(R){var D=[];for(var z in R){var N=R[z];N=N instanceof Array||N instanceof Object?JSON.stringify(N):N,D.push("".concat(z,"=").concat("'".concat(N,"'")))}return D.length?" ".concat(D.join(" ")):""},M=function(R){return h.indexOf(R)>=0},j=T(y),P=T(C),O={category:i,select:!0};M("column1")&&p.add("column1",a(a({},O),{label:t.labelColumn1,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
      </svg>`,content:"<div ".concat(j,`>
        <div `).concat(P,`></div>
      </div>
      `).concat(g?`<style>
          `.concat(v,`
          `).concat(k,`
        </style>`):"")})),M("column2")&&p.add("column2",a(a({},O),{label:t.labelColumn2,media:`<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
      </svg>`,content:"<div ".concat(j,`>
        <div `).concat(P,`></div>
        <div `).concat(P,`></div>
      </div>
      `).concat(g?`<style>
          `.concat(v,`
          `).concat(k,`
        </style>`):"")})),M("column3")&&p.add("column3",a(a({},O),{label:t.labelColumn3,media:`<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
      </svg>`,content:"<div ".concat(j,`>
        <div `).concat(P,`></div>
        <div `).concat(P,`></div>
        <div `).concat(P,`></div>
      </div>
      `).concat(g?`<style>
          `.concat(v,`
          `).concat(k,`
        </style>`):"")})),M("column3-7")&&p.add("column3-7",a(a({},O),{label:t.labelColumn37,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"/>
      </svg>`,content:"<div ".concat(j,`>
        <div `).concat(P," style='").concat(d?"flex-basis":"width",`: 30%;'></div>
        <div `).concat(P," style='").concat(d?"flex-basis":"width",`: 70%;'></div>
      </div>
      `).concat(g?`<style>
          `.concat(v,`
          `).concat(k,`
          `).concat(x,`
          `).concat(L,`
        </style>`):"")})),M("text")&&p.add("text",a(a({},O),{activate:!0,label:t.labelText,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
      </svg>`,content:{type:"text",content:"Insert your text here",style:{padding:"10px"}}})),M("link")&&p.add("link",a(a({},O),{label:t.labelLink,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
      </svg>`,content:{type:"link",content:"Link",style:{color:"#d983a6"}}})),M("image")&&p.add("image",a(a({},O),{activate:!0,label:t.labelImage,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
      </svg>`,content:{style:{color:"black"},type:"image"}})),M("video")&&p.add("video",a(a({},O),{label:t.labelVideo,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
      </svg>`,content:{type:"video",src:"img/video2.webm",style:{height:"350px",width:"615px"}}})),M("map")&&p.add("map",a(a({},O),{label:t.labelMap,media:`<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z" />
      </svg>`,content:{type:"map",style:{height:"350px"}}}))}(m,w({blocks:["column1","column2","column3","column3-7","text","link","image","video","map"],flexGrid:!1,stylePrefix:"gjs-",addBasicStyle:!0,category:"Basic",labelColumn1:"1 Column",labelColumn2:"2 Columns",labelColumn3:"3 Columns",labelColumn37:"2 Columns 3/7",labelText:"Text",labelLink:"Link",labelImage:"Image",labelVideo:"Video",labelMap:"Map",rowHeight:75},_))};return n})())})(Me);var ct=Me.exports;const vt=de(ct);var Se={exports:{}};/*! grapesjs-style-bg - 2.0.2 */(function(e,r){(function(o,n){e.exports=n()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:ce,()=>(()=>{var o={180:function(u){var m;m=()=>(()=>{var _={9:function(i){i.exports=function(h){function c(f){if(d[f])return d[f].exports;var g=d[f]={i:f,l:!1,exports:{}};return h[f].call(g.exports,g,g.exports,c),g.l=!0,g.exports}var d={};return c.m=h,c.c=d,c.d=function(f,g,b){c.o(f,g)||Object.defineProperty(f,g,{configurable:!1,enumerable:!0,get:b})},c.n=function(f){var g=f&&f.__esModule?function(){return f.default}:function(){return f};return c.d(g,"a",g),g},c.o=function(f,g){return Object.prototype.hasOwnProperty.call(f,g)},c.p="",c(c.s=1)}([function(h,c,d){Object.defineProperty(c,"__esModule",{value:!0}),c.on=function(f,g,b){g=g.split(/\s+/);for(var V=0;V<g.length;++V)f.addEventListener(g[V],b)},c.off=function(f,g,b){g=g.split(/\s+/);for(var V=0;V<g.length;++V)f.removeEventListener(g[V],b)},c.isFunction=function(f){return typeof f=="function"},c.isDef=function(f){return f!==void 0},c.getPointerEvent=function(f){return f.touches&&f.touches[0]||f}},function(h,c,d){var f=function(g){return g&&g.__esModule?g:{default:g}}(d(2));h.exports=function(g){return new f.default(g)}},function(h,c,d){function f(L){return L&&L.__esModule?L:{default:L}}Object.defineProperty(c,"__esModule",{value:!0});var g=function(){function L(E,l){for(var s=0;s<l.length;s++){var y=l[s];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(E,y.key,y)}}return function(E,l,s){return l&&L(E.prototype,l),s&&L(E,s),E}}(),b=f(d(3)),V=f(d(4)),v=d(0),k=function(L,E){return L.position-E.position},x=function(L){function E(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(function(T,M){if(!(T instanceof M))throw new TypeError("Cannot call a class as a function")})(this,E);var s=function(T,M){if(!T)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!M||typeof M!="object"&&typeof M!="function"?T:M}(this,(E.__proto__||Object.getPrototypeOf(E)).call(this));l=Object.assign({},l);var y={pfx:"grp",el:".grp",colorEl:"",min:0,max:100,direction:"90deg",type:"linear",height:"30px",width:"100%",emptyColor:"#000",onValuePos:function(T){return parseInt(T)}};for(var C in y)C in l||(l[C]=y[C]);var H=l.el;if(!((H=typeof H=="string"?document.querySelector(H):H)instanceof HTMLElement))throw"Element not found, given "+H;return s.el=H,s.handlers=[],s.options=l,s.on("handler:color:change",function(T,M){return s.change(M)}),s.on("handler:position:change",function(T,M){return s.change(M)}),s.on("handler:remove",function(T){return s.change(1)}),s.on("handler:add",function(T){return s.change(1)}),s.render(),s}return function(l,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);l.prototype=Object.create(s&&s.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(l,s):l.__proto__=s)}(E,L),g(E,[{key:"destroy",value:function(){var l=this;this.clear(),this.e={},["el","handlers","options","colorPicker"].forEach(function(s){return l[s]=0}),["previewEl","wrapperEl","sandEl"].forEach(function(s){var y=l[s];y&&y.parentNode&&y.parentNode.removeChild(y),delete l[s]})}},{key:"setColorPicker",value:function(l){this.colorPicker=l}},{key:"getValue",value:function(l,s){var y=this.getColorValue(),C=l||this.getType(),H=["top","left","bottom","right","center"],T=s||this.getDirection();return["linear","repeating-linear"].indexOf(C)>=0&&H.indexOf(T)>=0&&(T=T==="center"?"to right":"to "+T),["radial","repeating-radial"].indexOf(C)>=0&&H.indexOf(T)>=0&&(T="circle at "+T),y?C+"-gradient("+T+", "+y+")":""}},{key:"getSafeValue",value:function(l,s){var y=this.previewEl,C=this.getValue(l,s);if(!this.sandEl&&(this.sandEl=document.createElement("div")),!y||!C)return"";for(var H=this.sandEl.style,T=[C].concat(function(P){if(Array.isArray(P)){for(var O=0,R=Array(P.length);O<P.length;O++)R[O]=P[O];return R}return Array.from(P)}(this.getPrefixedValues(l,s))),M=void 0,j=0;j<T.length&&(M=T[j],H.backgroundImage=M,H.backgroundImage!=M);j++);return H.backgroundImage}},{key:"setValue",value:function(){var l=this,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=this.type,H=this.direction,T=s.indexOf("(")+1,M=s.lastIndexOf(")"),j=s.substring(T,M),P=j.split(/,(?![^(]*\)) /);if(this.clear(y),j){P.length>2&&(H=P.shift());var O=void 0;["repeating-linear","repeating-radial","linear","radial"].forEach(function(R){s.indexOf(function(D){return D+"-gradient("}(R))>-1&&!O&&(O=1,C=R)}),this.setDirection(H,y),this.setType(C,y),P.forEach(function(R){var D=R.split(" "),z=parseFloat(D.pop()),N=D.join("");l.addHandler(z,N,0,y)}),this.updatePreview()}else this.updatePreview()}},{key:"getColorValue",value:function(){var l=this.handlers;return l.sort(k),(l=l.length==1?[l[0],l[0]]:l).map(function(s){return s.getValue()}).join(", ")}},{key:"getPrefixedValues",value:function(l,s){var y=this.getValue(l,s);return["-moz-","-webkit-","-o-","-ms-"].map(function(C){return""+C+y})}},{key:"change",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.updatePreview(),!s.silent&&this.emit("change",l)}},{key:"setDirection",value:function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.options.direction=l;var y=s.complete,C=y===void 0?1:y;this.change(C,s)}},{key:"getDirection",value:function(){return this.options.direction}},{key:"setType",value:function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.options.type=l;var y=s.complete,C=y===void 0?1:y;this.change(C,s)}},{key:"getType",value:function(){return this.options.type}},{key:"addHandler",value:function(l,s){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},H=new V.default(this,l,s,y,C);return!C.silent&&this.emit("handler:add",H),H}},{key:"getHandler",value:function(l){return this.handlers[l]}},{key:"getHandlers",value:function(){return this.handlers}},{key:"clear",value:function(){for(var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=this.handlers,y=s.length-1;y>=0;y--)s[y].remove(l)}},{key:"getSelected",value:function(){for(var l=this.getHandlers(),s=0;s<l.length;s++){var y=l[s];if(y.isSelected())return y}return null}},{key:"updatePreview",value:function(){var l=this.previewEl;l&&(l.style.backgroundImage=this.getValue("linear","to right"))}},{key:"initEvents",value:function(){var l=this,s=this.previewEl;s&&(0,v.on)(s,"click",function(y){var C=l.options,H=C.min,T=C.max,M={w:s.clientWidth,h:s.clientHeight},j=y.offsetX-s.clientLeft,P=y.offsetY-s.clientTop,O=j/M.w*100;if(!(O>T||O<H||P>M.h||P<0)){var R=document.createElement("canvas"),D=R.getContext("2d");R.width=M.w,R.height=M.h;var z=D.createLinearGradient(0,0,M.w,M.h);l.getHandlers().forEach(function(G){return z.addColorStop(G.position/100,G.color)}),D.fillStyle=z,D.fillRect(0,0,R.width,R.height),R.style.background="black";var N=R.getContext("2d").getImageData(j,P,1,1).data,Z="rgba("+N[0]+", "+N[1]+", "+N[2]+", "+N[3]+")",I=Z=="rgba(0, 0, 0, 0)"?C.emptyColor:Z;l.addHandler(O,I)}})}},{key:"render",value:function(){var l=this.options,s=this.el,y=l.pfx,C=l.height,H=l.width;if(s){var T=y+"-wrapper",M=y+"-preview";s.innerHTML=`
      <div class="`+T+`">
        <div class="`+M+`"></div>
      </div>
    `;var j=s.querySelector("."+T),P=s.querySelector("."+M),O=j.style;O.position="relative",this.wrapperEl=j,this.previewEl=P,C&&(O.height=C),H&&(O.width=H),this.initEvents(),this.updatePreview()}}}]),E}(b.default);c.default=x},function(h,c,d){Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function b(V,v){for(var k=0;k<v.length;k++){var x=v[k];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(V,x.key,x)}}return function(V,v,k){return v&&b(V.prototype,v),k&&b(V,k),V}}(),g=function(){function b(){(function(V,v){if(!(V instanceof v))throw new TypeError("Cannot call a class as a function")})(this,b)}return f(b,[{key:"on",value:function(V,v,k){var x=this.e||(this.e={});return(x[V]||(x[V]=[])).push({fn:v,ctx:k}),this}},{key:"once",value:function(V,v,k){function x(){L.off(V,x),v.apply(k,arguments)}var L=this;return x._=v,this.on(V,x,k)}},{key:"emit",value:function(V){for(var v=[].slice.call(arguments,1),k=((this.e||(this.e={}))[V]||[]).slice(),x=0,L=k.length;x<L;x++)k[x].fn.apply(k[x].ctx,v);return this}},{key:"off",value:function(V,v){var k=this.e||(this.e={}),x=k[V],L=[];if(x&&v)for(var E=0,l=x.length;E<l;E++)x[E].fn!==v&&x[E].fn._!==v&&L.push(x[E]);return L.length?k[V]=L:delete k[V],this}}]),b}();c.default=g},function(h,c,d){Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function V(v,k){for(var x=0;x<k.length;x++){var L=k[x];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(v,L.key,L)}}return function(v,k,x){return k&&V(v.prototype,k),x&&V(v,x),v}}(),g=d(0),b=function(){function V(v){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"black",L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,E=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{};(function(l,s){if(!(l instanceof s))throw new TypeError("Cannot call a class as a function")})(this,V),v.getHandlers().push(this),this.gp=v,this.position=k,this.color=x,this.selected=0,this.render(),L&&this.select(E)}return f(V,[{key:"toJSON",value:function(){return{position:this.position,selected:this.selected,color:this.color}}},{key:"setColor",value:function(v){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;this.color=v,this.emit("handler:color:change",this,k)}},{key:"setPosition",value:function(v){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,x=this.getEl();this.position=v,x&&(x.style.left=v+"%"),this.emit("handler:position:change",this,k)}},{key:"getColor",value:function(){return this.color}},{key:"getPosition",value:function(){var v=this.position,k=this.gp.options.onValuePos;return(0,g.isFunction)(k)?k(v):v}},{key:"isSelected",value:function(){return!!this.selected}},{key:"getValue",value:function(){return this.getColor()+" "+this.getPosition()+"%"}},{key:"select",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},k=this.getEl(),x=this.gp.getHandlers();!v.keepSelect&&x.forEach(function(E){return E.deselect()}),this.selected=1;var L=this.getSelectedCls();k&&(k.className+=" "+L),this.emit("handler:select",this)}},{key:"deselect",value:function(){var v=this.getEl();this.selected=0;var k=this.getSelectedCls();v&&(v.className=v.className.replace(k,"").trim()),this.emit("handler:deselect",this)}},{key:"getSelectedCls",value:function(){return this.gp.options.pfx+"-handler-selected"}},{key:"remove",value:function(){var v=this,k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=this.cpFn,L=this.getEl(),E=this.gp.getHandlers(),l=E.splice(E.indexOf(this),1)[0];return L&&L.parentNode.removeChild(L),!k.silent&&this.emit("handler:remove",l),(0,g.isFunction)(x)&&x(this),["el","gp"].forEach(function(s){return v[s]=0}),l}},{key:"getEl",value:function(){return this.el}},{key:"initEvents",value:function(){var v=this,k=this.getEl(),x=this.gp.previewEl,L=this.gp.options,E=L.min,l=L.max,s=k.querySelector("[data-toggle=handler-close]"),y=k.querySelector("[data-toggle=handler-color-c]"),C=k.querySelector("[data-toggle=handler-color-wrap]"),H=k.querySelector("[data-toggle=handler-color]"),T=k.querySelector("[data-toggle=handler-drag]"),M=function(I){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,U=I.target.value;v.setColor(U,G),C&&(C.style.backgroundColor=U)};if(y&&(0,g.on)(y,"click",function(I){return I.stopPropagation()}),s&&(0,g.on)(s,"click",function(I){I.stopPropagation(),v.remove()}),H&&((0,g.on)(H,"change",M),(0,g.on)(H,"input",function(I){return M(I,0)})),T){var j=0,P=0,O=0,R={},D={},z={},N=function(I){var G=(0,g.getPointerEvent)(I);O=1,z.x=G.clientX-D.x,z.y=G.clientY-D.y,j=100*z.x,j/=R.w,j=(j=(j=P+j)<E?E:j)>l?l:j,v.setPosition(j,0),v.emit("handler:drag",v,j),(0,g.isDef)(I.button)&&I.which===0&&Z(I)},Z=function I(G){(0,g.off)(document,"touchmove mousemove",N),(0,g.off)(document,"touchend mouseup",I),O&&(O=0,v.setPosition(j),v.emit("handler:drag:end",v,j))};(0,g.on)(T,"touchstart mousedown",function(I){if(!(0,g.isDef)(I.button)||I.button===0){v.select();var G=(0,g.getPointerEvent)(I);P=v.position,R.w=x.clientWidth,R.h=x.clientHeight,D.x=G.clientX,D.y=G.clientY,(0,g.on)(document,"touchmove mousemove",N),(0,g.on)(document,"touchend mouseup",Z),v.emit("handler:drag:start",v)}}),(0,g.on)(T,"click",function(I){return I.stopPropagation()})}}},{key:"emit",value:function(){var v;(v=this.gp).emit.apply(v,arguments)}},{key:"render",value:function(){var v=this.gp,k=v.options,x=v.previewEl,L=v.colorPicker,E=k.pfx,l=k.colorEl,s=this.getColor();if(x){var y=document.createElement("div"),C=y.style,H=E+"-handler";return y.className=H,y.innerHTML=`
      <div class="`+H+`-close-c">
        <div class="`+H+`-close" data-toggle="handler-close">&Cross;</div>
      </div>
      <div class="`+H+`-drag" data-toggle="handler-drag"></div>
      <div class="`+H+`-cp-c" data-toggle="handler-color-c">
        `+(l||`
          <div class="`+H+'-cp-wrap" data-toggle="handler-color-wrap" style="background-color: '+s+`">
            <input type="color" data-toggle="handler-color" value="`+s+`">
          </div>`)+`
      </div>
    `,C.position="absolute",C.top=0,C.left=this.position+"%",x.appendChild(y),this.el=y,this.initEvents(),this.cpFn=L&&L(this),y}}}]),V}();c.default=b}])}},S={};function t(i){var h=S[i];if(h!==void 0)return h.exports;var c=S[i]={exports:{}};return _[i].call(c.exports,c,c.exports,t),c.exports}t.n=i=>{var h=i&&i.__esModule?()=>i.default:()=>i;return t.d(h,{a:h}),h},t.d=(i,h)=>{for(var c in h)t.o(h,c)&&!t.o(i,c)&&Object.defineProperty(i,c,{enumerable:!0,get:h[c]})},t.o=(i,h)=>Object.prototype.hasOwnProperty.call(i,h),t.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var p={};return(()=>{t.r(p),t.d(p,{GRAD_DIRS:()=>V,GRAD_TYPES:()=>v,default:()=>s,getValidDir:()=>b,parseGradient:()=>f,toGradient:()=>g});var i=t(9),h=t.n(i),c=function(){return c=Object.assign||function(y){for(var C,H=1,T=arguments.length;H<T;H++)for(var M in C=arguments[H])Object.prototype.hasOwnProperty.call(C,M)&&(y[M]=C[M]);return y},c.apply(this,arguments)},d=function(y,C,H){if(H||arguments.length===2)for(var T,M=0,j=C.length;M<j;M++)!T&&M in C||(T||(T=Array.prototype.slice.call(C,0,M)),T[M]=C[M]);return y.concat(T||Array.prototype.slice.call(C))},f=function(y){var C=y.indexOf("(")+1,H=y.lastIndexOf(")"),T=y.substring(C,H),M=T.split(/,(?![^(]*\))/),j={direction:"left",type:"linear",content:T,colors:T,stops:[]};if(!T)return j;M.length>2&&(j.direction=M.shift(),j.colors=M.join(",").trim());var P=!1;return["repeating-linear","repeating-radial","linear","radial"].forEach(function(O){y.indexOf(function(R){return"".concat(R,"-gradient(")}(O))>-1&&!P&&(P=!0,j.type=O)}),j.stops=M.map(function(O){var R=O.split(" "),D=(R.length>1?R.pop():"").trim();return{color:R.join(" ").trim(),position:D}}),j},g=function(y,C,H){var T=d(d([],V,!0),["center"],!1),M=C;return["linear","repeating-linear"].indexOf(y)>=0&&T.indexOf(M)>=0&&(M=M==="center"?"to right":"to ".concat(M)),["radial","repeating-radial"].indexOf(y)>=0&&T.indexOf(M)>=0&&(M="circle at ".concat(M)),H?"".concat(y,"-gradient(").concat(M,", ").concat(H,")"):""},b=function(y){return V.filter(function(C){return y.indexOf(C)>-1})[0]},V=["right","bottom","left","top"],v=["linear","radial","repeating-linear","repeating-radial"],k='[data-toggle="handler-color-wrap"]',x="background-image-gradient",L="".concat(x,"-dir"),E="".concat(x,"-type"),l=function(){return l=Object.assign||function(y){for(var C,H=1,T=arguments.length;H<T;H++)for(var M in C=arguments[H])Object.prototype.hasOwnProperty.call(C,M)&&(y[M]=C[M]);return y},l.apply(this,arguments)};const s=function(y,C){C===void 0&&(C={}),function(H,T){T===void 0&&(T={});var M=H.getModel(),j=H.Styles,P=T.colorPicker,O=T.builtInType,R=T.styleType,D=function(z){var N=z.getEl().querySelector(k),Z=H.$(N);Z.spectrum&&Z.spectrum("destroy")};R&&j.addType(R,{create:function(z){var N=z.change,Z=document.createElement("div");Z.className="gp-container",Z.style.width="100%";var I=new(h())(c({el:Z},T.grapickOpts));return I.on("change",function(G){return N({value:I.getValue(),partial:!G})}),this.gp=I,P==="default"&&(P=function(G){var U=G.getEl(),Q=U.querySelector(k),te=U.querySelector("input");te==null||te.parentNode.removeChild(te);var oe=Q.style;oe.backgroundColor=G.getColor();var ue=function(ne,se){se===void 0&&(se=1);var pe=function(le){return(le.getAlpha()==1?le.toHexString():le.toRgbString()).replace(/ /g,"")}(ne);oe.backgroundColor=pe,G.setColor(pe,se)};M.initBaseColorPicker(Q,{color:G.getColor(),change:function(ne){ue(ne)},move:function(ne){ue(ne,0)}})},I.on("handler:remove",D)),P&&I.setColorPicker(P),Z},emit:function(z,N){var Z=z.updateStyle,I=N.partial;Z(N.value,{partial:I})},update:function(z){var N=z.value,Z=this.gp;if(Z.getValue()!==N){var I=Z.getHandlers();I.map(D),Z.setValue(N,{silent:!0}),T.selectEdgeStops&&[I[0],I[I.length-1]].filter(Boolean).map(function(G){return G.select({keepSelect:!0})})}},destroy:function(){var z;(z=this.gp)===null||z===void 0||z.destroy()}}),O&&j.addBuiltIn(O,{type:"composite",fromStyle:function(z,N){var Z,I=N.name,G=f(z[I]||""),U=G.type||v[0],Q=b(G.direction)||V[0];return(Z={})[x]=g(U,Q,G.colors),Z[E]=U,Z[L]=Q,Z},toStyle:function(z,N){var Z,I=N.name,G=z[x]||"",U=z[E]||v[0],Q=z[L]||V[0],te=f(G),oe=g(U,Q,te.colors);return(Z={})[I]=oe,Z},properties:[{name:" ",full:!0,defaults:"none",type:R,property:x},{name:"Direction",type:"select",defaults:"right",property:L,options:V.map(function(z){return{value:z}})},{name:"Type",type:"select",defaults:"linear",property:E,options:v.map(function(z){return{value:z}})}]})}(y,l({grapickOpts:{},selectEdgeStops:!0,styleType:"gradient",builtInType:"background-image"},C))}})(),p})(),u.exports=m()}},n={};function a(u){var m=n[u];if(m!==void 0)return m.exports;var _=n[u]={exports:{}};return o[u].call(_.exports,_,_.exports,a),_.exports}a.n=u=>{var m=u&&u.__esModule?()=>u.default:()=>u;return a.d(m,{a:m}),m},a.d=(u,m)=>{for(var _ in m)a.o(m,_)&&!a.o(u,_)&&Object.defineProperty(u,_,{enumerable:!0,get:m[_]})},a.o=(u,m)=>Object.prototype.hasOwnProperty.call(u,m),a.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var w={};return(()=>{a.r(w),a.d(w,{BackgroundType:()=>u,default:()=>k});var u,m=a(180),_=a.n(m),S=function(){return S=Object.assign||function(x){for(var L,E=1,l=arguments.length;E<l;E++)for(var s in L=arguments[E])Object.prototype.hasOwnProperty.call(L,s)&&(x[s]=L[s]);return x},S.apply(this,arguments)};(function(x){x.Image="image",x.Color="color",x.Grad="grad"})(u||(u={}));var t=function(x){return x.map(function(L){return{id:L}})},p=function(x){var L,E=((L={})[c]=u.Image,L);if(x.indexOf("url(")>-1)E[d]=x;else if(x.indexOf("gradient(")>-1){var l=(0,m.parseGradient)(x),s=l.stops;if(s.length===2&&l.type==="linear"&&s[0].color===s[1].color)E[c]=u.Color,E[f]=s[0].color;else{var y=(0,m.getValidDir)(l.direction)||m.GRAD_DIRS[0],C=l.type||m.GRAD_TYPES[0];E[c]=u.Grad,E[g]=(0,m.toGradient)(C,y,l.colors),E[V]=C,E[b]=y}}return E},i='style="max-height: 16px; display: block; margin: 0 auto" viewBox="0 0 24 24"',h="background-image",c="__background-type",d=h,f="".concat(d,"-color"),g="".concat(d,"-gradient"),b="".concat(g,"-dir"),V="".concat(g,"-type"),v="none";const k=function(x,L){L===void 0&&(L={});var E=S({styleGradientOpts:{},propExtender:function(l){return l}},L);_()(x,S({colorPicker:"default"},E.styleGradientOpts)),x.Styles.addBuiltIn("background",{type:"stack",layerSeparator:new RegExp("(?<!\\(.*[^)]),(?![^(]*\\))"),layerJoin:", ",detached:!0,layerLabel:function(l,s){var y,C=s.values,H=s.property.getProperty(c).getOption(C[c]);return H!=null&&H.title?"".concat((y=H.title)&&y.charAt(0).toUpperCase()+y.substring(1)):""},fromStyle:function(l,s){var y=s.property,C=s.name,H=y.getLayerSeparator(),T=y.getProperties(),M=[];return l[h]?(M=y.__splitStyleName(l,h,H).map(p),T.forEach(function(j){var P=j.getId(),O=j.getName();O!==h&&y.__splitStyleName(l,O,H).map(function(R){var D;return(D={})[P]=R||j.getDefaultValue(),D}).forEach(function(R,D){M[D]=M[D]?S(S({},M[D]),R):R})})):l[C]&&(M=y.__splitStyleName(l,C,/(?![^)(]*\([^)(]*?\)\)),(?![^\(]*\))/).map(function(j){return j.substring(0,j.lastIndexOf(")")+1)}).map(p)),M},toStyle:function(l){var s=S({},l),y=s[c],C=s[d];if(y===u.Color){var H=s[f];C=H===v?v:"linear-gradient(".concat(H," 0%, ").concat(H," 100%)")}else if(y===u.Grad){var T=(0,m.parseGradient)(s[g]||"");C=(0,m.toGradient)(s[V]||m.GRAD_TYPES[0],s[b]||m.GRAD_DIRS[0],T.colors)}return delete s[d],delete s[f],delete s[g],delete s[b],delete s[V],S(S({},s),{"background-image":C||v})},properties:[{label:" ",property:c,type:"radio",default:u.Image,onChange:function(l){var s=l.property,y=l.to.value;y&&s.getParent().getProperties().forEach(function(C){var H=C.getName(),T=!1;H!==c&&((y===u.Image&&[f,g,b,V].indexOf(H)<0||y===u.Color&&H===f||y===u.Grad&&[g,b,V].indexOf(H)>=0)&&(T=!0),C.up({visible:T}))})},options:[{id:u.Image,title:"Image",label:"<svg ".concat(i,'><path fill="currentColor" d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"/></svg>')},{id:u.Color,title:"Color",label:"<svg ".concat(i,'><path fill="currentColor" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/></svg>')},{id:u.Grad,title:"Gradient",label:"<svg ".concat(i,'><path fill="currentColor" d="M11 9h2v2h-2V9m-2 2h2v2H9v-2m4 0h2v2h-2v-2m2-2h2v2h-2V9M7 9h2v2H7V9m12-6H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2M9 18H7v-2h2v2m4 0h-2v-2h2v2m4 0h-2v-2h2v2m2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"/></svg>')}]},{label:"Image",property:d,default:"none",functionName:"url",type:"file",full:!0},{property:"background-repeat",default:"repeat",type:"select",options:[{id:"repeat",label:"Repeat"},{id:"repeat-x",label:"Repeat x"},{id:"repeat-y",label:"Repeat y"},{id:"no-repeat",label:"No repeat"},{id:"space",label:"Space"},{id:"round",label:"Round"}]},{property:"background-position",default:"left top",type:"select",options:t(["left top","left center","left bottom","right top","right center","right bottom","center top","center center","center bottom"])},{property:"background-attachment",default:"scroll",type:"select",options:t(["scroll","fixed","local"])},{type:"select",default:"auto",property:"background-size",options:t(["auto","cover","contain"])},{label:"Color",property:f,default:"none",type:"color",full:!0},{label:"Gradient",property:g,default:"linear-gradient(right, black 0%, white 100%)",type:"gradient",full:!0},{name:"Direction",property:b,type:"select",default:"right",options:t(m.GRAD_DIRS)},{name:"Type",property:V,default:"linear",type:"select",options:t(m.GRAD_TYPES)}].map(function(l){var s;return((s=E.propExtender)===null||s===void 0?void 0:s.call(E,l))||l})})}})(),w})())})(Se);var dt=Se.exports;const yt=de(dt);export{at as B,ht as P,st as S,yt as a,vt as b,ft as p};
