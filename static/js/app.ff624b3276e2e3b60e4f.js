webpackJsonp([3],{"1/oy":function(e,n){},"9M+g":function(e,n){},AixB:function(e,n){},GHGh:function(e,n,t){var s=t("z/+d");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("08bac906",s,!1,{})},GfHa:function(e,n){},Id91:function(e,n){},ItXc:function(e,n,t){var s=t("Ys5p");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("51c4d2c8",s,!1,{})},N2ME:function(e,n,t){"use strict";var s=t("Gu7T"),r=t.n(s),o=t("nYKV"),i=t.n(o),a=(t("olwm"),t("7t+N")),l=t.n(a),u={props:{events:{default:function(){return[]}},eventSources:{default:function(){return[]}},editable:{default:function(){return!0}},selectable:{default:function(){return!0}},selectHelper:{default:function(){return!0}},header:{default:function(){return{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay"}}},defaultView:{default:function(){return"agendaWeek"}},sync:{default:function(){return!1}},config:{type:Object,default:function(){return{}}}},computed:{defaultConfig:function(){var e=this;return{header:this.header,defaultView:this.defaultView,editable:this.editable,selectable:this.selectable,selectHelper:this.selectHelper,aspectRatio:2,timeFormat:"HH:mm",events:this.events,eventSources:this.eventSources,eventRender:function(){this.sync&&(e.events=cal.fullCalendar("clientEvents"));for(var n=arguments.length,t=Array(n),s=0;s<n;s++)t[s]=arguments[s];e.$emit.apply(e,["event-render"].concat(r()(t)))},viewRender:function(){this.sync&&(e.events=cal.fullCalendar("clientEvents"));for(var n=arguments.length,t=Array(n),s=0;s<n;s++)t[s]=arguments[s];e.$emit.apply(e,["view-render"].concat(r()(t)))},eventDestroy:function(n){this.sync&&(e.events=cal.fullCalendar("clientEvents"))},eventClick:function(){for(var n=arguments.length,t=Array(n),s=0;s<n;s++)t[s]=arguments[s];e.$emit.apply(e,["event-selected"].concat(r()(t)))},eventDrop:function(){for(var n=arguments.length,t=Array(n),s=0;s<n;s++)t[s]=arguments[s];e.$emit.apply(e,["event-drop"].concat(r()(t)))},eventReceive:function(){for(var n=arguments.length,t=Array(n),s=0;s<n;s++)t[s]=arguments[s];e.$emit.apply(e,["event-receive"].concat(r()(t)))},eventResize:function(){for(var n=arguments.length,t=Array(n),s=0;s<n;s++)t[s]=arguments[s];e.$emit.apply(e,["event-resize"].concat(r()(t)))},dayClick:function(){for(var n=arguments.length,t=Array(n),s=0;s<n;s++)t[s]=arguments[s];e.$emit.apply(e,["day-click"].concat(r()(t)))},select:function(n,t,s,r,o){e.$emit("event-created",{start:n,end:t,allDay:!n.hasTime()&&!t.hasTime(),view:r,resource:o})}}}},mounted:function(){var e=this,n=l()(this.$el);this.$on("remove-event",function(n){n&&n.hasOwnProperty("id")?l()(e.$el).fullCalendar("removeEvents",n.id):l()(e.$el).fullCalendar("removeEvents",n)}),this.$on("rerender-events",function(){l()(e.$el).fullCalendar("rerenderEvents")}),this.$on("refetch-events",function(){l()(e.$el).fullCalendar("refetchEvents")}),this.$on("render-event",function(n){l()(e.$el).fullCalendar("renderEvent",n)}),this.$on("reload-events",function(){l()(e.$el).fullCalendar("removeEvents"),l()(e.$el).fullCalendar("addEventSource",e.events)}),this.$on("rebuild-sources",function(){l()(e.$el).fullCalendar("removeEventSources"),e.eventSources.map(function(n){l()(e.$el).fullCalendar("addEventSource",n)})}),n.fullCalendar(i()(this.config,this.defaultConfig))},methods:{fireMethod:function(){var e;return(e=l()(this.$el)).fullCalendar.apply(e,arguments)}},watch:{events:{deep:!0,handler:function(e){l()(this.$el).fullCalendar("removeEvents"),l()(this.$el).fullCalendar("addEventSource",this.events)}},eventSources:{deep:!0,handler:function(e){this.$emit("rebuild-sources")}}},beforeDestroy:function(){this.$off("remove-event"),this.$off("rerender-events"),this.$off("refetch-events"),this.$off("render-event"),this.$off("reload-events"),this.$off("rebuild-sources")}},c=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"calendar",attrs:{id:"calendar"}})};c._withStripped=!0;var f={render:c,staticRenderFns:[]},m=f;var d=t("VU/8")(u,m,!1,null,null,null);d.options.__file="node_modules/vue-full-calendar/components/FullCalendar.vue";n.a=d.exports},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t("7+uW"),r=t("e6fC"),o=(t("9M+g"),t("qb6w"),function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)});o._withStripped=!0;var i={render:o,staticRenderFns:[]},a=i;var l=!1;var u=t("VU/8")({name:"App"},a,!1,function(e){l||t("GHGh")},null,null);u.options.__file="src/App.vue";var c=u.exports,f=t("QaH6"),m=t("/ocq"),d={name:"Login",data:function(){return{app_name:"GTA-Ynov-Vue",form:{email:"",pass:""},error_on_login:!1}},methods:{onSubmit:function(){var e=t("Wxfg");e[this.form.email]&&e[this.form.email].pass===this.form.pass?"employee"===e[this.form.email].role?(window.sessionStorage.setItem("SessionId",this.form.email),this.$router.push("/home")):this.$router.push("/error"):this.error_on_login=!0}},mounted:function(){window.sessionStorage.getItem("SessionId")&&this.$router.push("/home")}},p=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("b-container",{attrs:{id:"login-container",fluid:""}},[s("div",{attrs:{id:"background"}},[s("img",{attrs:{src:t("meIy")}})]),e._v(" "),s("h1",[e._v(" Welcome to your work planning!")]),e._v(" "),e.error_on_login?s("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("Error while login you : Email or password does not match")]):e._e(),e._v(" "),s("b-jumbotron",{attrs:{id:"jumbotron"}},[s("b-form",{on:{submit:e.onSubmit}},[s("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(n){e.$set(e.form,"email",n)},expression:"form.email"}}),e._v(" "),s("br"),e._v(" "),s("b-form-input",{attrs:{id:"psswrInput",type:"password",required:"",placeholder:"Enter password"},model:{value:e.form.pass,callback:function(n){e.$set(e.form,"pass",n)},expression:"form.pass"}}),e._v(" "),s("br"),e._v(" "),s("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)],1)};p._withStripped=!0;var v={render:p,staticRenderFns:[]},h=v;var A=!1;var j=t("VU/8")(d,h,!1,function(e){A||t("ItXc")},"data-v-ef68022e",null);j.options.__file="src/components/Login.vue";var b=j.exports;t("AixB");s.a.use(f.a),s.a.use(m.a);var g=new m.a({routes:[{path:"/",name:"Login",component:b},{path:"/home",name:"Home",component:function(){return t.e(0).then(t.bind(null,"tso7"))}},{path:"/error",name:"Not available yet",component:function(){return t.e(1).then(t.bind(null,"XuGl"))}}]});s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:g,components:{App:c},template:"<App/>"})},Wxfg:function(e,n){e.exports={"bonjour@company.com":{pass:"oui",role:"employee"},"aurevoir@test.fr":{pass:"non",role:"admin"},"kecadire@pkpas.ca":{pass:"tabernacle",role:"manager"}}},Ys5p:function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\nh1[data-v-ef68022e] {\n    color: beige;\n}\n#login-container[data-v-ef68022e] {\n    height: 100vh;\n    padding: 10%;\n    max-height: 100vh;\n}\n#background[data-v-ef68022e] {\n    filter: blur(18px);\n    -webkit-filter: blur(18px);\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: -1;\n}\nimg[data-v-ef68022e] {\n    width: 100vw;\n    height: 100vh;\n}\n#background[data-v-ef68022e]:hover {\n    opacity: .6;\n    -webkit-filter: blur(.5px);\n            filter: blur(.5px);\n}\n#jumbotron[data-v-ef68022e]{\n    filter: initial;\n    -webkit-filter: initial;\n    position: relative;\n}\n","",{version:3,sources:["/media/killy/DATA/CoursMobile/gta_ynov_vue/src/components/src/components/Login.vue"],names:[],mappings:";AA2EA;IACA,aAAA;CACA;AACA;IACA,cAAA;IACA,aAAA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,2BAAA;IACA,mBAAA;IACA,QAAA;IACA,OAAA;IACA,YAAA;CACA;AACA;IACA,aAAA;IACA,cAAA;CACA;AACA;IACA,YAAA;IACA,2BAAA;YAAA,mBAAA;CACA;AAGA;IACA,gBAAA;IACA,wBAAA;IACA,mBAAA;CACA",file:"Login.vue",sourcesContent:['<template>\n<b-container id="login-container" fluid>\n    <div id="background">\n        <img src="../assets/img/bg_login.jpg">\n    </div>\n    <h1> Welcome to your work planning!</h1>\n    <b-alert v-if="error_on_login" show variant="danger">Error while login you : Email or password does not match</b-alert>\n    <b-jumbotron id ="jumbotron">\n        <b-form @submit="onSubmit">\n            <b-form-input id="exampleInput1"\n                type="email"\n                v-model="form.email"\n                required\n                placeholder="Enter email">\n            </b-form-input>\n            <br>\n            <b-form-input id="psswrInput"\n                type="password"\n                v-model="form.pass"\n                required\n                placeholder="Enter password">\n            </b-form-input>\n            <br>\n            <b-button type="submit" variant="primary">Submit</b-button>\n        </b-form>\n    </b-jumbotron>\n</b-container>\n</template>\n\n<script>\n\n\nexport default {\nname: \'Login\',\ndata() {\n    return {\n    app_name: \'GTA-Ynov-Vue\',\n    form : {\n        email : "",\n        pass : ""\n    },\n    error_on_login : false\n    };\n},\nmethods : {\n    onSubmit() {\n        let credentials = require("../../static/credential.json")\n        if(credentials[this.form.email]){\n            if(credentials[this.form.email].pass === this.form.pass){\n                if(credentials[this.form.email].role === "employee"){\n                    window.sessionStorage.setItem(\'SessionId\', this.form.email)\n                    this.$router.push(\'/home\')\n                }\n                else {\n                    this.$router.push(\'/error\')\n                }\n            } else {\n                this.error_on_login = true\n            }\n        } else{\n            this.error_on_login = true\n        }\n    }\n},\nmounted() {\n    if(window.sessionStorage.getItem(\'SessionId\')){\n        this.$router.push(\'/home\')\n    }\n}\n};\n<\/script>\n\n\n<style scoped>\n\nh1 {\n    color: beige;\n}\n#login-container {\n    height: 100vh;\n    padding: 10%;\n    max-height: 100vh;\n}\n\n#background {\n    filter: blur(18px);\n    -webkit-filter: blur(18px);\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: -1;\n}\nimg {\n    width: 100vw;\n    height: 100vh;\n}\n#background:hover {\n    opacity: .6;\n    filter: blur(.5px);\n}\n\n\n#jumbotron{\n    filter: initial;\n    -webkit-filter: initial;\n    position: relative;\n}\n</style>'],sourceRoot:""}])},meIy:function(e,n,t){e.exports=t.p+"static/img/bg_login.e803009.jpg"},qb6w:function(e,n){},uslO:function(e,n,t){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(e){return t(o(e))}function o(e){var n=s[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="uslO"},"z/+d":function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n","",{version:3,sources:["/media/killy/DATA/CoursMobile/gta_ynov_vue/src/src/App.vue"],names:[],mappings:";AAgBA;EACA,oDAAA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;CACA",file:"App.vue",sourcesContent:["<template>\n  <div id=\"app\">\n    <router-view/>\n  </div>\n</template>\n\n<script>\nimport 'bootstrap-vue/dist/bootstrap-vue.css';\nimport 'bootstrap/dist/css/bootstrap.min.css';\n\nexport default {\n  name: 'App',\n};\n<\/script>\n\n<style>\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n</style>\n"],sourceRoot:""}])},zj2Q:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.ff624b3276e2e3b60e4f.js.map