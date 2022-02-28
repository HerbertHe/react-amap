/*! For license information please see uiw-vendor.e9672d8c.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4382],{70556:function(e){e.exports=function(){"use strict";function e(e,t){var i=document.createElement("textarea");i.value=e,i.setAttribute("readonly",""),i.style={position:"absolute",left:"-9999px"},document.body.appendChild(i);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);i.select();var r=!1;try{r=!!document.execCommand("copy")}catch(o){r=!1}document.body.removeChild(i),n&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),t&&t(r)}return e}()},69882:function(e,t,i){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}i.d(t,{Z:function(){return q}});var o=i(41473),s=i(25773),a=i(30808),l=i(11026),d=i(91426),c=i(68614),h=i(97680),u=i(28982),p=i(60009),f=u.tk.theme({"&":{backgroundColor:"#fff"}},{dark:!1});var v=i(69286),m=["className","value","selection","extensions","onChange","onUpdate","autoFocus","theme","height","minHeight","maxHeight","width","minWidth","maxWidth","basicSetup","placeholder","indentWithTab","editable","root"],g=o.forwardRef((function(e,t){var i=e.className,n=e.value,r=void 0===n?"":n,g=e.selection,C=e.extensions,x=void 0===C?[]:C,L=e.onChange,b=e.onUpdate,y=e.autoFocus,w=e.theme,j=void 0===w?"light":w,S=e.height,Z=e.minHeight,N=e.maxHeight,M=e.width,E=e.minWidth,z=e.maxWidth,k=e.basicSetup,H=e.placeholder,W=e.indentWithTab,O=e.editable,B=e.root,D=(0,a.Z)(e,m),P=(0,o.useRef)(null),R=function(e){var t=e.value,i=e.selection,n=e.onChange,r=e.onUpdate,s=e.extensions,a=void 0===s?[]:s,v=e.autoFocus,m=e.theme,g=void 0===m?"light":m,C=e.height,x=void 0===C?"":C,L=e.minHeight,b=void 0===L?"":L,y=e.maxHeight,w=void 0===y?"":y,j=e.placeholder,S=void 0===j?"":j,Z=e.width,N=void 0===Z?"":Z,M=e.minWidth,E=void 0===M?"":M,z=e.maxWidth,k=void 0===z?"":z,H=e.editable,W=void 0===H||H,O=e.indentWithTab,B=void 0===O||O,D=e.basicSetup,P=void 0===D||D,R=e.root,_=(0,o.useState)(e.container),T=(0,l.Z)(_,2),A=T[0],I=T[1],F=(0,o.useState)(),X=(0,l.Z)(F,2),U=X[0],Y=X[1],J=(0,o.useState)(),q=(0,l.Z)(J,2),$=q[0],V=q[1],G=u.tk.theme({"&":{height:x,minHeight:b,maxHeight:w,width:N,minWidth:E,maxWidth:k}}),K=[u.tk.updateListener.of((function(e){if(e.docChanged&&"function"===typeof n){var t=e.state.doc.toString();n(t,e)}})),G];switch(B&&K.unshift(u.$f.of([h.oc])),P&&K.unshift(d.Xy),S&&K.unshift((0,u.W$)(S)),g){case"light":K.push(f);break;case"dark":K.push(p.vk);break;default:K.push(g)}return!1===W&&K.push(u.tk.editable.of(!1)),r&&"function"===typeof r&&K.push(u.tk.updateListener.of(r)),K=K.concat(a),(0,o.useEffect)((function(){if(A&&!$){var e=c.yy.create({doc:t,selection:i,extensions:K});if(V(e),!U){var n=new u.tk({state:e,parent:A,root:R});Y(n)}}}),[A,$]),(0,o.useEffect)((function(){return function(){U&&U.destroy()}}),[U]),(0,o.useEffect)((function(){if(U){var e=U.state.doc.toString();t!==e&&U.dispatch({changes:{from:0,to:e.length,insert:t||""}})}}),[t,U]),(0,o.useEffect)((function(){U&&U.dispatch({effects:c.Py.reconfigure.of(K)})}),[g,a,S,x,b,w,N,E,k,W,B,P]),(0,o.useEffect)((function(){v&&U&&U.focus()}),[v,U]),{state:$,setState:V,view:U,setView:Y,container:A,setContainer:I}}({container:P.current,root:B,value:r,autoFocus:y,theme:j,height:S,minHeight:Z,maxHeight:N,width:M,minWidth:E,maxWidth:z,basicSetup:k,placeholder:H,indentWithTab:W,editable:O,selection:g,onChange:L,onUpdate:b,extensions:x}),_=R.state,T=R.view,A=R.container,I=R.setContainer;if((0,o.useImperativeHandle)(t,(function(){return{editor:A,state:_,view:T}}),[A,_,T]),(0,o.useEffect)((function(){return I(P.current),function(){T&&T.destroy()}}),[]),"string"!==typeof r)throw new Error("value must be typeof string but got "+typeof r);var F="string"===typeof j?"cm-theme-"+j:"cm-theme";return(0,v.jsx)("div",(0,s.Z)({ref:P,className:F+(i?" "+i:"")},D))}));g.displayName="CodeMirror";var C=g,x=i(70556),L=i.n(x),b=i(2552),y=i(22951),w=i(91976),j=i(47169),S=i(67591),Z=i(43415),N=["prefixCls","className","children","mode","visiable","renderBar","lineBar","disable","onDragEnd","onDragging"],M=function(e){(0,S.Z)(i,e);var t=(0,Z.Z)(i);function i(e){var n;return(0,y.Z)(this,i),(n=t.call(this,e)).state={dragging:!1},n.warpper=void 0,n.paneNumber=void 0,n.startX=void 0,n.startY=void 0,n.move=void 0,n.target=void 0,n.boxWidth=void 0,n.boxHeight=void 0,n.preWidth=void 0,n.nextWidth=void 0,n.preHeight=void 0,n.nextHeight=void 0,n.preSize=void 0,n.nextSize=void 0,n.onDragEnd=n.onDragEnd.bind((0,j.Z)(n)),n.onDragging=n.onDragging.bind((0,j.Z)(n)),n}return(0,w.Z)(i,[{key:"componentWillUnmount",value:function(){this.removeEvent()}},{key:"removeEvent",value:function(){window.removeEventListener("mousemove",this.onDragging,!1),window.removeEventListener("mouseup",this.onDragEnd,!1)}},{key:"onMouseDown",value:function(e,t){if(t.target&&this.warpper){this.paneNumber=e,this.startX=t.clientX,this.startY=t.clientY,this.move=!0,this.target=t.target.parentNode;var i=this.target.previousElementSibling,n=this.target.nextElementSibling;this.boxWidth=this.warpper.clientWidth,this.boxHeight=this.warpper.clientHeight,i&&(this.preWidth=i.clientWidth,this.preHeight=i.clientHeight),n&&(this.nextWidth=n.clientWidth,this.nextHeight=n.clientHeight),window.addEventListener("mousemove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd,!1),this.setState({dragging:!0})}}},{key:"onDragging",value:function(e){if(this.move){this.state.dragging||this.setState({dragging:!0});var t=this.props,i=t.mode,n=t.onDragging,r=this.target.nextElementSibling,o=this.target.previousElementSibling,s=e.clientX-this.startX,a=e.clientY-this.startY;if(this.preSize=0,this.nextSize=0,"horizontal"===i){if(this.preSize=this.preWidth+s>-1?this.preWidth+s:0,this.nextSize=this.nextWidth-s>-1?this.nextWidth-s:0,0===this.preSize||0===this.nextSize)return;this.preSize=100*(this.preSize/this.boxWidth>=1?1:this.preSize/this.boxWidth),this.nextSize=100*(this.nextSize/this.boxWidth>=1?1:this.nextSize/this.boxWidth),o&&r&&(o.style.width=this.preSize+"%",r.style.width=this.nextSize+"%")}if("vertical"===i&&this.preHeight+a>-1&&this.nextHeight-a>-1){if(this.preSize=this.preHeight+a>-1?this.preHeight+a:0,this.nextSize=this.nextHeight-a>-1?this.nextHeight-a:0,this.preSize=100*(this.preSize/this.boxHeight>=1?1:this.preSize/this.boxHeight),this.nextSize=100*(this.nextSize/this.boxHeight>=1?1:this.nextSize/this.boxHeight),0===this.preSize||0===this.nextSize)return;o&&r&&(o.style.height=this.preSize+"%",r.style.height=this.nextSize+"%")}n&&n(this.preSize,this.nextSize,this.paneNumber)}}},{key:"onDragEnd",value:function(){var e=this.props.onDragEnd;this.move=!1,e&&e(this.preSize,this.nextSize,this.paneNumber),this.removeEvent(),this.setState({dragging:!1})}},{key:"render",value:function(){var e=this,t=this.props,i=t.prefixCls,n=t.className,r=t.children,l=t.mode,d=t.visiable,c=t.renderBar,h=t.lineBar,u=t.disable,p=(0,a.Z)(t,N),f=this.state.dragging,m=[i,n,i+"-"+l,f?"dragging":null].filter(Boolean).join(" ").trim(),g=o.Children.toArray(r);return(0,v.jsx)("div",(0,s.Z)({className:m},p,{ref:function(t){return e.warpper=t},children:o.Children.map(g,(function(t,n){var r=Object.assign({},t.props,{className:[i+"-pane",t.props.className].filter(Boolean).join(" ").trim(),style:(0,s.Z)({},t.props.style)}),a=!0===d||d&&d.includes(n+1)||!1,l={className:[i+"-bar",h?i+"-line-bar":null,h?null:i+"-large-bar"].filter(Boolean).join(" ").trim()};(!0===u||u&&u.includes(n+1))&&(l.className=[l.className,u?"disable":null].filter(Boolean).join(" ").trim());var p=null;return 0!==n&&a&&c?p=c((0,s.Z)({},l,{onMouseDown:e.onMouseDown.bind(e,n+1)})):0!==n&&a&&(p=o.createElement("div",(0,s.Z)({},l),(0,v.jsx)("div",{onMouseDown:e.onMouseDown.bind(e,n+1)}))),(0,v.jsxs)(o.Fragment,{children:[p,o.cloneElement(t,(0,s.Z)({},r))]})}))}))}}]),i}(o.Component);M.defaultProps={prefixCls:"w-split",visiable:!0,mode:"horizontal"};var E=i(74003),z=["files","embed","json","query"];var k=function(e){var t=e||{},i=t.files,n=void 0===i?{}:i,r=t.embed,d=t.json,c=t.query,h=(0,a.Z)(t,z),u=(0,E.Z)({files:n}),p=(0,o.useState)(),f=(0,l.Z)(p,2),m=f[0],g=f[1];return(0,o.useEffect)((function(){e.children||function(e){return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({files:e})}).then((function(e){return e.json()}))}(n).then((function(e){if(e&&e.sandbox_id){var t="https://codesandbox.io/"+(r?"embed":"s")+"/"+e.sandbox_id+"?"+(c||"");g(t)}}))}),[n]),e.children?(0,v.jsxs)("form",(0,s.Z)({action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank"},h,{children:[(0,v.jsx)("input",{type:"hidden",name:"parameters",value:u}),r&&(0,v.jsx)("input",{type:"hidden",name:"embed",value:1}),d&&(0,v.jsx)("input",{type:"hidden",name:"json",value:1}),c&&(0,v.jsx)("input",{type:"hidden",name:"query",value:c}),(0,v.jsx)("button",{type:"submit",children:e.children})]})):(0,v.jsx)("iframe",(0,s.Z)({},h,{title:h.title||"Example.",src:m,style:(0,s.Z)({width:"100%",height:"100%",border:0,overflow:"hidden"},h.style),allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))},H=i(92801),W=i.n(H),O=["includeModule"],B=function(e){var t=e||{},i=t.codePenOption,o=t.codeSandboxOption,s=t.prefixCls,a=i||{},l=a.includeModule,d=r(a,O);if(d&&d.js){var c=(l||[]).join("|");d.js=d.js.replace(/import([\s\S]*?)(?=['"])['"].*['"]( *;|;)?/gm,(function(e){return c&&new RegExp("from\\s+['\"]("+c+")['\"](s.+)?;?").test(e)?e:"/** "+e+" **/"}))}return(0,v.jsxs)("div",{className:s+"-thirdparty",children:[i&&(0,v.jsx)(W(),n({},d,{children:(0,v.jsx)("svg",{height:"12",fill:"currentColor",viewBox:"0 0 69 69",children:(0,v.jsx)("path",{d:"M68.974125,23.6022271 C68.9669375,23.556228 68.956875,23.5159788 68.951125,23.4728545 C68.9369583,23.3892382 68.9192128,23.3062677 68.8979375,23.2241717 C68.885,23.1752977 68.8663125,23.127861 68.8505,23.0804244 C68.8278442,23.0077868 68.8029153,22.9358778 68.77575,22.8648035 C68.7562939,22.8157401 68.7342205,22.7677555 68.709625,22.7210562 C68.6804108,22.6530301 68.6463004,22.5872128 68.6075625,22.5241224 C68.5816874,22.4766857 68.5515,22.4321241 68.52275,22.386125 C68.4142531,22.2169066 68.2885197,22.0593814 68.1475625,21.9160713 C68.10875,21.8772595 68.0728125,21.8355728 68.0325625,21.8010735 C67.9775701,21.7523865 67.9214935,21.704938 67.864375,21.6587636 C67.818375,21.6242643 67.77525,21.589765 67.72925,21.5581406 L67.680375,21.5207662 L36.1445,0.497723998 C35.1485978,-0.165907999 33.8514022,-0.165907999 32.8555,0.497723998 L1.32106248,21.5207662 L1.27218748,21.5581406 C1.16574994,21.6321432 1.06485681,21.713817 0.970312494,21.8025109 C0.928625004,21.8355728 0.891249961,21.8772595 0.850999999,21.9160713 C0.800687478,21.9678203 0.750375025,22.0224443 0.704374952,22.0770683 C0.618968308,22.1722554 0.543358166,22.275796 0.47868744,22.386125 L0.392437472,22.5241224 C0.355916851,22.587711 0.322339729,22.6529454 0.291812498,22.7196187 C0.235417041,22.8356642 0.187844895,22.9557936 0.149499967,23.0789869 C0.133687434,23.127861 0.11643744,23.1752977 0.103499962,23.2241717 C0.0819374527,23.3046702 0.0675624468,23.3880436 0.0517499808,23.4728545 C0.0431249503,23.5159787 0.0330624597,23.5562279 0.0273124842,23.6022271 C0.0114999508,23.7272873 0,23.8566599 0,23.9874699 L0,45.0105121 C0,45.1398847 0.0115000182,45.2692572 0.0287499444,45.3986298 C0.0330624597,45.4403165 0.0431249503,45.4834407 0.0517499808,45.5265649 C0.0661249867,45.6113758 0.0819374527,45.6918743 0.103499962,45.7752478 C0.11643744,45.8241218 0.133687434,45.8715585 0.149499967,45.918995 C0.172499936,45.9908687 0.195499972,46.0627423 0.227124972,46.1360534 C0.245812493,46.1849275 0.27024999,46.2309267 0.290374971,46.2798007 C0.323437498,46.3459245 0.355062497,46.4106108 0.392437472,46.478172 C0.421187484,46.5227337 0.448499968,46.5687328 0.47868744,46.6132945 C0.585037244,46.7827707 0.710436736,46.9395172 0.852437459,47.0804732 C0.979968483,47.2145679 1.12112666,47.3350078 1.27362494,47.4398414 L1.32106248,47.4786532 L32.8555,68.5016954 C33.8511677,69.1661015 35.1488322,69.1661015 36.1445,68.5016954 L67.680375,47.4786532 L67.72925,47.4412789 C67.77525,47.4096545 67.818375,47.3751552 67.864375,47.3406558 C67.9215088,47.2940078 67.9775854,47.2460798 68.0325625,47.1969085 C68.0728125,47.1609716 68.10875,47.1221599 68.1475625,47.0819107 C68.2902677,46.9406867 68.4161661,46.7834372 68.52275,46.6132945 C68.5515,46.5672953 68.5816874,46.5227337 68.6075625,46.478172 C68.646375,46.4106108 68.6794375,46.3459245 68.7081875,46.2798007 C68.732625,46.2309267 68.7570625,46.1849275 68.77575,46.1360534 C68.8045,46.0641798 68.8275,45.9908687 68.8505,45.918995 C68.8663125,45.8715584 68.885,45.8241218 68.8979375,45.7752478 C68.9195,45.6918743 68.9353125,45.6113759 68.951125,45.5265649 C68.956875,45.4834407 68.9669375,45.4403165 68.974125,45.4000673 C68.991375,45.2706947 69,45.1413222 69,45.0119496 L69,23.9889074 C69,23.8566599 68.991375,23.7272873 68.974125,23.6022271 Z M38,9 L61,24.1907448 L50.7281277,31 L38.0014231,22.5649276 L38.0014231,9 L38,9 Z M30.997154,9 L30.997154,22.5649276 L18.2740828,31 L8,24.1907448 L31,9 L30.997154,9 Z M6,29 L13,34 L6,39 L6,29 L6,29 Z M31,60 L8,44.8082815 L18.2732954,38 L30.9971538,46.434203 L30.9971538,60 L31,60 Z M34.4985607,41 L24,34 L34.4985607,27 L45,34 L34.4985607,41 Z M38,60 L38,46.4333333 L50.7268564,38 L61,44.8073077 L38,60 L38,60 Z M63,39 L56,34 L63,29 L63,39 L63,39 Z"})})})),o&&(0,v.jsx)(k,n({},o,{children:(0,v.jsx)("svg",{height:"12",fill:"currentColor",viewBox:"0 0 69 69",children:(0,v.jsx)("path",{d:"M32,38.2764838 L11,24 L11,35.7160031 L22.0526316,43.2306536 L22.0526316,54.3200601 L32,60 L32,38.2764838 Z M38,38.2764838 L38,60 L47.9473684,54.3200601 L47.9473684,43.2306536 L59,35.7160031 L59,24 L38,38.2764838 Z M46.296506,13 L35.5021904,21.0761293 L24.7078748,13.004586 L15,18.6913552 L35.5021904,33 L56,18.6913552 L46.296506,13.004586 L46.296506,13 Z M37.1676303,0.571217481 L63.7371606,15.5989936 C65.1342563,16.3900364 66,17.8813846 66,19.4990592 L66,49.4964682 C66.0011469,51.1157433 65.1356391,52.6091811 63.7371606,53.4010064 L37.1676303,68.4287825 C35.8224939,69.1904058 34.1819333,69.1904058 32.8367968,68.4287825 L6.26726663,53.4010064 C4.86707992,52.6103421 4,51.1166819 4,49.4964682 L4,19.4990592 C4,17.8813846 4.86574257,16.3900364 6.26283836,15.5989936 L32.8323686,0.571217481 C34.1775051,-0.190405827 35.8180656,-0.190405827 37.1632021,0.571217481 L37.1676303,0.571217481 Z"})})}))]})},D=(0,v.jsx)("svg",{viewBox:"0 0 176 176",children:(0,v.jsx)("path",{d:"M40.25 8.8817842e-15 5.25 8.8817842e-15C2.35 8.8817842e-15 0 2.35 0 5.25L0 40.15C0 40.175 0 40.2 0 40.225 0 43.1375 2.35 45.4875 5.25 45.4875 8.15 45.4875 10.525 43.1375 10.525 40.225 10.525 39.925 10.475 39.6125 10.425 39.325L10.425 11.35C10.425 10.8625 10.8125 10.475 11.2875 10.475L39.6875 10.475C39.875 10.4875 40.0625 10.525 40.25 10.525 43.15 10.525 45.5125 8.175 45.5125 5.2625 45.5125 2.35 43.15 8.8817842e-15 40.25 8.8817842e-15ZM143.136561 140.373919C143.136561 142.009731 141.787547 143.3375 140.162358 143.3375L34.0895201 143.3375C32.4537083 143.3375 31.1259389 142.009731 31.1259389 140.373919L31.1259389 34.3117033C31.1259389 32.6652693 32.4537083 31.3375 34.0895201 31.3375L140.162358 31.3375C141.787547 31.3375 143.136561 32.6652693 143.136561 34.3117033L143.136561 140.373919ZM134.725 3.55271368e-15 169.725 3.55271368e-15C172.625 3.55271368e-15 174.975 2.35 174.975 5.25L174.975 40.15C174.975 40.175 175 40.2 175 40.225 175 43.1375 172.6375 45.4875 169.725 45.4875 166.8125 45.4875 164.4625 43.1375 164.4625 40.225 164.4625 39.925 164.5125 39.6125 164.55 39.325L164.55 11.35C164.55 10.8625 164.175 10.475 163.675 10.475L135.2875 10.475C135.0875 10.4875 134.925 10.525 134.725 10.525 131.825 10.525 129.475 8.175 129.475 5.2625 129.475 2.35 131.825 3.55271368e-15 134.725 3.55271368e-15ZM40.25 174.975 5.25 174.975C2.35 174.975 0 172.6375 0 169.7375L0 134.825C0 134.8 0 134.775 0 134.75 0 131.8375 2.35 129.475 5.25 129.475 8.15 129.475 10.525 131.825 10.525 134.75 10.525 135.05 10.475 135.3625 10.425 135.65L10.425 163.6125C10.425 164.1 10.8125 164.4875 11.2875 164.4875L39.6875 164.4875C39.875 164.475 40.05 164.4375 40.2375 164.4375 43.1375 164.4375 45.5 166.7875 45.5 169.7 45.5 172.6125 43.15 174.975 40.25 174.975ZM134.725 174.975 169.725 174.975C172.625 174.975 174.975 172.625 174.975 169.7375L174.975 134.825C174.975 134.8 175 134.775 175 134.75 175 131.8375 172.6375 129.475 169.725 129.475 166.8125 129.475 164.4625 131.825 164.4625 134.75 164.4625 135.05 164.5125 135.3625 164.55 135.65L164.55 163.6125C164.55 164.1 164.175 164.4875 163.675 164.4875L135.2875 164.4875C135.0875 164.475 134.925 164.4375 134.725 164.4375 131.825 164.4375 129.475 166.7875 129.475 169.7 129.475 172.6125 131.825 174.975 134.725 174.975Z",transform:"translate(.5 .512)"})}),P=(0,v.jsx)("svg",{viewBox:"0 0 170 185",children:(0,v.jsx)("path",{d:"M153.846154,-3.55271368e-15 L53.8461537,-3.55271368e-15 C45.3846152,-3.55271368e-15 38.4615385,6.92307695 38.4615385,15.3846154 L38.4615385,23.0769232 L130.769231,23.0769232 C139.230769,23.0769232 146.153846,30 146.153846,38.4615385 L146.153846,146.153846 L153.846154,146.153846 C162.307692,146.153846 169.230769,139.230769 169.230769,130.769231 L169.230769,15.3846154 C169.230769,6.92307695 162.307692,-3.55271368e-15 153.846154,-3.55271368e-15 Z M130.769231,53.8461539 C130.769231,45.3846154 123.846154,38.4615385 115.384615,38.4615385 L15.3846154,38.4615385 C6.92307695,38.4615385 3.55271368e-15,45.3846154 3.55271368e-15,53.8461539 L3.55271368e-15,169.230769 C3.55271368e-15,177.692308 6.92307695,184.615385 15.3846154,184.615385 L115.384615,184.615385 C123.846154,184.615385 130.769231,177.692308 130.769231,169.230769 L130.769231,53.8461539 Z M61.5384615,80.7692309 C61.5384615,83.0769232 60,84.6153848 57.6923076,84.6153848 L26.923077,84.6153848 C24.6153846,84.6153848 23.076923,83.0769232 23.076923,80.7692309 L23.076923,73.0769232 C23.076923,70.7692309 24.6153846,69.2307693 26.923077,69.2307693 L57.6923076,69.2307693 C60,69.2307693 61.5384615,70.7692309 61.5384615,73.0769232 L61.5384615,80.7692309 Z M92.3076922,142.307692 C92.3076922,144.615385 90.7692307,146.153846 88.4615385,146.153846 L26.923077,146.153846 C24.6153846,146.153846 23.076923,144.615385 23.076923,142.307692 L23.076923,134.615385 C23.076923,132.307692 24.6153846,130.769231 26.923077,130.769231 L88.4615385,130.769231 C90.7692309,130.769231 92.3076922,132.307692 92.3076922,134.615385 L92.3076922,142.307692 L92.3076922,142.307692 Z M107.692308,111.538462 C107.692308,113.846154 106.153846,115.384615 103.846154,115.384615 L26.923077,115.384615 C24.6153846,115.384615 23.076923,113.846154 23.076923,111.538462 L23.076923,103.846154 C23.076923,101.538462 24.6153846,100 26.923077,100 L103.846154,100 C106.153846,100 107.692308,101.538462 107.692308,103.846154 L107.692308,111.538462 L107.692308,111.538462 Z"})}),R=(0,v.jsx)("svg",{viewBox:"0 0 170 185",children:(0,v.jsx)("path",{d:"M153.846154,-3.55271368e-15 L53.8461537,-3.55271368e-15 C45.3846152,-3.55271368e-15 38.4615385,6.92307695 38.4615385,15.3846154 L38.4615385,23.0769232 L130.769231,23.0769232 C139.230769,23.0769232 146.153846,30 146.153846,38.4615385 L146.153846,146.153846 L153.846154,146.153846 C162.307692,146.153846 169.230769,139.230769 169.230769,130.769231 L169.230769,15.3846154 C169.230769,6.92307695 162.307692,-3.55271368e-15 153.846154,-3.55271368e-15 Z M130.769231,53.8461539 C130.769231,45.3846154 123.846154,38.4615385 115.384615,38.4615385 L15.3846154,38.4615385 C6.92307695,38.4615385 3.55271368e-15,45.3846154 3.55271368e-15,53.8461539 L3.55271368e-15,169.230769 C3.55271368e-15,177.692308 6.92307695,184.615385 15.3846154,184.615385 L115.384615,184.615385 C123.846154,184.615385 130.769231,177.692308 130.769231,169.230769 L130.769231,53.8461539 Z M106.941858,105.608333 C110.211682,102.450235 115.409229,102.495402 118.623676,105.709849 C121.838122,108.924296 121.883289,114.121842 118.725191,117.391667 L118.725191,117.391667 L72.8918576,163.225 C69.6376921,166.478183 64.3626897,166.478183 61.1085242,163.225 L61.1085242,163.225 L31.9418576,134.058333 C28.7837592,130.788509 28.828926,125.590962 32.0433729,122.376515 C35.2578198,119.162069 40.4553662,119.116902 43.7251908,122.275 L43.7251908,122.275 L67.0001908,145.55 Z M57.6923076,69.2307693 C60,69.2307693 61.5384615,70.7692309 61.5384615,73.0769232 L61.5384615,80.7692309 C61.5384615,83.0769232 60,84.6153848 57.6923076,84.6153848 L26.923077,84.6153848 C24.6153846,84.6153848 23.076923,83.0769232 23.076923,80.7692309 L23.076923,73.0769232 C23.076923,70.7692309 24.6153846,69.2307693 26.923077,69.2307693 L57.6923076,69.2307693 Z",transform:"translate(1)"})});function _(e){var t=e.message;return(0,o.useMemo)((function(){return t?(0,v.jsx)("pre",{children:(0,v.jsx)("code",{children:t})}):null}),[t])}var T=i(19113),A=i(7510),I=i(26999),F=i(55190);var X=["React","ReactDOM"];function U(e){var t=(0,o.useState)(),i=(0,l.Z)(t,2),s=i[0],a=i[1],d=(0,o.useRef)(""+parseInt(String(1e9*Math.random()),10).toString(36)),c=(0,o.useState)(!1),h=(0,l.Z)(c,2),u=h[0],p=h[1],f=(0,o.useState)(""),v=(0,l.Z)(f,2),m=v[0],g=v[1],C=(0,o.useState)(!1),x=(0,l.Z)(C,2),L=x[0],b=x[1],y=(0,o.useState)(1),w=(0,l.Z)(y,2),j=w[0],S=w[1],Z=(0,o.useState)(!1),N=(0,l.Z)(Z,2),M=N[0],E=N[1],z=(0,o.useState)(e.code||""),k=(0,l.Z)(z,2),H=k[0],W=k[1],O=function(t){var i=e.dependencies||{},s=i.React,a=i.ReactDOM,l=r(i,X);try{var c=n({React:s||o,ReactDOM:a||A},l),h=[],u=[];for(var p in c)h.push(p),u.push(c[p]);var f=function(e){return(0,I.transform)(e,{presets:["env","es2015","react"],plugins:[[F.Z,{removeAll:!0}]]})}(""+(t=t.replace("_mount_","document.getElementById('"+d.current+"')"))),v=f.code;h.push(v||""),(0,T.Z)(Function,h).apply(null,u),g("")}catch(C){var m="";m=C&&C.message?C.message:JSON.stringify(C),g(m)}};return(0,o.useEffect)((function(){return O(H)}),[H,e.noPreview,s]),{playerId:d,demoDom:s,setDemoDom:a,fullScreen:u,setFullScreen:p,errorMessage:m,setErrorMessage:g,width:j,setWidth:S,showEdit:L,setShowEdit:b,copied:M,setCopied:E,code:H,setCode:W,executeCode:O}}var Y=["style","prefixCls","className","editProps","codePenOption","codeSandboxOption","code","dependencies","btnText","btnHideText","onlyEdit","bordered","noCode","noPreview","noScroll","bgWhite"],J=o.forwardRef((function(e,t){var i=e.style,s=e.prefixCls,a=void 0===s?"w-code-preview":s,l=e.className,d=e.editProps,c=void 0===d?{}:d,h=e.codePenOption,u=e.codeSandboxOption,p=e.code,f=void 0===p?"":p,m=e.dependencies,g=void 0===m?{}:m,x=e.btnText,y=void 0===x?"Code":x,w=e.btnHideText,j=void 0===w?"Hide Editor":w,S=e.onlyEdit,Z=void 0!==S&&S,N=e.bordered,E=void 0===N||N,z=e.noCode,k=void 0!==z&&z,H=e.noPreview,W=void 0!==H&&H,O=e.noScroll,T=void 0!==O&&O,A=e.bgWhite,I=void 0!==A&&A,F=r(e,Y),X=U(n({code:f,dependencies:g},e)),J=X.playerId,q=X.setDemoDom,$=X.code,V=X.setCode,G=X.fullScreen,K=X.setFullScreen,Q=X.errorMessage,ee=X.width,te=X.setWidth,ie=X.showEdit,ne=X.setShowEdit,re=X.copied,oe=X.setCopied,se=(0,o.useRef)(null),ae=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,(function(){return{editor:ae,demo:se.current}}),[ae,se]);var le=!(!k&&!W)&&(!k||!W),de=1!==ee&&[le?1:2],ce=[l,a,T?a+"-noScroll":null,le?a+"-OneItem":null,E?a+"-bordered":null,G?a+"-fullScreen":null].filter(Boolean).join(" ").trim();(0,o.useEffect)((function(){return V(f)}),[f]),(0,o.useEffect)((function(){se.current&&q(se.current),window.addEventListener("popstate",(function(e){document.body.style.overflow="inherit"}),!1)}),[]);var he=function(){return ne(1!==ee)};(0,o.useEffect)((function(){var e=se.current;return e&&e.addEventListener("transitionend",he),function(){e&&e.removeEventListener("transitionend",he)}}),[ee]);return(0,v.jsxs)(M,n({visiable:de,className:ce,style:n({flex:1},i)},F,{children:[!W&&!Z&&(0,v.jsxs)("div",{className:[a+"-demo",I?null:a+"-demo-bgPlaid",Q?a+"-demo-error":null].filter(Boolean).join(" ").trim(),style:n({flex:1},1===ee?{width:"100%"}:{}),children:[(0,v.jsx)(_,{message:Q}),(0,v.jsx)("div",{className:[a+"-demo-source",Q?"error":null].filter(Boolean).join(" ").trim(),id:J.current})]}),(!k||Z)&&(0,v.jsx)("div",{ref:se,style:{overflow:"hidden",width:Z?"100%":ee},children:(ie||Z)&&(0,v.jsx)(C,n({value:($||"").replace(/\n$/,""),ref:ae,extensions:[(0,b.eJ)({jsx:!0})]},c,{style:{height:"100%"},height:"100%",onChange:function(e,t){V(e),c&&c.onChange&&c.onChange(e,t)}}))}),!le&&!(k&&W)&&!Z&&(0,v.jsxs)("div",{style:{flex:1,width:29},className:a+"-bar",children:[(0,v.jsx)(B,{prefixCls:a,codePenOption:h,codeSandboxOption:u}),(0,v.jsx)("div",{className:a+"-bar-btn",onClick:function(){te(1===ee?"50%":1),ne(!0)},children:1===ee?y:j}),(0,v.jsx)("div",{className:[a+"-bar-iconbtns",re?a+"-bar-copied":null].filter(Boolean).join(" ").trim(),onClick:function(){L()($||"",(function(e){return oe(e)})),setTimeout((function(){return oe(!1)}),2e3)},children:re?R:P}),(0,v.jsx)("div",{className:[a+"-bar-iconbtns",G?a+"-bar-copied":null].filter(Boolean).join(" ").trim(),onClick:function(){K(!G),document.body.style.overflow=G?"inherit":"hidden",!G&&se.current&&(se.current.style.maxWidth="inherit")},children:D})]})]}))}));J.displayName="CodePreview";var q=J},92801:function(e,t,i){"use strict";var n=i(7914).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(73982)),o=n(i(22666)),s=(n(i(41473)),i(69286)),a=["title","html","js","css","editors","css_external","js_external","js_pre_processor"],l="0010",d="babel",c=function(e){var t=e||{},i=t.title,n=t.html,c=t.js,h=t.css,u=t.editors,p=void 0===u?l:u,f=t.css_external,v=t.js_external,m=t.js_pre_processor,g=void 0===m?d:m,C=(0,o.default)(t,a),x={title:i,html:n,js:c,css:h,editors:p,css_external:f,js_external:v,js_pre_processor:g};return(0,s.jsxs)("form",(0,r.default)((0,r.default)({action:"https://codepen.io/pen/define",method:"POST",target:"_blank"},C),{},{children:[(0,s.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(x)}),(0,s.jsx)("button",{type:"submit",children:e.children})]}))};t.default=c,e.exports=t.default},19471:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(25773),r=i(30808),o=(i(41473),i(69286)),s=["size","fixed","bottom","zIndex","className","bgColor","color","position"];function a(e){void 0===e&&(e={});var t=e,i=t.size,a=void 0===i?80:i,l=t.fixed,d=void 0!==l&&l,c=t.bottom,h=t.zIndex,u=t.className,p=t.bgColor,f=void 0===p?"#151513":p,v=t.color,m=void 0===v?"#fff":v,g=t.position,C=void 0===g?"right":g,x=(0,r.Z)(e,s),L="left"===C?{left:0,transform:"scale(-1, 1)"}:{right:0};return c&&(L.bottom=0,L.top="initial",L.transform="left"===C?"scale(-1, -1)":"scale(1, -1)"),(0,o.jsx)("a",(0,n.Z)({href:e.href,"aria-label":"View source on GitHub"},x,{className:"github-corner "+(u||""),children:(0,o.jsxs)("svg",{width:a,height:a,viewBox:"0 0 250 250",style:(0,n.Z)({fill:f,color:m,position:d?"fixed":"absolute",border:0,top:0,zIndex:h},L),"aria-hidden":"true",children:[(0,o.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),(0,o.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),(0,o.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})}))}},23040:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n=i(25773),r=i(30808),o=i(41473),s=i(69286),a=["prefixCls","className","size","loading","tip","vertical","color","bgColor","children","indicator","fullscreen"],l=function(e){void 0===e&&(e={});var t=e,i=t.prefixCls,l=void 0===i?"w-loader":i,d=t.className,c=t.size,h=void 0===c?"default":c,u=t.loading,p=void 0===u||u,f=t.tip,v=t.vertical,m=t.color,g=t.bgColor,C=t.children,x=t.indicator,L=t.fullscreen,b=void 0!==L&&L,y=(0,r.Z)(e,a),w=[l,d,h?l+"-"+h:null].filter(Boolean).join(" ").trim(),j=(0,o.useMemo)((function(){return(0,s.jsx)("svg",{viewBox:"25 25 50 50",children:(0,s.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"5",strokeMiterlimit:"10"})})}),[]),S=(0,o.useMemo)((function(){return(0,s.jsx)("div",{className:[l+"-tips",b?l+"-fullscreen":null].filter(Boolean).join(" ").trim(),style:{color:m,backgroundColor:g},children:(0,s.jsxs)("div",{className:l+"-tips-nested",children:[x||j,f&&(0,s.jsx)("div",{className:[l+"-text",v?l+"-vertical":null].filter(Boolean).join(" ").trim(),children:f})]})})}),[b,g,l,v,f]);return(0,s.jsxs)("div",(0,n.Z)({className:w},y,{children:[(p||b)&&S,C&&o.cloneElement(C,Object.assign({},C.props,{className:[l+"-warp",p?l+"-blur":null].filter(Boolean).join(" ").trim()}))]}))}},41418:function(e,t,i){"use strict";i.d(t,{Z:function(){return w}});var n=i(649),r=i(30808),o=i(25773),s=i(41473),a=i(54313),l=i(18070),d=i(44525),c=i(56961),h=i(88760),u=i(27037),p=i(61864),f=i.n(p),v=i(29740),m={type:"element",tagName:"svg",properties:{className:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",ariaHidden:"true"},children:[{type:"element",tagName:"path",children:[],properties:{fillRule:"evenodd",d:"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"}}]},g=i(70556),C=i.n(g);var x=i(69286),L=["prefixCls","className","source","style","onScroll","onMouseOver","pluginsFilter","warpperElement"],b=function(e,t,i){if("element"===e.type&&i&&"root"===i.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.properties=(0,o.Z)({class:"anchor"},n.properties),n.children=[m])}if("element"===e.type&&"pre"===e.tagName){var r=y(e.children);e.children.push((void 0===(s=r)&&(s="test"),{type:"element",tagName:"div",properties:{onClick:function(e){var t=e.target;t.classList.add("active"),C()(t.dataset.code,(function(){setTimeout((function(){t.classList.remove("active")}),2e3)}))},"data-code":s,class:"copied"},children:[{type:"element",tagName:"svg",properties:{className:"octicon-copy",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"},children:[]},{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"},children:[]}]},{type:"element",tagName:"svg",properties:{className:"octicon-check",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"},children:[]}]}]}))}var s},y=function e(t,i){return void 0===t&&(t=[]),void 0===i&&(i=""),t.forEach((function(t){"text"===t.type?i+=t.value:"element"===t.type&&t.children&&Array.isArray(t.children)&&(i+=e(t.children))})),i},w=s.forwardRef((function(e,t){var i=e.prefixCls,p=void 0===i?"wmde-markdown wmde-markdown-color":i,m=e.className,g=e.source,C=e.style,y=e.onScroll,w=e.onMouseOver,j=e.pluginsFilter,S=e.warpperElement,Z=void 0===S?{}:S,N=(0,r.Z)(e,L),M=s.createRef();(0,s.useImperativeHandle)(t,(function(){return(0,o.Z)({},e,{mdp:M})}),[M,e]);var E=(p||"")+" "+(m||""),z=[[f(),{ignoreMissing:!0}],h.Z,d.Z,c.Z,[v.Z,{rewrite:b}],[u.Z,{properties:"attr"}]].concat((0,n.Z)(N.rehypePlugins||[])),k=[].concat((0,n.Z)(N.remarkPlugins||[]),[l.Z]);return(0,x.jsx)("div",(0,o.Z)({ref:M,onScroll:y,onMouseOver:w},Z,{className:E,style:C,children:(0,x.jsx)(a.D,(0,o.Z)({},N,{rehypePlugins:j?j("rehype",z):z,remarkPlugins:j?j("remark",k):k,children:g||""}))}))}))},67251:function(){}}]);
//# sourceMappingURL=uiw-vendor.e9672d8c.js.map