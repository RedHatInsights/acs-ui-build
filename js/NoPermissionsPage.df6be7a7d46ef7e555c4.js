/*! For license information please see NoPermissionsPage.df6be7a7d46ef7e555c4.js.LICENSE.txt */
(self.webpackChunkacs=self.webpackChunkacs||[]).push([[452],{7065:(e,t,n)=>{"use strict";n.d(t,{U:()=>c});var r=n(65353),o=n(28416),a=n(38296),i=n(51203);const c=e=>{var{children:t,className:n}=e,c=(0,r._T)(e,["children","className"]);return o.createElement("div",Object.assign({className:(0,a.i)(i.Z.emptyStateActions,n)},c),t)};c.displayName="EmptyStateActions"},99087:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s});var r=n(85893),o=n(28416),a=n(94184),i=n.n(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};const s=function(e){var t=e.children,n=e.className,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["children","className"]);return(0,o.useEffect)((function(){console.error('Using deprecated "Main" component. Do not use it. Either remove it from your JSX or replace it by "section" HTML element.')}),[]),(0,r.jsx)("section",c({},a,{className:"".concat(i()(n,"pf-v5-l-page__main-section pf-v5-c-page__main-section")),children:t}))}},94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},45214:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(28416),o=n.n(r),a=n(99087),i=n(85893),c=n(9947),s=n(67880),l=n(38424),p=n(75106),u=n(80315),f=n(7065),m=n(32588);const v=(0,n(40400).I)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0});const y=e=>{var{prevPageButtonText:t="Return to previous page",toLandingPageText:n="Go to landing page",toLandingPageUrl:r=".",actions:a=null,serviceName:i,title:y=`You do not have access to ${i}`,icon:h=v,description:g="Contact your system administrator(s) for more information.",showReturnButton:d=!0,className:O}=e,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prevPageButtonText","toLandingPageText","toLandingPageUrl","actions","serviceName","title","icon","description","showReturnButton","className"]);return o().createElement(c.u,Object.assign({variant:c.I.full,className:O},b),o().createElement(s.t,{titleText:o().createElement(o().Fragment,null,y),icon:o().createElement(l.k,{icon:h}),headingLevel:"h5"}),o().createElement(p.B,null,g),o().createElement(u.O,null,a&&o().createElement(f.U,null,a),o().createElement(f.U,null,d&&(document.referrer?o().createElement(m.zx,{variant:"primary",onClick:()=>history.back()},t):o().createElement(m.zx,{variant:"primary",component:"a",href:r},n)))))};var h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h.apply(this,arguments)};const g=function(e){var t=e.description,n=void 0===t?(0,i.jsxs)(i.Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,i.jsx)("a",{href:"./iam/my-user-access",children:"My User Access"})," to learn more about your permissions."]}):t,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["description"]);return(0,i.jsx)(y,h({},r,{description:n}))},d=function(){return(0,r.useEffect)((function(){var e,t;null===(t=null===(e=null===insights||void 0===insights?void 0:insights.chrome)||void 0===e?void 0:e.appAction)||void 0===t||t.call(e,"no-permissions")}),[]),o().createElement(a.ZP,null,o().createElement(g,{serviceName:"Sample app"}))}}}]);