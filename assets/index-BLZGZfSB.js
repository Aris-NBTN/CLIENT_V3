const O=(n,t={})=>{const l=n.BlockManager,o=t.stylePrefix,e=`${o}row-aris`,s=`${o}cell-aris`,f=t.labelRow,v=t.labelColumn,p=a=>{const d=[];for(let x in a){let r=a[x];const u=r instanceof Array||r instanceof Object;r=u?JSON.stringify(r):r,d.push(`${x}=${u?`${r}`:`"${r}"`}`)}return d.length?`${d.join(" ")}`:""},A="flex-basis",j=3,y=1,R=1,w={tl:0,tc:0,tr:0,cl:0,cr:0,bl:0,br:0,minDim:y},S={...w,cr:1,cl:1,bc:1,keyWidth:A,currentUnit:R,minDim:y,step:j,onMove:(a,d,{resizer:x})=>{const r=a.parentElement;if(!r)return;const u=Array.from(r.children),k=u.indexOf(a),M=k===0,P=k===u.length-1;if(x==="cr"&&!P){const m=u[k+1],H=a.offsetWidth,W=m.offsetWidth,b=d.right;a.style.width=`${H+b}px`,m.style.width=`${W-b}px`}else if(x==="cl"&&!M){const m=u[k-1],H=a.offsetWidth,W=m.offsetWidth,b=d.left;a.style.width=`${H-b}px`,m.style.width=`${W+b}px`}}},B={class:e,"data-gjs-droppable":`.${s}`,"data-gjs-resizable":w,"data-gjs-custom-name":f},C={class:s,"data-gjs-draggable":`.${e}`,"data-gjs-resizable":S,"data-gjs-custom-name":v,"data-gjs-unstylable":["width"],"data-gjs-stylable-require":["flex-basis"]},V=[`.${e}`,`.${s}`];n.on("selector:add",a=>V.indexOf(a.getFullName())>=0&&a.set("private",1)),n.on("block:drag:stop",a=>{const d=a==null?void 0:a.parent();d&&d.getClasses().includes(s)&&a.setStyle({width:"100%",display:"block",padding:"0","min-height":"55px","max-height":"100%","max-width":"100%"})});const E="Flexbox",i="Basic",g=p(B),h=p(C),c=`
    .${e} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
      gap: 10px;
      min-height: 75px;
    }
    @media (max-width: 768px) {
      .${e} {
        flex-direction: column;
      }
    }
    @media (max-width: 480px) {
      .${e} {
        height: auto;
      }
    }
  `,$=`
    .${s} {
      min-height: 55px;
      flex-grow: 1;
      flex-basis: auto;
    }
  `;l.add("flexbox",{label:E,category:i,media:`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 19.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    `,attributes:{class:"gjs-fonts gjs-f-b2"},content:`
      <div ${g}>
        <div ${h}></div>
        <div ${h}></div>
      </div>
      <style>
        ${c}
        ${$}
      </style>
    `,...t.flexboxBlock})},L=(n,t={})=>{const l={flexboxBlock:{},stylePrefix:"",labelRow:"Row",labelColumn:"Column",...t};O(n,l)},T=(n,t={})=>{const l=n.BlockManager,o=t.stylePrefix,e=`${o}row-aris-2`,s=`${o}cell-aris-2`,f=t.labelRow,v=t.labelColumn,p=i=>{const g=[];for(let h in i){let c=i[h];const $=c instanceof Array||c instanceof Object;c=$?JSON.stringify(c):c,g.push(`${h}=${$?`'${c}'`:`"${c}"`}`)}return g.length?` ${g.join(" ")}`:""},j={tl:0,tc:0,tr:0,cl:0,cr:0,bl:0,br:0,minDim:10},y={class:e,"data-gjs-droppable":`.${s}`,"data-gjs-resizable":j,"data-gjs-custom-name":f},R={class:s,"data-gjs-draggable":`.${e}`,"data-gjs-resizable":{bc:1,keyHeight:"flex-basis",minDim:10,step:1,currentUnit:"px",unitHeight:"px",tl:0,tr:0,bl:0,br:0},"data-gjs-custom-name":v,"data-gjs-unstylable":["width"],"data-gjs-stylable-require":["flex-basis"]},w=[`.${e}`,`.${s}`];n.on("selector:add",i=>w.indexOf(i.getFullName())>=0&&i.set("private",1)),n.on("block:drag:stop",i=>{const g=i==null?void 0:i.parent();g&&g.getClasses().includes(s)&&i.setStyle({width:"auto",height:"234px",padding:"0","min-height":"55px","max-height":"100%","max-width":"100%"})}),n.on("component:clone",i=>{console.log(i)});const S="Basic",B=p(y),C=p(R),V=`
    .${e} {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 10px;
      min-height: 75px;
    }
    @media (max-width: 480px){
      .${e} {
        height: auto;
      }
    }
    `,E=`
    .${s} {
      min-height: 55px;
      flex-grow: 1;
    }`;l.add("flexbox-row",{label:"Flexbox Row",media:`
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 19.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#ffffff" stroke-width="0.00024000000000000003" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    `,category:S,attributes:{class:"gjs-fonts gjs-f-b2"},content:`
        <div ${B}>
          <div ${C}></div>
          <div ${C}></div>
        </div>
        <style>
          ${V}
          ${E}
        </style>
        `,...t.flexboxBlock})},_=(n,t={})=>{const l={flexboxBlock:{},stylePrefix:"",labelRow:"Row-Row",labelColumn:"Column-Row",...t};T(n,l)},z=n=>{n.StyleManager.addType("aris-custom-prop",{create({props:t,change:l}){const o=document.createElement("div");o.innerHTML=`<input type="range" class="my-input" min="${t.min}" max="${t.max}"/>`;const e=o.querySelector(".my-input");return e.addEventListener("change",s=>l({event:s})),e.addEventListener("input",s=>l({event:s,partial:!0})),o},emit({props:t,updateStyle:l},{event:o,partial:e}){const{value:s}=o.target;l(`${s}px`,{partial:e})},update({value:t,el:l}){l.querySelector(".my-input").value=parseInt(t,10)},destroy(){}})},G=n=>{n.StyleManager.addType("aris-custom-select",{create({props:t,change:l}){const o=document.createElement("div");o.classList="gjs-field gjs-select";const e=document.createElement("select");return e.className="my-select",t.options&&Array.isArray(t.options)&&t.options.forEach(s=>{const f=document.createElement("option");f.value=s.value,f.text=s.name,t.default&&t.default===s.value&&(f.selected=!0),e.appendChild(f)}),e.addEventListener("change",s=>l({event:s})),o.appendChild(e),o},emit({props:t,updateStyle:l},{event:o}){const{value:e}=o.target;l(e)},update({value:t,el:l}){const o=l.querySelector(".my-select");o&&(o.value=t)},destroy(){}})},q={customType:z,customTypeSelect:G};export{q as S,_ as a,L as p};
