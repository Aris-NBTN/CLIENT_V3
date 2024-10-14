import{r as s,am as ue,ce as de,aq as X,d as re,_ as ge,e as fe,c as M,cf as ee,T as pe,h as me,m as ve,i as ye,f as he,aJ as Ce,as as $e,C as be,W as Se,a4 as xe,R as ke,a3 as Pe}from"./index-CLgyQ1vx.js";import{R as we}from"./CheckOutlined-DL5js1cp.js";var Ee={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},Ie=function(){var t=s.useRef([]),r=s.useRef(null);return s.useEffect(function(){var o=Date.now(),n=!1;t.current.forEach(function(c){if(c){n=!0;var i=c.style;i.transitionDuration=".3s, .3s, .3s, .06s",r.current&&o-r.current<100&&(i.transitionDuration="0s, 0s")}}),n&&(r.current=Date.now())}),t.current},oe=0,Oe=de();function je(){var e;return Oe?(e=oe,oe+=1):e="TEST_OR_SSR",e}const De=function(e){var t=s.useState(),r=ue(t,2),o=r[0],n=r[1];return s.useEffect(function(){n("rc_progress_".concat(je()))},[]),e||o};var ne=function(t){var r=t.bg,o=t.children;return s.createElement("div",{style:{width:"100%",height:"100%",background:r}},o)};function se(e,t){return Object.keys(e).map(function(r){var o=parseFloat(r),n="".concat(Math.floor(o*t),"%");return"".concat(e[r]," ").concat(n)})}var _e=s.forwardRef(function(e,t){var r=e.prefixCls,o=e.color,n=e.gradientId,c=e.radius,i=e.style,a=e.ptg,l=e.strokeLinecap,g=e.strokeWidth,u=e.size,f=e.gapDegree,p=o&&X(o)==="object",C=p?"#FFF":void 0,m=u/2,h=s.createElement("circle",{className:"".concat(r,"-circle-path"),r:c,cx:m,cy:m,stroke:C,strokeLinecap:l,strokeWidth:g,opacity:a===0?0:1,style:i,ref:t});if(!p)return h;var v="".concat(n,"-conic"),$=f?"".concat(180+f/2,"deg"):"0deg",y=se(o,(360-f)/360),O=se(o,1),P="conic-gradient(from ".concat($,", ").concat(y.join(", "),")"),b="linear-gradient(to ".concat(f?"bottom":"top",", ").concat(O.join(", "),")");return s.createElement(s.Fragment,null,s.createElement("mask",{id:v},h),s.createElement("foreignObject",{x:0,y:0,width:u,height:u,mask:"url(#".concat(v,")")},s.createElement(ne,{bg:b},s.createElement(ne,{bg:P}))))}),G=100,z=function(t,r,o,n,c,i,a,l,g,u){var f=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,p=o/100*360*((360-i)/360),C=i===0?0:{bottom:0,top:180,left:90,right:-90}[a],m=(100-n)/100*r;g==="round"&&n!==100&&(m+=u/2,m>=r&&(m=r-.01));var h=G/2;return{stroke:typeof l=="string"?l:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:m+f,transform:"rotate(".concat(c+p+C,"deg)"),transformOrigin:"".concat(h,"px ").concat(h,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},Ae=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function ie(e){var t=e??[];return Array.isArray(t)?t:[t]}var Ne=function(t){var r=re(re({},Ee),t),o=r.id,n=r.prefixCls,c=r.steps,i=r.strokeWidth,a=r.trailWidth,l=r.gapDegree,g=l===void 0?0:l,u=r.gapPosition,f=r.trailColor,p=r.strokeLinecap,C=r.style,m=r.className,h=r.strokeColor,v=r.percent,$=ge(r,Ae),y=G/2,O=De(o),P="".concat(O,"-gradient"),b=y-i/2,S=Math.PI*2*b,I=g>0?90+g/2:-90,x=S*((360-g)/360),w=X(c)==="object"?c:{count:c,gap:2},d=w.count,H=w.gap,K=ie(v),A=ie(h),N=A.find(function(E){return E&&X(E)==="object"}),W=N&&X(N)==="object",D=W?"butt":p,B=z(S,x,0,100,I,g,u,f,D,i),V=Ie(),j=function(){var R=0;return K.map(function(L,T){var Y=A[T]||A[A.length-1],F=z(S,x,R,L,I,g,u,Y,D,i);return R+=L,s.createElement(_e,{key:T,color:Y,ptg:L,radius:b,prefixCls:n,gradientId:P,style:F,strokeLinecap:D,strokeWidth:i,gapDegree:g,ref:function(Z){V[T]=Z},size:G})}).reverse()},k=function(){var R=Math.round(d*(K[0]/100)),L=100/d,T=0;return new Array(d).fill(null).map(function(Y,F){var q=F<=R-1?A[0]:f,Z=q&&X(q)==="object"?"url(#".concat(P,")"):void 0,te=z(S,x,T,L,I,g,u,q,"butt",i,H);return T+=(x-te.strokeDashoffset+H)*100/x,s.createElement("circle",{key:F,className:"".concat(n,"-circle-path"),r:b,cx:y,cy:y,stroke:Z,strokeWidth:i,opacity:1,style:te,ref:function(le){V[F]=le}})})};return s.createElement("svg",fe({className:M("".concat(n,"-circle"),m),viewBox:"0 0 ".concat(G," ").concat(G),style:C,id:o,role:"presentation"},$),!d&&s.createElement("circle",{className:"".concat(n,"-circle-trail"),r:b,cx:y,cy:y,stroke:f,strokeLinecap:D,strokeWidth:a||i,style:B}),d?k():j())};function _(e){return!e||e<0?0:e>100?100:e}function U(e){let{success:t,successPercent:r}=e,o=r;return t&&"progress"in t&&(o=t.progress),t&&"percent"in t&&(o=t.percent),o}const We=e=>{let{percent:t,success:r,successPercent:o}=e;const n=_(U({success:r,successPercent:o}));return[n,_(_(t)-n)]},Le=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:o}=t;return[o||ee.green,r||null]},Q=(e,t,r)=>{var o,n,c,i;let a=-1,l=-1;if(t==="step"){const g=r.steps,u=r.strokeWidth;typeof e=="string"||typeof e>"u"?(a=e==="small"?2:14,l=u??8):typeof e=="number"?[a,l]=[e,e]:[a=14,l=8]=Array.isArray(e)?e:[e.width,e.height],a*=g}else if(t==="line"){const g=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e>"u"?l=g||(e==="small"?6:8):typeof e=="number"?[a,l]=[e,e]:[a=-1,l=8]=Array.isArray(e)?e:[e.width,e.height]}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e>"u"?[a,l]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[a,l]=[e,e]:Array.isArray(e)&&(a=(n=(o=e[0])!==null&&o!==void 0?o:e[1])!==null&&n!==void 0?n:120,l=(i=(c=e[0])!==null&&c!==void 0?c:e[1])!==null&&i!==void 0?i:120));return[a,l]},Re=3,Te=e=>Re/e*100,Me=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:o="round",gapPosition:n,gapDegree:c,width:i=120,type:a,children:l,success:g,size:u=i,steps:f}=e,[p,C]=Q(u,"circle");let{strokeWidth:m}=e;m===void 0&&(m=Math.max(Te(p),6));const h={width:p,height:C,fontSize:p*.15+6},v=s.useMemo(()=>{if(c||c===0)return c;if(a==="dashboard")return 75},[c,a]),$=We(e),y=n||a==="dashboard"&&"bottom"||void 0,O=Object.prototype.toString.call(e.strokeColor)==="[object Object]",P=Le({success:g,strokeColor:e.strokeColor}),b=M(`${t}-inner`,{[`${t}-circle-gradient`]:O}),S=s.createElement(Ne,{steps:f,percent:f?$[1]:$,strokeWidth:m,trailWidth:m,strokeColor:f?P[1]:P,strokeLinecap:o,trailColor:r,prefixCls:t,gapDegree:v,gapPosition:y}),I=p<=20,x=s.createElement("div",{className:b,style:h},S,!I&&l);return I?s.createElement(pe,{title:l},x):x},J="--progress-line-stroke-color",ae="--progress-percent",ce=e=>{const t=e?"100%":"-100%";return new Ce(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},Be=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},ye(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize},[`${t}-outer`]:{display:"inline-flex",alignItems:"center",width:"100%"},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",flex:1,overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",background:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-layout-bottom`]:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",[`${t}-text`]:{width:"max-content",marginInlineStart:0,marginTop:e.marginXXS}},[`${t}-bg`]:{overflow:"hidden","&::after":{content:'""',background:{_multi_value_:!0,value:["inherit",`var(${J})`]},height:"100%",width:`calc(1 / var(${ae}) * 100%)`,display:"block"},[`&${t}-bg-inner`]:{minWidth:"max-content","&::after":{content:"none"},[`${t}-text-inner`]:{color:e.colorWhite,[`&${t}-text-bright`]:{color:"rgba(0, 0, 0, 0.45)"}}}},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,width:"2em",whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize},[`&${t}-text-outer`]:{width:"max-content"},[`&${t}-text-outer${t}-text-start`]:{width:"max-content",marginInlineStart:0,marginInlineEnd:e.marginXS}},[`${t}-text-inner`]:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",marginInlineStart:0,padding:`0 ${he(e.paddingXXS)}`,[`&${t}-text-start`]:{justifyContent:"start"},[`&${t}-text-end`]:{justifyContent:"end"}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:ce(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:ce(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Fe=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:e.circleIconFontSize}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},Xe=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},Ge=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},He=e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em",circleIconFontSize:`${e.fontSize/e.fontSizeSM}em`}),Ke=me("Progress",e=>{const t=e.calc(e.marginXXS).div(2).equal(),r=ve(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[Be(r),Fe(r),Xe(r),Ge(r)]},He);var Ve=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const qe=e=>{let t=[];return Object.keys(e).forEach(r=>{const o=parseFloat(r.replace(/%/g,""));isNaN(o)||t.push({key:o,value:e[r]})}),t=t.sort((r,o)=>r.key-o.key),t.map(r=>{let{key:o,value:n}=r;return`${n} ${o}%`}).join(", ")},Ue=(e,t)=>{const{from:r=ee.blue,to:o=ee.blue,direction:n=t==="rtl"?"to left":"to right"}=e,c=Ve(e,["from","to","direction"]);if(Object.keys(c).length!==0){const a=qe(c),l=`linear-gradient(${n}, ${a})`;return{background:l,[J]:l}}const i=`linear-gradient(${n}, ${r}, ${o})`;return{background:i,[J]:i}},Je=e=>{const{prefixCls:t,direction:r,percent:o,size:n,strokeWidth:c,strokeColor:i,strokeLinecap:a="round",children:l,trailColor:g=null,percentPosition:u,success:f}=e,{align:p,type:C}=u,m=i&&typeof i!="string"?Ue(i,r):{[J]:i,background:i},h=a==="square"||a==="butt"?0:void 0,v=n??[-1,c||(n==="small"?6:8)],[$,y]=Q(v,"line",{strokeWidth:c}),O={backgroundColor:g||void 0,borderRadius:h},P=Object.assign(Object.assign({width:`${_(o)}%`,height:y,borderRadius:h},m),{[ae]:_(o)/100}),b=U(e),S={width:`${_(b)}%`,height:y,borderRadius:h,backgroundColor:f==null?void 0:f.strokeColor},I={width:$<0?"100%":$},x=s.createElement("div",{className:`${t}-inner`,style:O},s.createElement("div",{className:M(`${t}-bg`,`${t}-bg-${C}`),style:P},C==="inner"&&l),b!==void 0&&s.createElement("div",{className:`${t}-success-bg`,style:S})),w=C==="outer"&&p==="start",d=C==="outer"&&p==="end";return C==="outer"&&p==="center"?s.createElement("div",{className:`${t}-layout-bottom`},x,l):s.createElement("div",{className:`${t}-outer`,style:I},w&&l,x,d&&l)},Qe=e=>{const{size:t,steps:r,percent:o=0,strokeWidth:n=8,strokeColor:c,trailColor:i=null,prefixCls:a,children:l}=e,g=Math.round(r*(o/100)),f=t??[t==="small"?2:14,n],[p,C]=Q(f,"step",{steps:r,strokeWidth:n}),m=p/r,h=new Array(r);for(let v=0;v<r;v++){const $=Array.isArray(c)?c[v]:c;h[v]=s.createElement("div",{key:v,className:M(`${a}-steps-item`,{[`${a}-steps-item-active`]:v<=g-1}),style:{backgroundColor:v<=g-1?$:i,width:m,height:C}})}return s.createElement("div",{className:`${a}-steps-outer`},h,l)};var Ye=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const Ze=["normal","exception","active","success"],rt=s.forwardRef((e,t)=>{const{prefixCls:r,className:o,rootClassName:n,steps:c,strokeColor:i,percent:a=0,size:l="default",showInfo:g=!0,type:u="line",status:f,format:p,style:C,percentPosition:m={}}=e,h=Ye(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style","percentPosition"]),{align:v="end",type:$="outer"}=m,y=Array.isArray(i)?i[0]:i,O=typeof i=="string"||Array.isArray(i)?i:void 0,P=s.useMemo(()=>{if(y){const j=typeof y=="string"?y:Object.values(y)[0];return new $e(j).isLight()}return!1},[i]),b=s.useMemo(()=>{var j,k;const E=U(e);return parseInt(E!==void 0?(j=E??0)===null||j===void 0?void 0:j.toString():(k=a??0)===null||k===void 0?void 0:k.toString(),10)},[a,e.success,e.successPercent]),S=s.useMemo(()=>!Ze.includes(f)&&b>=100?"success":f||"normal",[f,b]),{getPrefixCls:I,direction:x,progress:w}=s.useContext(be),d=I("progress",r),[H,K,A]=Ke(d),N=u==="line",W=N&&!c,D=s.useMemo(()=>{if(!g)return null;const j=U(e);let k;const E=p||(L=>`${L}%`),R=N&&P&&$==="inner";return $==="inner"||p||S!=="exception"&&S!=="success"?k=E(_(a),_(j)):S==="exception"?k=N?s.createElement(xe,null):s.createElement(ke,null):S==="success"&&(k=N?s.createElement(Pe,null):s.createElement(we,null)),s.createElement("span",{className:M(`${d}-text`,{[`${d}-text-bright`]:R,[`${d}-text-${v}`]:W,[`${d}-text-${$}`]:W}),title:typeof k=="string"?k:void 0},k)},[g,a,b,S,u,d,p]);let B;u==="line"?B=c?s.createElement(Qe,Object.assign({},e,{strokeColor:O,prefixCls:d,steps:typeof c=="object"?c.count:c}),D):s.createElement(Je,Object.assign({},e,{strokeColor:y,prefixCls:d,direction:x,percentPosition:{align:v,type:$}}),D):(u==="circle"||u==="dashboard")&&(B=s.createElement(Me,Object.assign({},e,{strokeColor:y,prefixCls:d,progressStatus:S}),D));const V=M(d,`${d}-status-${S}`,{[`${d}-${u==="dashboard"&&"circle"||u}`]:u!=="line",[`${d}-inline-circle`]:u==="circle"&&Q(l,"circle")[0]<=20,[`${d}-line`]:W,[`${d}-line-align-${v}`]:W,[`${d}-line-position-${$}`]:W,[`${d}-steps`]:c,[`${d}-show-info`]:g,[`${d}-${l}`]:typeof l=="string",[`${d}-rtl`]:x==="rtl"},w==null?void 0:w.className,o,n,K,A);return H(s.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},w==null?void 0:w.style),C),className:V,role:"progressbar","aria-valuenow":b,"aria-valuemin":0,"aria-valuemax":100},Se(h,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),B))});export{rt as P};
