(self.webpackChunkacs=self.webpackChunkacs||[]).push([[792],{73481:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(87462);var c=n(93264),a=n.n(c),i=n(21242),l=n(90045),s=["children","to"];const u=function(e){var t=e.children,n=e.to,c=function(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}(e,s);return a().createElement(i.BreadcrumbItem,(0,r.Z)({},c,{render:function(e){var r=e.className,c=e.ariaCurrent;return a().createElement(l.Z,{className:r,"aria-current":c,to:n},t)}}))}},45331:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(93264),c=n.n(r),a=n(21242),i=n(15558),l=n(15705),s=n(48564);const u=function(e){var t=e.instance;return c().createElement(a.DescriptionList,{isHorizontal:!0},c().createElement(a.DescriptionListGroup,null,c().createElement(a.DescriptionListTerm,null,"Cloud provider"),c().createElement(a.DescriptionListDescription,null,(0,l.mt)(t.cloud_provider))),c().createElement(a.DescriptionListGroup,null,c().createElement(a.DescriptionListTerm,null,"Region"),c().createElement(a.DescriptionListDescription,null,c().createElement(s.Z,{id:t.region}))),c().createElement(a.DescriptionListGroup,null,c().createElement(a.DescriptionListTerm,null,"ID"),c().createElement(a.DescriptionListDescription,null,t.id)),c().createElement(a.DescriptionListGroup,null,c().createElement(a.DescriptionListTerm,null,"Owner"),c().createElement(a.DescriptionListDescription,null,t.owner)),c().createElement(a.DescriptionListGroup,null,c().createElement(a.DescriptionListTerm,null,"Time created"),c().createElement(a.DescriptionListDescription,null,(0,i.F)(t.created_at))),c().createElement(a.DescriptionListGroup,null,c().createElement(a.DescriptionListTerm,null,"Time updated"),c().createElement(a.DescriptionListDescription,null,(0,i.F)(t.updated_at))),c().createElement(a.DescriptionListGroup,null,c().createElement(a.DescriptionListTerm,null,"Central API endpoint (Sensor mTLS)"),c().createElement(a.DescriptionListDescription,null,t.centralDataURL||"-")),c().createElement(a.DescriptionListGroup,null,c().createElement(a.DescriptionListTerm,null,"Central instance (UI, roxctl)"),c().createElement(a.DescriptionListDescription,null,t.centralUIURL||"-")))}},48564:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(93264),c=n.n(r),a=n(45759),i=n(15705),l=n(60509);function s(e){var t=e.id,n=(0,a.y)({provider:i.Zz}).data,s=(0,r.useMemo)((function(){return null==n?void 0:n.items.find((function(e){return e.id===t}))}),[n,t]);return c().createElement("span",null,s?(0,l.M)(s):t)}},45759:(e,t,n)=>{"use strict";n.d(t,{y:()=>p});var r=n(4942),c=n(15861),a=n(87757),i=n.n(a),l=n(88767),s=n(22512),u=n(12699);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=function(){var e=(0,c.Z)(i().mark((function e(t){var n,r,c,a,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.provider,r=t.instanceType,c=(0,u.W)({instance_type:r}),e.next=4,s.Z.get("/api/rhacs/v1/cloud_providers/".concat(n,"/regions?").concat(c));case 4:return a=e.sent,l=a.data,e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e,t){return(0,l.useQuery)(function(e){return["cloud_regions",e]}(e),(function(){return m(e)}),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({staleTime:1/0},t))}},61933:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(93264),c=n.n(r),a=n(89376),i=n(39173),l=n(14748),s=n(51663),u=n(21242),o=n(73481),m=n(15861),p=n(87757),d=n.n(p),f=n(88767),E=n(22512),v=function(){var e=(0,m.Z)(d().mark((function e(t){var n,r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.Z.get("/api/rhacs/v1/centrals/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=n(45331);const h=function(){var e,t=(e=(0,s.useParams)().instanceId,(0,f.useQuery)(["instance",e],(function(){return v(e)}))),n=t.data;return t.isFetching?c().createElement(u.Bullseye,null,c().createElement(u.Spinner,null)):c().createElement("div",null,c().createElement(a.Z,null,c().createElement(u.Flex,{direction:{default:"column"}},c().createElement(u.FlexItem,null,c().createElement(u.Breadcrumb,null,c().createElement(o.Z,{to:"/instances"},"ACS instances"),c().createElement(u.BreadcrumbItem,{isActive:!0},n.name))),c().createElement(u.FlexItem,null,c().createElement(i.Z,{title:n.name})))),c().createElement(l.ZP,{className:"pf-u-p-0 pf-m-fill pf-m-overflow-scroll"},c().createElement(u.PageSection,null,c().createElement(u.Flex,{alignItems:{default:"alignItemsStretch"}},c().createElement(u.FlexItem,{flex:{default:"flex_1"},alignSelf:{default:"alignSelfStretch"}},c().createElement(u.Card,{className:"pf-u-h-100"},c().createElement(u.CardHeader,null,c().createElement(u.CardHeaderMain,null,c().createElement(u.CardTitle,null,"ACS Instance Access"))),c().createElement(u.CardBody,null,c().createElement(u.Flex,{direction:{default:"column"}},c().createElement(u.FlexItem,null,"Get started by signing in to your ACS instance."),c().createElement(u.FlexItem,null,c().createElement(u.Button,{variant:u.ButtonVariant.primary,component:"a",href:n.centralUIURL,isDisabled:!n.centralUIURL,target:"_blank"},"Open ACS Console")))))),c().createElement(u.FlexItem,{flex:{default:"flex_1"}},c().createElement(u.Card,null,c().createElement(u.CardHeader,null,c().createElement(u.CardHeaderMain,null,c().createElement(u.CardTitle,null,"Instance Details"))),c().createElement(u.CardBody,null,c().createElement(y.Z,{instance:n})))))),c().createElement(u.PageSection,{variant:u.PageSectionVariants.light,isFilled:!0,hasOverflowScroll:!0,isWidthLimited:!0},c().createElement(u.Title,{headingLevel:"h2"},"Use Red Hat ACS to secure your clusters"),c().createElement(u.Grid,{hasGutter:!0},c().createElement(u.GridItem,{md:7},c().createElement(u.Card,{className:"marketing-video"},c().createElement("iframe",{src:"https://www.youtube.com/embed/lFBFW3HmgsA",title:"Advanced Cluster Security in 2 Minutes",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),c().createElement(u.GridItem,{md:5,hasGutter:!0},c().createElement(u.List,{isPlain:!0},c().createElement(u.ListItem,null,c().createElement(u.Button,{variant:"link",isInline:!0,component:"a",href:"https://www.redhat.com/sysadmin/kubernetes-RHACS-red-hat-advanced-cluster-security",target:"_blank"},"Getting Started Guide")),c().createElement(u.ListItem,null,c().createElement(u.Button,{variant:"link",isInline:!0,component:"a",href:"https://docs.openshift.com/acs/3.71/welcome/index.html",target:"_blank"},"Product Configuration"))))))))}},22512:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r,c,a=n(4942),i=n(15861),l=n(87757),s=n.n(l),u=n(9669),o=n.n(u),m=n(34155);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f,E=null!==(r=m)&&void 0!==m&&null!==(c=r.env)&&void 0!==c?"https://api.openshift.com":"https://api.stage.openshift.com";const v=((f=o().create()).interceptors.request.use(function(){var e=(0,i.Z)(s().mark((function e(t){var n,r,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return n=e.sent,r=t.baseURL||E,c=d(d({},t),{},{url:"".concat(r).concat(t.url)}),n&&(c.headers=d(d({},c.headers),{},{Authorization:"Bearer ".concat(n)})),delete c.customHost,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f)},15705:(e,t,n)=>{"use strict";n.d(t,{LX:()=>a,Zz:()=>c,mt:()=>u,xp:()=>o});var r=n(4942),c="aws",a="us-east-1",i=(0,r.Z)({},c,"Amazon Web Services"),l=(0,r.Z)({},c,"AWS"),s=Object.keys(i).map((function(e){return{value:e,label:i[e]}}));function u(e){return l[e]?"Hosted by Red Hat (on ".concat(l[e],")"):"Hosted by Red Hat"}function o(e){var t=s.find((function(t){return t.label===e}));return null==t?void 0:t.value}},15558:(e,t,n)=>{"use strict";n.d(t,{F:()=>l,c:()=>i});var r=n(53651),c=n(12902),a=n(5480);function i(e){return(0,r.Z)((0,c.Z)(e),new Date,{addSuffix:!0})}function l(e){return(0,a.Z)((0,c.Z)(e),"MM/dd/yyyy | h:mm:ss a")}},12699:(e,t,n)=>{"use strict";n.d(t,{W:()=>a});var r=n(80129),c=n.n(r);function a(e){return c().stringify(e,{encode:!1})}},60509:(e,t,n)=>{"use strict";function r(e,t){var n=null==t?void 0:t.find((function(t){return c(t).startsWith(e)}));return null==n?void 0:n.id}function c(e){return e?e.display_name||e.id:""}n.d(t,{M:()=>c,n:()=>r})},90045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(93264),c=n.n(r),a=n(51663),i=n(68025),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},l.apply(this,arguments)};const s=function(e){return c().createElement(a.Link,l({},e,{to:(0,i.n)(e.to,i.d)}))}},24654:()=>{}}]);
//# sourceMappingURL=../sourcemaps/InstanceDetailsPage.190973e33f4adef9430eec2296a37757.js.map