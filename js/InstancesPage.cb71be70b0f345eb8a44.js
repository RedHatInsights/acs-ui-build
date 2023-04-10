(self.webpackChunkacs=self.webpackChunkacs||[]).push([[996],{45331:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(93264),a=n.n(r),l=n(21242),i=n(15558),c=n(15705),o=n(60509);const u=function(e){var t=e.instance;return a().createElement(l.DescriptionList,{isHorizontal:!0},a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,"Cloud provider"),a().createElement(l.DescriptionListDescription,null,(0,c.mt)(t.cloud_provider))),a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,"Region"),a().createElement(l.DescriptionListDescription,null,(0,o.pP)(t.region))),a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,"ID"),a().createElement(l.DescriptionListDescription,null,t.id)),a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,"Owner"),a().createElement(l.DescriptionListDescription,null,t.owner)),a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,"Time created"),a().createElement(l.DescriptionListDescription,null,(0,i.F)(t.created_at))),a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,"Time updated"),a().createElement(l.DescriptionListDescription,null,(0,i.F)(t.updated_at))),a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,"Central API endpoint (Sensor mTLS)"),a().createElement(l.DescriptionListDescription,null,t.centralDataURL||"-")),a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,"Central instance (UI, roxctl)"),a().createElement(l.DescriptionListDescription,null,t.centralUIURL||"-")))}},1535:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ie});var r=n(87462),a=n(70885),l=n(93264),i=n.n(l),c=n(51663),o=n(14748),u=n(89376),s=n(39173),m=n(21242),p=n(92820),d=n(96733),f=n(71070);var v=n(15861),E=n(87757),g=n.n(E),b=n(88767),h=n(22512),y=n(80129),S=n.n(y),T=function(){var e=(0,v.Z)(g().mark((function e(t){var n,r,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.query,n=S().stringify(l,{encode:!1}),e.next=4,h.Z.get("/api/rhacs/v1/centrals?".concat(n));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 7:case"end":return e.stop()}var l}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,v.Z)(g().mark((function e(t){var n,r;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.post("/api/rhacs/v1/centrals?async=true",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,v.Z)(g().mark((function e(t){var n,r;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.delete("/api/rhacs/v1/centrals/".concat(t,"?async=true"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function w(){var e=(0,b.useQueryClient)();return(0,b.useMutation)(O,{onSuccess:function(){e.invalidateQueries("instances")}})}var D=function(){var e=(0,v.Z)(g().mark((function e(){var t,n;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.get("/api/rhacs/v1/cloud_accounts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=n(55140);const P=function(){var e=(0,Z.Z)().analytics;return{analyticsTrack:function(t){localStorage.getItem("chrome:analytics:dev"),e.track(t)}}};var I=n(4942),k=n(60509);const x=function(e){var t=e.toggleIcon,n=e.id,r=e.value,c=e.handleSelect,o=e.isDisabled,u=void 0!==o&&o,s=e.children,p=e.direction,d=void 0===p?"down":p,f=e.isCreatable,v=void 0!==f&&f,E=e.variant,g=void 0===E?null:E,b=e.placeholderText,h=void 0===b?"":b,y=e.menuAppendTo,S=void 0===y?void 0:y,T=(0,l.useState)(!1),C=(0,a.Z)(T,2),O=C[0],w=C[1],D="typeahead"===g?m.SelectVariant.typeahead:m.SelectVariant.single;return i().createElement(m.Select,{variant:D,toggleIcon:t,id:n,isDisabled:u,isOpen:O,onSelect:function(e,t){w(!1),c(n,t)},onToggle:w,selections:r,direction:d,isCreatable:v,placeholderText:h,toggleId:n,menuAppendTo:S},s)};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={name:"",cloud_provider:"aws",region:"us-east-1",availabilityZones:"multi",cloud_account_id:""};const R=function(e){var t=e.isOpen,n=e.onClose,r=e.onRequestCreate,c=e.cloudAccountIds,o=(0,l.useState)(null),u=(0,a.Z)(o,2),s=u[0],p=u[1],d=(0,l.useState)(A),f=(0,a.Z)(d,2),E=f[0],b=f[1],h=(0,l.useState)(!1),y=(0,a.Z)(h,2),S=y[0],T=y[1],C=P().analyticsTrack;function O(){p(null),b(A),T(!1),n()}function w(){return(w=(0,v.Z)(g().mark((function e(){var t,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("create-instance-form-submitted"),T(!0),e.next=4,r(E);case 4:t=e.sent,T(!1),t instanceof Error?(a=t.response.data.reason,p(a)):(b(A),n());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){var n=t.currentTarget.id;b((function(e){return j(j({},e),{},{availabilityZones:n})}))}return(0,l.useEffect)((function(){""===E.cloud_account_id&&1===c.length&&b((function(e){return j(j({},e),{},{cloud_account_id:c[0]})}))}),[c]),i().createElement(m.Modal,{variant:m.ModalVariant.small,title:"Create ACS instance",isOpen:t,onClose:O,actions:[i().createElement(m.Button,{key:"createInstance",variant:"primary",onClick:function(){return w.apply(this,arguments)},isLoading:S,isDisabled:S||!(null!=E&&E.name)},"Create instance"),i().createElement(m.Button,{key:"cancel",variant:"link",onClick:O,isDisabled:S},"Cancel")]},s&&i().createElement("div",{className:"pf-u-mb-md"},i().createElement(m.Alert,{variant:"danger",title:s})),i().createElement(m.Form,null,i().createElement(m.FormGroup,{label:"Name",isRequired:!0,fieldId:"name",helperText:"Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - )."},i().createElement(m.TextInput,{isRequired:!0,type:"text",id:"name",name:"name",value:E.name,onChange:function(e){b((function(t){return j(j({},t),{},{name:e})}))}})),i().createElement(m.FormGroup,{label:"Cloud provider",isRequired:!0,fieldId:"cloud_provider"},i().createElement(m.Tile,{title:"Amazon Web Services",isSelected:"aws"===E.cloud_provider})),c.length>1&&i().createElement(m.FormGroup,{label:"AWS account number",fieldId:"cloud_account_id"},i().createElement(x,{id:"cloud_account_id",value:E.cloud_account_id,handleSelect:function(e,t){b((function(e){return j(j({},e),{},{cloud_account_id:t})}))},placeholderText:"Select an AWS Account",menuAppendTo:"parent"},c.map((function(e){return i().createElement(m.SelectOption,{key:e,value:e},e)})))),i().createElement(m.FormGroup,{label:"Cloud region",isRequired:!0,fieldId:"region"},i().createElement(x,{id:"region",value:E.region,handleSelect:function(e,t){b((function(e){return j(j({},e),{},{region:t})}))}},k.Jo.map((function(e){return i().createElement(m.SelectOption,{key:e.value,value:e.value},e.label)})))),i().createElement(m.FormGroup,{label:"Availability zones",isRequired:!0,fieldId:"availabilityZones"},i().createElement(m.ToggleGroup,{"aria-label":"Availability Zones"},i().createElement(m.ToggleGroupItem,{text:"Single",buttonId:"single",isSelected:"single"===E.availabilityZones,onChange:D,isDisabled:!0}),i().createElement(m.ToggleGroupItem,{text:"Multi",buttonId:"multi",isSelected:"multi"===E.availabilityZones,onChange:D})))))},_=function(e){var t=e.isOpen,n=e.instance,r=e.onRequestDelete,c=e.onClose,o=(0,l.useState)(""),u=(0,a.Z)(o,2),s=u[0],p=u[1],d=(0,l.useState)(!1),f=(0,a.Z)(d,2),E=f[0],b=f[1],h=(0,l.useState)(""),y=(0,a.Z)(h,2),S=y[0],T=y[1],C=P().analyticsTrack;function O(){return w.apply(this,arguments)}function w(){return(w=(0,v.Z)(g().mark((function e(){var t;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),T(""),C("delete-instance-form-submitted"),e.next=5,r(n.id);case 5:t=e.sent,b(!1),t.isAxiosError?T(t.message||"An unanticapted error occurred. Please try again. If this error persists, please contact support."):(p(""),c());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return n.name===s}return n?i().createElement(m.Modal,{variant:m.ModalVariant.small,title:"Delete instance?",isOpen:t,onClose:c,actions:[i().createElement(m.Button,{key:"createInstance",variant:"danger",onClick:O,isLoading:E,isDisabled:E||!D()},"Delete instance"),i().createElement(m.Button,{key:"cancel",variant:"link",onClick:c,isDisabled:E},"Cancel")]},i().createElement("div",{className:"pf-u-pb-md"},i().createElement("div",null,"This will permanently delete"," ",i().createElement("span",{className:"pf-u-font-weight-bold"},n.name),"."),i().createElement("div",null,"This action cannot be undone.")),i().createElement(m.Form,{onSubmit:function(e){e.preventDefault(),D()&&O()}},i().createElement(m.FormGroup,{label:"Confirmation",isRequired:!0,fieldId:"confirmationInstanceName"},i().createElement(m.TextInput,{isRequired:!0,type:"text",id:"confirmationInstanceName",name:"confirmationInstanceName",value:s,onChange:p})),i().createElement(m.HelperText,null,i().createElement(m.HelperTextItem,null,"Type ",i().createElement("span",{className:"pf-u-font-weight-bold"},n.name)," ","to confirm.")),S.length>0&&i().createElement(m.Alert,{isInline:!0,variant:m.AlertVariant.danger,title:S}))):null};var N=n(45331);const F=function(e){var t=e.isExpanded,n=e.onClose,r=e.instance,a=e.children;return i().createElement(m.Drawer,{isExpanded:t},i().createElement(m.DrawerContent,{panelContent:i().createElement(m.DrawerPanelContent,null,i().createElement(m.DrawerHead,null,i().createElement("div",null,i().createElement(m.TextContent,null,i().createElement(m.Text,{component:m.TextVariants.small},"Name")),i().createElement(m.TextContent,null,i().createElement(m.Text,{component:m.TextVariants.h2},null==r?void 0:r.name))),i().createElement(m.DrawerActions,null,i().createElement(m.DrawerCloseButton,{onClick:n}))),i().createElement(m.Divider,{component:"div"}),i().createElement(m.DrawerContentBody,null,r&&i().createElement(N.Z,{instance:r})))},a))};var G=n(15558),q=n(35451),B=n(84564),V=n(41942),z={accepted:"Request accepted",preparing:"Creation pending",provisioning:"Creation in progress",ready:"Ready",failed:"Failed",deprovision:"Deprovisioning",deleting:"Deleting"},M=Object.keys(z).map((function(e){return{value:e,label:z[e]}})),H={accepted:{message:z.accepted,component:i().createElement(V.ZP,null)},preparing:{message:z.preparing,component:i().createElement(V.ZP,null)},provisioning:{message:z.provisioning,component:i().createElement(m.Spinner,{isSVG:!0,size:"md"})},ready:{message:z.ready,component:i().createElement(q.ZP,{className:"pf-u-success-color-100"})},failed:{message:z.failed,component:i().createElement(B.ZP,{className:"pf-u-danger-color-100"})},deprovision:{message:z.deprovision,component:i().createElement(m.Spinner,{isSVG:!0,size:"md"})},deleting:{message:z.deleting,component:i().createElement(m.Spinner,{isSVG:!0,size:"md"})}};const U=function(e){var t=e.status,n=H[t]||{message:"N/A",component:null},r=n.message,a=n.component;return i().createElement(m.Flex,null,i().createElement(m.FlexItem,null,a),i().createElement(m.FlexItem,null,r))};var Q=n(42982),W=n(45697),J=n.n(W),K=n(8755);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,I.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e){var t=e.filters,n=e.setFilters,r=(0,l.useState)("Name"),c=(0,a.Z)(r,2),o=c[0],u=c[1],s=(0,l.useState)(""),p=(0,a.Z)(s,2),d=p[0],v=p[1],E=(0,l.useState)(""),g=(0,a.Z)(E,2),b=g[0],h=g[1],y=(0,l.useState)(!1),S=(0,a.Z)(y,2),T=S[0],C=S[1],O=(0,l.useState)(!1),w=(0,a.Z)(O,2),D=w[0],Z=w[1];function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n((function(n){var r=Y({},n),a=r[e.toLowerCase()].filter((function(e){return e!==t}));return 0===(null==a?void 0:a.length)?delete r[e.toLowerCase()]:r[e.toLowerCase()]=a,r}))}function I(e){n((function(t){var n=Y({},t);return delete n[e.toLowerCase()],n}))}function L(e,t,r){var a=t.target.checked;n((function(t){var n=Y({},t),l=t[e]||[],i=a?[].concat((0,Q.Z)(l),[r]):l.filter((function(e){return e!==r}));return 0===i.length?delete n[e]:n[e]=i,n}))}return i().createElement(m.ToolbarToggleGroup,{toggleIcon:i().createElement(K.ZP,null),breakpoint:"xl"},i().createElement(m.ToolbarGroup,{variant:"filter-group"},i().createElement(m.ToolbarItem,null,i().createElement(x,{id:"region",value:o,handleSelect:function(e,t){u(t)}},i().createElement(m.SelectOption,{value:"Name"},"Name"),i().createElement(m.SelectOption,{value:"Region"},"Region"),i().createElement(m.SelectOption,{value:"Owner"},"Owner"),i().createElement(m.SelectOption,{value:"Status"},"Status"))),i().createElement(m.ToolbarFilter,{chips:t.name,deleteChip:P,deleteChipGroup:I,categoryName:"Name",className:"Name"!==o&&"pf-u-hidden"},i().createElement(m.ToolbarItem,null,i().createElement(m.InputGroup,null,i().createElement(m.TextInput,{id:"filterName",type:"text","aria-label":"Name",placeholder:"Filter by name",value:d,onChange:function(e){return v(e)}}),i().createElement(m.Button,{variant:"control","aria-label":"Search Name",onClick:function(){d&&n((function(e){var t=Y({},e);return t.name=[d],t}))}},i().createElement(f.ZP,null))))),i().createElement(m.ToolbarFilter,{chips:t.region,deleteChip:P,deleteChipGroup:I,categoryName:"Region",className:"Region"!==o&&"pf-u-hidden"},i().createElement(m.ToolbarItem,null,i().createElement(m.Select,{variant:m.SelectVariant.checkbox,"aria-label":"Region",onToggle:C,onSelect:function(e,t){L("region",e,t)},selections:t.region,isOpen:T,placeholderText:"Filter by region"},k.Jo.map((function(e){return i().createElement(m.SelectOption,{key:e.label,value:e.label},e.label)}))))),i().createElement(m.ToolbarFilter,{chips:t.owner,deleteChip:P,deleteChipGroup:I,categoryName:"Owner",className:"Owner"!==o&&"pf-u-hidden"},i().createElement(m.ToolbarItem,null,i().createElement(m.InputGroup,null,i().createElement(m.TextInput,{id:"filterOwner",type:"text","aria-label":"Owner",placeholder:"Filter by owner",value:b,onChange:function(e){return h(e)}}),i().createElement(m.Button,{variant:"control","aria-label":"Search Owner",onClick:function(){b&&n((function(e){var t=Y({},e);return t.owner=[b],t}))}},i().createElement(f.ZP,null))))),i().createElement(m.ToolbarFilter,{chips:t.status,deleteChip:P,deleteChipGroup:I,categoryName:"Status",className:"Status"!==o&&"pf-u-hidden"},i().createElement(m.ToolbarItem,null,i().createElement(m.Select,{variant:m.SelectVariant.checkbox,"aria-label":"Status",onToggle:Z,onSelect:function(e,t){L("status",e,t)},selections:t.status,isOpen:D,placeholderText:"Filter by status"},M.map((function(e){return i().createElement(m.SelectOption,{key:e.label,value:e.label},e.label)})))))))}$.propTypes={filters:J().shape({name:J().string.isRequired,region:J().string.isRequired,owner:J().string.isRequired,status:J().string.isRequired}),setFilters:J().func.isRequired};const ee=$;var te=n(15705);function ne(e){return Object.keys(e).filter((function(t){return e[t].length})).map((function(t){var n=e[t].map((function(e){var n,r,a=e;return"cloud_provider"===t?a=(0,te.xp)(e):"region"===t?a=(0,k.n9)(e):"status"===t&&(n=e,a=null==(r=M.find((function(e){return e.label===n})))?void 0:r.value),"".concat(t," = ").concat(a)})).join(" or ");return"(".concat(n,")")})).join(" and ")||""}var re=n(68025),ae=["name","cloud_provider","region","owner","status","created_at"],le={field:"name",direction:"asc"};const ie=function(){var e,t,n,v,E,g,h=(0,c.useNavigate)(),y=P().analyticsTrack,S=function(){var e=(0,l.useState)(1),t=(0,a.Z)(e,2),n=t[0],r=t[1],i=(0,l.useState)(20),c=(0,a.Z)(i,2),o=c[0],u=c[1];return{page:n,perPage:o,onSetPage:function(e,t){r(t)},onPerPageSelect:function(e,t){u(t)}}}(),O=S.page,Z=S.perPage,I=S.onSetPage,x=S.onPerPageSelect,L=function(e){var t=e.sortFields,n=e.defaultSortOption,r=(0,l.useState)(),i=(0,a.Z)(r,2),c=i[0],o=i[1],u=(null==c?void 0:c.field)||n.field,s=(null==c?void 0:c.direction)||n.direction,m=(0,l.useState)({}),p=(0,a.Z)(m,2),d=p[0],f=p[1];return(0,l.useEffect)((function(){var e=t.reduce((function(e,t,n){return e[t]=n,e}),{});f(e)}),[t]),{sortOption:{field:u,direction:s},getSortParams:function(e){var t=d[e];return{sortBy:{index:u?d[u]:void 0,direction:s,defaultDirection:"desc"},onSort:function(t,n,r){o({field:e,direction:r})},columnIndex:t}}}}({sortFields:ae,defaultSortOption:le}),j=L.sortOption,A=L.getSortParams,N=(0,l.useState)({}),q=(0,a.Z)(N,2),B=q[0],V=q[1],z=(0,b.useQuery)(["cloud_accounts"],(function(){return D()})).data,M=(null==z||null===(e=z.cloudAccounts)||void 0===e?void 0:e.map((function(e){return e.cloudAccountId})))||[],H=(v=(n={query:{page:O,size:Z,orderBy:"".concat(j.field," ").concat(j.direction),search:ne(B)},refetchInterval:1e4}).refetchInterval,(0,b.useQuery)(["instances",n],(function(){return T(n)}),{refetchInterval:v})),Q=H.data,W=H.isFetching,J=(E=(0,b.useQueryClient)(),(0,b.useMutation)(C,{onSuccess:function(){E.invalidateQueries("instances")}})),K=w(),X=(0,l.useState)(null),Y=(0,a.Z)(X,2),$=Y[0],ie=Y[1],ce=(0,l.useState)(null),oe=(0,a.Z)(ce,2),ue=oe[0],se=oe[1],me=(0,l.useState)(null),pe=(0,a.Z)(me,2),de=pe[0],fe=pe[1],ve=(null==Q?void 0:Q.items)||[],Ee=W&&!Q,ge=null!==(t=null==Q?void 0:Q.total)&&void 0!==t?t:0;function be(){y("start-create-instance-form"),ie({})}function he(){V({})}return(0,l.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appAction)||void 0===n||n.call(t,"instances-page")}),[]),g=0===ve.length&&0===Object.keys(B).length?i().createElement(m.EmptyState,null,i().createElement(m.EmptyStateIcon,{icon:d.ZP}),i().createElement(m.Title,{size:"lg",headingLevel:"h4"},"No ACS instances."),i().createElement(m.EmptyStateBody,null,"Create one to get started."),i().createElement(m.EmptyStatePrimary,null,i().createElement(m.Button,{variant:"primary",onClick:function(){return be()}},"Create ACS instance"))):i().createElement(i().Fragment,null,i().createElement(m.Toolbar,{clearAllFilters:he},i().createElement(m.ToolbarContent,null,i().createElement(ee,{filters:B,setFilters:V}),i().createElement(m.ToolbarItem,null,i().createElement(m.Button,{variant:"primary",onClick:function(){return be()}},"Create ACS instance")),0!==ve.length&&i().createElement(m.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},i().createElement(m.Pagination,{itemCount:ge,perPage:Z,page:O,onSetPage:I,widgetId:"acs-instances-top-pagination",onPerPageSelect:x,isCompact:!0})))),i().createElement(p.TableComposable,{"aria-label":"ACS instances table"},i().createElement(p.Thead,null,i().createElement(p.Tr,null,i().createElement(p.Th,{sort:A("name")},"Name"),i().createElement(p.Th,{sort:A("cloud_provider")},"Cloud provider"),i().createElement(p.Th,{sort:A("region")},"Region"),i().createElement(p.Th,{sort:A("owner")},"Owner"),i().createElement(p.Th,{sort:A("status")},"Status"),i().createElement(p.Th,{sort:A("created_at")},"Time created"),i().createElement(p.Th,null))),i().createElement(p.Tbody,null,Ee&&i().createElement(p.Tr,null,i().createElement(p.Td,{colSpan:8},i().createElement(m.Bullseye,null,i().createElement(m.Spinner,null)))),!Ee&&0===ve.length&&i().createElement(p.Tr,null,i().createElement(p.Td,{colSpan:8},i().createElement(m.Bullseye,null,i().createElement(m.EmptyState,{variant:m.EmptyStateVariant.small},i().createElement(m.EmptyStateIcon,{icon:f.ZP}),i().createElement(m.Title,{headingLevel:"h2",size:"lg"},"No results found"),i().createElement(m.EmptyStateBody,null,"Clear all filters and try again."),i().createElement(m.Button,{variant:"link",onClick:he},"Clear all filters"))))),!Ee&&0!==ve.length&&ve.map((function(e){var t=(0,re.n)("/instances/instance/".concat(e.id),re.d);return i().createElement(p.Tr,{key:e.name,onRowClick:function(t){"button"!==t.target.getAttribute("type")&&"ready"===e.status&&fe(e)},isRowSelected:(null==de?void 0:de.name)===(null==e?void 0:e.name)},i().createElement(p.Td,{dataLabel:"Name"},i().createElement(m.Button,{variant:"link",isInline:!0,isDisabled:"ready"!==e.status,component:function(e){return i().createElement(c.Link,(0,r.Z)({},e,{to:t}))}},e.name)),i().createElement(p.Td,{dataLabel:"Cloud provider"},(0,te.mt)(e.cloud_provider)),i().createElement(p.Td,{dataLabel:"Region"},(0,k.pP)(e.region)),i().createElement(p.Td,{dataLabel:"Owner"},e.owner),i().createElement(p.Td,{dataLabel:"Status"},i().createElement(U,{status:e.status})),i().createElement(p.Td,{dataLabel:"Time created"},(0,G.c)(e.created_at)),i().createElement(p.Td,{isActionCell:!0},i().createElement(p.ActionsColumn,{items:[{title:"Details",onClick:function(e){e.preventDefault(),h(t)}},{title:"Delete",onClick:function(t){t.preventDefault(),se(e)}}]})))})))),0!==ve.length&&i().createElement(m.Toolbar,null,i().createElement(m.ToolbarContent,null,i().createElement(m.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},i().createElement(m.Pagination,{itemCount:ge,perPage:Z,page:O,onSetPage:I,widgetId:"acs-instances-bottom-pagination",onPerPageSelect:x}))))),i().createElement(F,{isExpanded:!!de,instance:de,onClose:function(){fe(null)}},i().createElement(u.Z,null,i().createElement(s.Z,{title:"ACS Instances"})),i().createElement(o.ZP,null,i().createElement(m.Card,null,g),i().createElement(R,{isOpen:!!$,onClose:function(){ie(null)},onRequestCreate:function(e){return J.mutateAsync({region:e.region,cloud_provider:e.cloud_provider,name:e.name,multi_az:"multi"===e.availabilityZones,cloud_account_id:e.cloud_account_id}).catch((function(e){return e}))},cloudAccountIds:M}),i().createElement(_,{instance:ue,isOpen:!!ue,onClose:function(){se(null)},onRequestDelete:function(e){return K.mutateAsync(e).catch((function(e){return e}))}})))}},22512:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r,a,l=n(4942),i=n(15861),c=n(87757),o=n.n(c),u=n(9669),s=n.n(u),m=n(34155);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f,v=null!==(r=m)&&void 0!==m&&null!==(a=r.env)&&void 0!==a&&a.PROD?"https://api.openshift.com":"https://api.stage.openshift.com";const E=((f=s().create()).interceptors.request.use(function(){var e=(0,i.Z)(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,insights.chrome.auth.getToken();case 4:return n=e.sent,r=t.baseURL||v,a=d(d({},t),{},{url:"".concat(r).concat(t.url)}),n&&(a.headers=d(d({},a.headers),{},{Authorization:"Bearer ".concat(n)})),delete a.customHost,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f)},15705:(e,t,n)=>{"use strict";n.d(t,{mt:()=>i,xp:()=>c});var r={aws:"Amazon Web Services"},a={aws:"AWS"},l=Object.keys(r).map((function(e){return{value:e,label:r[e]}}));function i(e){return a[e]?"Hosted by Red Hat (on ".concat(a[e],")"):"Hosted by Red Hat"}function c(e){var t=l.find((function(t){return t.label===e}));return null==t?void 0:t.value}},15558:(e,t,n)=>{"use strict";n.d(t,{F:()=>c,c:()=>i});var r=n(53651),a=n(12902),l=n(5480);function i(e){return(0,r.Z)((0,a.Z)(e),new Date,{addSuffix:!0})}function c(e){return(0,l.Z)((0,a.Z)(e),"MM/dd/yyyy | h:mm:ss a")}},60509:(e,t,n)=>{"use strict";n.d(t,{Jo:()=>a,n9:()=>i,pP:()=>l});var r={"us-east-1":"US-East, N. Virginia","eu-west-1":"Europe, Ireland"},a=Object.keys(r).map((function(e){return{value:e,label:r[e]}}));function l(e){return r[e]}function i(e){var t=a.find((function(t){return t.label===e}));return null==t?void 0:t.value}},24654:()=>{}}]);
//# sourceMappingURL=../sourcemaps/InstancesPage.6dd05b3e3476e6da7cdc39ecfeb124b0.js.map