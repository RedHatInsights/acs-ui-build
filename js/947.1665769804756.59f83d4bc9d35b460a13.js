(self.webpackChunkacs=self.webpackChunkacs||[]).push([[947],{29396:e=>{e.exports={}},61666:(e,n,t)=>{"use strict";t.r(n);var r=t(93264),c=t.n(r),a=t(3644),o=t.n(a),i=t(42982),l=t(16530),u=t(14494),s=t(15575),m=t(68573),h=t.n(m),p=t(51712);function E(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,s.JH)({},[h(),(0,p.ZP)({errorDescriptionKey:["detail","stack"]})].concat(n))}var f=t(14748),d=t(15984),y=t(70943),v=(0,r.lazy)((function(){return t.e(196).then(t.bind(t,81481))})),b=(0,r.lazy)((function(){return t.e(452).then(t.bind(t,8259))})),g=(0,r.lazy)((function(){return Promise.all([t.e(126),t.e(996)]).then(t.bind(t,25491))})),w=(0,r.lazy)((function(){return Promise.all([t.e(126),t.e(996)]).then(t.bind(t,70391))})),R=(0,r.lazy)((function(){return t.e(201).then(t.bind(t,17752))}));function P(){return c().createElement(r.Suspense,{fallback:c().createElement(y.Bullseye,null,c().createElement(y.Spinner,null))},c().createElement(l.Switch,null,c().createElement(l.Route,{path:"/oops",component:v}),c().createElement(l.Route,{path:"/no-permissions",component:b}),c().createElement(l.Route,{path:"/instances/instance/:instanceId",component:w}),c().createElement(l.Route,{path:"/instances",component:g}),c().createElement(l.Route,{path:"/overview",component:R}),c().createElement(l.Route,null,c().createElement(l.Redirect,{to:"/instances"}))))}const k=function(e){var n=(0,l.useHistory)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("acs");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return n.push("/".concat(e.navId))}));return function(){e()}}),[]),"stage"===insights.chrome.getEnvironment()?c().createElement(f.Z,null,c().createElement(d.Z,null)):c().createElement(P,{childProps:e})};var z=t(35240),A=(t(29396),t(88767)),I=new A.QueryClient;const C=function(){return c().createElement(u.zt,{store:E.apply(void 0,(0,i.Z)([])).getStore()},c().createElement(A.QueryClientProvider,{client:I},c().createElement(l.BrowserRouter,{basename:(0,z.eb)(window.location.pathname)},c().createElement(k,null))))};var S=document.getElementById("root");o().render(c().createElement(C,null),S,(function(){return S.setAttribute("data-ouia-safe",!0)}))}}]);