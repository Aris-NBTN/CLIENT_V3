import{r as b,ao as ee,K as L,ck as W,H as n,cR as D,_ as te,am as ne,c as S,cy as ae,e as re,b as oe}from"./index-CLgyQ1vx.js";var ie=L.ESC,le=L.TAB;function se(e){var u=e.visible,o=e.triggerRef,s=e.onVisibleChange,f=e.autoFocus,a=e.overlayRef,r=b.useRef(!1),c=function(){if(u){var t,i;(t=o.current)===null||t===void 0||(i=t.focus)===null||i===void 0||i.call(t),s==null||s(!1)}},h=function(){var t;return(t=a.current)!==null&&t!==void 0&&t.focus?(a.current.focus(),r.current=!0,!0):!1},p=function(t){switch(t.keyCode){case ie:c();break;case le:{var i=!1;r.current||(i=h()),i?t.preventDefault():c();break}}};b.useEffect(function(){return u?(window.addEventListener("keydown",p),f&&ee(h,3),function(){window.removeEventListener("keydown",p),r.current=!1}):function(){r.current=!1}},[u])}var ce=b.forwardRef(function(e,u){var o=e.overlay,s=e.arrow,f=e.prefixCls,a=b.useMemo(function(){var c;return typeof o=="function"?c=o():c=o,c},[o]),r=W(u,a==null?void 0:a.ref);return n.createElement(n.Fragment,null,s&&n.createElement("div",{className:"".concat(f,"-arrow")}),n.cloneElement(a,{ref:D(a)?r:void 0}))}),v={adjustX:1,adjustY:1},d=[0,0],ue={topLeft:{points:["bl","tl"],overflow:v,offset:[0,-4],targetOffset:d},top:{points:["bc","tc"],overflow:v,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:v,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:v,offset:[0,4],targetOffset:d},bottom:{points:["tc","bc"],overflow:v,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:v,offset:[0,4],targetOffset:d}},fe=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function ve(e,u){var o,s=e.arrow,f=s===void 0?!1:s,a=e.prefixCls,r=a===void 0?"rc-dropdown":a,c=e.transitionName,h=e.animation,p=e.align,g=e.placement,t=g===void 0?"bottomLeft":g,i=e.placements,_=i===void 0?ue:i,j=e.getPopupContainer,K=e.showAction,$=e.hideAction,H=e.overlayClassName,B=e.overlayStyle,I=e.visible,A=e.trigger,M=A===void 0?["hover"]:A,X=e.autoFocus,N=e.overlay,y=e.children,w=e.onVisibleChange,Y=te(e,fe),q=n.useState(),E=ne(q,2),z=E[0],x=E[1],R="visible"in e?I:z,P=n.useRef(null),k=n.useRef(null),V=n.useRef(null);n.useImperativeHandle(u,function(){return P.current});var T=function(l){x(l),w==null||w(l)};se({visible:R,triggerRef:V,onVisibleChange:T,autoFocus:X,overlayRef:k});var G=function(l){var C=e.onOverlayClick;x(!1),C&&C(l)},F=function(){return n.createElement(ce,{ref:k,overlay:N,prefixCls:r,arrow:f})},J=function(){return typeof N=="function"?F:F()},Q=function(){var l=e.minOverlayWidthMatchTrigger,C=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?l:!C},U=function(){var l=e.openClassName;return l!==void 0?l:"".concat(r,"-open")},Z=n.cloneElement(y,{className:S((o=y.props)===null||o===void 0?void 0:o.className,R&&U()),ref:D(y)?W(V,y.ref):void 0}),O=$;return!O&&M.indexOf("contextMenu")!==-1&&(O=["click"]),n.createElement(ae,re({builtinPlacements:_},Y,{prefixCls:r,ref:P,popupClassName:S(H,oe({},"".concat(r,"-show-arrow"),f)),popupStyle:B,action:M,showAction:K,hideAction:O,popupPlacement:t,popupAlign:p,popupTransitionName:c,popupAnimation:h,popupVisible:R,stretch:Q()?"minWidth":"",popup:J(),onPopupVisibleChange:T,onPopupClick:G,getPopupContainer:j}),Z)}const ge=n.forwardRef(ve);export{ge as D};
