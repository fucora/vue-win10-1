webpackJsonp([4],{"G7+Q":function(e,n){},Lru8:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),s={name:"App",components:{Win10Window:function(){return t.e(2).then(t.bind(null,"cS+l"))},Win10Menu:function(){return t.e(0).then(t.bind(null,"ccZh"))},Win10Message:function(){return t.e(3).then(t.bind(null,"yJ2L"))},Win10Taskbar:function(){return t.e(1).then(t.bind(null,"SxFL"))}}},i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"win10"}},[n("win10-window"),this._v(" "),n("win10-menu"),this._v(" "),n("win10-message"),this._v(" "),n("win10-taskbar")],1)},staticRenderFns:[]};var u=t("VU/8")(s,i,!1,function(e){t("G7+Q")},null,null).exports,o=t("NYxO");a.a.use(o.a);var l=new o.a.Store({state:{showMenu:!1,showMessage:!1},mutations:{toggleWin:function(e){e.showMessage=!1,e.showMenu=!e.showMenu},toggleMessage:function(e){e.showMenu=!1,e.showMessage=!e.showMessage}}}),r={name:"TreeMenu",data:function(){return{newaxios:{x:0,y:0}}},props:{child:{type:Array,default:function(){return[]}},axios:{type:Object,default:function(){return{x:0,y:0}}},parentaxios:{type:Object,default:function(){return{x:0,y:0}}},name:{type:String,default:""}},watch:{axios:function(e){var n=this.parentaxios.x,t=this.parentaxios.y,a=document.getElementsByClassName("vue-contextmenuName-"+this.name)[0];0!==a.childNodes.length&&(a.style.display="block",a.style.left=n+150+"px",a.style.top=t+"px"),document.addEventListener("mouseup",function(e){0===e.button&&(a.style.display="none")},!1)}},methods:{fnHandler:function(e){e.child&&0!==e.child.length||this.$emit("fnHandler",e)},mouseenter:function(e,n){if(!e.child||0===e.child.length)return null;var t=n.clientX,a=n.clientY;this.newaxios={x:t,y:a}},mouseleave:function(e,n){if(!e.child||0===e.child.length)return null;var t=this.$refs[e.menuName][0].$refs["vue-contextmenuName-"+e.menuName];t.style.display="none",t.style.left=null,t.style.top=null}}},c={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("span",{ref:"vue-contextmenuName-"+e.name,staticClass:"vue-contextmenu-listWrapper",class:"vue-contextmenuName-"+e.name},e._l(e.child,function(n,a){return t("li",{key:a,staticClass:"context-menu-list",staticStyle:{position:"relative"}},[t("button",{on:{click:function(t){t.stopPropagation(),e.fnHandler(n)},mouseenter:function(t){e.mouseenter(n,t)},mouseleave:function(t){e.mouseleave(n,t)}}},[t("i",{class:n.icoName}),e._v(" "),t("span",[e._v(e._s(n.btnName))]),e._v(" "),t("TreeMenu",{ref:n.menuName,refInFor:!0,attrs:{name:n.menuName,axios:e.newaxios,parentaxios:{x:e.parentaxios.x+150,y:e.parentaxios.y},child:n.child},on:{fnHandler:e.fnHandler}})],1)])}))},staticRenderFns:[]};var m=t("VU/8")(r,c,!1,function(e){t("e/Rg")},null,null).exports,f={name:"ContextMenu",data:function(){return{axios:{x:0,y:0}}},props:{contextMenuData:{type:Object,requred:!1,default:function(){return{}}},transferIndex:{type:Number,default:0}},watch:{"contextMenuData.axios":function(e){var n=e.x,t=e.y,a=this.transferIndex,s="vue-contextmenuName-"+this.contextMenuData.menuName,i=document.getElementsByClassName(s)[a];i.style.display="block",i.style.left=n+1+"px",i.style.top=t+1+"px",document.addEventListener("mouseup",function(e){0===e.button&&(i.style.display="none")},!1)}},methods:{fnHandler:function(e){e.child&&0!==e.child.length||this.$emit(e.fnHandler)},mouseenter:function(e,n){if(!e.child||0===e.child.length)return null;var t=n.clientX,a=n.clientY;this.axios={x:t,y:a}},mouseleave:function(e,n){if(!e.child||0===e.child.length)return null;var t=this.$refs[e.menuName][0].$refs["vue-contextmenuName-"+e.menuName];t.style.display="none",t.style.left=null,t.style.top=null}},components:{TreeMenu:m}},d={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("span",{staticClass:"vue-contextmenu-listWrapper",class:"vue-contextmenuName-"+e.contextMenuData.menuName},e._l(e.contextMenuData.menulists,function(n,a){return t("li",{key:a,staticClass:"context-menu-list",staticStyle:{position:"relative"}},[t("button",{on:{click:function(t){t.stopPropagation(),e.fnHandler(n)},mouseenter:function(t){e.mouseenter(n,t)},mouseleave:function(t){e.mouseleave(n,t)}}},[t("i",{class:n.icoName}),e._v(" "),t("span",[e._v(e._s(n.btnName))]),e._v(" "),t("TreeMenu",{ref:n.menuName,refInFor:!0,attrs:{name:n.menuName,axios:e.axios,parentaxios:e.contextMenuData.axios,child:n.child},on:{fnHandler:e.fnHandler}})],1)])}))},staticRenderFns:[]};var p=t("VU/8")(f,d,!1,function(e){t("OAa+")},null,null).exports,h={install:function(e){e.component("ContextMenu",p)}};t("Lru8");a.a.config.productionTip=!1,a.a.use(h),new a.a({el:"#app",store:l,components:{App:u},template:"<App/>"})},"OAa+":function(e,n){},"e/Rg":function(e,n){}},["NHnr"]);
//# sourceMappingURL=win10.cf2ae53aa35ddd923872.js.map