"use strict";(self.webpackChunkacs=self.webpackChunkacs||[]).push([[201],{35183:(e,t,n)=>{t.IU=t.ap=t.Jh=void 0;const l=n(70655),a=l.__importStar(n(28416));var r;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r=t.Jh||(t.Jh={})),t.ap=e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}};let c=0;t.IU=function({name:e,xOffset:n=0,yOffset:o=0,width:i,height:s,svgPath:m}){var u;return u=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+c++}render(){const e=this.props,{size:r,color:c,title:u,noVerticalAlign:p}=e,d=l.__rest(e,["size","color","title","noVerticalAlign"]),E=Boolean(u),f=(0,t.ap)(r),h=-.125*Number.parseFloat(f),g=p?null:{verticalAlign:`${h}em`},x=[n,o,i,s].join(" ");return a.createElement("svg",Object.assign({style:g,fill:c,height:f,width:f,viewBox:x,"aria-labelledby":E?this.id:null,"aria-hidden":!E||null,role:"img"},d),E&&a.createElement("title",{id:this.id},u),a.createElement("path",{d:m}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},u}},50470:(e,t,n)=>{t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=n(35183).IU(t.mq),t.ZP=t.LA},90853:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(87462),a=n(28416),r=n.n(a),c=n(21242),o=n(50470),i=n(90045);const s=n.p+"fonts/banner_image.png";var m=n(30744);const u=function(){var e=(0,a.useContext)(m.ZP).isEntitled;return r().createElement("div",null,r().createElement(c.PageSection,{variant:c.PageSectionVariants.light,className:"pf-u-p-2xl"},r().createElement(c.Flex,{direction:{default:"column"}},r().createElement(c.FlexItem,null,r().createElement(c.Grid,{hasGutter:!0},r().createElement(c.GridItem,{span:8},r().createElement(c.Stack,{hasGutter:!0},r().createElement(c.TextContent,null,r().createElement(c.Text,{component:c.TextVariants.h1},"Get started with Red Hat Advanced Cluster Security Cloud Service")),r().createElement(c.TextContent,{component:c.TextVariants.p,className:"pf-u-color-200 pf-u-font-size-lg"},r().createElement(c.Text,null,"Fully hosted cloud service for protecting cloud native applications and Kubernetes")),r().createElement(c.TextContent,null,r().createElement(c.Text,{component:c.TextVariants.p},"Red Hat® Advanced Cluster Security for Kubernetes is the pioneering Kubernetes-native security platform, that equips organizations to more securely build, deploy, and run cloud-native applications anywhere. The solution RHACS Cloud Service helps improve the security of the application build process, protects the application platform and configurations, detects runtime issues, and facilitates response. RHACS Cloud Service lowers operational costs by reducing the learning curve for implementing Kubernetes security, provides built-in controls for enforcement to reduce operational risk, and uses a Kubernetes-native approach that supports built-in security across the entire software development life cycle, facilitating greater developer productivity.")))),r().createElement(c.GridItem,{span:4},r().createElement("img",{src:s})))),r().createElement(c.FlexItem,null,e?r().createElement(c.Button,{component:function(e){return r().createElement(i.Z,(0,l.Z)({},e,{to:"getting-started"}))}},"Get Started"):r().createElement(c.Button,{component:"a",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes/cloud-service/trial",target:"_blank",variant:"primary"},"Start a free trial")))),r().createElement(c.PageSection,null,r().createElement(c.Grid,{hasGutter:!0,lg:6},r().createElement(c.GridItem,null,r().createElement(c.Card,{className:"pf-u-h-100"},r().createElement(c.CardHeaderMain,null,r().createElement(c.CardTitle,null,r().createElement(c.Flex,null,r().createElement(c.FlexItem,{spacer:{default:"spacerSm"}},r().createElement(c.TextContent,null,r().createElement(c.Text,{component:"h2"},"Purchase now"))),r().createElement(c.FlexItem,null,r().createElement(c.TextContent,null,r().createElement(c.Text,{className:"pf-u-color-200"},"(US/Canada or EMEA only)")))))),r().createElement(c.CardBody,null,"Purchase a pay-as-you-go subscription for Managed vCPU units using one of our Marketplace options below."),r().createElement(c.CardFooter,null,r().createElement(c.Flex,null,r().createElement(c.FlexItem,{className:"pf-u-mt-md pf-u-mb-md"},r().createElement(c.Button,{variant:c.ButtonVariant.link,component:"a",target:"_blank",href:" https://aws.amazon.com/marketplace/pp/prodview-epwnwxab4jwdo",isInline:!0},"AWS Marketplace (North America)",r().createElement(o.ZP,{className:"pf-u-ml-md",color:"currentColor",noVerticalAlign:!1,size:"sm"}))),r().createElement(c.FlexItem,null,r().createElement(c.Button,{variant:c.ButtonVariant.link,component:"a",target:"_blank",href:"https://aws.amazon.com/marketplace/pp/prodview-oefmjyqe64ces",isInline:!0},"AWS Marketplace (EMEA)",r().createElement(o.ZP,{className:"pf-u-ml-md",color:"currentColor",noVerticalAlign:!1,size:"sm"}))))))),r().createElement(c.GridItem,null,r().createElement(c.Card,{className:"pf-u-h-100"},r().createElement(c.CardHeaderMain,null,r().createElement(c.CardTitle,null,r().createElement(c.Flex,null,r().createElement(c.FlexItem,{spacer:{default:"spacerSm"}},r().createElement(c.TextContent,null,r().createElement(c.Text,{component:"h2"},"Contact sales"))),r().createElement(c.FlexItem,null,r().createElement(c.TextContent,null,r().createElement(c.Text,{className:"pf-u-color-200"},"(Available for all regions)")))))),r().createElement(c.CardBody,null,"Contact sales to get a prepaid subscription that fits your needs. Sales can help set up a prepaid subscription, modify a current subscription or get a longer trial"),r().createElement(c.CardFooter,null,r().createElement(c.Flex,null,r().createElement(c.FlexItem,null,r().createElement(c.Button,{variant:c.ButtonVariant.link,component:"a",target:"_blank",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes#talk-to-a-red-hatter",isInline:!0},"Contact sales",r().createElement(o.ZP,{className:"pf-u-ml-md",color:"currentColor",noVerticalAlign:!1,size:"sm"}))))))))),r().createElement(c.PageSection,null,r().createElement(c.Card,{className:"pf-u-h-100"},r().createElement(c.CardTitle,null,r().createElement(c.TextContent,null,r().createElement(c.Text,{component:"h2"},"Pricing model"))),r().createElement(c.CardBody,null,r().createElement(c.Flex,{spaceItems:{default:"spaceItemsXl"}},r().createElement(c.Flex,{alignSelf:{default:"alignSelfCenter"},flex:{default:"flex_1"},justifyContent:{default:"justifyContentCenter"}},r().createElement(c.FlexItem,null,r().createElement(c.DescriptionList,{isHorizontal:!0},r().createElement(c.DescriptionListGroup,null,r().createElement(c.DescriptionListTerm,null,"Managed vCPU"),r().createElement(c.DescriptionListDescription,null,"$0.03 / hour"))))),r().createElement(c.Divider,{isVertical:!0}),r().createElement(c.FlexItem,{flex:{default:"flex_1"}},r().createElement(c.TextContent,null,r().createElement(c.Text,{component:"p"},"A ",r().createElement("strong",null,"managed vCPU")," means the number of vCPU measured on a managed cluster"))))))),r().createElement(c.PageSection,null,r().createElement(c.Card,null,r().createElement(c.CardTitle,null,r().createElement(c.TextContent,null,r().createElement(c.Text,{component:"h2"},"Brief demo"))),r().createElement(c.CardBody,{className:"pf-u-w-100 pf-u-w-75-on-lg pf-u-w-50-on-xl"},r().createElement("div",{className:"marketing-video"},r().createElement("iframe",{src:"https://www.youtube.com/embed/uPjvVGjoiZw",title:"Short Demo of Advanced Cluster Security",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))))}},90045:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(28416),a=n.n(l),r=n(51663),c=n(68025),o=function(){return o=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};const i=function(e){return a().createElement(r.Link,o({},e,{to:(0,c.n)(e.to,c.d)}))}}}]);