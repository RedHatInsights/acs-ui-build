(self.webpackChunkacs=self.webpackChunkacs||[]).push([[792],{64029:(e,t,n)=>{"use strict";n.d(t,{a:()=>o});var r=n(65353),a=n(28416),l=n(44303),i=n(38296),c=n(62472);const o=e=>{var{children:t=null,className:n="","aria-label":s="Breadcrumb",ouiaId:u,ouiaSafe:m=!0}=e,d=(0,r._T)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const f=(0,c.S$)(o.displayName,u,m);return a.createElement("nav",Object.assign({},d,{"aria-label":s,className:(0,i.i)(l.Z.breadcrumb,n)},f),a.createElement("ol",{className:l.Z.breadcrumbList,role:"list"},a.Children.map(t,((e,t)=>{const n=t>0;return a.isValidElement(e)?a.cloneElement(e,{showDivider:n}):e}))))};o.displayName="Breadcrumb"},32835:(e,t,n)=>{"use strict";n.d(t,{g:()=>o});var r=n(65353),a=n(28416),l=n(93174),i=n(44303),c=n(38296);const o=e=>{var{children:t=null,className:n="",to:o,isActive:s=!1,isDropdown:u=!1,showDivider:m,target:d,component:f="a",render:p}=e,b=(0,r._T)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const h=f,v=s?"page":void 0,g=(0,c.i)(i.Z.breadcrumbLink,s&&i.Z.modifiers.current);return a.createElement("li",Object.assign({},b,{className:(0,c.i)(i.Z.breadcrumbItem,n)}),m&&a.createElement("span",{className:i.Z.breadcrumbItemDivider},a.createElement(l.ZP,null)),"button"===f&&a.createElement("button",{className:g,"aria-current":v,type:"button"},t),u&&a.createElement("span",{className:(0,c.i)(i.Z.breadcrumbDropdown)},t),p&&p({className:g,ariaCurrent:v}),o&&!p&&a.createElement(h,{href:o,target:d,className:g,"aria-current":v},t),!o&&"button"!==f&&!u&&t)};o.displayName="BreadcrumbItem"},49469:(e,t,n)=>{"use strict";n.d(t,{O:()=>b});var r=n(65353),a=n(28416),l=n(38296),i=n(54918),c=n(32203);const o=e=>{var{children:t,className:n}=e,c=(0,r._T)(e,["children","className"]);return a.createElement("div",Object.assign({className:(0,l.i)(i.Z.cardHeaderMain,n)},c),t)};o.displayName="CardHeaderMain";const s=e=>{var{children:t,className:n,hasNoOffset:c=!1}=e,o=(0,r._T)(e,["children","className","hasNoOffset"]);return a.createElement("div",Object.assign({className:(0,l.i)(i.Z.cardActions,c&&i.Z.modifiers.noOffset,n)},o),t)};s.displayName="CardActions";const u=e=>{var{children:t,className:n}=e,c=(0,r._T)(e,["children","className"]);return a.createElement("div",Object.assign({className:(0,l.i)(i.Z.cardSelectableActions,n)},c),t)};u.displayName="CardSelectableActions";var m=n(32588),d=n(93174),f=n(35575),p=n(93149);const b=e=>{var{children:t,className:n,actions:b,selectableActions:h,id:v,onExpand:g,toggleButtonProps:y,isToggleRightAligned:E}=e,w=(0,r._T)(e,["children","className","actions","selectableActions","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return a.createElement(c.H.Consumer,null,(({cardId:e,isClickable:r,isSelectable:c,isDisabled:N,hasSelectableInput:O})=>{const T=a.createElement("div",{className:(0,l.i)(i.Z.cardHeaderToggle)},a.createElement(m.zx,Object.assign({variant:"plain",type:"button",onClick:t=>{g(t,e)}},y),a.createElement("span",{className:(0,l.i)(i.Z.cardHeaderToggleIcon)},a.createElement(d.ZP,{"aria-hidden":"true"})))),Z=r&&!c||c&&!r,k=O;(null==b?void 0:b.actions)&&Z&&!k&&console.warn((r?"Clickable":"Selectable")+" only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.");const x=e=>{r&&((null==h?void 0:h.onClickAction)?h.onClickAction(e):(null==h?void 0:h.to)&&window.open(h.to,h.isExternalLink?"_blank":"_self"))},C=()=>{const e={className:"pf-m-standalone",inputClassName:r&&!c&&"pf-v5-screen-reader",label:a.createElement(a.Fragment,null),"aria-label":h.selectableActionAriaLabel,"aria-labelledby":h.selectableActionAriaLabelledby,id:h.selectableActionId,name:h.name,isDisabled:N};return r&&!c?Object.assign(Object.assign({},e),{onClick:x}):c?Object.assign(Object.assign({},e),{onChange:h.onChange,isChecked:h.isChecked}):e};return a.createElement("div",Object.assign({className:(0,l.i)(i.Z.cardHeader,E&&i.Z.modifiers.toggleRight,n),id:v},w),g&&!E&&T,(b||h&&(r||c))&&a.createElement(s,{className:null==b?void 0:b.className,hasNoOffset:(null==b?void 0:b.hasNoOffset)||(null==h?void 0:h.hasNoOffset)},null==b?void 0:b.actions,h&&(r||c)&&a.createElement(u,{className:null==h?void 0:h.className},"single"===(null==h?void 0:h.variant)||r&&!c?a.createElement(f.Y,Object.assign({},C())):a.createElement(p.X,Object.assign({},C())))),t&&a.createElement(o,null,t),g&&E&&T)}))};b.displayName="CardHeader"},70:(e,t,n)=>{"use strict";n.d(t,{l:()=>o});var r=n(65353),a=n(28416),l=n(38296),i=n(54918),c=n(32203);const o=e=>{var{children:t,className:n,component:o="div"}=e,s=(0,r._T)(e,["children","className","component"]);const{cardId:u,registerTitleId:m}=a.useContext(c.H),d=o,f=u?`${u}-title`:"";return a.useEffect((()=>(m(f),()=>m(""))),[m,f]),a.createElement("div",{className:(0,l.i)(i.Z.cardTitle)},a.createElement(d,Object.assign({className:(0,l.i)(i.Z.cardTitleText,n),id:f||void 0},s),t))};o.displayName="CardTitle"},72936:(e,t,n)=>{"use strict";n.d(t,{aV:()=>u});var r,a,l,i=n(65353),c=n(28416),o=n(14399),s=n(38296);!function(e){e.number="1",e.lowercaseLetter="a",e.uppercaseLetter="A",e.lowercaseRomanNumber="i",e.uppercaseRomanNumber="I"}(r||(r={})),function(e){e.inline="inline"}(a||(a={})),function(e){e.ol="ol",e.ul="ul"}(l||(l={}));const u=e=>{var{className:t="",children:n=null,variant:a=null,isBordered:u=!1,isPlain:m=!1,iconSize:d="default",type:f=r.number,ref:p=null,component:b=l.ul}=e,h=(0,i._T)(e,["className","children","variant","isBordered","isPlain","iconSize","type","ref","component"]);return b===l.ol?c.createElement("ol",Object.assign({ref:p,type:f},m&&{role:"list"},h,{className:(0,s.i)(o.Z.list,a&&o.Z.modifiers[a],u&&o.Z.modifiers.bordered,m&&o.Z.modifiers.plain,d&&"large"===d&&o.Z.modifiers.iconLg,t)}),n):c.createElement("ul",Object.assign({ref:p},m&&{role:"list"},h,{className:(0,s.i)(o.Z.list,a&&o.Z.modifiers[a],u&&o.Z.modifiers.bordered,m&&o.Z.modifiers.plain,d&&"large"===d&&o.Z.modifiers.iconLg,t)}),n)};u.displayName="List"},49345:(e,t,n)=>{"use strict";n.d(t,{H:()=>c});var r=n(65353),a=n(28416),l=n(14399),i=n(38296);const c=e=>{var{icon:t=null,children:n=null}=e,c=(0,r._T)(e,["icon","children"]);return a.createElement("li",Object.assign({className:(0,i.i)(t&&l.Z.listItem)},c),t&&a.createElement("span",{className:(0,i.i)(l.Z.listItemIcon)},t),n)};c.displayName="ListItem"},44303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(58392);const r={breadcrumb:"pf-v5-c-breadcrumb",breadcrumbDropdown:"pf-v5-c-breadcrumb__dropdown",breadcrumbHeading:"pf-v5-c-breadcrumb__heading",breadcrumbItem:"pf-v5-c-breadcrumb__item",breadcrumbItemDivider:"pf-v5-c-breadcrumb__item-divider",breadcrumbLink:"pf-v5-c-breadcrumb__link",breadcrumbList:"pf-v5-c-breadcrumb__list",dirRtl:"pf-v5-m-dir-rtl",dropdownToggle:"pf-v5-c-dropdown__toggle",modifiers:{current:"pf-m-current"}}},14399:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(90776);const r={list:"pf-v5-c-list",listItem:"pf-v5-c-list__item",listItemIcon:"pf-v5-c-list__item-icon",modifiers:{iconLg:"pf-m-icon-lg",plain:"pf-m-plain",inline:"pf-m-inline",bordered:"pf-m-bordered"}}},34155:e=>{var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var c,o=[],s=!1,u=-1;function m(){s&&c&&(s=!1,c.length?o=c.concat(o):u=-1,o.length&&d())}function d(){if(!s){var e=i(m);s=!0;for(var t=o.length;t;){for(c=o,o=[];++u<t;)c&&c[u].run();u=-1,t=o.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new f(e,t)),1!==o.length||s||i(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},32373:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(28416),a=n.n(r),l=n(51663),i=n(56318),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const o=function(e){return a().createElement(l.Link,c({},e,{to:(0,i.n)(e.to,i.d)}))}},73417:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(28416),a=n.n(r),l=n(32835),i=n(32373),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const o=function(e){var t=e.children,n=e.to,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["children","to"]);return a().createElement(l.g,c({},r,{render:function(e){var r=e.className,l=e.ariaCurrent;return a().createElement(i.Z,{className:r,"aria-current":l,to:n},t)}}))}},68577:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(28416),a=n.n(r),l=n(45518),i=n(91921),c=n(58844),o=n(10550),s=n(3025),u=n(58791),m=n(63129),d=n(1148);const f=function(e){var t=e.instance;return a().createElement(i.o,{isHorizontal:!0},a().createElement(c.g,null,a().createElement(o.M,null,"Cloud provider"),a().createElement(s.b,null,(0,m.mt)(t.cloud_provider))),a().createElement(c.g,null,a().createElement(o.M,null,"Region"),a().createElement(s.b,null,a().createElement(d.Z,{id:t.region}))),a().createElement(c.g,null,a().createElement(o.M,null,"ID"),a().createElement(s.b,null,a().createElement(l.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"inline-compact"},t.id))),a().createElement(c.g,null,a().createElement(o.M,null,"Owner"),a().createElement(s.b,null,t.owner)),a().createElement(c.g,null,a().createElement(o.M,null,"Time created"),a().createElement(s.b,null,(0,u.F)(t.created_at))),a().createElement(c.g,null,a().createElement(o.M,null,"Time updated"),a().createElement(s.b,null,(0,u.F)(t.updated_at))),a().createElement(c.g,null,a().createElement(o.M,null,"Central API endpoint (Sensor mTLS)"),a().createElement(s.b,null,a().createElement(l.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"inline-compact"},t.centralDataURL||"-"))),a().createElement(c.g,null,a().createElement(o.M,null,"Central instance (UI, roxctl)"),a().createElement(s.b,null,a().createElement(l.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"inline-compact"},t.centralUIURL||"-"))))}},1148:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(28416),a=n.n(r),l=n(37067),i=n(63129),c=n(98709);function o(e){var t=e.id,n=(0,l.y)({provider:i.Zz}).data,o=(0,r.useMemo)((function(){return null==n?void 0:n.items.find((function(e){return e.id===t}))}),[n,t]);return a().createElement("span",null,o?(0,c.M)(o):t)}},37545:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(55140),a=n(9669),l=n.n(a),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},c=function(e,t,n,r){return new(n||(n=Promise))((function(a,l){function i(e){try{o(r.next(e))}catch(e){l(e)}}function c(e){try{o(r.throw(e))}catch(e){l(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}o((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,a,l,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(c){return function(o){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){i.label=c[1];break}if(6===c[0]&&i.label<a[1]){i.label=a[1],a=c;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(c);break}a[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,o])}}},s="https://api.openshift.com",u="https://api.stage.openshift.com",m="https://api.integration.openshift.com";function d(){var e,t=this,n=(0,r.Z)(),a=n.isProd,d=n.isBeta,f=u;return a()?f=s:d()&&(f=m),(e=l().create()).interceptors.request.use((function(e){return c(t,void 0,void 0,(function(){var t,n,r;return o(this,(function(a){switch(a.label){case 0:return[4,insights.chrome.auth.getUser()];case 1:return a.sent(),[4,insights.chrome.auth.getToken()];case 2:return t=a.sent(),n=e.baseURL||f,r=i(i({},e),{url:"".concat(n).concat(e.url)}),t&&(r.headers=i(i({},r.headers),{Authorization:"Bearer ".concat(t)})),delete r.customHost,[2,r]}}))}))})),e}},37067:(e,t,n)=>{"use strict";n.d(t,{y:()=>c});var r=n(88767),a=n(40489),l=n(37545),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},c=function(e,t){var n=(0,l.Z)();return(0,r.useQuery)(function(e){return["cloud_regions",e]}(e),(function(){return function(e,t){var n,r,l,i,c=t.provider,o=t.instanceType;return n=void 0,r=void 0,i=function(){var t;return function(e,t){var n,r,a,l,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(c){return function(o){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){i.label=c[1];break}if(6===c[0]&&i.label<a[1]){i.label=a[1],a=c;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(c);break}a[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,o])}}}(this,(function(n){switch(n.label){case 0:return t=(0,a.W)({instance_type:o}),[4,e.get("/api/rhacs/v1/cloud_providers/".concat(c,"/regions?").concat(t))];case 1:return[2,n.sent().data]}}))},new((l=void 0)||(l=Promise))((function(e,t){function a(e){try{o(i.next(e))}catch(e){t(e)}}function c(e){try{o(i.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(a,c)}o((i=i.apply(n,r||[])).next())}))}(n,e)}),i({staleTime:1/0},t))}},72574:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var r=n(28416),a=n.n(r),l=n(63456),i=n(39173),c=n(99087),o=n(51663),s=n(64029),u=n(32835),m=n(52643),d=n(32588),f=n(32203),p=n(49469),b=n(70),h=n(62394),v=n(28191),g=n(92298),y=n(50693),E=n(16475),w=n(72936),N=n(49345),O=n(72853),T=n(37619),Z=n(38779),k=n(73417),x=n(88767),C=n(37545),I=function(e,t){return n=void 0,r=void 0,l=function(){return function(e,t){var n,r,a,l,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(c){return function(o){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){i.label=c[1];break}if(6===c[0]&&i.label<a[1]){i.label=a[1],a=c;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(c);break}a[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,o])}}}(this,(function(n){switch(n.label){case 0:return[4,e.get("/api/rhacs/v1/centrals/".concat(t))];case 1:return[2,n.sent().data]}}))},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{o(l.next(e))}catch(e){t(e)}}function c(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,c)}o((l=l.apply(n,r||[])).next())}));var n,r,a,l},S=n(68577),_=n(43047);const j="#c9190b";var A=n(9947),L=n(67880),P=n(38424),D=n(75106),H=n(80315),M=n(49739),B=n(83826),R=n(32373),F=function(){return F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},F.apply(this,arguments)};const z=function(e){var t=e.errorTitle,n=e.errorDescription,r=e.url,l=e.actionText,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["errorTitle","errorDescription","url","actionText"]);return a().createElement(A.u,F({variant:A.I.lg},i),a().createElement(L.t,{titleText:a().createElement(a().Fragment,null,t),icon:a().createElement(P.k,{icon:_.ZP,color:j}),headingLevel:"h4"}),a().createElement(D.B,null,a().createElement(M.K,null,a().createElement(B.v,null,n))),a().createElement(H.O,null,a().createElement(d.zx,{component:function(e){return a().createElement(R.Z,F({},e,{to:r}))}},l)))},U=function(){var e,t,n=(e=(0,o.useParams)().instanceId,t=(0,C.Z)(),(0,x.useQuery)(["instance",e],(function(){return I(t,e)}))),r=n.data,_=n.isFetching,j=n.isError;return _?a().createElement(m.b,null,a().createElement(T.$,null)):j?a().createElement(z,{errorTitle:"Instance Not Found",actionText:"Go to ACS Instances page",errorDescription:"The URL may be incorrect, you may not have permission to view that instance, or that instance no longer exists. Try using the ACS Instances page to find what you are looking for.",url:"instances"}):a().createElement("div",null,a().createElement(l.Z,null,a().createElement(v.k,{direction:{default:"column"}},a().createElement(g.B,null,a().createElement(s.a,null,a().createElement(k.Z,{to:"/instances"},"ACS instances"),a().createElement(u.g,{isActive:!0},r.name))),a().createElement(g.B,null,a().createElement(i.Z,{title:r.name})))),a().createElement(c.ZP,{className:"pf-v5-u-p-0 pf-m-fill pf-m-overflow-scroll"},a().createElement(O.NP,null,a().createElement(v.k,{alignItems:{default:"alignItemsStretch"}},a().createElement(g.B,{flex:{default:"flex_1"},alignSelf:{default:"alignSelfStretch"}},a().createElement(f.Z,{className:"pf-v5-u-h-100"},a().createElement(p.O,null,"actions=",a().createElement(a().Fragment,null,a().createElement(b.l,null,"ACS Instance Access"))),a().createElement(h.e,null,a().createElement(v.k,{direction:{default:"column"}},a().createElement(g.B,null,"Get started by signing in to your ACS instance."),a().createElement(g.B,null,a().createElement(d.zx,{variant:d.Wu.primary,component:"a",href:r.centralUIURL,isDisabled:!r.centralUIURL,target:"_blank"},"Open ACS Console")))))),a().createElement(g.B,{flex:{default:"flex_1"}},a().createElement(f.Z,null,a().createElement(p.O,null,"actions=",a().createElement(a().Fragment,null,a().createElement(b.l,null,"Instance Details"))),a().createElement(h.e,null,a().createElement(S.Z,{instance:r})))))),a().createElement(O.NP,{variant:O.Dk.light,isFilled:!0,hasOverflowScroll:!0,isWidthLimited:!0},a().createElement(Z.D,{headingLevel:"h2"},"Use Red Hat ACS to secure your clusters"),a().createElement(y.r,{hasGutter:!0},a().createElement(E.P,{md:7},a().createElement(f.Z,{className:"marketing-video"},a().createElement("iframe",{src:"https://www.youtube.com/embed/lFBFW3HmgsA",title:"Advanced Cluster Security in 2 Minutes",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),a().createElement(E.P,{md:5,hasGutter:!0},a().createElement(w.aV,{isPlain:!0},a().createElement(N.H,null,a().createElement(d.zx,{variant:"link",isInline:!0,component:"a",href:"https://www.redhat.com/sysadmin/kubernetes-RHACS-red-hat-advanced-cluster-security",target:"_blank"},"Getting Started Guide")),a().createElement(N.H,null,a().createElement(d.zx,{variant:"link",isInline:!0,component:"a",href:"https://docs.openshift.com/acs/3.71/welcome/index.html",target:"_blank"},"Product Configuration"))))))))}},63129:(e,t,n)=>{"use strict";var r,a;n.d(t,{LX:()=>i,Zz:()=>l,mt:()=>u,xp:()=>m});var l="aws",i="us-east-1",c=((r={})[l]="Amazon Web Services",r),o=((a={})[l]="AWS",a),s=Object.keys(c).map((function(e){return{value:e,label:c[e]}}));function u(e){return o[e]?"Hosted by Red Hat (on ".concat(o[e],")"):"Hosted by Red Hat"}function m(e){var t=s.find((function(t){return t.label===e}));return null==t?void 0:t.value}},58791:(e,t,n)=>{"use strict";n.d(t,{F:()=>o,c:()=>c});var r=n(53651),a=n(12902),l=n(5480),i="MM/dd/yyyy | h:mm:ss a";function c(e){return(0,r.Z)((0,a.Z)(e),new Date,{addSuffix:!0})}function o(e){return(0,l.Z)((0,a.Z)(e),i)}},40489:(e,t,n)=>{"use strict";n.d(t,{W:()=>l});var r=n(80129),a=n.n(r);function l(e){return a().stringify(e,{encode:!1})}},98709:(e,t,n)=>{"use strict";function r(e,t){var n=null==t?void 0:t.find((function(t){return t.id===e}));return null==n?void 0:n.id}function a(e){return e?e.display_name||e.id:""}n.d(t,{M:()=>a,n:()=>r})},58392:()=>{},37625:()=>{},27567:()=>{},90776:()=>{},92084:()=>{},99624:()=>{},38299:()=>{},72816:()=>{},24654:()=>{}}]);
//# sourceMappingURL=../sourcemaps/InstanceDetailsPage.b834c8594845bee3a147f3b842633aa2.js.map