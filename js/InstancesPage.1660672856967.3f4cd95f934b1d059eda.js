(self.webpackChunkacs=self.webpackChunkacs||[]).push([[996],{70391:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(93264),a=n.n(r),l=n(80123),i=n(39173),c=n(14748),o=n(16530),u=n(70943),s=n(87462),m=n(45987),p=["children","to"];const d=function(e){var t=e.children,n=e.to,r=(0,m.Z)(e,p);return a().createElement(u.BreadcrumbItem,(0,s.Z)({},r,{render:function(e){var r=e.className,l=e.ariaCurrent;return a().createElement(o.Link,{className:r,"aria-current":l,to:n},t)}}))};var E=n(15861),f=n(87757),g=n.n(f),v=n(88767),b=n(22512),h=function(){var e=(0,E.Z)(g().mark((function e(t){var n,r;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.Z.get("/api/rhacs/v1/centrals/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();const y=function(){var e,t=(e=(0,o.useParams)().instanceId,(0,v.useQuery)(["instance",e],(function(){return h(e)}))),n=t.data;return t.isFetching?a().createElement(u.Bullseye,null,a().createElement(u.Spinner,null)):a().createElement("div",null,a().createElement(l.Z,null,a().createElement(u.Flex,{direction:{default:"column"}},a().createElement(u.FlexItem,null,a().createElement(u.Breadcrumb,null,a().createElement(d,{to:"/instances"},"ACS instances"),a().createElement(u.BreadcrumbItem,{isActive:!0},n.name))),a().createElement(u.FlexItem,null,a().createElement(i.Z,{title:n.name})))),a().createElement(c.Z,{className:"pf-u-p-0 pf-m-fill pf-m-overflow-scroll"},a().createElement(u.PageSection,null,a().createElement(u.Card,null,a().createElement(u.CardHeader,null,a().createElement(u.CardHeaderMain,null,a().createElement(u.CardTitle,null,"ACS Instance Access"))),a().createElement(u.CardBody,null,a().createElement("p",null,"Get started by signing in to your ACS instance.")),a().createElement(u.CardFooter,null,a().createElement(u.Button,{variant:u.ButtonVariant.primary,component:"a",href:"https://".concat(n.host),target:"_blank"},"Sign in to ACS Instance")))),a().createElement(u.PageSection,{variant:u.PageSectionVariants.light,isFilled:!0,hasOverflowScroll:!0,isWidthLimited:!0},a().createElement(u.Title,{headingLevel:"h2"},"Use Red Hat ACS to secure your clusters"),a().createElement(u.Grid,{hasGutter:!0},a().createElement(u.GridItem,{md:7},a().createElement(u.Card,{className:"marketing-video"},a().createElement("iframe",{src:"https://www.youtube.com/embed/HhYYuGTa63E",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),a().createElement(u.GridItem,{md:5,hasGutter:!0},a().createElement(u.TextContent,null,a().createElement(u.Text,null,"In this video, you’ll learn how to:")),a().createElement(u.List,null,a().createElement(u.ListItem,null,"Lorem ipsum dolor sit amet"),a().createElement(u.ListItem,null,"You go back, Jack, do it again"),a().createElement(u.ListItem,null,"Three is the magic number")))))))}},96559:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ee});var r=n(70885),a=n(93264),l=n.n(a),i=n(16530),c=n(14748),o=n(80123),u=n(39173),s=n(70943),m=n(38877),p=n(96733);var d=n(15861),E=n(87757),f=n.n(E),g=n(88767),v=n(22512),b=n(80129),h=n.n(b),y=function(){var e=(0,d.Z)(f().mark((function e(t){var n,r,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.query,n=h().stringify(l,{encode:!1}),e.next=4,v.Z.get("/api/rhacs/v1/centrals?".concat(n));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 7:case"end":return e.stop()}var l}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,d.Z)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.post("/api/rhacs/v1/centrals?async=true",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,d.Z)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.delete("/api/rhacs/v1/centrals/".concat(t,"?async=true"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function O(){var e=(0,g.useQueryClient)();return(0,g.useMutation)(C,{onSuccess:function(){e.invalidateQueries("instances")}})}var w=n(4942),T={"us-east-1":"US-East, N. Virginia","eu-west-1":"EU-Ireland"},D=Object.keys(T).map((function(e){return{value:e,label:T[e]}}));const P=function(e){var t=e.toggleIcon,n=e.id,i=e.value,c=e.handleSelect,o=e.isDisabled,u=void 0!==o&&o,m=e.children,p=e.direction,d=void 0===p?"down":p,E=e.isCreatable,f=void 0!==E&&E,g=e.variant,v=void 0===g?null:g,b=e.placeholderText,h=void 0===b?"":b,y=(0,a.useState)(!1),S=(0,r.Z)(y,2),C=S[0],O=S[1],w="typeahead"===v?s.SelectVariant.typeahead:s.SelectVariant.single;return l().createElement(s.Select,{variant:w,toggleIcon:t,id:n,isDisabled:u,isOpen:C,onSelect:function(e,t){O(!1),c(n,t)},onToggle:O,selections:i,direction:d,isCreatable:f,placeholderText:h,toggleId:n},m)};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"",cloud_provider:"aws",region:"us-east-1",availabilityZones:"multi"};const k=function(e){var t=e.isOpen,n=e.onClose,i=e.onRequestCreate,c=(0,a.useState)(null),o=(0,r.Z)(c,2),u=o[0],m=o[1],p=(0,a.useState)(x),E=(0,r.Z)(p,2),g=E[0],v=E[1],b=(0,a.useState)(!1),h=(0,r.Z)(b,2),y=h[0],S=h[1];function C(e,t){var n=t.currentTarget.id;v((function(e){return I(I({},e),{},{availabilityZones:n})}))}function O(){return(O=(0,d.Z)(f().mark((function e(){var t,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,i(g);case 3:t=e.sent,S(!1),t instanceof Error?(r=t.response.data.reason,m(r)):(v(x),n());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l().createElement(s.Modal,{variant:s.ModalVariant.small,title:"Create ACS instance",isOpen:t,onClose:n,actions:[l().createElement(s.Button,{key:"createInstance",variant:"primary",onClick:function(){return O.apply(this,arguments)},isLoading:y,isDisabled:y||!(null!=g&&g.name)},"Create instance"),l().createElement(s.Button,{key:"cancel",variant:"link",onClick:n,isDisabled:y},"Cancel")]},u&&l().createElement("div",{className:"pf-u-mb-md"},l().createElement(s.Alert,{variant:"danger",title:u})),l().createElement(s.Form,null,l().createElement(s.FormGroup,{label:"Name",isRequired:!0,fieldId:"name",helperText:"Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - )."},l().createElement(s.TextInput,{isRequired:!0,type:"text",id:"name",name:"name",value:g.name,onChange:function(e){v((function(t){return I(I({},t),{},{name:e})}))}})),l().createElement(s.FormGroup,{label:"Cloud provider",isRequired:!0,fieldId:"cloud_provider"},l().createElement(s.Tile,{title:"Amazon Web Services",isSelected:"aws"===g.cloud_provider})),l().createElement(s.FormGroup,{label:"Cloud region",isRequired:!0,fieldId:"region"},l().createElement(P,{id:"region",value:g.region,handleSelect:function(e,t){v((function(e){return I(I({},e),{},{region:t})}))}},D.map((function(e){return l().createElement(s.SelectOption,{key:e.value,value:e.value},e.label)})))),l().createElement(s.FormGroup,{label:"Availability zones",isRequired:!0,fieldId:"availabilityZones"},l().createElement(s.ToggleGroup,{"aria-label":"Availability Zones"},l().createElement(s.ToggleGroupItem,{text:"Single",buttonId:"single",isSelected:"single"===g.availabilityZones,onChange:C,isDisabled:!0}),l().createElement(s.ToggleGroupItem,{text:"Multi",buttonId:"multi",isSelected:"multi"===g.availabilityZones,onChange:C})))))},L=function(e){var t=e.isOpen,n=e.instance,i=e.onRequestDelete,c=e.onClose,o=(0,a.useState)(""),u=(0,r.Z)(o,2),m=u[0],p=u[1],E=(0,a.useState)(!1),g=(0,r.Z)(E,2),v=g[0],b=g[1];function h(){return(h=(0,d.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,i(n.id);case 3:t=e.sent,b(!1),t.error||(p(""),c());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n?l().createElement(s.Modal,{variant:s.ModalVariant.small,title:"Delete instance?",isOpen:t,onClose:c,actions:[l().createElement(s.Button,{key:"createInstance",variant:"danger",onClick:function(){return h.apply(this,arguments)},isLoading:v,isDisabled:v||n.name!==m},"Delete instance"),l().createElement(s.Button,{key:"cancel",variant:"link",onClick:c,isDisabled:v},"Cancel")]},l().createElement("div",{className:"pf-u-pb-md"},l().createElement("div",null,"This will permanently delete"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},n.name),"."),l().createElement("div",null,"This action cannot be undone.")),l().createElement(s.Form,null,l().createElement(s.FormGroup,{label:"Confirmation",isRequired:!0,fieldId:"confirmationInstanceName"},l().createElement(s.TextInput,{isRequired:!0,type:"text",id:"confirmationInstanceName",name:"confirmationInstanceName",value:m,onChange:p})),l().createElement(s.HelperText,null,l().createElement(s.HelperTextItem,null,"Type ",l().createElement("span",{className:"pf-u-font-weight-bold"},n.name)," ","to confirm.")))):null};var N=n(34383),R=n(4220);function j(e){return(0,N.Z)((0,R.Z)(e),new Date,{addSuffix:!0})}const F=function(e){var t=e.isExpanded,n=e.onClose,r=e.instance,a=e.children;return l().createElement(s.Drawer,{isExpanded:t},l().createElement(s.DrawerContent,{panelContent:l().createElement(s.DrawerPanelContent,null,l().createElement(s.DrawerHead,null,l().createElement("div",null,l().createElement(s.TextContent,null,l().createElement(s.Text,{component:s.TextVariants.small},"Name")),l().createElement(s.TextContent,null,l().createElement(s.Text,{component:s.TextVariants.h1},null==r?void 0:r.name))),l().createElement(s.DrawerActions,null,l().createElement(s.DrawerCloseButton,{onClick:n}))),l().createElement(s.Divider,{component:"div"}),l().createElement(s.DrawerContentBody,null,r&&l().createElement(s.DescriptionList,{isHorizontal:!0},l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Cloud provider"),l().createElement(s.DescriptionListDescription,null,r.cloud_provider)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Region"),l().createElement(s.DescriptionListDescription,null,r.region)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"ID"),l().createElement(s.DescriptionListDescription,null,r.id)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Owner"),l().createElement(s.DescriptionListDescription,null,r.owner)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Created"),l().createElement(s.DescriptionListDescription,null,j(r.created_at))),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Updated"),l().createElement(s.DescriptionListDescription,null,j(r.updated_at))))))},a))};var G=n(35451),A=n(84564),B=n(41942),q={accepted:{message:"Request accepted",component:l().createElement(B.ZP,null)},preparing:{message:"Preparing instance",component:l().createElement(B.ZP,null)},provisioning:{message:"Creation in progress",component:l().createElement(s.Spinner,{isSVG:!0,size:"md"})},ready:{message:"Ready",component:l().createElement(G.ZP,{className:"pf-u-success-color-100"})},failed:{message:"Request failed",component:l().createElement(A.ZP,{className:"pf-u-danger-color-100"})},deprovision:{message:"Deprovisioning instance",component:l().createElement(s.Spinner,{isSVG:!0,size:"md"})},deleting:{message:"Deleting instance",component:l().createElement(s.Spinner,{isSVG:!0,size:"md"})}};const V=function(e){var t=e.status,n=q[t]||{message:"N/A",component:null},r=n.message,a=n.component;return l().createElement(s.Flex,null,l().createElement(s.FlexItem,null,a),l().createElement(s.FlexItem,null,r))};var _=n(42982),z=n(45697),H=n.n(z),U=n(8755),M=n(71070);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e){var t=e.filters,n=e.setFilters,i=(0,a.useState)("Name"),c=(0,r.Z)(i,2),o=c[0],u=c[1],m=(0,a.useState)(""),p=(0,r.Z)(m,2),d=p[0],E=p[1],f=(0,a.useState)(""),g=(0,r.Z)(f,2),v=g[0],b=g[1],h=(0,a.useState)(!1),y=(0,r.Z)(h,2),S=y[0],C=y[1],O=(0,a.useState)(!1),T=(0,r.Z)(O,2),D=T[0],Z=T[1];function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n((function(n){var r=Y({},n);return r[e.toLowerCase()]=r[e.toLowerCase()].filter((function(e){return e!==t})),r}))}function x(e){n((function(t){var n=Y({},t);return n[e.toLowerCase()]=[],n}))}function k(e,t,r){var a=t.target.checked;n((function(t){var n=t[e]||[];return Y(Y({},t),{},(0,w.Z)({},e,a?[].concat((0,_.Z)(n),[r]):n.filter((function(e){return e!==r}))))}))}return l().createElement(s.ToolbarToggleGroup,{toggleIcon:l().createElement(U.ZP,null),breakpoint:"xl"},l().createElement(s.ToolbarGroup,{variant:"filter-group"},l().createElement(s.ToolbarItem,null,l().createElement(P,{id:"region",value:o,handleSelect:function(e,t){u(t)}},l().createElement(s.SelectOption,{value:"Name"},"Name"),l().createElement(s.SelectOption,{value:"Region"},"Region"),l().createElement(s.SelectOption,{value:"Owner"},"Owner"),l().createElement(s.SelectOption,{value:"Status"},"Status"))),l().createElement(s.ToolbarFilter,{chips:t.name,deleteChip:I,deleteChipGroup:x,categoryName:"Name",className:"Name"!==o&&"pf-u-hidden"},l().createElement(s.ToolbarItem,null,l().createElement(s.InputGroup,null,l().createElement(s.TextInput,{id:"filterName",type:"text","aria-label":"Name",placeholder:"Filter by name",value:d,onChange:function(e){return E(e)}}),l().createElement(s.Button,{variant:"control","aria-label":"Search Name",onClick:function(){d&&n((function(e){var t=Y({},e);return t.name=[d],console.log(t),t}))}},l().createElement(M.ZP,null))))),l().createElement(s.ToolbarFilter,{chips:t.region,deleteChip:I,deleteChipGroup:x,categoryName:"Region",className:"Region"!==o&&"pf-u-hidden"},l().createElement(s.ToolbarItem,null,l().createElement(s.Select,{variant:s.SelectVariant.checkbox,"aria-label":"Region",onToggle:C,onSelect:function(e,t){k("region",e,t)},selections:t.region,isOpen:S,placeholderText:"Filter by region"},l().createElement(s.SelectOption,{value:"US-East, N. Virginia"},"US-East, N. Virginia"),l().createElement(s.SelectOption,{value:"EU-Ireland"},"EU-Ireland")))),l().createElement(s.ToolbarFilter,{chips:t.owner,deleteChip:I,deleteChipGroup:x,categoryName:"Owner",className:"Owner"!==o&&"pf-u-hidden"},l().createElement(s.ToolbarItem,null,l().createElement(s.InputGroup,null,l().createElement(s.TextInput,{id:"filterOwner",type:"text","aria-label":"Owner",placeholder:"Filter by owner",value:v,onChange:function(e){return b(e)}}),l().createElement(s.Button,{variant:"control","aria-label":"Search Owner",onClick:function(){v&&n((function(e){var t=Y({},e);return t.owner=[v],t}))}},l().createElement(M.ZP,null))))),l().createElement(s.ToolbarFilter,{chips:t.status,deleteChip:I,deleteChipGroup:x,categoryName:"Status",className:"Status"!==o&&"pf-u-hidden"},l().createElement(s.ToolbarItem,null,l().createElement(s.Select,{variant:s.SelectVariant.checkbox,"aria-label":"Status",onToggle:Z,onSelect:function(e,t){k("status",e,t)},selections:t.status,isOpen:D,placeholderText:"Filter by status"},l().createElement(s.SelectOption,{value:"Ready"},"Ready"),l().createElement(s.SelectOption,{value:"Failed"},"Failed"),l().createElement(s.SelectOption,{value:"Creation pending"},"Creation pending"),l().createElement(s.SelectOption,{value:"Creation in progress"},"Creation in progress"),l().createElement(s.SelectOption,{value:"Deleting"},"Deleting"))))))}W.propTypes={filters:H().shape({name:H().string.isRequired,region:H().string.isRequired,owner:H().string.isRequired,status:H().string.isRequired}),setFilters:H().func.isRequired};const J=W;var K={aws:"Amazon Web Services"};Object.keys(K).map((function(e){return{value:e,label:K[e]}}));var X=["name","cloud_provider","region","owner","status","created_at"],$={field:"name",direction:"asc"};const ee=(0,i.withRouter)((function(){var e,t,n=(0,i.useHistory)(),d=function(){var e=(0,a.useState)(1),t=(0,r.Z)(e,2),n=t[0],l=t[1],i=(0,a.useState)(20),c=(0,r.Z)(i,2),o=c[0],u=c[1];return{page:n,perPage:o,onSetPage:function(e,t){l(t)},onPerPageSelect:function(e,t){u(t)}}}(),E=d.page,f=d.perPage,v=d.onSetPage,b=d.onPerPageSelect,h=function(e){var t=e.sortFields,n=e.defaultSortOption,l=(0,a.useState)(),i=(0,r.Z)(l,2),c=i[0],o=i[1],u=(null==c?void 0:c.field)||n.field,s=(null==c?void 0:c.direction)||n.direction,m=(0,a.useState)({}),p=(0,r.Z)(m,2),d=p[0],E=p[1];return(0,a.useEffect)((function(){var e=t.reduce((function(e,t,n){return e[t]=n,e}),{});E(e)}),[t]),{sortOption:{field:u,direction:s},getSortParams:function(e){var t=d[e];return{sortBy:{index:u?d[u]:void 0,direction:s,defaultDirection:"desc"},onSort:function(t,n,r){o({field:e,direction:r})},columnIndex:t}}}}({sortFields:X,defaultSortOption:$}),C=h.sortOption,w=h.getSortParams,D=(0,a.useState)({}),P=(0,r.Z)(D,2),Z=P[0],I=P[1],x=(e={query:{page:E,size:f,orderBy:"".concat(C.field," ").concat(C.direction)}},(0,g.useQuery)(["instances",e],(function(){return y(e)}))),N=x.data,R=x.isFetching,G=(t=(0,g.useQueryClient)(),(0,g.useMutation)(S,{onSuccess:function(){t.invalidateQueries("instances")}})),A=O(),B=(0,a.useState)(null),q=(0,r.Z)(B,2),_=q[0],z=q[1],H=(0,a.useState)(null),U=(0,r.Z)(H,2),M=U[0],Q=U[1],Y=(0,a.useState)(null),W=(0,r.Z)(Y,2),ee=W[0],te=W[1],ne=(null==N?void 0:N.items)||[];return(0,a.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"sample-page")}),[]),R?l().createElement(s.Bullseye,null,l().createElement(s.Spinner,null)):l().createElement(F,{isExpanded:!!ee,instance:ee,onClose:function(){te(null)}},l().createElement(o.Z,null,l().createElement(u.Z,{title:"ACS Instances"})),l().createElement(c.Z,null,l().createElement(s.Card,null,0===(null==ne?void 0:ne.length)?l().createElement(s.EmptyState,null,l().createElement(s.EmptyStateIcon,{icon:p.ZP}),l().createElement(s.Title,{size:"lg",headingLevel:"h4"},"No ACS instances."),l().createElement(s.EmptyStateBody,null,"Create one to get started."),l().createElement(s.EmptyStatePrimary,null,l().createElement(s.Button,{variant:"primary",onClick:function(){return z({})}},"Create ACS instance"))):l().createElement(l().Fragment,null,l().createElement(s.Toolbar,{clearAllFilters:function(){I({})}},l().createElement(s.ToolbarContent,null,l().createElement(J,{filters:Z,setFilters:I}),l().createElement(s.ToolbarItem,null,l().createElement(s.Button,{variant:"primary",onClick:function(){return z({})}},"Create ACS instance")),l().createElement(s.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},l().createElement(s.Pagination,{itemCount:ne.length,perPage:f,page:E,onSetPage:v,widgetId:"acs-instances-top-pagination",onPerPageSelect:b,isCompact:!0})))),l().createElement(m.TableComposable,{"aria-label":"ACS instances table"},l().createElement(m.Thead,null,l().createElement(m.Tr,null,l().createElement(m.Th,{sort:w("name")},"Name"),l().createElement(m.Th,{sort:w("cloud_provider")},"Cloud Provider"),l().createElement(m.Th,{sort:w("region")},"Region"),l().createElement(m.Th,{sort:w("owner")},"Owner"),l().createElement(m.Th,{sort:w("status")},"Status"),l().createElement(m.Th,{sort:w("created_at")},"Time Created"),l().createElement(m.Th,null))),l().createElement(m.Tbody,null,ne.map((function(e){var t,r,a="/instances/instance/".concat(e.id);return l().createElement(m.Tr,{key:e.name,onRowClick:function(t){"button"!==t.target.getAttribute("type")&&te(e)},isRowSelected:(null==ee?void 0:ee.name)===(null==e?void 0:e.name)},l().createElement(m.Td,{dataLabel:"Name"},l().createElement(i.Link,{to:a},e.name)),l().createElement(m.Td,{dataLabel:"Cloud Provider"},(r=e.cloud_provider,K[r])),l().createElement(m.Td,{dataLabel:"Region"},(t=e.region,T[t])),l().createElement(m.Td,{dataLabel:"Owner"},e.owner),l().createElement(m.Td,{dataLabel:"Status"},l().createElement(V,{status:e.status})),l().createElement(m.Td,{dataLabel:"Time Created<"},j(e.created_at)),l().createElement(m.Td,{isActionCell:!0},l().createElement(m.ActionsColumn,{items:[{title:"Details",onClick:function(e){e.preventDefault(),n.push(a)}},{title:"Delete",onClick:function(t){t.preventDefault(),Q(e)}}]})))})))),l().createElement(s.Toolbar,null,l().createElement(s.ToolbarContent,null,l().createElement(s.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},l().createElement(s.Pagination,{itemCount:ne.length,perPage:f,page:E,onSetPage:v,widgetId:"acs-instances-top-pagination",onPerPageSelect:b})))))),l().createElement(k,{isOpen:!!_,onClose:function(){z(null)},onRequestCreate:function(e){return G.mutateAsync({region:e.region,cloud_provider:e.cloud_provider,name:e.name,multi_az:"multi"===e.availabilityZones}).catch((function(e){return e}))}}),l().createElement(L,{instance:M,isOpen:!!M,onClose:function(){Q(null)},onRequestDelete:function(e){return A.mutateAsync(e).catch((function(e){return e}))}})))}))},22512:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r,a=n(4942),l=n(15861),i=n(87757),c=n.n(i),o=n(9669);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const m=((r=n.n(o)().create()).interceptors.request.use(function(){var e=(0,l.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return n=e.sent,r=t.baseURL||"https://api.stage.openshift.com",a=s(s({},t),{},{url:"".concat(r).concat(t.url)}),n&&(a.headers=s(s({},a.headers),{},{Authorization:"Bearer ".concat(n)})),delete a.customHost,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r)},24654:()=>{}}]);
//# sourceMappingURL=../sourcemaps/InstancesPage.6c910ea9a994b76ff370ff629e62ca74.js.map