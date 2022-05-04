(self.webpackChunkacs=self.webpackChunkacs||[]).push([[996],{70391:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(93264),a=n.n(r),l=n(80123),i=n(39173),c=n(14748),o=n(16530),u=n(70943),s=n(87462),m=n(45987),d=["children","to"];const p=function(e){var t=e.children,n=e.to,r=(0,m.Z)(e,d);return a().createElement(u.BreadcrumbItem,(0,s.Z)({},r,{render:function(e){var r=e.className,l=e.ariaCurrent;return a().createElement(o.Link,{className:r,"aria-current":l,to:n},t)}}))};var E=n(15861),f=n(87757),v=n.n(f),g=n(88767),b=n(22512),h=function(){var e=(0,E.Z)(v().mark((function e(t){var n,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.Z.get("/api/dinosaurs_mgmt/v1/dinosaurs/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();const y=function(){var e,t=(e=(0,o.useParams)().instanceId,(0,g.useQuery)(["instance",e],(function(){return h(e)}))),n=t.data;return t.isFetching?a().createElement(u.Bullseye,null,a().createElement(u.Spinner,null)):a().createElement("div",null,a().createElement(l.Z,null,a().createElement(u.Flex,{direction:{default:"column"}},a().createElement(u.FlexItem,null,a().createElement(u.Breadcrumb,null,a().createElement(p,{to:"/instances"},"ACS instances"),a().createElement(u.BreadcrumbItem,{isActive:!0},n.name))),a().createElement(u.FlexItem,null,a().createElement(i.Z,{title:n.name})))),a().createElement(c.Z,null))}},45053:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var r=n(70885),a=n(93264),l=n.n(a),i=n(16530),c=n(14748),o=n(80123),u=n(39173),s=n(70943),m=n(38877),d=n(96733);var p=n(15861),E=n(87757),f=n.n(E),v=n(88767),g=n(22512),b=n(80129),h=n.n(b),y=function(){var e=(0,p.Z)(f().mark((function e(t){var n,r,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.query,n=h().stringify(l,{encode:!1}),e.next=4,g.Z.get("/api/dinosaurs_mgmt/v1/dinosaurs?".concat(n));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 7:case"end":return e.stop()}var l}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,p.Z)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.post("/api/dinosaurs_mgmt/v1/dinosaurs?async=true",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=(0,p.Z)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.delete("/api/dinosaurs_mgmt/v1/dinosaurs/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function D(){var e=(0,v.useQueryClient)();return(0,v.useMutation)(T,{onSuccess:function(){e.invalidateQueries("instances")}})}var w=n(4942);const S=function(e){var t=e.toggleIcon,n=e.id,i=e.value,c=e.handleSelect,o=e.isDisabled,u=void 0!==o&&o,m=e.children,d=e.direction,p=void 0===d?"down":d,E=e.isCreatable,f=void 0!==E&&E,v=e.variant,g=void 0===v?null:v,b=e.placeholderText,h=void 0===b?"":b,y=(0,a.useState)(!1),C=(0,r.Z)(y,2),T=C[0],D=C[1],w="typeahead"===g?s.SelectVariant.typeahead:s.SelectVariant.single;return l().createElement(s.Select,{variant:w,toggleIcon:t,id:n,isDisabled:u,isOpen:T,onSelect:function(e,t){D(!1),c(n,t)},onToggle:D,selections:i,direction:p,isCreatable:f,placeholderText:h,toggleId:n},m)};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"",cloud_provider:"aws",region:"us-east-1",availabilityZones:"multi"};const P=function(e){var t=e.isOpen,n=e.onClose,i=e.onRequestCreate,c=(0,a.useState)(null),o=(0,r.Z)(c,2),u=o[0],m=o[1],d=(0,a.useState)(x),E=(0,r.Z)(d,2),v=E[0],g=E[1],b=(0,a.useState)(!1),h=(0,r.Z)(b,2),y=h[0],C=h[1];function T(e,t){var n=t.currentTarget.id;g((function(e){return Z(Z({},e),{},{availabilityZones:n})}))}function D(){return(D=(0,p.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,i(v);case 3:t=e.sent,C(!1),t instanceof Error?m(t):(g(x),n());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l().createElement(s.Modal,{variant:s.ModalVariant.small,title:"Create ACS instance",isOpen:t,onClose:n,actions:[l().createElement(s.Button,{key:"createInstance",variant:"primary",onClick:function(){return D.apply(this,arguments)},isLoading:y,isDisabled:y||!(null!=v&&v.name)},"Create instance"),l().createElement(s.Button,{key:"cancel",variant:"link",onClick:n,isDisabled:y},"Cancel")]},u&&l().createElement("div",{className:"pf-u-mb-md"},l().createElement(s.Alert,{variant:"danger",title:u.message})),l().createElement(s.Form,null,l().createElement(s.FormGroup,{label:"Name",isRequired:!0,fieldId:"name",helperText:"Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - )."},l().createElement(s.TextInput,{isRequired:!0,type:"text",id:"name",name:"name",value:v.name,onChange:function(e){g((function(t){return Z(Z({},t),{},{name:e})}))}})),l().createElement(s.FormGroup,{label:"Cloud provider",isRequired:!0,fieldId:"cloud_provider"},l().createElement(s.Tile,{title:"Amazon Web Services",isSelected:"aws"===v.cloud_provider})),l().createElement(s.FormGroup,{label:"Cloud region",isRequired:!0,fieldId:"region"},l().createElement(S,{id:"region",value:v.region,handleSelect:function(e,t){g((function(e){return Z(Z({},e),{},{region:t})}))}},l().createElement(s.SelectOption,{value:"us-east-1"},"US-East, N. Virginia"),l().createElement(s.SelectOption,{value:"eu-west-1"},"EU-Ireland"))),l().createElement(s.FormGroup,{label:"Availability zones",isRequired:!0,fieldId:"availabilityZones"},l().createElement(s.ToggleGroup,{"aria-label":"Availability Zones"},l().createElement(s.ToggleGroupItem,{text:"Single",buttonId:"single",isSelected:"single"===v.availabilityZones,onChange:T,isDisabled:!0}),l().createElement(s.ToggleGroupItem,{text:"Multi",buttonId:"multi",isSelected:"multi"===v.availabilityZones,onChange:T})))))},I=function(e){var t=e.isOpen,n=e.instance,i=e.onRequestDelete,c=e.onClose,o=(0,a.useState)(""),u=(0,r.Z)(o,2),m=u[0],d=u[1],E=(0,a.useState)(!1),v=(0,r.Z)(E,2),g=v[0],b=v[1];function h(){return(h=(0,p.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,i(n.id);case 3:t=e.sent,b(!1),t.error||(d(""),c());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n?l().createElement(s.Modal,{variant:s.ModalVariant.small,title:"Delete instance?",isOpen:t,onClose:c,actions:[l().createElement(s.Button,{key:"createInstance",variant:"danger",onClick:function(){return h.apply(this,arguments)},isLoading:g,isDisabled:g||n.name!==m},"Delete instance"),l().createElement(s.Button,{key:"cancel",variant:"link",onClick:c,isDisabled:g},"Cancel")]},l().createElement("div",{className:"pf-u-pb-md"},l().createElement("div",null,"This will permanently delete"," ",l().createElement("span",{className:"pf-u-font-weight-bold"},n.name),"."),l().createElement("div",null,"This action cannot be undone.")),l().createElement(s.Form,null,l().createElement(s.FormGroup,{label:"Confirmation",isRequired:!0,fieldId:"confirmationInstanceName"},l().createElement(s.TextInput,{isRequired:!0,type:"text",id:"confirmationInstanceName",name:"confirmationInstanceName",value:m,onChange:d})),l().createElement(s.HelperText,null,l().createElement(s.HelperTextItem,null,"Type ",l().createElement("span",{className:"pf-u-font-weight-bold"},n.name)," ","to confirm.")))):null};var k=n(327),L=n(12902);function j(e){return(0,k.Z)((0,L.Z)(e),"MM/dd/yyyy | h:mm:ss a")}const A=function(e){var t=e.isExpanded,n=e.onClose,r=e.instance,a=e.children;return l().createElement(s.Drawer,{isExpanded:t},l().createElement(s.DrawerContent,{panelContent:l().createElement(s.DrawerPanelContent,null,l().createElement(s.DrawerHead,null,l().createElement("div",null,l().createElement(s.TextContent,null,l().createElement(s.Text,{component:s.TextVariants.small},"Name")),l().createElement(s.TextContent,null,l().createElement(s.Text,{component:s.TextVariants.h1},null==r?void 0:r.name))),l().createElement(s.DrawerActions,null,l().createElement(s.DrawerCloseButton,{onClick:n}))),l().createElement(s.Divider,{component:"div"}),l().createElement(s.DrawerContentBody,null,r&&l().createElement(s.DescriptionList,{isHorizontal:!0},l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Cloud provider"),l().createElement(s.DescriptionListDescription,null,r.cloud_provider)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Region"),l().createElement(s.DescriptionListDescription,null,r.region)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"ID"),l().createElement(s.DescriptionListDescription,null,r.id)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Owner"),l().createElement(s.DescriptionListDescription,null,r.owner)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Created"),l().createElement(s.DescriptionListDescription,null,j(r.created_at))),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Updated"),l().createElement(s.DescriptionListDescription,null,j(r.updated_at))))))},a))};var R=n(35451);const N=function(e){return"ready"===e.status?l().createElement(s.Flex,null,l().createElement(s.FlexItem,null,l().createElement(R.ZP,{className:"pf-u-success-color-100"})),l().createElement(s.FlexItem,null,"Ready")):"N/A"},F=(0,i.withRouter)((function(){var e,t,n=(0,i.useHistory)(),p=function(){var e=(0,a.useState)(1),t=(0,r.Z)(e,2),n=t[0],l=t[1],i=(0,a.useState)(20),c=(0,r.Z)(i,2),o=c[0],u=c[1];return{page:n,perPage:o,onSetPage:function(e,t){l(t)},onPerPageSelect:function(e,t){u(t)}}}(),E=p.page,f=p.perPage,g=p.onSetPage,b=p.onPerPageSelect,h=(e={query:{page:E,size:f}},(0,v.useQuery)(["instances",e],(function(){return y(e)}))),T=h.data,w=h.isFetching,S=(t=(0,v.useQueryClient)(),(0,v.useMutation)(C,{onSuccess:function(){t.invalidateQueries("instances")}})),O=D(),Z=(0,a.useState)(null),x=(0,r.Z)(Z,2),k=x[0],L=x[1],R=(0,a.useState)(null),F=(0,r.Z)(R,2),B=F[0],_=F[1],q=(0,a.useState)(null),G=(0,r.Z)(q,2),M=G[0],z=G[1],V=(null==T?void 0:T.items)||[];return(0,a.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"sample-page")}),[]),w?l().createElement(s.Bullseye,null,l().createElement(s.Spinner,null)):l().createElement(A,{isExpanded:!!M,instance:M,onClose:function(){z(null)}},l().createElement(o.Z,null,l().createElement(u.Z,{title:"ACS Instances"})),l().createElement(c.Z,null,l().createElement(s.Card,null,0===(null==V?void 0:V.length)?l().createElement(s.EmptyState,null,l().createElement(s.EmptyStateIcon,{icon:d.ZP}),l().createElement(s.Title,{size:"lg",headingLevel:"h4"},"No ACS instances."),l().createElement(s.EmptyStateBody,null,"Create one to get started."),l().createElement(s.EmptyStatePrimary,null,l().createElement(s.Button,{variant:"primary",onClick:function(){return L({})}},"Create ACS instance"))):l().createElement(l().Fragment,null,l().createElement(s.Toolbar,null,l().createElement(s.ToolbarContent,null,l().createElement(s.ToolbarItem,null,l().createElement(s.Button,{variant:"primary",onClick:function(){return L({})}},"Create ACS instance")),l().createElement(s.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},l().createElement(s.Pagination,{itemCount:V.length,perPage:f,page:E,onSetPage:g,widgetId:"acs-instances-top-pagination",onPerPageSelect:b,isCompact:!0})))),l().createElement(m.TableComposable,{"aria-label":"ACS instances table"},l().createElement(m.Thead,null,l().createElement(m.Tr,null,l().createElement(m.Th,null,"Name"),l().createElement(m.Th,null,"Cloud Provider"),l().createElement(m.Th,null,"Region"),l().createElement(m.Th,null,"Owner"),l().createElement(m.Th,null,"Status"),l().createElement(m.Th,null,"Time Created"),l().createElement(m.Th,null))),l().createElement(m.Tbody,null,V.map((function(e){return l().createElement(m.Tr,{key:e.name,onRowClick:function(t){"button"!==t.target.getAttribute("type")&&z(e)},isRowSelected:(null==M?void 0:M.name)===(null==e?void 0:e.name)},l().createElement(m.Td,{dataLabel:"Name"},l().createElement(i.Link,{to:"/instances/instance/".concat(e.id)},e.name)),l().createElement(m.Td,{dataLabel:"Cloud Provider"},e.cloud_provider),l().createElement(m.Td,{dataLabel:"Region"},e.region),l().createElement(m.Td,{dataLabel:"Owner"},e.owner),l().createElement(m.Td,{dataLabel:"Status"},l().createElement(N,{status:e.status})),l().createElement(m.Td,{dataLabel:"Time Created<"},j(e.created_at)),l().createElement(m.Td,{isActionCell:!0},l().createElement(m.ActionsColumn,{items:[{title:"Details",onClick:function(t){t.preventDefault(),n.push("/instances/instance/".concat(e.id))}},{title:"Delete",onClick:function(t){t.preventDefault(),_(e)}}]})))})))),l().createElement(s.Toolbar,null,l().createElement(s.ToolbarContent,null,l().createElement(s.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},l().createElement(s.Pagination,{itemCount:V.length,perPage:f,page:E,onSetPage:g,widgetId:"acs-instances-top-pagination",onPerPageSelect:b})))))),l().createElement(P,{isOpen:!!k,onClose:function(){L(null)},onRequestCreate:function(e){return S.mutateAsync({region:e.region,cloud_provider:e.cloud_provider,name:e.name,multi_az:"multi"===e.availabilityZones}).catch((function(e){return e}))}}),l().createElement(I,{instance:B,isOpen:!!B,onClose:function(){_(null)},onRequestDelete:function(e){return O.mutateAsync(e).catch((function(e){return e}))}})))}))},22512:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r,a=n(4942),l=n(15861),i=n(87757),c=n.n(i),o=n(9669);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const m=((r=n.n(o)().create()).interceptors.request.use(function(){var e=(0,l.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return n=e.sent,r=t.baseURL||"",a=s(s({},t),{},{url:"".concat(r).concat(t.url)}),n&&(a.headers=s(s({},a.headers),{},{Authorization:"Bearer ".concat(n)})),delete a.customHost,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r)},24654:()=>{}}]);
//# sourceMappingURL=../sourcemaps/InstancesPage.56343074eab6158cd3177fb454e2b62f.js.map