(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8292],{80363:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=80363,e.exports=n},47437:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(50189),o=t(53782),i=t(22951),c=t(91976),d=t(67591),s=t(43415),a=t(41473),u=t(41418),l="2.5.0",p=t(69882),h=t(69286),m=["version","dependencies","codeSandbox","codePen"];function f(e){var n=e.version,t=e.dependencies,i=e.codeSandbox,c=e.codePen,d=(0,o.Z)(e,m),s=(0,r.Z)({},d);return c&&(s.codePenOption={title:"uiw".concat(n," - demo"),includeModule:["uiw"],js:(s.code||"").replace("_mount_",'document.getElementById("container")'),html:'<div id="container" style="padding: 24px"></div>',css_external:"https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.css"),js_external:"https://unpkg.com/react@17.x/umd/react.development.js;https://unpkg.com/react-dom@17.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js")}),i&&(s.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n            "template": "node",\n            "container": {\n              "startScript": "start",\n              "node": "14"\n            }\n          }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:(s.code||"").replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"uiw-demo",description:"uiw v".concat(n," - demo"),dependencies:{react:"^17.0.2","react-dom":"^17.0.2",uiw:"latest"},devDependencies:{"@kkt/less-modules":"~7.1.1",kkt:"~7.1.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,h.jsx)(p.Z,(0,r.Z)((0,r.Z)({},s),{},{dependencies:(0,r.Z)((0,r.Z)({},t),{},{React:a},a),style:{marginBottom:0}}))}var v="index_footer__Fp4ea",k=function(e){var n=(e||{}).editorUrl;return(0,h.jsxs)("div",{className:v,children:[n&&(0,h.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-amap/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-amap/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-amap",children:"GitHub"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"}),(0,h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-baidu-map",children:"\u767e\u5ea6\u5730\u56fe React \u7248\u672c"})]})},g="index_markdown__hcQCp",x=["inline","node"],b=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},j=function(e){(0,d.Z)(t,e);var n=(0,s.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=n.call(this,e)).editorUrl=void 0,r.getMdStr=void 0,r.dependencies=void 0,r.state={mdStr:""},r}return(0,c.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(u.Z,{style:{padding:"20px 26px"},source:this.state.mdStr,className:g,components:{code:function(n){var t=n.inline,i=n.node,c=(0,o.Z)(n,x),d=c,s=d.noPreview,a=d.noScroll,u=d.bgWhite,p=d.noCode,m=d.codeSandbox,v=d.codePen;if(t)return(0,h.jsx)("code",(0,r.Z)({},c));var k={noPreview:s,noScroll:a,bgWhite:u,noCode:p,codeSandbox:m,codePen:v};return 0===Object.keys(k).filter((function(e){return void 0!==k[e]})).length?(0,h.jsx)("code",(0,r.Z)({},c)):(0,h.jsx)(f,{version:l,code:b(i.children),dependencies:e.dependencies,noPreview:s,noScroll:a,bgWhite:u,noCode:p,codePen:v,codeSandbox:m})}}}),(0,h.jsx)(k,{editorUrl:this.editorUrl})]})}}]),t}(a.Component)},70025:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(91976),o=t(22951),i=t(67591),c=t(43415),d=function(e){(0,i.Z)(d,e);var n=(0,c.Z)(d);function d(){var e;(0,o.Z)(this,d);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=n.call.apply(n,[this].concat(i))).editorUrl="/packages/types/README.md",e.dependencies={},e.getMdStr=function(){return t.e(9079).then(t.bind(t,9079))},e}return(0,r.Z)(d)}(t(47437).Z)}}]);
//# sourceMappingURL=8292.42623d9e.chunk.js.map