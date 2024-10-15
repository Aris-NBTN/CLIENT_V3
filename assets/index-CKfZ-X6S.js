import{r as a,d as $,an as de,l as $t,_ as bt,bl as Qe,b as Rt,bm as Ht,ak as fe,K as Re,e as xt,ap as vt,ao as At,h as Wt,m as wt,f as ht,C as Ft,bn as jt,at as pt,c as mt,bo as zt,bp as Bt,n as Ut,bq as qt,au as Gt,av as gt}from"./index-Co2b9eaw.js";import{u as Xt,a as Yt,B as Jt,b as Zt,c as Qt,d as er,D as tr,m as rr}from"./index-65az3BYH.js";import{c as rt,a as nr,T as ar,i as lr,g as or,b as ir,S as cr}from"./iconUtil-C6vpHn6K.js";import"./Overflow-Dnojmods.js";import{g as ur}from"./PurePanel-DJf5xHWr.js";import{u as sr,g as dr,a as fr}from"./useVariants-Df-QCdQc.js";const vr=function(e){var t=a.useRef({valueLabels:new Map});return a.useMemo(function(){var l=t.current.valueLabels,n=new Map,r=e.map(function(c){var o,u=c.value,i=(o=c.label)!==null&&o!==void 0?o:l.get(u);return n.set(u,i),$($({},c),{},{label:i})});return t.current.valueLabels=n,[r]},[e])},hr=function(e,t,l,n){return a.useMemo(function(){var r=e.map(function(i){var s=i.value;return s}),c=t.map(function(i){var s=i.value;return s}),o=r.filter(function(i){return!n[i]});if(l){var u=rt(r,!0,n);r=u.checkedKeys,c=u.halfCheckedKeys}return[Array.from(new Set([].concat(de(o),de(r)))),c]},[e,t,l,n])};function pr(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function mr(e){var t=e||{},l=t.label,n=t.value,r=t.children,c=n||"value";return{_title:l?[l]:["title","label"],value:c,key:c,children:r||"children"}}function nt(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function gr(e,t){var l=[];function n(r){r.forEach(function(c){var o=c[t.children];o&&(l.push(c[t.value]),n(o))})}return n(e),l}function St(e){return e==null}const Sr=function(e,t){return a.useMemo(function(){var l=nr(e,{fieldNames:t,initWrapper:function(r){return $($({},r),{},{valueEntities:new Map})},processEntity:function(r,c){var o=r.node[t.value];c.valueEntities.set(o,r)}});return l},[e,t])};var lt=function(){return null},Cr=["children","value"];function It(e){return $t(e).map(function(t){if(!a.isValidElement(t)||!t.type)return null;var l=t,n=l.key,r=l.props,c=r.children,o=r.value,u=bt(r,Cr),i=$({key:n,value:o},u),s=It(c);return s.length&&(i.children=s),i}).filter(function(t){return t})}function at(e){if(!e)return e;var t=$({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return Qe(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),t}}),t}function yr(e,t,l,n,r,c){var o=null,u=null;function i(){function s(d){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return d.map(function(y,M){var E="".concat(k,"-").concat(M),N=y[c.value],F=l.includes(N),G=s(y[c.children]||[],E,F),j=a.createElement(lt,y,G.map(function(z){return z.node}));if(t===N&&(o=j),F){var te={pos:E,node:j,children:G};return I||u.push(te),te}return null}).filter(function(y){return y})}u||(u=[],s(n),u.sort(function(d,k){var I=d.node.props.value,y=k.node.props.value,M=l.indexOf(I),E=l.indexOf(y);return M-E}))}Object.defineProperty(e,"triggerNode",{get:function(){return Qe(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),i(),o}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return Qe(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),i(),r?u:u.map(function(d){var k=d.node;return k})}})}const br=function(e,t,l){var n=l.treeNodeFilterProp,r=l.filterTreeNode,c=l.fieldNames,o=c.children;return a.useMemo(function(){if(!t||r===!1)return e;var u;if(typeof r=="function")u=r;else{var i=t.toUpperCase();u=function(k,I){var y=I[n];return String(y).toUpperCase().includes(i)}}function s(d){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return d.reduce(function(I,y){var M=y[o],E=k||u(t,at(y)),N=s(M||[],E);return(E||N.length)&&I.push($($({},y),{},Rt({isLeaf:void 0},o,N))),I},[])}return s(e)},[e,t,o,n,r])};function Ct(e){var t=a.useRef();t.current=e;var l=a.useCallback(function(){return t.current.apply(t,arguments)},[]);return l}function xr(e,t){var l=t.id,n=t.pId,r=t.rootPId,c={},o=[],u=e.map(function(i){var s=$({},i),d=s[l];return c[d]=s,s.key=s.key||d,s});return u.forEach(function(i){var s=i[n],d=c[s];d&&(d.children=d.children||[],d.children.push(i)),(s===r||!d&&r===null)&&o.push(i)}),o}function wr(e,t,l){return a.useMemo(function(){return e?l?xr(e,$({id:"id",pId:"pId",rootPId:null},l!==!0?l:{})):e:It(t)},[t,l,e])}var Et=a.createContext(null),kt=a.createContext(null),Ir={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Er=function(t,l){var n=Xt(),r=n.prefixCls,c=n.multiple,o=n.searchValue,u=n.toggleOpen,i=n.open,s=n.notFoundContent,d=a.useContext(kt),k=d.virtual,I=d.listHeight,y=d.listItemHeight,M=d.listItemScrollOffset,E=d.treeData,N=d.fieldNames,F=d.onSelect,G=d.dropdownMatchSelectWidth,j=d.treeExpandAction,te=d.treeTitleRender,z=d.onPopupScroll,g=a.useContext(Et),R=g.checkable,D=g.checkedKeys,Te=g.halfCheckedKeys,ve=g.treeExpandedKeys,he=g.treeDefaultExpandAll,pe=g.treeDefaultExpandedKeys,me=g.onTreeExpand,X=g.treeIcon,De=g.showTreeIcon,ge=g.switcherIcon,Pe=g.treeLine,Y=g.treeNodeFilterProp,re=g.loadData,H=g.treeLoadedKeys,Le=g.treeMotion,_e=g.onTreeLoad,Me=g.keyEntities,B=a.useRef(),x=Ht(function(){return E},[i,E],function(b,f){return f[0]&&b[1]!==f[1]}),Se=a.useState(null),O=fe(Se,2),ne=O[0],ae=O[1],P=Me[ne],le=a.useMemo(function(){return R?{checked:D,halfChecked:Te}:null},[R,D,Te]);a.useEffect(function(){if(i&&!c&&D.length){var b;(b=B.current)===null||b===void 0||b.scrollTo({key:D[0]}),ae(D[0])}},[i]);var Ce=String(o).toLowerCase(),ye=function(f){return Ce?String(f[Y]).toLowerCase().includes(Ce):!1},be=a.useState(pe),A=fe(be,2),xe=A[0],Ae=A[1],We=a.useState(null),W=fe(We,2),J=W[0],we=W[1],V=a.useMemo(function(){return ve?de(ve):o?J:xe},[xe,J,ve,o]);a.useEffect(function(){o&&we(gr(E,N))},[o]);var Oe=function(f){Ae(f),we(f),me&&me(f)},Ie=function(f){f.preventDefault()},U=function(f,oe){var K=oe.node;R&&nt(K)||(F(K.key,{selected:!D.includes(K.key)}),c||u(!1))};if(a.useImperativeHandle(l,function(){var b;return{scrollTo:(b=B.current)===null||b===void 0?void 0:b.scrollTo,onKeyDown:function(oe){var K,ie=oe.which;switch(ie){case Re.UP:case Re.DOWN:case Re.LEFT:case Re.RIGHT:(K=B.current)===null||K===void 0||K.onKeyDown(oe);break;case Re.ENTER:{if(P){var ke=(P==null?void 0:P.node)||{},Fe=ke.selectable,Z=ke.value;Fe!==!1&&U(null,{node:{key:ne},selected:!D.includes(Z)})}break}case Re.ESC:u(!1)}},onKeyUp:function(){}}}),x.length===0)return a.createElement("div",{role:"listbox",className:"".concat(r,"-empty"),onMouseDown:Ie},s);var Ee={fieldNames:N};return H&&(Ee.loadedKeys=H),V&&(Ee.expandedKeys=V),a.createElement("div",{onMouseDown:Ie},P&&i&&a.createElement("span",{style:Ir,"aria-live":"assertive"},P.node.value),a.createElement(ar,xt({ref:B,focusable:!1,prefixCls:"".concat(r,"-tree"),treeData:x,height:I,itemHeight:y,itemScrollOffset:M,virtual:k!==!1&&G!==!1,multiple:c,icon:X,showIcon:De,switcherIcon:ge,showLine:Pe,loadData:o?null:re,motion:Le,activeKey:ne,checkable:R,checkStrictly:!0,checkedKeys:le,selectedKeys:R?[]:D,defaultExpandAll:he,titleRender:te},Ee,{onActiveChange:ae,onSelect:U,onCheck:U,onExpand:Oe,onLoad:_e,filterTreeNode:ye,expandAction:j,onScroll:z})))},kr=a.forwardRef(Er),ot="SHOW_ALL",it="SHOW_PARENT",et="SHOW_CHILD";function yt(e,t,l,n){var r=new Set(e);return t===et?e.filter(function(c){var o=l[c];return!(o&&o.children&&o.children.some(function(u){var i=u.node;return r.has(i[n.value])})&&o.children.every(function(u){var i=u.node;return nt(i)||r.has(i[n.value])}))}):t===it?e.filter(function(c){var o=l[c],u=o?o.parent:null;return!(u&&!nt(u.node)&&r.has(u.key))}):e}var Nr=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","listItemScrollOffset","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion","treeTitleRender","onPopupScroll"];function Tr(e){return!e||At(e)!=="object"}var Dr=a.forwardRef(function(e,t){var l=e.id,n=e.prefixCls,r=n===void 0?"rc-tree-select":n,c=e.value,o=e.defaultValue,u=e.onChange,i=e.onSelect,s=e.onDeselect,d=e.searchValue,k=e.inputValue,I=e.onSearch,y=e.autoClearSearchValue,M=y===void 0?!0:y,E=e.filterTreeNode,N=e.treeNodeFilterProp,F=N===void 0?"value":N,G=e.showCheckedStrategy,j=e.treeNodeLabelProp,te=e.multiple,z=e.treeCheckable,g=e.treeCheckStrictly,R=e.labelInValue,D=e.fieldNames,Te=e.treeDataSimpleMode,ve=e.treeData,he=e.children,pe=e.loadData,me=e.treeLoadedKeys,X=e.onTreeLoad,De=e.treeDefaultExpandAll,ge=e.treeExpandedKeys,Pe=e.treeDefaultExpandedKeys,Y=e.onTreeExpand,re=e.treeExpandAction,H=e.virtual,Le=e.listHeight,_e=Le===void 0?200:Le,Me=e.listItemHeight,B=Me===void 0?20:Me,x=e.listItemScrollOffset,Se=x===void 0?0:x,O=e.onDropdownVisibleChange,ne=e.dropdownMatchSelectWidth,ae=ne===void 0?!0:ne,P=e.treeLine,le=e.treeIcon,Ce=e.showTreeIcon,ye=e.switcherIcon,be=e.treeMotion,A=e.treeTitleRender,xe=e.onPopupScroll,Ae=bt(e,Nr),We=Yt(l),W=z&&!g,J=z||g,we=g||R,V=J||te,Oe=vt(o,{value:c}),Ie=fe(Oe,2),U=Ie[0],Ee=Ie[1],b=a.useMemo(function(){return z?G||et:ot},[G,z]),f=a.useMemo(function(){return mr(D)},[JSON.stringify(D)]),oe=vt("",{value:d!==void 0?d:k,postState:function(v){return v||""}}),K=fe(oe,2),ie=K[0],ke=K[1],Fe=function(v){ke(v),I==null||I(v)},Z=wr(ve,he,Te),Ue=Sr(Z,f),T=Ue.keyEntities,Q=Ue.valueEntities,qe=a.useCallback(function(h){var v=[],p=[];return h.forEach(function(S){Q.has(S)?p.push(S):v.push(S)}),{missingRawValues:v,existRawValues:p}},[Q]),Ge=br(Z,ie,{fieldNames:f,treeNodeFilterProp:F,filterTreeNode:E}),Xe=a.useCallback(function(h){if(h){if(j)return h[j];for(var v=f._title,p=0;p<v.length;p+=1){var S=h[v[p]];if(S!==void 0)return S}}},[f,j]),ee=a.useCallback(function(h){var v=pr(h);return v.map(function(p){return Tr(p)?{value:p}:p})},[]),ce=a.useCallback(function(h){var v=ee(h);return v.map(function(p){var S=p.label,L=p.value,w=p.halfChecked,C,m=Q.get(L);if(m){var _;S=A?A(m.node):(_=S)!==null&&_!==void 0?_:Xe(m.node),C=m.node.disabled}else if(S===void 0){var ue=ee(U).find(function(je){return je.value===L});S=ue.label}return{label:S,value:L,halfChecked:w,disabled:C}})},[Q,Xe,ee,U]),ct=a.useMemo(function(){return ee(U)},[ee,U]),Nt=a.useMemo(function(){var h=[],v=[];return ct.forEach(function(p){p.halfChecked?v.push(p):h.push(p)}),[h,v]},[ct]),ut=fe(Nt,2),Ve=ut[0],st=ut[1],dt=a.useMemo(function(){return Ve.map(function(h){return h.value})},[Ve]),Tt=hr(Ve,st,W,T),ft=fe(Tt,2),Ke=ft[0],Ye=ft[1],Dt=a.useMemo(function(){var h=yt(Ke,b,T,f),v=h.map(function(w){var C,m;return(C=(m=T[w])===null||m===void 0||(m=m.node)===null||m===void 0?void 0:m[f.value])!==null&&C!==void 0?C:w}),p=v.map(function(w){var C=Ve.find(function(_){return _.value===w}),m;return R&&C.label!==void 0?m=C.label:!R&&A&&(m=A(C)),{value:w,label:m}}),S=ce(p),L=S[0];return!V&&L&&St(L.value)&&St(L.label)?[]:S.map(function(w){var C;return $($({},w),{},{label:(C=w.label)!==null&&C!==void 0?C:w.value})})},[f,V,Ke,Ve,ce,b,T]),Pt=vr(Dt),Lt=fe(Pt,1),_t=Lt[0],Je=Ct(function(h,v,p){var S=ce(h);if(Ee(S),M&&ke(""),u){var L=h;if(W){var w=yt(h,b,T,f);L=w.map(function(q){var se=Q.get(q);return se?se.node[f.value]:q})}var C=v||{triggerValue:void 0,selected:void 0},m=C.triggerValue,_=C.selected,ue=L;if(g){var je=st.filter(function(q){return!L.includes(q.value)});ue=[].concat(de(ue),de(je))}var ze=ce(ue),Ne={preValue:Ve,triggerValue:m},$e=!0;(g||p==="selection"&&!_)&&($e=!1),yr(Ne,m,h,Z,$e,f),J?Ne.checked=_:Ne.selected=_;var Ze=we?ze:ze.map(function(q){return q.value});u(V?Ze:Ze[0],we?null:ze.map(function(q){return q.label}),Ne)}}),tt=a.useCallback(function(h,v){var p,S=v.selected,L=v.source,w=T[h],C=w==null?void 0:w.node,m=(p=C==null?void 0:C[f.value])!==null&&p!==void 0?p:h;if(!V)Je([m],{selected:!0,triggerValue:m},"option");else{var _=S?[].concat(de(dt),[m]):Ke.filter(function(se){return se!==m});if(W){var ue=qe(_),je=ue.missingRawValues,ze=ue.existRawValues,Ne=ze.map(function(se){return Q.get(se).key}),$e;if(S){var Ze=rt(Ne,!0,T);$e=Ze.checkedKeys}else{var q=rt(Ne,{checked:!1,halfCheckedKeys:Ye},T);$e=q.checkedKeys}_=[].concat(de(je),de($e.map(function(se){return T[se].node[f.value]})))}Je(_,{selected:S,triggerValue:m},L||"option")}S||!V?i==null||i(m,at(C)):s==null||s(m,at(C))},[qe,Q,T,f,V,dt,Je,W,i,s,Ke,Ye]),Mt=a.useCallback(function(h){if(O){var v={};Object.defineProperty(v,"documentClickClose",{get:function(){return Qe(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),O(h,v)}},[O]),Ot=Ct(function(h,v){var p=h.map(function(S){return S.value});if(v.type==="clear"){Je(p,{},"selection");return}v.values.length&&tt(v.values[0].value,{selected:!1,source:"selection"})}),Vt=a.useMemo(function(){return{virtual:H,dropdownMatchSelectWidth:ae,listHeight:_e,listItemHeight:B,listItemScrollOffset:Se,treeData:Ge,fieldNames:f,onSelect:tt,treeExpandAction:re,treeTitleRender:A,onPopupScroll:xe}},[H,ae,_e,B,Se,Ge,f,tt,re,A,xe]),Kt=a.useMemo(function(){return{checkable:J,loadData:pe,treeLoadedKeys:me,onTreeLoad:X,checkedKeys:Ke,halfCheckedKeys:Ye,treeDefaultExpandAll:De,treeExpandedKeys:ge,treeDefaultExpandedKeys:Pe,onTreeExpand:Y,treeIcon:le,treeMotion:be,showTreeIcon:Ce,switcherIcon:ye,treeLine:P,treeNodeFilterProp:F,keyEntities:T}},[J,pe,me,X,Ke,Ye,De,ge,Pe,Y,le,be,Ce,ye,P,F,T]);return a.createElement(kt.Provider,{value:Vt},a.createElement(Et.Provider,{value:Kt},a.createElement(Jt,xt({ref:t},Ae,{id:We,prefixCls:r,mode:V?"multiple":void 0,displayValues:_t,onDisplayValuesChange:Ot,searchValue:ie,onSearch:Fe,OptionList:kr,emptyOptions:!Z.length,onDropdownVisibleChange:Mt,dropdownMatchSelectWidth:ae}))))}),Be=Dr;Be.TreeNode=lt;Be.SHOW_ALL=ot;Be.SHOW_PARENT=it;Be.SHOW_CHILD=et;const Pr=e=>{const{componentCls:t,treePrefixCls:l,colorBgElevated:n}=e,r=`.${l}`;return[{[`${t}-dropdown`]:[{padding:`${ht(e.paddingXS)} ${ht(e.calc(e.paddingXS).div(2).equal())}`},or(l,wt(e,{colorBgContainer:n})),{[r]:{borderRadius:0,[`${r}-list-holder-inner`]:{alignItems:"stretch",[`${r}-treenode`]:{[`${r}-node-content-wrapper`]:{flex:"auto"}}}}},ir(`${l}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${r}-switcher${r}-switcher_close`]:{[`${r}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};function Lr(e,t,l){return Wt("TreeSelect",n=>{const r=wt(n,{treePrefixCls:t});return[Pr(r)]},lr)(e,l)}var _r=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l};const Mr=(e,t)=>{var l;const{prefixCls:n,size:r,disabled:c,bordered:o=!0,className:u,rootClassName:i,treeCheckable:s,multiple:d,listHeight:k=256,listItemHeight:I=26,placement:y,notFoundContent:M,switcherIcon:E,treeLine:N,getPopupContainer:F,popupClassName:G,dropdownClassName:j,treeIcon:te=!1,transitionName:z,choiceTransitionName:g="",status:R,treeExpandAction:D,builtinPlacements:Te,dropdownMatchSelectWidth:ve,popupMatchSelectWidth:he,allowClear:pe,variant:me,dropdownStyle:X,tagRender:De}=e,ge=_r(e,["prefixCls","size","disabled","bordered","className","rootClassName","treeCheckable","multiple","listHeight","listItemHeight","placement","notFoundContent","switcherIcon","treeLine","getPopupContainer","popupClassName","dropdownClassName","treeIcon","transitionName","choiceTransitionName","status","treeExpandAction","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","allowClear","variant","dropdownStyle","tagRender"]),{getPopupContainer:Pe,getPrefixCls:Y,renderEmpty:re,direction:H,virtual:Le,popupMatchSelectWidth:_e,popupOverflow:Me}=a.useContext(Ft),B=Y(),x=Y("select",n),Se=Y("select-tree",n),O=Y("tree-select",n),{compactSize:ne,compactItemClassnames:ae}=jt(x,H),P=pt(x),le=pt(O),[Ce,ye,be]=Zt(x,P),[A]=Lr(O,Se,le),[xe,Ae]=sr("treeSelect",me,o),We=mt(G||j,`${O}-dropdown`,{[`${O}-dropdown-rtl`]:H==="rtl"},i,be,P,le,ye),W=!!(s||d),J=Qt(e.suffixIcon,e.showArrow),we=(l=he??ve)!==null&&l!==void 0?l:_e,{status:V,hasFeedback:Oe,isFormItemInput:Ie,feedbackIcon:U}=a.useContext(zt),Ee=fr(V,R),{suffixIcon:b,removeIcon:f,clearIcon:oe}=er(Object.assign(Object.assign({},ge),{multiple:W,showSuffixIcon:J,hasFeedback:Oe,feedbackIcon:U,prefixCls:x,componentName:"TreeSelect"})),K=pe===!0?{clearIcon:oe}:pe;let ie;M!==void 0?ie=M:ie=(re==null?void 0:re("Select"))||a.createElement(tr,{componentName:"Select"});const ke=Bt(ge,["suffixIcon","removeIcon","clearIcon","itemIcon","switcherIcon"]),Fe=a.useMemo(()=>y!==void 0?y:H==="rtl"?"bottomRight":"bottomLeft",[y,H]),Z=Ut(ee=>{var ce;return(ce=r??ne)!==null&&ce!==void 0?ce:ee}),Ue=a.useContext(qt),T=c??Ue,Q=mt(!n&&O,{[`${x}-lg`]:Z==="large",[`${x}-sm`]:Z==="small",[`${x}-rtl`]:H==="rtl",[`${x}-${xe}`]:Ae,[`${x}-in-form-item`]:Ie},dr(x,Ee,Oe),ae,u,i,be,P,le,ye),qe=ee=>a.createElement(cr,{prefixCls:Se,switcherIcon:E,treeNodeProps:ee,showLine:N}),[Ge]=Gt("SelectLike",X==null?void 0:X.zIndex),Xe=a.createElement(Be,Object.assign({virtual:Le,disabled:T},ke,{dropdownMatchSelectWidth:we,builtinPlacements:rr(Te,Me),ref:t,prefixCls:x,className:Q,listHeight:k,listItemHeight:I,treeCheckable:s&&a.createElement("span",{className:`${x}-tree-checkbox-inner`}),treeLine:!!N,suffixIcon:b,multiple:W,placement:Fe,removeIcon:f,allowClear:K,switcherIcon:qe,showTreeIcon:te,notFoundContent:ie,getPopupContainer:F||Pe,treeMotion:null,dropdownClassName:We,dropdownStyle:Object.assign(Object.assign({},X),{zIndex:Ge}),choiceTransitionName:gt(B,"",g),transitionName:gt(B,"slide-up",z),treeExpandAction:D,tagRender:W?De:void 0}));return Ce(A(Xe))},Or=a.forwardRef(Mr),He=Or,Vr=ur(He);He.TreeNode=lt;He.SHOW_ALL=ot;He.SHOW_PARENT=it;He.SHOW_CHILD=et;He._InternalPanelDoNotUseOrYouWillBeFired=Vr;export{He as T};
