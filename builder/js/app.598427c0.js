(function(e){function t(t){for(var r,l,i=t[0],s=t[1],c=t[2],u=0,f=[];u<i.length;u++)l=i[u],a[l]&&f.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5c491051"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=l(e),o=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b93":function(e,t,n){"use strict";var r=n("4bbc"),a=n.n(r);a.a},"4bbc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],l=(n("5c0b"),n("2877")),i={},s=Object(l["a"])(i,a,o,!1,null,null,null),c=s.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",[e._v("SDAG 区块链生成器")]),n("p",[e._v("点击“立刻生成”按钮后，会下载一个config.json文件。在config.json文件的同级目录下打开终端，输入：")]),e._m(0),n("el-form",{attrs:{model:e.blockchain,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"区块链名称","label-width":"100"}},[n("el-input",{model:{value:e.blockchain.name,callback:function(t){e.$set(e.blockchain,"name",t)},expression:"blockchain.name"}})],1),n("el-form-item",{attrs:{label:"区块链logo（点击选择图片）","label-width":"100"}},[n("base64-upload",{attrs:{imageSrc:"data:image/png;base64,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"},on:{change:e.onChangeImage}})],1),n("el-form-item",{attrs:{label:"Token发行总量","label-width":"100"}},[n("el-input",{model:{value:e.blockchain.total,callback:function(t){e.$set(e.blockchain,"total",t)},expression:"blockchain.total"}})],1),n("el-form-item",{attrs:{label:"基金会地址（你的SDAG钱包地址）","label-width":"100"}},[n("el-input",{model:{value:e.blockchain.address,callback:function(t){e.$set(e.blockchain,"address",t)},expression:"blockchain.address"}})],1),n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.build}},[e._v("立刻生成")])],1)],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("pre",[e._v("    curl -fsSL https://raw.githubusercontent.com/smart-dag/builder/master/install.sh | bash ")]),e._v("即可快速启动你自己的区块链。")])}],A=(n("6b54"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])}),p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},b=h,v=(n("b0df"),Object(l["a"])(b,A,p,!1,null,"0495e2ba",null)),m=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"base64-upload"},[n("img",{style:e.imageStyle,attrs:{src:e.src}}),n("input",{staticClass:"el-input__inner",attrs:{type:"file",accept:"image/*"},on:{change:e.onChange}})])},k=[],j=(n("7f7f"),n("28a5"),n("768b")),y={props:{imageSrc:String,imageStyle:Object},data:function(){return{src:this.imageSrc}},methods:{onChange:function(e){var t=this;if(e.target.files&&e.target.files[0]){var n=e.target.files[0],r=new FileReader;r.addEventListener("load",function(e){t.src=e.target.result;var r=t.src.split(","),a=Object(j["a"])(r,2),o=a[1];t.$emit("change",{size:n.size,type:n.type,name:n.name,base64:o})}),r.readAsDataURL(n)}}}},w=y,_=(n("0b93"),Object(l["a"])(w,g,k,!1,null,"2ec89256",null)),O=_.exports,T=n("21a6"),B={name:"home",data:function(){return{blockchain:{name:"我的区块链",total:1e5,address:"INP2VBII4B3Y7KRAVLUBU6DIPMLUFXT2"},customImageMaxSize:1}},components:{HelloWorld:m,Base64Upload:O},methods:{build:function(){var e=new File([JSON.stringify(this.blockchain)],"config.json",{type:"application/json;charset=utf-8"});T.saveAs(e)},onChangeImage:function(e){console.log(e.base64),this.blockchain.logo=e.base64.toString()}}},C=B,G=(n("7c2d"),Object(l["a"])(C,d,f,!1,null,"1e26ccc4",null)),M=G.exports;r["default"].use(u["a"]);var V=new u["a"]({routes:[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),U=n("5c96"),R=n.n(U);n("0fae");r["default"].config.productionTip=!1,r["default"].use(R.a),new r["default"]({router:V,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"7c2d":function(e,t,n){"use strict";var r=n("f138"),a=n.n(r);a.a},a183:function(e,t,n){},b0df:function(e,t,n){"use strict";var r=n("a183"),a=n.n(r);a.a},f138:function(e,t,n){}});
//# sourceMappingURL=app.598427c0.js.map