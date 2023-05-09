(self.webpackChunkacs=self.webpackChunkacs||[]).push([[792],{73481:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(87462);var a=r(93264),c=r.n(a),i=r(21242),l=r(90045),s=["children","to"];const u=function(e){var t=e.children,r=e.to,a=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s);return c().createElement(i.BreadcrumbItem,(0,n.Z)({},a,{render:function(e){var n=e.className,a=e.ariaCurrent;return c().createElement(l.Z,{className:n,"aria-current":a,to:r},t)}}))}},45331:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(93264),a=r.n(n),c=r(21242),i=r(15558),l=r(15705),s=r(48564);const u=function(e){var t=e.instance;return a().createElement(c.DescriptionList,{isHorizontal:!0},a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Cloud provider"),a().createElement(c.DescriptionListDescription,null,(0,l.mt)(t.cloud_provider))),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Region"),a().createElement(c.DescriptionListDescription,null,a().createElement(s.Z,{id:t.region}))),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"ID"),a().createElement(c.DescriptionListDescription,null,t.id)),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Owner"),a().createElement(c.DescriptionListDescription,null,t.owner)),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Time created"),a().createElement(c.DescriptionListDescription,null,(0,i.F)(t.created_at))),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Time updated"),a().createElement(c.DescriptionListDescription,null,(0,i.F)(t.updated_at))),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Central API endpoint (Sensor mTLS)"),a().createElement(c.DescriptionListDescription,null,t.centralDataURL||"-")),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Central instance (UI, roxctl)"),a().createElement(c.DescriptionListDescription,null,t.centralUIURL||"-")))}},48564:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(93264),a=r.n(n),c=r(45759),i=r(15705),l=r(60509);function s(e){var t=e.id,r=(0,c.y)({provider:i.Zz}).data,s=(0,n.useMemo)((function(){return null==r?void 0:r.items.find((function(e){return e.id===t}))}),[r,t]);return a().createElement("span",null,s?(0,l.M)(s):t)}},71797:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(4942),a=r(15861),c=r(87757),i=r.n(c),l=r(55140),s=r(9669),u=r.n(s);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(){var e,t=(0,(0,l.Z)().isProd)()?"https://api.openshift.com":"https://api.stage.openshift.com";return(e=u().create()).interceptors.request.use(function(){var e=(0,a.Z)(i().mark((function e(r){var n,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return n=e.sent,a=r.baseURL||t,c=m(m({},r),{},{url:"".concat(a).concat(r.url)}),n&&(c.headers=m(m({},c.headers),{},{Authorization:"Bearer ".concat(n)})),delete c.customHost,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e}},45759:(e,t,r)=>{"use strict";r.d(t,{y:()=>p});var n=r(4942),a=r(15861),c=r(87757),i=r.n(c),l=r(88767),s=r(12699),u=r(71797);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=function(){var e=(0,a.Z)(i().mark((function e(t,r){var n,a,c,l,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.provider,a=r.instanceType,c=(0,s.W)({instance_type:a}),e.next=4,t.get("/api/rhacs/v1/cloud_providers/".concat(n,"/regions?").concat(c));case 4:return l=e.sent,u=l.data,e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(e,t){var r=(0,u.Z)();return(0,l.useQuery)(function(e){return["cloud_regions",e]}(e),(function(){return m(r,e)}),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({staleTime:1/0},t))}},61933:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var n=r(93264),a=r.n(n),c=r(89376),i=r(39173),l=r(14748),s=r(51663),u=r(21242),o=r(73481),m=r(15861),p=r(87757),d=r.n(p),f=r(88767),E=r(71797),v=function(){var e=(0,m.Z)(d().mark((function e(t,r){var n,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("/api/rhacs/v1/centrals/".concat(r));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),y=r(45331);const h=function(){var e,t,r=(e=(0,s.useParams)().instanceId,t=(0,E.Z)(),(0,f.useQuery)(["instance",e],(function(){return v(t,e)}))),n=r.data;return r.isFetching?a().createElement(u.Bullseye,null,a().createElement(u.Spinner,null)):a().createElement("div",null,a().createElement(c.Z,null,a().createElement(u.Flex,{direction:{default:"column"}},a().createElement(u.FlexItem,null,a().createElement(u.Breadcrumb,null,a().createElement(o.Z,{to:"/instances"},"ACS instances"),a().createElement(u.BreadcrumbItem,{isActive:!0},n.name))),a().createElement(u.FlexItem,null,a().createElement(i.Z,{title:n.name})))),a().createElement(l.ZP,{className:"pf-u-p-0 pf-m-fill pf-m-overflow-scroll"},a().createElement(u.PageSection,null,a().createElement(u.Flex,{alignItems:{default:"alignItemsStretch"}},a().createElement(u.FlexItem,{flex:{default:"flex_1"},alignSelf:{default:"alignSelfStretch"}},a().createElement(u.Card,{className:"pf-u-h-100"},a().createElement(u.CardHeader,null,a().createElement(u.CardHeaderMain,null,a().createElement(u.CardTitle,null,"ACS Instance Access"))),a().createElement(u.CardBody,null,a().createElement(u.Flex,{direction:{default:"column"}},a().createElement(u.FlexItem,null,"Get started by signing in to your ACS instance."),a().createElement(u.FlexItem,null,a().createElement(u.Button,{variant:u.ButtonVariant.primary,component:"a",href:n.centralUIURL,isDisabled:!n.centralUIURL,target:"_blank"},"Open ACS Console")))))),a().createElement(u.FlexItem,{flex:{default:"flex_1"}},a().createElement(u.Card,null,a().createElement(u.CardHeader,null,a().createElement(u.CardHeaderMain,null,a().createElement(u.CardTitle,null,"Instance Details"))),a().createElement(u.CardBody,null,a().createElement(y.Z,{instance:n})))))),a().createElement(u.PageSection,{variant:u.PageSectionVariants.light,isFilled:!0,hasOverflowScroll:!0,isWidthLimited:!0},a().createElement(u.Title,{headingLevel:"h2"},"Use Red Hat ACS to secure your clusters"),a().createElement(u.Grid,{hasGutter:!0},a().createElement(u.GridItem,{md:7},a().createElement(u.Card,{className:"marketing-video"},a().createElement("iframe",{src:"https://www.youtube.com/embed/lFBFW3HmgsA",title:"Advanced Cluster Security in 2 Minutes",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),a().createElement(u.GridItem,{md:5,hasGutter:!0},a().createElement(u.List,{isPlain:!0},a().createElement(u.ListItem,null,a().createElement(u.Button,{variant:"link",isInline:!0,component:"a",href:"https://www.redhat.com/sysadmin/kubernetes-RHACS-red-hat-advanced-cluster-security",target:"_blank"},"Getting Started Guide")),a().createElement(u.ListItem,null,a().createElement(u.Button,{variant:"link",isInline:!0,component:"a",href:"https://docs.openshift.com/acs/3.71/welcome/index.html",target:"_blank"},"Product Configuration"))))))))}},15705:(e,t,r)=>{"use strict";r.d(t,{LX:()=>c,Zz:()=>a,mt:()=>u,xp:()=>o});var n=r(4942),a="aws",c="us-east-1",i=(0,n.Z)({},a,"Amazon Web Services"),l=(0,n.Z)({},a,"AWS"),s=Object.keys(i).map((function(e){return{value:e,label:i[e]}}));function u(e){return l[e]?"Hosted by Red Hat (on ".concat(l[e],")"):"Hosted by Red Hat"}function o(e){var t=s.find((function(t){return t.label===e}));return null==t?void 0:t.value}},15558:(e,t,r)=>{"use strict";r.d(t,{F:()=>l,c:()=>i});var n=r(53651),a=r(12902),c=r(5480);function i(e){return(0,n.Z)((0,a.Z)(e),new Date,{addSuffix:!0})}function l(e){return(0,c.Z)((0,a.Z)(e),"MM/dd/yyyy | h:mm:ss a")}},12699:(e,t,r)=>{"use strict";r.d(t,{W:()=>c});var n=r(80129),a=r.n(n);function c(e){return a().stringify(e,{encode:!1})}},60509:(e,t,r)=>{"use strict";function n(e,t){var r=null==t?void 0:t.find((function(t){return a(t).startsWith(e)}));return null==r?void 0:r.id}function a(e){return e?e.display_name||e.id:""}r.d(t,{M:()=>a,n:()=>n})},90045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(93264),a=r.n(n),c=r(51663),i=r(68025),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const s=function(e){return a().createElement(c.Link,l({},e,{to:(0,i.n)(e.to,i.d)}))}},24654:()=>{}}]);
//# sourceMappingURL=../sourcemaps/InstanceDetailsPage.c5839a559b130a747fd3a614a8594ea8.js.map