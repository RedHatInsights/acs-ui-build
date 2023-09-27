"use strict";(self.webpackChunkacs=self.webpackChunkacs||[]).push([[495],{30744:(e,t,n)=>{n.d(t,{W2:()=>a,ZP:()=>l});var r=n(28416),a={isEntitled:!1,isEntitlementLoaded:!1};const l=(0,r.createContext)(a)},64828:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(28416),a=n.n(r),l=n(62050),c=n(30744),o=n(20925),i=n(89892),u=n(83215),s=n(55140),f=n(15984);const m=function(){var e=(0,s.Z)(),t=e.updateDocumentTitle,n=e.getEnvironment,m=e.auth,d=(0,r.useState)(c.W2.isEntitled),p=d[0],h=d[1],E=(0,r.useState)(c.W2.isEntitlementLoaded),v=E[0],y=E[1],b=n(),g="qaprodauth"===b;return(0,r.useEffect)((function(){var e,n,r,a;e=void 0,n=void 0,a=function(){var e;return function(e,t){var n,r,a,l,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,r=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){c=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){c.label=l[1];break}if(6===l[0]&&c.label<a[1]){c.label=a[1],a=l;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(l);break}a[2]&&c.ops.pop(),c.trys.pop();continue}l=t.call(e,c)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}}(this,(function(t){switch(t.label){case 0:return[4,m.getUser()];case 1:return void 0===(e=t.sent())||g||(h(e.entitlements.acs.is_entitled),y(!0)),[2]}}))},new((r=void 0)||(r=Promise))((function(t,l){function c(e){try{i(a.next(e))}catch(e){l(e)}}function o(e){try{i(a.throw(e))}catch(e){l(e)}}function i(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,o)}i((a=a.apply(e,n||[])).next())})),g&&(localStorage.setItem("chrome:analytics:dev","true"),h(!0),y(!0)),(0,o.JH)().register({notifications:u.ee}),t("acs")}),[]),"stage"===b?a().createElement(f.Z,null):a().createElement(r.Fragment,null,a().createElement(c.ZP.Provider,{value:{isEntitled:p,isEntitlementLoaded:v}},a().createElement(i.ZP,null),a().createElement(l.Z,null)))}},55730:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(28416),a=n.n(r),l=n(39704),c=n(58161),o=n(64828),i=(n(49661),n(88767)),u=new i.QueryClient;const s=function(){return(0,r.useEffect)((function(){var e=document.getElementById("root");null==e||e.setAttribute("data-ouia-safe","true")}),[]),a().createElement(l.zt,{store:c.S.apply(void 0,[]).getStore()},a().createElement(i.QueryClientProvider,{client:u},a().createElement(o.Z,null)))}},4706:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(51663),a=n(28416),l=n.n(a),c=n(30744),o=n(68025);const i=function(e){var t=e.children,n=(0,a.useContext)(c.ZP),i=n.isEntitled;return n.isEntitlementLoaded?i?t:l().createElement(r.Navigate,{to:(0,o.n)("overview",o.d),replace:!0}):l().createElement(l().Fragment,null)}},62050:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(28416),a=n.n(r),l=n(51663),c=n(68025),o=n(4706),i=n(21242),u=(0,r.lazy)((function(){return n.e(196).then(n.bind(n,37418))})),s=(0,r.lazy)((function(){return n.e(452).then(n.bind(n,51711))})),f=(0,r.lazy)((function(){return Promise.all([n.e(132),n.e(996)]).then(n.bind(n,92221))})),m=(0,r.lazy)((function(){return Promise.all([n.e(132),n.e(792)]).then(n.bind(n,25626))})),d=(0,r.lazy)((function(){return n.e(201).then(n.bind(n,90853))})),p=(0,r.lazy)((function(){return n.e(832).then(n.bind(n,10407))})),h=function(){return a().createElement(r.Suspense,{fallback:a().createElement(i.Bullseye,null,a().createElement(i.Spinner,null))},a().createElement(l.Routes,null,a().createElement(l.Route,{path:"no-permissions",element:a().createElement(s,null)}),a().createElement(l.Route,{path:"oops",element:a().createElement(u,null)}),a().createElement(l.Route,{path:"/instances/instance/:instanceId",element:a().createElement(o.Z,null,a().createElement(m,null))}),a().createElement(l.Route,{path:"/instances",element:a().createElement(o.Z,null,a().createElement(f,null))}),a().createElement(l.Route,{path:"/overview",element:a().createElement(d,null)}),a().createElement(l.Route,{path:"/getting-started",element:a().createElement(o.Z,null,a().createElement(p,null))}),a().createElement(l.Route,{path:"*",element:a().createElement(l.Navigate,{to:(0,c.n)("overview",c.d),replace:!0})})))}},58161:(e,t,n)=>{n.d(t,{S:()=>i});var r=n(20925),a=n(68573),l=n.n(a),c=n(84885),o=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,l=t.length;a<l;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,r.JH)({},o([l(),(0,c.ZP)({errorDescriptionKey:["detail","stack"]})],e,!0))}},68025:(e,t,n)=>{n.d(t,{d:()=>a,n:()=>l});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a="/application-services/acs",l=function(e,t){return"string"==typeof e?"".concat(t,"/").concat(e).replace("^".concat(t,"//"),"/"):r(r({},e),{pathname:"".concat(t,"/").concat(e.pathname).replace("^".concat(t,"//"),"/")})}}}]);
//# sourceMappingURL=../sourcemaps/495.f277101dc7be64562cdf2737f64c7a26.js.map