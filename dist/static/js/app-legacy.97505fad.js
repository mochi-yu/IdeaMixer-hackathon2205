(function(){var t={6805:function(t,e,n){"use strict";n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/DBtest"}},[t._v("DB")]),t._v(" | "),n("router-link",{attrs:{to:"/test"}},[t._v("Test")])],1),n("router-view")],1)},u=[],i=n(1001),a={},c=(0,i.Z)(a,o,u,!1,null,null,null),f=c.exports,s=n(3635);r.Z.use(s.Z);var l=new s.Z({}),d=n(4367),v=(n(1249),n(1539),n(8783),n(3948),n(8345)),p=[{path:"/",component:"HomePage"},{path:"/about",component:"AboutPage"},{path:"/test",component:"ApiTest"},{path:"/DBtest",component:"DbTest"},{path:"*",component:"NotFound"}],m=p.map((function(t){return(0,d.Z)((0,d.Z)({},t),{},{component:function(){return n(3457)("./".concat(t.component,".vue"))}})}));r.Z.use(v.Z);var h=new v.Z({routes:m,mode:"history"});r.Z.config.productionTip=!1,new r.Z({vuetify:l,router:h,render:function(t){return t(f)}}).$mount("#app")},3457:function(t,e,n){var r={"./AboutPage.vue":[1304,304],"./ApiTest.vue":[6685,669,685],"./DbTest.vue":[830,669,830],"./HelloWorld.vue":[7520,520],"./HomePage.vue":[6322,322],"./NotFound.vue":[3971,971]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=3457,t.exports=o}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return t[r](u,u.exports,n),u.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,u){if(!r){var i=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],u=t[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){t.splice(s--,1);var f=o();void 0!==f&&(e=f)}}return e}u=u||0;for(var s=t.length;s>0&&t[s-1][2]>u;s--)t[s]=t[s-1];t[s]=[r,o,u]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"static/js/"+t+"-legacy."+{304:"346481b1",322:"05304f6d",520:"8b1e14c6",669:"549638b1",685:"fc20bfff",830:"7b38d864",971:"536ba1bb"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"static/css/"+t+"."+{520:"70fefccb",830:"834108c0"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="front:";n.l=function(r,o,u,i){if(t[r])t[r].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+u){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+u),a.src=r),t[r]=[o];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(v);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)n();else{var i=u&&("load"===u.type?"missing":u.type),a=u&&u.target&&u.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=u,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===t||u===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],u=o.getAttribute("data-href");if(u===t||u===e)return o}},r=function(r){return new Promise((function(o,u){var i=n.miniCssF(r),a=n.p+i;if(e(i,a))return o();t(r,a,o,u)}))},o={143:0};n.f.miniCss=function(t,e){var n={520:1,830:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=u);var i=n.p+n.u(e),a=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var s=c(n)}for(e&&e(r);f<i.length;f++)u=i[f],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(s)},r=self["webpackChunkfront"]=self["webpackChunkfront"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6805)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.97505fad.js.map