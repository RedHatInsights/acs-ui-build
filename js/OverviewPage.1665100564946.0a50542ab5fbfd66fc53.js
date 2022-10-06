/*! For license information please see OverviewPage.1665100564946.0a50542ab5fbfd66fc53.js.LICENSE.txt */
"use strict";(self.webpackChunkacs=self.webpackChunkacs||[]).push([[201],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const r=n(70655),a=r.__importStar(n(93264));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={})),t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let l=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:i=0,width:c,height:u,svgPath:s}){var f;return f=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{size:o,color:l,title:f,noVerticalAlign:p}=e,m=r.__rest(e,["size","color","title","noVerticalAlign"]),d=Boolean(f),h=t.getSize(o),y=-.125*Number.parseFloat(h),v=p?null:{verticalAlign:`${y}em`},b=[n,i,c,u].join(" ");return a.createElement("svg",Object.assign({style:v,fill:l,height:h,width:h,viewBox:b,"aria-labelledby":d?this.id:null,"aria-hidden":!d||null,role:"img"},m),d&&a.createElement("title",{id:this.id},f),a.createElement("path",{d:s}))}},f.displayName=e,f.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},f}},50470:(e,t,n)=>{t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=n(35183).createIcon(t.mq),t.ZP=t.LA},17752:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(93264),a=n.n(r),o=n(70943),l=n(50470),i=n(25478);const c=function(){return a().createElement("div",null,a().createElement(o.PageSection,{variant:o.PageSectionVariants.light,className:"pf-u-p-2xl"},a().createElement(o.Grid,{hasGutter:!0},a().createElement(o.GridItem,{span:8},a().createElement(o.Stack,{hasGutter:!0},a().createElement(o.TextContent,null,a().createElement(o.Text,{component:o.TextVariants.h1},"Get started with Red Hat Advanced Cluster Security Managed Service for Kubernetes")),a().createElement(o.TextContent,{component:o.TextVariants.p,className:"pf-u-color-200 pf-u-font-size-lg"},a().createElement(o.Text,null,"Fully hosted and managed service for protecting cloud native applications and Kubernetes")),a().createElement(o.TextContent,null,a().createElement(o.Text,{component:o.TextVariants.p},"Red Hat® Advanced Cluster Security for Kubernetes is the pioneering Kubernetes-native security platform, equipping organizations to more securely build, deploy, and run cloud-native applications anywhere. The solution helps improve the security of the application build process, protects the application platform and configurations, detects runtime issues, and facilitates response. Red Hat Advanced Cluster Security for Kubernetes lowers operational costs by reducing the learning curve for implementing Kubernetes security, provides built-in controls for enforcement to reduce operational risk, and uses a Kubernetes-native approach that supports built-in security across the entire software development life cycle, facilitating greater developer productivity.")))),a().createElement(o.GridItem,{span:4},a().createElement("img",{src:i})))),a().createElement(o.PageSection,null,a().createElement(o.Grid,{hasGutter:!0,lg:6},a().createElement(o.GridItem,null,a().createElement(o.Card,{className:"pf-u-h-100"},a().createElement(o.CardHeaderMain,null,a().createElement(o.CardTitle,null,a().createElement(o.Flex,null,a().createElement(o.FlexItem,{spacer:{default:"spacerSm"}},a().createElement(o.TextContent,null,a().createElement(o.Text,{component:"h2"},"Purchase now"))),a().createElement(o.FlexItem,null,a().createElement(o.TextContent,null,a().createElement(o.Text,{className:"pf-u-color-200"},"(US and Canada only)")))))),a().createElement(o.CardBody,null,"Purchase a pay-as-you-go subscription for up to 25 streaming units using one of our Marketplace options below."),a().createElement(o.CardFooter,null,a().createElement(o.Flex,null,a().createElement(o.FlexItem,null,a().createElement(o.Button,{variant:o.ButtonVariant.link,component:"a",target:"_blank",href:"https://aws.amazon.com/marketplace/pp/prodview-2i77ihj7rlgy6",isInline:!0},"AWS Marketplace",a().createElement(l.ZP,{className:"pf-u-ml-md",color:"currentColor",noVerticalAlign:!1,size:"sm"}))))))),a().createElement(o.GridItem,null,a().createElement(o.Card,{className:"pf-u-h-100"},a().createElement(o.CardHeaderMain,null,a().createElement(o.CardTitle,null,a().createElement(o.Flex,null,a().createElement(o.FlexItem,{spacer:{default:"spacerSm"}},a().createElement(o.TextContent,null,a().createElement(o.Text,{component:"h2"},"Contact sales"))),a().createElement(o.FlexItem,null,a().createElement(o.TextContent,null,a().createElement(o.Text,{className:"pf-u-color-200"},"(Available for all regions)")))))),a().createElement(o.CardBody,null,"Contact sales to get a prepaid subscription that fits your needs. Sales can help set up a prepaid subscription, modify a current subscription or get a longer trial"),a().createElement(o.CardFooter,null,a().createElement(o.Flex,null,a().createElement(o.FlexItem,null,a().createElement(o.Button,{variant:o.ButtonVariant.link,component:"a",target:"_blank",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes#talk-to-a-red-hatter",isInline:!0},"Contact sales",a().createElement(l.ZP,{className:"pf-u-ml-md",color:"currentColor",noVerticalAlign:!1,size:"sm"}))))))))),a().createElement(o.PageSection,null,a().createElement(o.Card,{className:"pf-u-h-100"},a().createElement(o.CardTitle,null,a().createElement(o.TextContent,null,a().createElement(o.Text,{component:"h2"},"Pricing model"))),a().createElement(o.CardBody,null,a().createElement(o.Flex,{spaceItems:{default:"spaceItemsXl"}},a().createElement(o.Flex,{alignSelf:{default:"alignSelfCenter"},flex:{default:"flex_1"},justifyContent:{default:"justifyContentCenter"}},a().createElement(o.FlexItem,null,a().createElement(o.DescriptionList,{isHorizontal:!0},a().createElement(o.DescriptionListGroup,null,a().createElement(o.DescriptionListTerm,null,"First 20 vCPU"),a().createElement(o.DescriptionListDescription,null,"Free")),a().createElement(o.DescriptionListGroup,null,a().createElement(o.DescriptionListTerm,null,"Managed vCPU"),a().createElement(o.DescriptionListDescription,null,"$0.03 / hour"))))),a().createElement(o.Divider,{isVertical:!0}),a().createElement(o.FlexItem,{flex:{default:"flex_1"}},a().createElement(o.TextContent,null,a().createElement(o.Text,{component:"p"},"A ",a().createElement("strong",null,"managed vCPU")," means the number of vCPU measured on a managed cluster"))))))))}},70655:(e,t,n)=>{n.r(t),n.d(t,{__extends:()=>a,__assign:()=>o,__rest:()=>l,__decorate:()=>i,__param:()=>c,__metadata:()=>u,__awaiter:()=>s,__generator:()=>f,__createBinding:()=>p,__exportStar:()=>m,__values:()=>d,__read:()=>h,__spread:()=>y,__spreadArrays:()=>v,__spreadArray:()=>b,__await:()=>g,__asyncGenerator:()=>E,__asyncDelegator:()=>w,__asyncValues:()=>_,__makeTemplateObject:()=>x,__importStar:()=>S,__importDefault:()=>P,__classPrivateFieldGet:()=>O,__classPrivateFieldSet:()=>T});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function i(e,t,n,r){var a,o=arguments.length,l=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(l=(o<3?a(l):o>3?a(t,n,l):a(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}var p=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function m(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||p(t,e,n)}function d(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],l=0,i=o.length;l<i;l++,a++)r[a]=o[l];return r}function b(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function E(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,a=n.apply(e,t||[]),o=[];return r={},l("next"),l("throw"),l("return"),r[Symbol.asyncIterator]=function(){return this},r;function l(e){a[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||i(e,t)}))})}function i(e,t){try{(n=a[e](t)).value instanceof g?Promise.resolve(n.value.v).then(c,u):s(o[0][2],n)}catch(e){s(o[0][3],e)}var n}function c(e){i("next",e)}function u(e){i("throw",e)}function s(e,t){e(t),o.shift(),o.length&&i(o[0][0],o[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,a){t[r]=e[r]?function(t){return(n=!n)?{value:g(e[r](t)),done:"return"===r}:a?a(t):t}:a}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=d(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,a){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,a,(t=e[n](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var C=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&p(t,e,n);return C(t,e),t}function P(e){return e&&e.__esModule?e:{default:e}}function O(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function T(e,t,n,r,a){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?a.call(e,n):a?a.value=n:t.set(e,n),n}},25478:(e,t,n)=>{e.exports=n.p+"fonts/banner_image.png"}}]);