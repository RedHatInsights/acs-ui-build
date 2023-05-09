"use strict";(self.webpackChunkacs=self.webpackChunkacs||[]).push([[331],{30744:(e,t,n)=>{n.d(t,{W2:()=>a,ZP:()=>l});var r=n(93264),a={isEntitled:!1,isEntitlementLoaded:!1};const l=(0,r.createContext)(a)},4926:(e,t,n)=>{n.r(t);var r=n(93264),a=n.n(r),l=n(3644),c=n.n(l),o=n(39704),i=n(20925),u=n(68573),s=n.n(u),m=n(84885),f=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,l=t.length;a<l;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};function p(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,i.JH)({},f([s(),(0,m.ZP)({errorDescriptionKey:["detail","stack"]})],e,!0))}var d=n(51663),h=n(68025),E=n(30744);const v=function(e){var t=e.children,n=(0,r.useContext)(E.ZP),l=n.isEntitled;return n.isEntitlementLoaded?l?t:a().createElement(d.Navigate,{to:(0,h.n)("overview",h.d),replace:!0}):a().createElement(a().Fragment,null)};var y=n(21242),b=(0,r.lazy)((function(){return n.e(196).then(n.bind(n,37418))})),g=(0,r.lazy)((function(){return n.e(452).then(n.bind(n,51711))})),w=(0,r.lazy)((function(){return Promise.all([n.e(132),n.e(996)]).then(n.bind(n,92221))})),P=(0,r.lazy)((function(){return Promise.all([n.e(132),n.e(792)]).then(n.bind(n,61933))})),k=(0,r.lazy)((function(){return n.e(201).then(n.bind(n,90853))})),R=(0,r.lazy)((function(){return n.e(832).then(n.bind(n,10407))})),S=function(){return a().createElement(r.Suspense,{fallback:a().createElement(y.Bullseye,null,a().createElement(y.Spinner,null))},a().createElement(d.Routes,null,a().createElement(d.Route,{path:"no-permissions",element:a().createElement(g,null)}),a().createElement(d.Route,{path:"oops",element:a().createElement(b,null)}),a().createElement(d.Route,{path:"/instances/instance/:instanceId",element:a().createElement(v,null,a().createElement(P,null))}),a().createElement(d.Route,{path:"/instances",element:a().createElement(v,null,a().createElement(w,null))}),a().createElement(d.Route,{path:"/overview",element:a().createElement(k,null)}),a().createElement(d.Route,{path:"/getting-started",element:a().createElement(v,null,a().createElement(R,null))}),a().createElement(d.Route,{path:"*",element:a().createElement(d.Navigate,{to:(0,h.n)("overview",h.d),replace:!0})})))},x=n(89892),z=n(83215),Z=n(55140),C=n(15984);const L=function(){var e=(0,Z.Z)(),t=e.updateDocumentTitle,n=e.getEnvironment,l=e.auth,c=(0,r.useState)(E.W2.isEntitled),o=c[0],u=c[1],s=(0,r.useState)(E.W2.isEntitlementLoaded),m=s[0],f=s[1],p=n(),d="qaprodauth"===p;return(0,r.useEffect)((function(){var e,n,r,a;e=void 0,n=void 0,a=function(){var e;return function(e,t){var n,r,a,l,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,r=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){c=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){c.label=l[1];break}if(6===l[0]&&c.label<a[1]){c.label=a[1],a=l;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(l);break}a[2]&&c.ops.pop(),c.trys.pop();continue}l=t.call(e,c)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}}(this,(function(t){switch(t.label){case 0:return[4,l.getUser()];case 1:return void 0===(e=t.sent())||d||(u(e.entitlements.acs.is_entitled),f(!0)),[2]}}))},new((r=void 0)||(r=Promise))((function(t,l){function c(e){try{i(a.next(e))}catch(e){l(e)}}function o(e){try{i(a.throw(e))}catch(e){l(e)}}function i(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,o)}i((a=a.apply(e,n||[])).next())})),d&&(localStorage.setItem("chrome:analytics:dev","true"),u(!0),f(!0)),(0,i.JH)().register({notifications:z.ee}),t("acs")}),[]),"stage"===p?a().createElement(C.Z,null):a().createElement(r.Fragment,null,a().createElement(E.ZP.Provider,{value:{isEntitled:o,isEntitlementLoaded:m}},a().createElement(x.ZP,null),a().createElement(S,null)))};n(49661);var A=n(88767),I=new A.QueryClient;var O=document.getElementById("root");c().render(a().createElement((function(){return a().createElement(o.zt,{store:p.apply(void 0,[]).getStore()},a().createElement(A.QueryClientProvider,{client:I},a().createElement(L,null)))}),null),O,(function(){return null==O?void 0:O.setAttribute("data-ouia-safe","true")}))},68025:(e,t,n)=>{n.d(t,{d:()=>a,n:()=>l});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a="/application-services/acs",l=function(e,t){return"string"==typeof e?"".concat(t,"/").concat(e).replace("^".concat(t,"//"),"/"):r(r({},e),{pathname:"".concat(t,"/").concat(e.pathname).replace("^".concat(t,"//"),"/")})}}}]);
//# sourceMappingURL=../sourcemaps/331.f545e2b5cb0c84ad8277d1ab96102790.js.map