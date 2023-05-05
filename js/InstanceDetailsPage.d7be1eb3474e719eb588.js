(self.webpackChunkacs=self.webpackChunkacs||[]).push([[792],{45331:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(93264),a=n.n(r),c=n(21242),i=n(15558),l=n(15705),s=n(48564);const u=function(e){var t=e.instance;return a().createElement(c.DescriptionList,{isHorizontal:!0},a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Cloud provider"),a().createElement(c.DescriptionListDescription,null,(0,l.mt)(t.cloud_provider))),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Region"),a().createElement(c.DescriptionListDescription,null,a().createElement(s.Z,{id:t.region}))),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"ID"),a().createElement(c.DescriptionListDescription,null,t.id)),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Owner"),a().createElement(c.DescriptionListDescription,null,t.owner)),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Time created"),a().createElement(c.DescriptionListDescription,null,(0,i.F)(t.created_at))),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Time updated"),a().createElement(c.DescriptionListDescription,null,(0,i.F)(t.updated_at))),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Central API endpoint (Sensor mTLS)"),a().createElement(c.DescriptionListDescription,null,t.centralDataURL||"-")),a().createElement(c.DescriptionListGroup,null,a().createElement(c.DescriptionListTerm,null,"Central instance (UI, roxctl)"),a().createElement(c.DescriptionListDescription,null,t.centralUIURL||"-")))}},48564:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(93264),a=n.n(r),c=n(45759),i=n(15705),l=n(60509);function s(e){var t=e.id,n=(0,c.y)({provider:i.Zz}).data,s=(0,r.useMemo)((function(){return null==n?void 0:n.items.find((function(e){return e.id===t}))}),[n,t]);return a().createElement("span",null,s?(0,l.M)(s):t)}},45759:(e,t,n)=>{"use strict";n.d(t,{y:()=>p});var r=n(4942),a=n(15861),c=n(87757),i=n.n(c),l=n(88767),s=n(22512),u=n(12699);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=function(){var e=(0,a.Z)(i().mark((function e(t){var n,r,a,c,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.provider,r=t.instanceType,a=(0,u.W)({instance_type:r}),e.next=4,s.Z.get("/api/rhacs/v1/cloud_providers/".concat(n,"/regions?").concat(a));case 4:return c=e.sent,l=c.data,e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e,t){return(0,l.useQuery)(function(e){return["cloud_regions",e]}(e),(function(){return m(e)}),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({staleTime:1/0},t))}},10671:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(93264),a=n.n(r),c=n(89376),i=n(39173),l=n(14748),s=n(51663),u=n(21242),o=n(87462);var m=n(68025),p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)};const d=function(e){return a().createElement(s.Link,p({},e,{to:(0,m.n)(e.to,m.d)}))};var f=["children","to"];const E=function(e){var t=e.children,n=e.to,r=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,f);return a().createElement(u.BreadcrumbItem,(0,o.Z)({},r,{render:function(e){var r=e.className,c=e.ariaCurrent;return a().createElement(d,{className:r,"aria-current":c,to:n},t)}}))};var v=n(15861),y=n(87757),h=n.n(y),b=n(88767),g=n(22512),O=function(){var e=(0,v.Z)(h().mark((function e(t){var n,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.get("/api/rhacs/v1/centrals/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=n(45331);const w=function(){var e,t=(e=(0,s.useParams)().instanceId,(0,b.useQuery)(["instance",e],(function(){return O(e)}))),n=t.data;return t.isFetching?a().createElement(u.Bullseye,null,a().createElement(u.Spinner,null)):a().createElement("div",null,a().createElement(c.Z,null,a().createElement(u.Flex,{direction:{default:"column"}},a().createElement(u.FlexItem,null,a().createElement(u.Breadcrumb,null,a().createElement(E,{to:"/instances"},"ACS instances"),a().createElement(u.BreadcrumbItem,{isActive:!0},n.name))),a().createElement(u.FlexItem,null,a().createElement(i.Z,{title:n.name})))),a().createElement(l.ZP,{className:"pf-u-p-0 pf-m-fill pf-m-overflow-scroll"},a().createElement(u.PageSection,null,a().createElement(u.Flex,{alignItems:{default:"alignItemsStretch"}},a().createElement(u.FlexItem,{flex:{default:"flex_1"},alignSelf:{default:"alignSelfStretch"}},a().createElement(u.Card,{className:"pf-u-h-100"},a().createElement(u.CardHeader,null,a().createElement(u.CardHeaderMain,null,a().createElement(u.CardTitle,null,"ACS Instance Access"))),a().createElement(u.CardBody,null,a().createElement(u.Flex,{direction:{default:"column"}},a().createElement(u.FlexItem,null,"Get started by signing in to your ACS instance."),a().createElement(u.FlexItem,null,a().createElement(u.Button,{variant:u.ButtonVariant.primary,component:"a",href:n.centralUIURL,isDisabled:!n.centralUIURL,target:"_blank"},"Open ACS Console")))))),a().createElement(u.FlexItem,{flex:{default:"flex_1"}},a().createElement(u.Card,null,a().createElement(u.CardHeader,null,a().createElement(u.CardHeaderMain,null,a().createElement(u.CardTitle,null,"Instance Details"))),a().createElement(u.CardBody,null,a().createElement(D.Z,{instance:n})))))),a().createElement(u.PageSection,{variant:u.PageSectionVariants.light,isFilled:!0,hasOverflowScroll:!0,isWidthLimited:!0},a().createElement(u.Title,{headingLevel:"h2"},"Use Red Hat ACS to secure your clusters"),a().createElement(u.Grid,{hasGutter:!0},a().createElement(u.GridItem,{md:7},a().createElement(u.Card,{className:"marketing-video"},a().createElement("iframe",{src:"https://www.youtube.com/embed/lFBFW3HmgsA",title:"Advanced Cluster Security in 2 Minutes",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),a().createElement(u.GridItem,{md:5,hasGutter:!0},a().createElement(u.List,{isPlain:!0},a().createElement(u.ListItem,null,a().createElement(u.Button,{variant:"link",isInline:!0,component:"a",href:"https://www.redhat.com/sysadmin/kubernetes-RHACS-red-hat-advanced-cluster-security",target:"_blank"},"Getting Started Guide")),a().createElement(u.ListItem,null,a().createElement(u.Button,{variant:"link",isInline:!0,component:"a",href:"https://docs.openshift.com/acs/3.71/welcome/index.html",target:"_blank"},"Product Configuration"))))))))}},22512:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r,a,c=n(4942),i=n(15861),l=n(87757),s=n.n(l),u=n(9669),o=n.n(u),m=n(34155);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f,E=null!==(r=m)&&void 0!==m&&null!==(a=r.env)&&void 0!==a?"https://api.openshift.com":"https://api.stage.openshift.com";const v=((f=o().create()).interceptors.request.use(function(){var e=(0,i.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return n=e.sent,r=t.baseURL||E,a=d(d({},t),{},{url:"".concat(r).concat(t.url)}),n&&(a.headers=d(d({},a.headers),{},{Authorization:"Bearer ".concat(n)})),delete a.customHost,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f)},15705:(e,t,n)=>{"use strict";n.d(t,{LX:()=>c,Zz:()=>a,mt:()=>u,xp:()=>o});var r=n(4942),a="aws",c="us-east-1",i=(0,r.Z)({},a,"Amazon Web Services"),l=(0,r.Z)({},a,"AWS"),s=Object.keys(i).map((function(e){return{value:e,label:i[e]}}));function u(e){return l[e]?"Hosted by Red Hat (on ".concat(l[e],")"):"Hosted by Red Hat"}function o(e){var t=s.find((function(t){return t.label===e}));return null==t?void 0:t.value}},15558:(e,t,n)=>{"use strict";n.d(t,{F:()=>l,c:()=>i});var r=n(53651),a=n(12902),c=n(5480);function i(e){return(0,r.Z)((0,a.Z)(e),new Date,{addSuffix:!0})}function l(e){return(0,c.Z)((0,a.Z)(e),"MM/dd/yyyy | h:mm:ss a")}},12699:(e,t,n)=>{"use strict";n.d(t,{W:()=>c});var r=n(80129),a=n.n(r);function c(e){return a().stringify(e,{encode:!1})}},60509:(e,t,n)=>{"use strict";function r(e,t){var n=null==t?void 0:t.find((function(t){return a(t).startsWith(e)}));return null==n?void 0:n.id}function a(e){return e?e.display_name||e.id:""}n.d(t,{M:()=>a,n:()=>r})},24654:()=>{}}]);