"use strict";(self.webpackChunkacs=self.webpackChunkacs||[]).push([[495],{30744:(e,t,n)=>{n.d(t,{W2:()=>l,ZP:()=>a});var r=n(93264),l={isEntitled:!1,isEntitlementLoaded:!1};const a=(0,r.createContext)(l)},64828:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(93264),l=n.n(r),a=n(62050),c=n(30744),o=n(20925),i=n(89892),u=n(83215),s=n(55140),f=n(15984);const m=function(){var e=(0,s.Z)(),t=e.updateDocumentTitle,n=e.getEnvironment,m=e.auth,p=(0,r.useState)(c.W2.isEntitled),d=p[0],h=p[1],v=(0,r.useState)(c.W2.isEntitlementLoaded),E=v[0],y=v[1];(0,r.useEffect)((function(){var e,n,r,l;e=void 0,n=void 0,l=function(){var e;return function(e,t){var n,r,l,a,c={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(l=2&a[0]?r.return:a[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,a[1])).done)return l;switch(r=0,l&&(a=[2&a[0],l.value]),a[0]){case 0:case 1:l=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((l=(l=c.trys).length>0&&l[l.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!l||a[1]>l[0]&&a[1]<l[3])){c.label=a[1];break}if(6===a[0]&&c.label<l[1]){c.label=l[1],l=a;break}if(l&&c.label<l[2]){c.label=l[2],c.ops.push(a);break}l[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=l=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,(function(t){switch(t.label){case 0:return[4,m.getUser()];case 1:return void 0!==(e=t.sent())&&(h(e.entitlements.acs.is_entitled),y(!0)),[2]}}))},new((r=void 0)||(r=Promise))((function(t,a){function c(e){try{i(l.next(e))}catch(e){a(e)}}function o(e){try{i(l.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,o)}i((l=l.apply(e,n||[])).next())})),(0,o.JH)().register({notifications:u.ee}),t("acs")}),[]);var b=n();return console.log("environment"),console.log(b),"stage"===b?l().createElement(f.Z,null):l().createElement(r.Fragment,null,l().createElement(c.ZP.Provider,{value:{isEntitled:d,isEntitlementLoaded:E}},l().createElement(i.ZP,null),l().createElement(a.Z,null)))}},55730:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(93264),l=n.n(r),a=n(39704),c=n(58161),o=n(64828),i=(n(49661),n(88767)),u=new i.QueryClient;const s=function(){return l().createElement(a.zt,{store:c.S.apply(void 0,[]).getStore()},l().createElement(i.QueryClientProvider,{client:u},l().createElement(o.Z,null)))}},4706:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(51663),l=n(93264),a=n.n(l),c=n(30744),o=n(68025);const i=function(e){var t=e.children,n=(0,l.useContext)(c.ZP),i=n.isEntitled;return n.isEntitlementLoaded?i?t:a().createElement(r.Navigate,{to:(0,o.n)("/overview",o.d),replace:!0}):a().createElement(a().Fragment,null)}},62050:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(93264),l=n.n(r),a=n(51663),c=n(68025),o=n(4706),i=n(21242),u=(0,r.lazy)((function(){return n.e(196).then(n.bind(n,37418))})),s=(0,r.lazy)((function(){return n.e(452).then(n.bind(n,51711))})),f=(0,r.lazy)((function(){return Promise.all([n.e(132),n.e(996)]).then(n.bind(n,92221))})),m=(0,r.lazy)((function(){return Promise.all([n.e(132),n.e(792)]).then(n.bind(n,61933))})),p=(0,r.lazy)((function(){return n.e(201).then(n.bind(n,90853))})),d=(0,r.lazy)((function(){return n.e(832).then(n.bind(n,10407))})),h=function(){return l().createElement(r.Suspense,{fallback:l().createElement(i.Bullseye,null,l().createElement(i.Spinner,null))},l().createElement(a.Routes,null,l().createElement(a.Route,{path:"no-permissions",element:l().createElement(s,null)}),l().createElement(a.Route,{path:"oops",element:l().createElement(u,null)}),l().createElement(a.Route,{path:"/instances/instance/:instanceId",element:l().createElement(o.Z,null,l().createElement(m,null))}),l().createElement(a.Route,{path:"/instances",element:l().createElement(o.Z,null,l().createElement(f,null))}),l().createElement(a.Route,{path:"/overview",element:l().createElement(p,null)}),l().createElement(a.Route,{path:"/getting-started",element:l().createElement(o.Z,null,l().createElement(d,null))}),l().createElement(a.Route,{path:"*",element:l().createElement(a.Navigate,{to:(0,c.n)("/overview",c.d),replace:!0})})))}},58161:(e,t,n)=>{n.d(t,{S:()=>i});var r=n(20925),l=n(68573),a=n.n(l),c=n(84885),o=function(e,t,n){if(n||2===arguments.length)for(var r,l=0,a=t.length;l<a;l++)!r&&l in t||(r||(r=Array.prototype.slice.call(t,0,l)),r[l]=t[l]);return e.concat(r||Array.prototype.slice.call(t))};function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,r.JH)({},o([a(),(0,c.ZP)({errorDescriptionKey:["detail","stack"]})],e,!0))}},68025:(e,t,n)=>{n.d(t,{d:()=>l,n:()=>a});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},r.apply(this,arguments)},l="/application-services/acs",a=function(e,t){return"string"==typeof e?"".concat(t,"/").concat(e).replace("^".concat(t,"//"),"/"):r(r({},e),{pathname:"".concat(t,"/").concat(e.pathname).replace("^".concat(t,"//"),"/")})}}}]);
//# sourceMappingURL=../sourcemaps/495.9f43f0fcd6a0ee737b4f08b9da90e10e.js.map