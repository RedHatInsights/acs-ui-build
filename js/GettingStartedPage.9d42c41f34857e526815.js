"use strict";(self.webpackChunkacs=self.webpackChunkacs||[]).push([[832],{35183:(e,t,n)=>{t.IU=t.ap=t.Jh=void 0;const a=n(70655),l=a.__importStar(n(93264));var r;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r=t.Jh||(t.Jh={})),t.ap=e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}};let i=0;t.IU=function({name:e,xOffset:n=0,yOffset:o=0,width:c,height:s,svgPath:m}){var u;return u=class extends l.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:r,color:i,title:u,noVerticalAlign:d}=e,p=a.__rest(e,["size","color","title","noVerticalAlign"]),h=Boolean(u),E=(0,t.ap)(r),f=-.125*Number.parseFloat(E),g=d?null:{verticalAlign:`${f}em`},C=[n,o,c,s].join(" ");return l.createElement("svg",Object.assign({style:g,fill:i,height:E,width:E,viewBox:C,"aria-labelledby":h?this.id:null,"aria-hidden":!h||null,role:"img"},p),h&&l.createElement("title",{id:this.id},u),l.createElement("path",{d:m}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},u}},50470:(e,t,n)=>{t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=n(35183).IU(t.mq),t.ZP=t.LA},73481:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462);var l=n(93264),r=n.n(l),i=n(21242),o=n(90045),c=["children","to"];const s=function(e){var t=e.children,n=e.to,l=function(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,c);return r().createElement(i.BreadcrumbItem,(0,a.Z)({},l,{render:function(e){var a=e.className,l=e.ariaCurrent;return r().createElement(o.Z,{className:a,"aria-current":l,to:n},t)}}))}},10407:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(93264),l=n.n(a),r=n(89376),i=n(39173),o=n(21242),c=n(50470),s=n(73481),m=n(87462),u=n(70885),d=n(90045);const p=function(){return l().createElement(o.Button,{component:"a",variant:"link",icon:l().createElement(c.ZP,null),iconPosition:"right",isInline:!0,href:"https://docs.openshift.com/acs/3.74/installing/getting-started-rhacs-cloud-ocp.html",target:"_blank","aria-label":"Help with ACS setup"},"Help with ACS setup")},h=function(){return l().createElement(o.Stack,{hasGutter:!0},l().createElement(o.StackItem,null,l().createElement(o.Flex,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(o.FlexItem,null,l().createElement(o.Title,{headingLevel:"h1"},"Initial Setup")),l().createElement(o.FlexItem,null,l().createElement(p,null)))),l().createElement(o.StackItem,null,l().createElement(o.Grid,{hasGutter:!0},l().createElement(o.GridItem,{sm:2,xl2:1},l().createElement(o.TextContent,null,l().createElement(o.Text,{component:o.TextVariants.h3},"Step 1:"))),l().createElement(o.GridItem,{sm:10,xl2:11},l().createElement(o.TextContent,null,l().createElement(o.Text,{component:o.TextVariants.h3},"Create an ACS Central Instance")),l().createElement(o.Button,{variant:"secondary",icon:l().createElement(c.ZP,null),iconPosition:"right",className:"pf-u-my-md",component:function(e){return l().createElement(d.Z,(0,m.Z)({},e,{to:"instances"}))},"aria-label":"Create Instance",rel:"noopener noreferrer nofollow",target:"_blank"},"Create Instance"),l().createElement(o.List,{component:o.ListComponent.ol,type:o.OrderType.number},l().createElement(o.ListItem,null,"Choose a name for your instance."),l().createElement(o.ListItem,null,"Follow the rest of the guidelines and click"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},"Create Instance"),".",l().createElement("br",null),"It will take about 10 minutes to spin up your instance."))),l().createElement(o.GridItem,{sm:2,xl2:1},l().createElement(o.TextContent,null,l().createElement(o.Text,{component:o.TextVariants.h3},"Step 2:"))),l().createElement(o.GridItem,{sm:10,xl2:11},l().createElement(o.TextContent,{className:"pf-u-mb-sm"},l().createElement(o.Text,{component:o.TextVariants.h3},"Access the ACS Central Interface")),l().createElement(o.List,{component:o.ListComponent.ol,type:o.OrderType.number},l().createElement(o.ListItem,null,"When your instance is in the"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},"ready")," status, click the name for details."),l().createElement(o.ListItem,null,"Click the"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},"Open ACS Console")," ","button."),l().createElement(o.ListItem,null,"Sign in using your Red Hat credentials."))))))};var E=n(42982),f="openshift",g="eks",C="aks",v="gke",y="operator",b="helm";const S=function(e){var t=e.selectedEnv,n=e.handleSelectedEnvChange,a=e.selectedInstallation,r=e.handleInstallationChange,i=l().useState(!1),c=(0,u.Z)(i,2),s=c[0],m=c[1],d=[].concat((0,E.Z)(t===f?[l().createElement(o.SelectOption,{key:0,value:y},"Operator (recommended)")]:[]),[l().createElement(o.SelectOption,{key:1,value:b},"Helm")]),h=function(e,t){n(t.target.value),t.target.value!=f?r(b):r(y)};return l().createElement(o.Stack,{hasGutter:!0},l().createElement(o.StackItem,null,l().createElement(o.Flex,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(o.FlexItem,null,l().createElement(o.Title,{headingLevel:"h1"},"SecuredCluster Installation Options")),l().createElement(o.FlexItem,null,l().createElement(p,null)))),l().createElement(o.StackItem,null,l().createElement(o.TextContent,null,l().createElement(o.Text,{component:o.TextVariants.h3},"Select your environment")),l().createElement(o.Radio,{label:"OpenShift",id:"radio-environment-".concat(f),name:f,value:f,"aria-label":f,onChange:h,isChecked:t===f}),l().createElement(o.Radio,{label:"EKS",id:"radio-environment-".concat(g),name:g,value:g,"aria-label":g,onChange:h,isChecked:t===g}),l().createElement(o.Radio,{label:"AKS",id:"radio-environment-".concat(C),name:C,value:C,"aria-label":C,onChange:h,isChecked:t===C}),l().createElement(o.Radio,{label:"GKE",id:"radio-environment-".concat(v),name:v,value:v,"aria-label":v,onChange:h,isChecked:t===v})),l().createElement(o.StackItem,null,t&&l().createElement(l().Fragment,null,l().createElement(o.TextContent,null,l().createElement(o.Text,{component:o.TextVariants.h3},"Select your supported installation method")),l().createElement(o.Select,{variant:"single",isOpen:s,onToggle:function(){m((function(e){return!e}))},selections:a,onSelect:function(e,t){m(!1),r(t)},"aria-label":"Select your installation method",menuAppendTo:document.getElementById(Z)},d))))},I=function(){return l().createElement("div",null,l().createElement(o.Stack,{hasGutter:!0},l().createElement(o.StackItem,null,l().createElement(o.Flex,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(o.FlexItem,null,l().createElement(o.Title,{headingLevel:"h1"},"Finishing Up")),l().createElement(o.FlexItem,null,l().createElement(p,null)))),l().createElement(o.StackItem,null,l().createElement(o.Title,{headingLevel:"h4"},"Watch a deep dive demo")),l().createElement(o.StackItem,null,l().createElement(o.Grid,{hasGutter:!0},l().createElement(o.GridItem,{md:9,xl2:7},l().createElement(o.Card,{className:"marketing-video"},l().createElement("iframe",{src:"https://www.youtube.com/embed/lFBFW3HmgsA",title:"Advanced Cluster Security in 2 Minutes",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))))))},w=n.p+"fonts/central_api_endpoint.png",x=n.p+"fonts/cluster_init_bundle.png",k=function(){var e=l().useState(!1),t=(0,u.Z)(e,2),n=t[0],a=t[1],r=l().useState(!1),i=(0,u.Z)(r,2),s=i[0],m=i[1],d=l().useState(!1),h=(0,u.Z)(d,2),E=h[0],f=h[1],g="helm install rhacs-secured-cluster-services rhacs/secured-cluster-services -n stackrox \\ \n-f <path_to_cluster_init_bundle.yaml> \\ \n--set clusterName=<name_of_the_secured_cluster> \\ \n--set centralEndpoint=<endpoint_of_central_service> \\ \n--set imagePullSecrets.username=<your redhat.com username> \\ \n--set imagePullSecrets.password=<your redhat.com password>",C=l().createElement(l().Fragment,null,l().createElement(o.CodeBlockAction,null,l().createElement(o.ClipboardCopyButton,{textId:"code-content","aria-label":"Copy to clipboard",onClick:function(e){return function(e,t){navigator.clipboard.writeText(t.toString())}(0,g),void a(!0)},exitDelay:n?1500:600,variant:"plain",onTooltipHidden:function(){return a(!1)}},n?"Copied":"Copy")));return l().createElement(o.Stack,{hasGutter:!0},l().createElement(o.StackItem,null,l().createElement(o.Flex,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(o.FlexItem,null,l().createElement(o.Title,{headingLevel:"h1"},"Install with an Helm")),l().createElement(o.FlexItem,null,l().createElement(p,null)))),l().createElement(o.StackItem,null,l().createElement("div",null,l().createElement("span",{className:"pf-u-font-weight-bold"},"Prerequisites")),l().createElement("div",null,"You must have access to the Red Hat Container Registry. For information about downloading images from registry.redhat.io, see"," ",l().createElement(o.Button,{variant:"link",icon:l().createElement(c.ZP,null),iconPosition:"right",isInline:!0,href:"https://access.redhat.com/RegistryAuthentication",target:"_blank",component:"a","aria-label":"Red Hat Container Registry Authentication"},"Red Hat Container Registry Authentication."))),l().createElement(o.StackItem,null,l().createElement("div",null,"You must also have:"),l().createElement("div",{className:"pf-u-ml-xl"},l().createElement("div",null,"A command line interface environment (CLI) with:"),l().createElement("div",null,"Access to the target Kubernetes cluster without RHACS installed previously"),l().createElement("div",null,"Admin access to K8s Cluster you with to install (kubeconfig)"),l().createElement("div",null,"Helm CLI installed in the same environment"))),l().createElement(o.StackItem,null,l().createElement(o.List,{component:o.ListComponent.ol,type:o.OrderType.number},l().createElement(o.ListItem,null,"In the ACS UI, from the menu on the left, go to Platform Configuration -",">"," Integrations and scroll down to"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},"Cluster Init Bundle"),".",l().createElement(o.ExpandableSection,{toggleText:"Show me where",onToggle:function(e){m(e)},isExpanded:s},l().createElement("img",{className:"getting-started-image",src:x}))),l().createElement(o.ListItem,null,"Generate a new cluster init bundle and download the resulting YAML file."),l().createElement(o.ListItem,null,"Use the Helm installation method to create the Secured Cluster services. Supply the created cluster init bundle, a unique cluster name, and the centralEndpoint, which is the URI (including port) of your ACS instance. This URI is listed as"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},"Central API Endpoint")," ","under"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},"Instance Details"),".",l().createElement(o.ExpandableSection,{toggleText:"Show me where",onToggle:function(e){f(e)},isExpanded:E},l().createElement("img",{className:"getting-started-image",src:w}))),l().createElement(o.ListItem,null,"Run the following Helm install command:",l().createElement(o.CodeBlock,{actions:C,className:"pf-u-mt-sm"},l().createElement(o.CodeBlockCode,{id:"code-content"},g)),l().createElement("div",{className:"pf-u-mt-sm"},"If this is the first time you’re using helm, you will need to add the stackrox repo using the following commands:"),l().createElement("div",{className:"pf-u-mt-sm"},l().createElement(o.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",variant:"inline-compact",isCode:!0,className:"pf-u-my-sm"},"helm repo add stackrox https://mirror.openshift.com/pub/rhacs/charts")),l().createElement("div",{className:"pf-u-my-sm"},l().createElement(o.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",variant:"inline-compact",isCode:!0,className:"pf-u-my-sm"},"helm repo update")),l().createElement("div",null,"For image pull secretes, there are better options for credentials for registry.redhat.io, like a"," ",l().createElement(o.Button,{variant:"link",icon:l().createElement(c.ZP,null),iconPosition:"right",isInline:!0,href:"https://access.redhat.com/terms-based-registry/#accounts",target:"_blank",component:"a","aria-label":"registry service account"},"registry service account"))))))},A=function(){var e=l().useState(!1),t=(0,u.Z)(e,2),n=t[0],a=t[1],r=l().useState(!1),i=(0,u.Z)(r,2),s=i[0],m=i[1];return l().createElement(o.Stack,{hasGutter:!0},l().createElement(o.StackItem,null,l().createElement(o.Flex,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(o.FlexItem,null,l().createElement(o.Title,{headingLevel:"h1"},"Install with an Operator")),l().createElement(o.FlexItem,null,l().createElement(p,null)))),l().createElement(o.StackItem,null,l().createElement(o.List,{component:o.ListComponent.ol,type:o.OrderType.number},l().createElement(o.ListItem,null,"Use the OpenShift console to"," ",l().createElement(o.Button,{variant:"link",icon:l().createElement(c.ZP,null),iconPosition:"right",isInline:!0,href:"https://docs.openshift.com/acs/3.72/installing/install-ocp-operator.html",target:"_blank",component:"a","aria-label":"install the ACS Operator from Operator Hub"},"install the ACS Operator from Operator Hub"),". Create a new OCP project for ACS. A good name choice is"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},"rhacs-operator"),"."),l().createElement(o.ListItem,null,"In the ACS UI, from the menu on the left, go to Platform Configuration -",">"," Integrations and scroll down to"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},"Cluster Init Bundle"),".",l().createElement(o.ExpandableSection,{toggleText:"Show me where",onToggle:function(e){a(e)},isExpanded:n},l().createElement("img",{className:"getting-started-image",src:x}))),l().createElement(o.ListItem,null,"Generate a new cluster init bundle and download the resulting YAML file. Also download the Kubernetes secrets file."),l().createElement(o.ListItem,null,l().createElement("div",null,"With the ACS project selected, create the init bundle secrets in OCP by pasting the contents into the OCP console or by using the command:"),l().createElement(o.ClipboardCopy,{hoverTip:"Copy",clickTip:"Copied",variant:"inline-compact",isCode:!0,className:"pf-u-my-sm"},"oc -n rhacs-operator create -f bundlename-cluster-init-secrets.yaml")),l().createElement(o.ListItem,null,"In the ACS Operator, install the Secured Cluster API into the ACS project. Give your cluster a name and specify the Central Endpoint with the Central API Endpoint (including port) from the ACS instance details.",l().createElement(o.ExpandableSection,{toggleText:"Show me where",onToggle:function(e){m(e)},isExpanded:s},l().createElement("img",{className:"getting-started-image",src:w}))))))};var T="Initial Setup",L="Options",O="Finishing Up",Z="getting-started-wizard";const F=function(){var e=l().useState(null),t=(0,u.Z)(e,2),n=t[0],a=t[1],r=l().useState(null),i=(0,u.Z)(r,2),c=i[0],s=i[1],p=l().useState(1),E=(0,u.Z)(p,2),f=E[0],g=E[1],C=l().createElement(o.WizardFooter,null,l().createElement(o.WizardContextConsumer,null,(function(e){var t=e.activeStep,a=e.goToStepByName,r=e.onNext,i=e.onBack;return t.name!==O?l().createElement(l().Fragment,null,l().createElement(o.Button,{className:t.name!==L||c||n?"":"pf-m-disabled",variant:"primary",type:"submit",onClick:r,"aria-label":"Next step",id:"".concat(t.id,"-next")},"Next"),t.name!==T&&l().createElement(o.Button,{variant:"secondary",onClick:i,"aria-label":"Previous step",id:"".concat(t.id,"-back")},"Back")):l().createElement(l().Fragment,null,l().createElement(o.Button,{component:function(e){return l().createElement(d.Z,(0,m.Z)({},e,{to:"instances"}))},"aria-label":"Finish"},"Finish"),l().createElement(o.Button,{variant:"secondary",onClick:function(){return e=a,s(null),g(1),void e(T);var e},"aria-label":"Install another"},"Install Another"))}))),v=[{name:T,component:l().createElement(h,null),canJumpTo:1===f,id:"wizard-step-1"},{name:L,component:l().createElement(S,{selectedEnv:c,handleSelectedEnvChange:function(e){s(e)},selectedInstallation:n,handleInstallationChange:function(e){a(e)}}),canJumpTo:2===f,id:"wizard-step-2"},{name:"Installation",component:"operator"===n?l().createElement(A,null):l().createElement(k,null),canJumpTo:3===f,id:"wizard-step-3"},{name:O,component:l().createElement(I,null),canJumpTo:4===f,id:"wizard-step-4"}],y="getting started wizard";return l().createElement(o.Wizard,{navAriaLabel:"".concat(y," steps"),mainAriaLabel:"".concat(y," content"),steps:v,id:"getting-started-wizard",onCurrentStepChanged:function(e){var t=e.id.replace(/\D/g,"");g(parseInt(t))},footer:C})},N=function(){return l().createElement("div",null,l().createElement(r.Z,null,l().createElement(o.Flex,{direction:{default:"column"}},l().createElement(o.FlexItem,null,l().createElement(o.Breadcrumb,null,l().createElement(s.Z,{to:"/overview"},"ACS"),l().createElement(o.BreadcrumbItem,{isActive:!0},"Get started with ACS"))),l().createElement(o.FlexItem,null,l().createElement(i.Z,{title:"Get started with Red Hat Advanced Cluster Security"})),l().createElement(o.FlexItem,null,l().createElement(o.TextContent,null,l().createElement(o.Text,{component:o.TextVariants.p},"The solution helps improve the security of the application build process, protects the application platform and configurations, detects runtime issues, and facilitates response."," ",l().createElement(o.Button,{variant:"link",icon:l().createElement(c.ZP,null),iconPosition:"right",isInline:!0,href:"https://docs.openshift.com/acs/3.74/welcome/index.html",target:"_blank",component:"a","aria-label":"Learn more about ACS"},"Learn more about ACS")," ","or"," ",l().createElement(o.Button,{variant:"link",icon:l().createElement(c.ZP,null),iconPosition:"right",isInline:!0,onClick:function(){window.open("mailto:acscs-feedback@redhat.com")},"aria-label":"Email us"},"Email us")))))),l().createElement(o.PageSection,null,l().createElement(F,null)))}},90045:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(93264),l=n.n(a),r=n(51663),i=n(68025),o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},o.apply(this,arguments)};const c=function(e){return l().createElement(r.Link,o({},e,{to:(0,i.n)(e.to,i.d)}))}},30907:(e,t,n)=>{function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,{Z:()=>a})},70885:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(40181);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return r}}(e,t)||(0,a.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},42982:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(30907),l=n(40181);function r(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,l.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(30907);function l(e,t){if(e){if("string"==typeof e)return(0,a.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,a.Z)(e,t):void 0}}}}]);