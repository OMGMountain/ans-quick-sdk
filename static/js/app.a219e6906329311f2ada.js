webpackJsonp([1],{N9Nh:function(e,r){},NHnr:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("7+uW"),a=t("zL8q"),o=t.n(a),s=(t("tvR6"),{render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]});var i=t("VU/8")({name:"App"},s,!1,function(e){t("N9Nh")},null,null).exports,l=t("/ocq"),u={name:"javascript",data:function(){return{msg:"易观方舟JavaScriptSDK快速接入",msgText:"JSSDK说明文档",time:(new Date).getTime(),autoFidden:!1,autoPageView:!1,autoTrack:!1,ruleForm:{appid:"",uploadURL:"",SDKURL:"",auto:[],resource:"",desc:""},rules:{appid:[{required:!0,message:"请输入项目的appid",trigger:"blur"},{min:1,max:1e4,message:"",trigger:"blur"}],uploadURL:[{required:!0,message:"请输入项目的uploadUrl",trigger:"blur"},{min:1,max:1e4,message:"",trigger:"blur"}],SDKURL:[{required:!0,message:"SDK文件的存放地址",trigger:"blur"},{min:1,max:1e4,message:"",trigger:"blur"}],auto:[{type:"array",required:!1,message:"",trigger:"change"}],resource:[{required:!0,message:"请选择集成方式",trigger:"change"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;r.autoFidden=!1,r.autoPageView=!1,r.autoTrack=!1;var t=r.ruleForm.auto;t.indexOf("1")>-1&&(r.autoPageView=!0),t.indexOf("2")>-1&&(r.autoTrack=!0),t.indexOf("0")>-1&&(r.autoFidden=!1,r.autoPageView=!1,r.autoTrack=!1);var n=r.ruleForm.resource;console.log(n),1==n&&(r.ruleForm.desc="<script> \n   (function(config) { \n       window.AnalysysAgent = window.AnalysysAgent || []; \n       window.AnalysysAgent.methods = 'identify alias reset track profileSet profileSetOnce profileIncrement profileAppend profileUnset profileDelete registerSuperProperty registerSuperProperties unRegisterSuperProperty clearSuperProperties getSuperProperty getSuperProperties pageView getDistinctId getPresetProperties'.split(' '); \n       function factory(b) { \n           return function () { \n               var a = Array.prototype.slice.call(arguments); \n               a.unshift(b);\n               window.AnalysysAgent.push(a);\n               return window.AnalysysAgent;\n           }\n       };\n       for (var i = 0; i < AnalysysAgent.methods.length; i++) {\n           var key = window.AnalysysAgent.methods[i];\n           AnalysysAgent[key] = factory(key);\n       }\n       for (var key in config) {\n           if (!AnalysysAgent[key]) AnalysysAgent[key] = factory(key);\n           AnalysysAgent[key](config[key]);\n       }\n       var date = new Date();\n       var time = new String(date.getFullYear()) + new String(date.getMonth() + 1) + new String(date.getDate());\n       var d = document,\n           c = d.createElement('script'),\n           n = d.getElementsByTagName('script')[0];\n       c.type = 'text/javascript';\n       c.async = true;\n       c.id = 'ARK_SDK';\n       c.src = "+r.ruleForm.SDKURL+"?v="+r.time+"//JS SDK存放地址\n       n.parentNode.insertBefore(c, n);\n   })({\n           appkey: "+r.ruleForm.appid+", //APPKEY\n           uploadURL: "+r.ruleForm.uploadURL+",//上传数据的地址\n           auto:"+r.autoPageView+",// 是否开启自动采集\n           autoTrack:"+r.autoTrack+",// 是否开启全埋点\n    })\n<\/script>"),2==n&&(r.ruleForm.desc="<script>\n      (function(config) {\n           window.AnalysysAgent = window.AnalysysAgent || [];\n           window.AnalysysAgent.methods = 'identify alias reset track profileSet profileSetOnce profileIncrement profileAppend profileUnset profileDelete registerSuperProperty registerSuperProperties unRegisterSuperProperty clearSuperProperties getSuperProperty getSuperProperties pageView getDistinctId getPresetProperties'.split(' ');\n           function factory(b) {\n               return function () {\n                   var a = Array.prototype.slice.call(arguments);\n                   a.unshift(b);\n                   window.AnalysysAgent.push(a);\n                   return window.AnalysysAgent;\n               }\n           };\n           for (var i = 0; i < AnalysysAgent.methods.length; i++) {\n               var key = window.AnalysysAgent.methods[i];\n               AnalysysAgent[key] = factory(key);\n           }\n           for (var key in config) {\n               if (!AnalysysAgent[key]) AnalysysAgent[key] = factory(key);\n               AnalysysAgent[key](config[key]);\n           }\n      })({\n          appkey: "+r.ruleForm.appid+", //APPKEY\n          uploadURL: "+r.ruleForm.uploadURL+",//上传数据的地址\n          auto:"+r.autoPageView+",// 是否开启自动采集\n          autoTrack:"+r.autoTrack+',// 是否开启全埋点\n      })\n<\/script>\n//引用JS SDK文件的script标签必须在初始化代码之下\n//建议在script标签设置id为ARK_SDK,该ID用来引导可视化模块与热图模块的加载\n<script type="text/javascript" id="ARK_SDK" src="'+r.ruleForm.SDKURL+'"><\/script>\n'),3==n&&(r.ruleForm.desc="// 从 npm 获取 sdk\nimport  AnalysysAgent from 'ans-javascript-sdk/SDK/AnalysysAgent_JS_SDK.es6.min.js'\n//自行下载SDK\n//import AnalysysAgent from '"+r.ruleForm.SDKURL+"'\nAnalysysAgent.init({\n    appkey: "+r.ruleForm.appid+", //APPKEY\n    uploadURL: "+r.ruleForm.uploadURL+",//上传数据的地址\n    auto:"+r.autoPageView+",// 是否开启自动采集\n    autoTrack:"+r.autoTrack+",// 是否开启全埋点\n    SDKFileDirectory: '"+r.ruleForm.SDKURL+"'//可视化与热图模块SDK存放目录。\n})\n"),4==n&&(r.ruleForm.desc="var AnalysysAgent = require('ans-javascript-sdk')\nAnalysysAgent.init({\n    appkey: "+r.ruleForm.appid+", //APPKEY\n    uploadURL: "+r.ruleForm.uploadURL+",//上传数据的地址\n    auto:"+r.autoPageView+",// 是否开启自动采集\n    autoTrack:"+r.autoTrack+",// 是否开启全埋点\n    SDKFileDirectory: '"+r.ruleForm.SDKURL+"'//可视化与热图模块SDK存放目录。\n}) "),5==n&&(r.ruleForm.desc='requirejs(["'+r.ruleForm.SDKURL+'/AnalysysAgent_JS_SDK.min"], function(AnalysysAgent) {\n   AnalysysAgent.init({\n       appkey: '+r.ruleForm.appid+", //APPKEY\n       uploadURL: "+r.ruleForm.uploadURL+",//上传数据的地址\n       auto:"+r.autoPageView+",// 是否开启自动采集\n       autoTrack:"+r.autoTrack+",// 是否开启全埋点\n       SDKFileDirectory: '"+r.ruleForm.SDKURL+"'//可视化与热图模块SDK存放目录。\n   }) \n}); ")})},resetForm:function(e){document.getElementById("copyText").select(),document.execCommand("Copy")}}},p={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"ui-javascript"},[t("h1",{staticClass:"quick-title"},[e._v(e._s(e.msg))]),e._v(" "),t("h2",{staticClass:"quick-doc"},[t("a",{staticClass:"quick-doc",attrs:{href:"https://docs.analysys.cn/ark/integration/sdk/js"}},[e._v(e._s(e.msgText))])]),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"container-box",attrs:{model:e.ruleForm,rules:e.rules}},[t("el-form-item",{attrs:{label:"1，请输入项目的appid（方舟项目唯一标示）:",prop:"appid"}},[t("el-input",{model:{value:e.ruleForm.appid,callback:function(r){e.$set(e.ruleForm,"appid",r)},expression:"ruleForm.appid"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"2，请输入项目的uploadUrl（数据接收地址）:",prop:"uploadURL"}},[t("el-input",{model:{value:e.ruleForm.uploadURL,callback:function(r){e.$set(e.ruleForm,"uploadURL",r)},expression:"ruleForm.uploadURL"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"3，SDK文件存放地址（相对于首页或绝对路径）:",prop:"SDKURL"}},[t("el-input",{model:{value:e.ruleForm.SDKURL,callback:function(r){e.$set(e.ruleForm,"SDKURL",r)},expression:"ruleForm.SDKURL"}})],1),e._v(" "),t("el-form-item",{staticClass:"ui-pageView",attrs:{label:"4，是否开启页面的自动采集",prop:"auto"}},[t("el-checkbox-group",{staticClass:"ui-pageView-box",model:{value:e.ruleForm.auto,callback:function(r){e.$set(e.ruleForm,"auto",r)},expression:"ruleForm.auto"}},[t("el-checkbox",{attrs:{label:"0",name:"auto"}},[e._v("禁止")]),e._v(" "),t("el-checkbox",{attrs:{label:"1",name:"auto"}},[e._v("采集页面浏览事件（打开页面发送$pageview）")]),e._v(" "),t("el-checkbox",{attrs:{label:"2",name:"auto"}},[e._v("采集元素点击（全埋点需要选择这个）")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"5，JSSDK集成方式",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{label:"1"}},[e._v("异步集成(推荐)")]),e._v(" "),t("el-radio",{attrs:{label:"2"}},[e._v("同步集成")]),e._v(" "),t("el-radio",{attrs:{label:"3"}},[e._v("ES6方式集成")]),e._v(" "),t("el-radio",{attrs:{label:"4"}},[e._v("CommonJS规范集成")]),e._v(" "),t("el-radio",{attrs:{label:"5"}},[e._v("AMD规范集成（以 RequireJS 为例）")])],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("一键生成初始化代码")]),e._v(" "),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("复制代码")])],1),e._v(" "),t("el-form-item",{attrs:{label:"初始化代码",prop:"desc"}},[t("el-input",{attrs:{type:"textarea",id:"copyText"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1)],1)],1)},staticRenderFns:[]};var c=t("VU/8")(u,p,!1,function(e){t("R915")},"data-v-1f2e3a8c",null).exports;n.default.use(l.a);var m=new l.a({routes:[{path:"*",name:"JavaScript",component:c}]});n.default.use(o.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:m,components:{App:i},template:"<App/>",render:function(e){return e(i)}})},R915:function(e,r){},tvR6:function(e,r){}},["NHnr"]);
//# sourceMappingURL=app.a219e6906329311f2ada.js.map