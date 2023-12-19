(self.webpackChunkacs=self.webpackChunkacs||[]).push([[201],{49469:(e,t,n)=>{"use strict";n.d(t,{O:()=>C});var l=n(65353),a=n(28416),i=n(38296),s=n(54918),r=n(32203);const c=e=>{var{children:t,className:n}=e,r=(0,l._T)(e,["children","className"]);return a.createElement("div",Object.assign({className:(0,i.i)(s.Z.cardHeaderMain,n)},r),t)};c.displayName="CardHeaderMain";const o=e=>{var{children:t,className:n,hasNoOffset:r=!1}=e,c=(0,l._T)(e,["children","className","hasNoOffset"]);return a.createElement("div",Object.assign({className:(0,i.i)(s.Z.cardActions,r&&s.Z.modifiers.noOffset,n)},c),t)};o.displayName="CardActions";const m=e=>{var{children:t,className:n}=e,r=(0,l._T)(e,["children","className"]);return a.createElement("div",Object.assign({className:(0,i.i)(s.Z.cardSelectableActions,n)},r),t)};m.displayName="CardSelectableActions";var d=n(32588),u=n(93174),p=n(35575),f=n(93149);const C=e=>{var{children:t,className:n,actions:C,selectableActions:g,id:v,onExpand:h,toggleButtonProps:E,isToggleRightAligned:L}=e,b=(0,l._T)(e,["children","className","actions","selectableActions","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return a.createElement(r.H.Consumer,null,(({cardId:e,isClickable:l,isSelectable:r,isDisabled:x,hasSelectableInput:y})=>{const O=a.createElement("div",{className:(0,i.i)(s.Z.cardHeaderToggle)},a.createElement(d.zx,Object.assign({variant:"plain",type:"button",onClick:t=>{h(t,e)}},E),a.createElement("span",{className:(0,i.i)(s.Z.cardHeaderToggleIcon)},a.createElement(u.ZP,{"aria-hidden":"true"})))),N=l&&!r||r&&!l,S=y;(null==C?void 0:C.actions)&&N&&!S&&console.warn((l?"Clickable":"Selectable")+" only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.");const w=e=>{l&&((null==g?void 0:g.onClickAction)?g.onClickAction(e):(null==g?void 0:g.to)&&window.open(g.to,g.isExternalLink?"_blank":"_self"))},k=()=>{const e={className:"pf-m-standalone",inputClassName:l&&!r&&"pf-v5-screen-reader",label:a.createElement(a.Fragment,null),"aria-label":g.selectableActionAriaLabel,"aria-labelledby":g.selectableActionAriaLabelledby,id:g.selectableActionId,name:g.name,isDisabled:x};return l&&!r?Object.assign(Object.assign({},e),{onClick:w}):r?Object.assign(Object.assign({},e),{onChange:g.onChange,isChecked:g.isChecked}):e};return a.createElement("div",Object.assign({className:(0,i.i)(s.Z.cardHeader,L&&s.Z.modifiers.toggleRight,n),id:v},b),h&&!L&&O,(C||g&&(l||r))&&a.createElement(o,{className:null==C?void 0:C.className,hasNoOffset:(null==C?void 0:C.hasNoOffset)||(null==g?void 0:g.hasNoOffset)},null==C?void 0:C.actions,g&&(l||r)&&a.createElement(m,{className:null==g?void 0:g.className},"single"===(null==g?void 0:g.variant)||l&&!r?a.createElement(p.Y,Object.assign({},k())):a.createElement(f.X,Object.assign({},k())))),t&&a.createElement(c,null,t),h&&L&&O)}))};C.displayName="CardHeader"},70:(e,t,n)=>{"use strict";n.d(t,{l:()=>c});var l=n(65353),a=n(28416),i=n(38296),s=n(54918),r=n(32203);const c=e=>{var{children:t,className:n,component:c="div"}=e,o=(0,l._T)(e,["children","className","component"]);const{cardId:m,registerTitleId:d}=a.useContext(r.H),u=c,p=m?`${m}-title`:"";return a.useEffect((()=>(d(p),()=>d(""))),[d,p]),a.createElement("div",{className:(0,i.i)(s.Z.cardTitle)},a.createElement(u,Object.assign({className:(0,i.i)(s.Z.cardTitleText,n),id:p||void 0},o),t))};c.displayName="CardTitle"},15627:(e,t,n)=>{"use strict";n.d(t,{i:()=>o,N:()=>r});var l=n(65353),a=n(28416),i=n(38296);n(28992);const s={divider:"pf-v5-c-divider",modifiers:{hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",vertical:"pf-m-vertical",insetNone:"pf-m-inset-none",insetXs:"pf-m-inset-xs",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",inset_3xl:"pf-m-inset-3xl",horizontalOnSm:"pf-m-horizontal-on-sm",verticalOnSm:"pf-m-vertical-on-sm",insetNoneOnSm:"pf-m-inset-none-on-sm",insetXsOnSm:"pf-m-inset-xs-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",inset_3xlOnSm:"pf-m-inset-3xl-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",verticalOnMd:"pf-m-vertical-on-md",insetNoneOnMd:"pf-m-inset-none-on-md",insetXsOnMd:"pf-m-inset-xs-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",inset_3xlOnMd:"pf-m-inset-3xl-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",verticalOnLg:"pf-m-vertical-on-lg",insetNoneOnLg:"pf-m-inset-none-on-lg",insetXsOnLg:"pf-m-inset-xs-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",inset_3xlOnLg:"pf-m-inset-3xl-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",verticalOnXl:"pf-m-vertical-on-xl",insetNoneOnXl:"pf-m-inset-none-on-xl",insetXsOnXl:"pf-m-inset-xs-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",inset_3xlOnXl:"pf-m-inset-3xl-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",verticalOn_2xl:"pf-m-vertical-on-2xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetXsOn_2xl:"pf-m-inset-xs-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl",inset_3xlOn_2xl:"pf-m-inset-3xl-on-2xl"}};var r,c=n(80164);!function(e){e.hr="hr",e.li="li",e.div="div"}(r||(r={}));const o=e=>{var{className:t,component:n=r.hr,inset:o,orientation:m}=e,d=(0,l._T)(e,["className","component","inset","orientation"]);const u=n;return a.createElement(u,Object.assign({className:(0,i.i)(s.divider,(0,c.wt)(o,s),(0,c.wt)(m,s),t)},"hr"!==n&&{role:"separator"},d))};o.displayName="Divider"},32373:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var l=n(28416),a=n.n(l),i=n(51663),s=n(56318),r=function(){return r=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};const c=function(e){return a().createElement(i.Link,r({},e,{to:(0,s.n)(e.to,s.d)}))}},77255:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ue});var l=n(28416),a=n.n(l),i=n(50693),s=n(16475),r=n(72853),c=n(32588),o=n(15627),m=n(28191),d=n(92298),u=n(65353);n(44839);const p={icon:"pf-v5-c-icon",iconContent:"pf-v5-c-icon__content",iconProgress:"pf-v5-c-icon__progress",modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl",inProgress:"pf-m-in-progress",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",info:"pf-m-info",custom:"pf-m-custom"},spinner:"pf-v5-c-spinner"};var f=n(38296),C=n(37619);const g=e=>{var{children:t,className:n,progressIcon:a,size:i,iconSize:s,progressIconSize:r,status:c,isInline:o=!1,isInProgress:m=!1,defaultProgressArialabel:d="Loading...",shouldMirrorRTL:g=!1}=e,v=(0,u._T)(e,["children","className","progressIcon","size","iconSize","progressIconSize","status","isInline","isInProgress","defaultProgressArialabel","shouldMirrorRTL"]);const h=null!=a?a:l.createElement(C.$,{diameter:"1em","aria-label":d});return l.createElement("span",Object.assign({className:(0,f.i)(p.icon,o&&p.modifiers.inline,m&&p.modifiers.inProgress,p.modifiers[i],n)},v),l.createElement("span",{className:(0,f.i)(p.iconContent,p.modifiers[s],p.modifiers[c],g&&"pf-v5-m-mirror-inline-rtl")},t),m&&l.createElement("span",{className:(0,f.i)(p.iconProgress,p.modifiers[r],n)},h))};g.displayName="Icon";var v=n(68774),h=n(68340),E=n(15265);const L=n.p+"fonts/ACS_service_icon.svg",b=function(){return a().createElement(r.NP,{variant:r.Dk.light},a().createElement(m.k,null,a().createElement(d.B,{alignSelf:{default:"alignSelfCenter"}},a().createElement("img",{src:L,alt:""})),a().createElement(o.i,{orientation:{default:"vertical"}}),a().createElement(d.B,null,a().createElement(v.D,null,a().createElement(h.x,{component:"h1"},"Advanced Cluster Security"),a().createElement(h.x,{component:"p"},"Fully hosted cloud service for protecting cloud native applications and Kubernetes."),a().createElement(c.zx,{variant:c.Wu.link,component:"a",target:"_blank",href:"https://docs.openshift.com/acs",isInline:!0},"Learn more",a().createElement(g,{size:"md",className:"pf-v5-u-ml-md",color:"currentColor"},a().createElement(E.ZP,null)))))))};var x=n(32203),y=n(62394);const O=n.p+"fonts/banner_image.png";var N=n(32373),S=function(){return S=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},S.apply(this,arguments)};const w=function(){return a().createElement(x.Z,null,a().createElement(y.e,null,a().createElement(m.k,{alignContent:{default:"alignContentFlexEnd"},direction:{default:"row"}},a().createElement(m.k,{direction:{default:"column"},flex:{default:"flex_1"},alignSelf:{default:"alignSelfCenter"}},a().createElement(d.B,null,a().createElement(v.D,null,a().createElement(h.x,{component:h.q.h2},"Get started with Red Hat Advanced Cluster Security Cloud Service"))),a().createElement(d.B,null,a().createElement(h.x,{component:h.q.p},"Red Hat Advanced Cluster Security Cloud Service provides a Kubernetes-native architecture for container security, enabling DevOps and InfoSec teams to operationalize full life cycle container and Kubernetes security.")),a().createElement(m.k,{direction:{default:"row"},className:"pf-u-mt-md"},a().createElement(d.B,null,a().createElement(c.zx,{component:"a",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes/cloud-service/trial",target:"_blank",variant:"primary"},"Start free trial")),a().createElement(d.B,null,a().createElement(c.zx,{component:function(e){return a().createElement(N.Z,S({},e,{to:"getting-started"}))},variant:"link"},"Get started")))),a().createElement(d.B,{alignSelf:{default:"alignSelfFlexEnd"}},a().createElement("img",{src:O,style:{width:"180px"}})))))};var k=n(72936),_=n(49345),P=n(40400);const M=(0,P.I)({name:"BugIcon",height:512,width:512,svgPath:"M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z",yOffset:0,xOffset:0}),H=(0,P.I)({name:"ClipboardCheckIcon",height:512,width:384,svgPath:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z",yOffset:0,xOffset:0}),A=(0,P.I)({name:"CloudSecurityIcon",height:1024,width:1024,svgPath:"M409.7,128.000273 C465.8,128.000273 516.7,143.900547 562.4,176.000547 C608.1,208.100547 641.6,249.700547 662.5,301.600547 C687.4,279.100547 716.9,267.700547 751,267.700547 C788.7,267.700547 821,281.400547 847.2,308.700547 C874.1,335.900547 887.3,368.800547 887.3,407.500547 C887.46515,434.180158 879.892917,460.335623 865.5,482.800547 C911.4,493.767214 949.3,518.200547 979.2,556.100547 C1009.06667,594.033881 1024,637.500547 1024,686.500547 C1024,744.400547 1004.2,793.700547 964.1,834.700547 C924.302,874.993547 876.6632,895.586537 820.89251,895.994368 L819.2,896.000547 L238.9,896.000547 C173.133333,895.933881 116.9,872.000547 70.2,824.200547 C23.4,776.333881 0,718.800547 0,651.600547 C0,603.667214 12.6333333,559.800547 37.9,520.000547 C63.2333333,480.067214 96.5,450.300547 137.7,430.700547 C137,420.500547 136.6,412.600547 136.6,407.200547 C136.6,330.200547 163.2,264.200547 216.6,209.700547 C270.033333,155.133881 334.4,127.900547 409.7,128.000273 Z M512,320.000547 C476.9,320.000547 446.8,332.600547 421.6,357.900547 C396.4,383.200547 383.8,413.100547 383.8,448.400547 L383.8,511.400547 L352.1,511.400547 C343.2,511.400547 335.6,513.500547 329.4,519.700547 C323.305993,525.712407 319.913649,533.940645 320,542.500547 L320,735.000547 C319.859734,743.570758 323.260479,751.819372 329.4,757.800547 C335.7,764.000547 343.2,768.000547 352.1,768.000547 L671.8,768.000547 C680.7,768.000547 688.3,764.000547 694.5,757.800547 C700.594007,751.788687 703.986351,743.56045 703.9,735.000547 L704.1,542.600547 C704.289931,534.020996 700.881339,525.753347 694.7,519.800547 C688.4,513.600547 680.9,511.400547 672,511.400547 L640.1,511.400547 L640.1,448.400547 C640.1,413.200547 627.7,383.200547 602.5,357.900547 C577.3,332.600547 547.1,320.000547 512,320.000547 Z M512,385.700547 C529.7,385.700547 544.9,391.900547 557.2,404.400547 C569.461938,416.250691 576.267978,432.65035 576,449.700547 L576,512.000547 L448,512.000547 L448,449.700547 C448,414.354323 476.653776,385.700547 512,385.700547 Z",yOffset:0,xOffset:0}),z=(0,P.I)({name:"NetworkIcon",height:1024,width:1088,svgPath:"M574,320 L574,448 L896,448 C931.332514,448.033078 959.966922,476.667486 960,512 L960,512 L960,640 L1024,640 C1059.33251,640.033078 1087.96692,668.667486 1088,704 L1088,704 L1088,896 C1087.96692,931.332514 1059.33251,959.966922 1024,960 L1024,960 L832,960 C796.667486,959.966922 768.033078,931.332514 768,896 L768,896 L768,704 C768.033078,668.667486 796.667486,640.033078 832,640 L832,640 L896,640 L896,512 L574,512 L574,640 L639,640 C674.332514,640.033078 702.966922,668.667486 703,704 L703,704 L703,896 C702.966922,931.332514 674.332514,959.966922 639,960 L639,960 L447,960 C411.667486,959.966922 383.033078,931.332514 383,896 L383,896 L383,704 C383.033078,668.667486 411.667486,640.033078 447,640 L447,640 L510,640 L510,512 L192,512 L192,640 L256,640 C291.332514,640.033078 319.966922,668.667486 320,704 L320,704 L320,896 C319.966922,931.332514 291.332514,959.966922 256,960 L256,960 L64,960 C28.6674863,959.966922 0.0330777378,931.332514 0,896 L0,896 L0,704 C0.0330777378,668.667486 28.6674863,640.033078 64,640 L64,640 L128,640 L128,512 C128.033078,476.667486 156.667486,448.033078 192,448 L192,448 L510,448 L510,320 L574,320 Z M1024,64 L1024,256 L64,256 L64,64 L1024,64 Z M704,192 L960.5,192 L960.5,128 L704,128 L704,192 Z",yOffset:0,xOffset:0}),I=(0,P.I)({name:"ProcessAutomationIcon",height:1024,width:1024,svgPath:"M1016,640.1 L724,640.1 L695.9,608.7 C701.8,597.3 706.7,585.2 710.5,572.7 L793.5,567.2 C799.9,566.3 804.9,559.9 804.9,553.5 L804.9,468.2 C804.8,461.7 800.2,456.2 793.8,454.4 L709.3,449.7 C705.5,437.7 700.5,426.1 694.7,415.1 L750.4,351.5 C754.3,346.3 753.3,338.3 748.8,333.8 L688.5,273.5 C684,269 676.8,268.3 671,271.6 L607.3,328.6 C596.4,322.9 585,318.2 573.2,314.5 L567.6,229.6 C566.7,223.2 560.3,218.2 553.9,218.2 L468.6,218.2 C462.2,218.2 456.7,222.8 454.9,229.2 L450.2,314.2 C438,317.9 426.3,322.8 415.2,328.6 L351.1,273.6 C345.9,269.7 337.9,270.7 333.4,275.2 L304.3,304.3 L240.6,240.6 C310.1,171.1 406.1,128 512,128 C718.3,128 887.2,291.6 895.6,495.9 C896,504.5 903.1,511.2 911.6,511.2 L1007.7,511.2 C1016.7,511.2 1024,503.7 1023.7,494.7 C1014.6,220.4 788.6,0 512.1,0 C370.9,0 242.9,57.5 150.2,150.1 L13.7,13.6 C8.6,8.6 0,12.2 0,19.3 L0,376.1 C0,380.5 3.6,384.1 8,384.1 L299.9,384.1 L328.1,414.6 C322,426 316.9,438 312.9,450.5 L230.1,456.9 C223.7,457.8 218.7,464.2 218.7,470.6 L218.7,555.9 C218.7,562.3 223.3,567.8 229.7,569.6 L312,572.9 C315.9,585.9 321,598.3 327.2,610.1 L274,672.1 C270.1,677.3 271.1,685.3 275.6,689.8 L335.9,750.1 C340.4,754.6 347.6,755.3 353.4,752 L413.3,696.7 C425.2,703.1 437.9,708.3 451,712.3 L457.2,793.1 C458.1,799.5 464.5,804.5 470.9,804.5 L556.2,804.5 C562.6,804.5 568.1,799.9 569.9,793.5 L573.1,711.7 C585.9,707.7 598.2,702.5 609.9,696.2 L671.4,750.1 C676.6,754 684.6,753 689.1,748.5 L718.9,718.7 L783.6,783.4 C714,852.9 618,896 512.1,896 C305.4,896 136.4,732.1 128.4,527.3 C128,518.7 121,512 112.4,512 L16.3,512 C7.3,512 0,519.5 0.3,528.5 C9,803.2 235.3,1024 512.1,1024 C653.2,1024 781.2,966.6 873.9,873.9 L1010.3,1010.4 C1015.4,1015.4 1024,1011.8 1024,1004.7 L1024,648 C1024,643.6 1020.4,640 1016,640.1 M511.1,640.9 C440.4,640.9 383.1,583.6 383.1,512.9 C383.1,442.2 440.4,384.9 511.1,384.9 C581.8,384.9 639.1,442.2 639.1,512.9 C639.1,583.6 581.8,640.9 511.1,640.9",yOffset:0,xOffset:0}),Z=(0,P.I)({name:"SecurityIcon",height:1024,width:896,svgPath:"M861.5,0 L34.5,0 C15.4,0 0,14.3 0,32 L0,452.1 C0,768 387.7,1024 448.5,1024 C509.3,1024 896,768 896,452.2 L896,32 C896,14.3 880.6,0 861.5,0 Z M490.7,768 L405.3,768 C393.5,767.8 384.2,757.5 384,744.7 L384,663.3 C384.2,650.5 393.6,640.3 405.3,640 L490.7,640 C502.5,640.2 511.8,650.5 512,663.3 L512,744.7 L512.1,744.7 C511.8,757.5 502.4,767.8 490.7,768 Z M543.9,162.7 L517.2,514.4 C515.8,530.9 502,544 485.3,544 L410.6,544 C394,544 380.1,531.2 378.7,514.7 L352.1,163 C350.5,144.3 365.3,128.3 384,128.3 L512,128 C530.7,128 545.4,144 543.9,162.7 Z",yOffset:0,xOffset:0}),j=(0,P.I)({name:"ServicesIcon",height:1024,width:896,svgPath:"M222.7,336.5 C178.5,336.5 142.7,372.4 142.7,416.5 C142.7,460.6 178.6,496.5 222.7,496.5 C266.8,496.5 302.7,460.6 302.7,416.5 C302.7,372.4 266.9,336.5 222.7,336.5 Z M222.7,448.5 C205.1,448.5 190.7,434.1 190.7,416.5 C190.7,398.9 205.1,384.5 222.7,384.5 C240.3,384.5 254.7,398.9 254.7,416.5 C254.7,434.1 240.3,448.5 222.7,448.5 Z M192,32 C121.3,32 64,89.4 64,160.1 C64,230.8 121.3,288 192,288 C262.7,288 320,230.7 320,160.1 C320,89.5 262.7,32 192,32 Z M192,208.1 C165.5,208.1 144,186.6 144,160.1 C144,133.6 165.5,112 192,112 C218.5,112 240,133.5 240,160 C240,186.5 218.5,208.1 192,208.1 Z M884.9,234 L788.9,226.1 C784.9,213.5 786.8,217.2 781,204.8 C793.6,187.3 827.2,152.8 840.2,135.3 C842,132.7 843.3,129.9 843.3,126.8 C843.3,114.2 790.1,65.6 778.5,54.8 C775.9,52.5 772.7,51.2 769.1,51.2 C766,51.2 762.8,52.1 760.2,54.3 L693.4,112.6 C682.6,107.2 681,107.2 669.2,103.7 L663.1,11.5 C662.5,4.9 656.2,0 649.9,0 L566.3,0 C560,0 554.6,4.5 552.9,10.8 C547.1,32.8 550,81.5 547.7,104.1 C535.6,108.1 536.7,109 525.2,114.9 L455.9,54.1 C453.3,52.3 450.1,51 446.5,51 C433.4,51 383,105.5 374.1,117.6 C371.8,120.2 371,123.4 371,126.5 C371,129.6 372.4,132.8 374.1,135.4 C388.4,152.5 419.6,181.6 432.2,199.6 C426.4,210.8 427.3,216 423.7,227.9 L330.4,232.4 C324.6,233.3 320.1,240.1 320.1,245.8 L320,329.1 C320,335.4 324.5,341.2 330.8,342.2 L425,348.3 C429,360.9 428.1,356.8 434.4,369.2 C421.3,386.7 388.4,424.2 375.4,441.2 C373.6,443.8 372.3,446.6 372.3,449.7 C372.3,462.8 425.5,510.9 437.1,521.7 C439.7,524 442.9,525.3 446.5,525.3 C449.6,525.3 453.3,524.4 455.4,522.2 L521.7,460.3 C532.5,465.7 533.4,465.2 545.3,468.8 L552.7,564.8 C553.6,571.1 559.9,576 566.1,576 L649.7,576 C656,576 661.4,571.5 663.1,565.2 C668.9,543.2 664.7,491.9 666.9,468.7 C679,465.1 677.9,464.5 689.4,458.6 L760.1,521.8 C762.7,523.6 765.9,524.9 769.5,524.9 C782.6,524.9 833,469.9 841.9,457.9 C844.2,455.6 845,452.5 845,449.4 C845,445.8 843.6,443.1 841.9,440.5 C827.6,423.4 789.9,391.6 777.3,373.7 C783.1,362.5 782,362.7 785.6,350.8 L885.6,343.4 C891.4,342.5 895.9,335.7 895.9,330 L895.9,246.8 C895.7,241.2 891.2,235.3 884.9,234 Z M606.3,401.3 C544.4,401.3 493.7,350.9 493.7,288.7 C493.7,226.5 544.2,176.1 606.3,176.1 C668.4,176.1 718.9,226.5 718.9,288.7 C718.9,350.9 668.5,401.3 606.3,401.3 Z M863.7,640 C813.2,589.5 767.7,640 767.7,640 L575.7,832 L381.7,832 C381.7,832 349.7,832 349.7,800 C349.7,768 383.7,768 383.7,768 L543.7,768 C543.7,768 575.7,768 575.7,736 C575.7,704 543.7,704 543.7,704 L192.7,703.5 C172.4,703 133.7,707 96.7,748 L9.09494702e-13,850 L191.7,1024 L255.7,960 L626.4,960 C634.9,960 643.1,956.6 649.1,950.6 L703.7,896 L863.7,736 C863.7,736 914.2,690.5 863.7,640 L863.7,640 Z",yOffset:0,xOffset:0});var R=n(35373);const T=function(e){var t=e.title,n=e.icon,i=e.children,s=(0,l.useState)(!1),r=s[0],c=s[1];return a().createElement(R.L,{className:"pf-u-box-shadow-sm-left",toggleContent:a().createElement("div",{className:"pf-c-action-list"},n,a().createElement(o.i,{orientation:{default:"vertical"}}),a().createElement("span",null,t)),onToggle:function(e,t){c(t)},isExpanded:r,displaySize:"lg",isWidthLimited:!0},a().createElement("div",{className:"pf-u-mt-sm"},i))},B=function(){return a().createElement(x.Z,null,a().createElement(T,{title:"About Red Hat Advanced Cluster Security Cloud Service",icon:a().createElement(g,{size:"lg",color:"blue"},a().createElement(A,null))},a().createElement("p",{className:"pf-u-mt-sm"},"Red Hat Advanced Cluster Security Cloud Service is the pioneering Kubernetes-native security platform, equipping organizations to more securely build, deploy, and run cloud-native applications anywhere. The solution helps improve the security of the application build process, protect the application platform and configurations, and detect and respond to runtime issues. Red Hat Advanced Cluster Security Cloud Service lowers operational costs by reducing the learning curve for implementing Kubernetes security, provides built-in controls for enforcement to reduce operational risk, and uses a Kubernetes-native approach that supports built-in security across the entire software development life cycle, facilitating greater developer productivity.")),a().createElement(T,{title:"Vulnerability management",icon:a().createElement(g,{size:"lg",color:"blue"},a().createElement(M,null))},a().createElement(k.aV,null,a().createElement(_.H,null,"Detects host-level vulnerabilities and potential security threats in Red Hat Enterprise Linux® CoreOS."),a().createElement(_.H,null,"Scans images for known vulnerabilities based on specific languages, packages, and image layers."),a().createElement(_.H,null,"Provides a dashboard highlighting the riskiest image vulnerabilities and deployments."),a().createElement(_.H,null,"Verifies image signatures against preconfigured keys for image attestation and integrity."),a().createElement(_.H,null,"Correlates vulnerabilities to running deployments, not just images."),a().createElement(_.H,null,"Enforces policies based on vulnerability details at build time using continuous integration/continuous delivery (CI/CD) integrations."))),a().createElement(T,{title:"Compliance",icon:a().createElement(g,{size:"lg",color:"blue"},a().createElement(H,null))},a().createElement(k.aV,null,a().createElement(_.H,null,"Assesses compliance across many controls for CIS Benchmarks, payment card industry (PCI), Health Insurance Portability and Accountability Act (HIPAA), NERC-CIP, and NIST SP 800-190 and 800-53."),a().createElement(_.H,null,"Delivers at-a-glance dashboards of overall compliance across the controls of each standard with evidence exported to meet auditor needs."),a().createElement(_.H,null,"Provides a detailed view of compliance details to pinpoint clusters, namespaces, nodes, or deployments namespaces that do not comply with specific standards and controls."))),a().createElement(T,{title:"Network segmentation",icon:a().createElement(g,{size:"lg",color:"blue"},a().createElement(z,null))},a().createElement(k.aV,null,a().createElement(_.H,null,"Visualizes allowed vs. active traffic between namespaces, deployments, and pods, including external exposures."),a().createElement(_.H,null,"Simulates network policy changes before they are implemented to minimize operational risk to the environment."))),a().createElement(T,{title:"Risk profiling",icon:a().createElement(g,{size:"lg",color:"blue"},a().createElement(Z,null))},a().createElement(k.aV,null,a().createElement(_.H,null,"Heuristically ranks your running deployments according to their overall security risk by combining security-relevant data such as vulnerabilities, configuration policy violations, and runtime activity."),a().createElement(_.H,null,"Tracks improvements in the security posture of your Kubernetes deployments to validate the impact of your security team actions."))),a().createElement(T,{title:"Configuration management",icon:a().createElement(g,{size:"lg",color:"blue"},a().createElement(j,null))},a().createElement(k.aV,null,a().createElement(_.H,null,"Delivers prebuilt DevOps and security policies to identify configuration violations related to network exposures, privileged containers, processes running as root, and compliance with industry standards."),a().createElement(_.H,null,"Analyzes Kubernetes role-based access control (RBAC) settings to determine user or service account privileges and misconfigurations."),a().createElement(_.H,null,"Tracks secrets and detects which deployments use the secrets to limit access."))),a().createElement(T,{title:"Runtime detection and response",icon:a().createElement(g,{size:"lg",color:"blue"},a().createElement(I,null))},a().createElement(k.aV,null,a().createElement(_.H,null,"Monitors system-level events within containers to detect anomalous activity indicative of a threat with the automated response using Kubernetes-native controls."),a().createElement(_.H,null,"Baselines process activity in containers to automatically whitelist processes, eliminating the need to manually whitelist."),a().createElement(_.H,null,"Uses prebuilt policies to detect crypto mining, privilege escalation, and various exploits."))))};var X=n(49469),D=n(70);n(82014);const V="pf-v5-c-label__content",K="pf-m-compact",W="pf-m-blue",F="pf-m-green",q="pf-m-orange",G="pf-m-red",U="pf-m-purple",$="pf-m-cyan",Y="pf-m-gold",J="pf-m-outline",Q="pf-m-overflow",ee="pf-m-editable-active";n(24620);const te="pf-m-editable";var ne=n(75824),le=n(24307),ae=n(6551);const ie={blue:W,cyan:$,green:F,orange:q,purple:U,red:G,gold:Y,grey:""},se=e=>{var{children:t,className:n="",color:a="grey",variant:i="filled",isCompact:s=!1,isEditable:r=!1,editableProps:o,textMaxWidth:m,tooltipPosition:d,icon:p,onClose:C,onClick:g,onEditCancel:v,onEditComplete:h,closeBtn:E,closeBtnAriaLabel:L,closeBtnProps:b,href:x,isOverflowLabel:y,render:O}=e,N=(0,u._T)(e,["children","className","color","variant","isCompact","isEditable","editableProps","textMaxWidth","tooltipPosition","icon","onClose","onClick","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[S,w]=(0,l.useState)(!1),[k,_]=(0,l.useState)(t),P=l.useRef(),M=l.useRef();l.useEffect((()=>(document.addEventListener("mousedown",H),document.addEventListener("keydown",A),()=>{document.removeEventListener("mousedown",H),document.removeEventListener("keydown",A)}))),l.useEffect((()=>{g&&x?console.warn("Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop."):g&&r&&console.warn("Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.")}),[g,x,r]);const H=e=>{S&&M&&M.current&&!M.current.contains(e.target)&&(M.current.value&&h&&h(e,M.current.value),w(!1))},A=e=>{var n,l;const a=e.key;if((S||P&&P.current&&P.current.contains(e.target))&&(!S||M&&M.current&&M.current.contains(e.target))&&(!S||"Enter"!==a&&"Tab"!==a||(e.preventDefault(),e.stopImmediatePropagation(),M.current.value&&h&&h(e,M.current.value),w(!1),null===(n=null==P?void 0:P.current)||void 0===n||n.focus()),S&&"Escape"===a&&(e.preventDefault(),e.stopImmediatePropagation(),M.current.value&&(M.current.value=t,v&&v(e,t)),w(!1),null===(l=null==P?void 0:P.current)||void 0===l||l.focus()),!S&&"Enter"===a)){e.preventDefault(),e.stopImmediatePropagation(),w(!0);const t=e.target,n=document.createRange(),l=window.getSelection();n.selectNodeContents(t),n.collapse(!1),l.removeAllRanges(),l.addRange(n)}},z=y?"button":"span",I=l.createElement(c.zx,Object.assign({type:"button",variant:"plain",onClick:C,"aria-label":L||`Close ${t}`},b),l.createElement(le.ZP,null)),Z=l.createElement("span",{className:(0,f.i)("pf-v5-c-label__actions")},E||I),j=l.createRef(),R=l.useRef(),[T,B]=l.useState(!1);(0,ae.L)((()=>{const e=r?P:j;S||B(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[S]);const X=l.createElement(l.Fragment,null,p&&l.createElement("span",{className:(0,f.i)("pf-v5-c-label__icon")},p),l.createElement("span",Object.assign({ref:j,className:(0,f.i)("pf-v5-c-label__text")},m&&{style:{"--pf-v5-c-label__text--MaxWidth":m}}),t));l.useEffect((()=>{S&&M&&M.current&&M.current.focus()}),[M,S]);let D="span";x?D="a":(r||g&&!y)&&(D="button");const W={type:"button",onClick:g},F="button"===D,q=Object.assign(Object.assign(Object.assign(Object.assign({className:(0,f.i)(V)},T&&{tabIndex:0}),x&&{href:x}),F&&W),r&&Object.assign({ref:P,onClick:e=>{w(!0),e.stopPropagation()}},o));let G=l.createElement(D,Object.assign({},q),X);return O?G=l.createElement(l.Fragment,null,T&&l.createElement(ne.u,{triggerRef:R,content:t,position:d}),O({className:V,content:X,componentRef:R})):T&&(G=l.createElement(ne.u,{content:t,position:d},G)),l.createElement(z,Object.assign({},N,{className:(0,f.i)("pf-v5-c-label",ie[a],"outline"===i&&J,y&&Q,s&&K,r&&te,S&&ee,n),onClick:y?g:void 0}),!S&&G,!S&&C&&Z,S&&l.createElement("input",Object.assign({className:(0,f.i)(V),type:"text",id:"editable-input",ref:M,value:k,onChange:()=>{_(M.current.value)}},o)))};se.displayName="Label";const re=function(){return a().createElement(x.Z,{className:"pf-v5-u-h-100"},a().createElement(X.O,null,a().createElement(D.l,null,a().createElement(m.k,{direction:{default:"column"}},a().createElement(d.B,{spacer:{default:"spacerSm"}},a().createElement(v.D,null,a().createElement(h.x,{component:h.q.h2},"Red Hat Advanced Cluster Security Cloud Service product documentation"))),a().createElement(d.B,null,a().createElement(se,{isCompact:!0,color:"green"},"Documentation"))))),a().createElement(y.e,null,a().createElement(m.k,null,a().createElement(d.B,null,a().createElement(h.x,{component:h.q.p},"Learn about Red Hat Advanced Cluster Security Cloud Service and start exploring its features. This documentation will guide from installation to configuration, operation, and integrating with other products.")),a().createElement(d.B,{className:"pf-v5-u-mt-md pf-v5-u-mb-md"},a().createElement(c.zx,{variant:c.Wu.link,component:"a",target:"_blank",href:" https://docs.openshift.com/acs",isInline:!0},"View documentation",a().createElement(g,{size:"md",className:"pf-v5-u-ml-md",color:"currentColor"},a().createElement(E.ZP,null)))))))};n(11080);const ce=e=>{var{children:t,className:n,actions:a}=e,i=(0,u._T)(e,["children","className","actions"]);return l.createElement("div",Object.assign({className:(0,f.i)("pf-v5-c-hint",n)},i),l.createElement("div",{className:(0,f.i)("pf-v5-c-hint__actions")},a),t)};ce.displayName="Hint";const oe=e=>{var{children:t,className:n}=e,a=(0,u._T)(e,["children","className"]);return l.createElement("div",Object.assign({className:(0,f.i)("pf-v5-c-hint__body",n)},a),t)};oe.displayName="HintBody";const me=function(){return a().createElement(ce,null,a().createElement(oe,null,a().createElement("strong",null,"Ready to purchase Red Hat Advanced Cluster Security Cloud Service?")," ","Learn more about our pricing models with"," ",a().createElement("a",{href:""},"Amazon Marketplace (North America)")," or"," ",a().createElement("a",{href:""},"Amazon Marketplace (EMEA)"),"."," ",a().createElement("a",{href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes#talk-to-a-red-hatter"},"Contact Sales (all regions)")," ","to get a subscription that fits your needs.",a().createElement("div",{className:"pf-u-mb-xl"}),a().createElement("strong",null,"Managed CPU")," A managed CPU means the number of CPU measured on a managed cluster."))},de=function(){return a().createElement(x.Z,null,a().createElement(D.l,null,a().createElement(v.D,null,a().createElement(h.x,{component:"h2"},"Product demo"))),a().createElement(y.e,null,a().createElement("div",{className:"marketing-video"},a().createElement("iframe",{src:"https://www.youtube.com/embed/uPjvVGjoiZw",title:"Short Demo of Red Hat Advanced Cluster Security Cloud Service",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))},ue=function(){return a().createElement("div",null,a().createElement(r.NP,{variant:r.Dk.light},a().createElement(b,null)),a().createElement(r.NP,null,a().createElement(i.r,{hasGutter:!0},a().createElement(s.P,null,a().createElement(w,null)),a().createElement(s.P,null,a().createElement(B,null)),a().createElement(s.P,null,a().createElement(me,null)),a().createElement(s.P,{span:6},a().createElement(re,null)),a().createElement(s.P,{span:6},a().createElement(de,null)))))}},28992:()=>{},11080:()=>{},44839:()=>{},24620:()=>{},82014:()=>{},90776:()=>{},92084:()=>{},99624:()=>{},38299:()=>{},72816:()=>{}}]);