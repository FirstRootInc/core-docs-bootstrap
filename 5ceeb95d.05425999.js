(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(3),a=n(7),r=(n(0),n(286)),c={id:"pb-accepted-invitations-statistics",title:"PBAcceptedInvitationsStatistics"},o={unversionedId:"api/objects/pb-accepted-invitations-statistics",id:"api/objects/pb-accepted-invitations-statistics",isDocsHomePage:!1,title:"PBAcceptedInvitationsStatistics",description:"<span",source:"@site/docs/api/objects/pb-accepted-invitations-statistics.mdx",slug:"/api/objects/pb-accepted-invitations-statistics",permalink:"/core-docs-bootstrap/docs/api/objects/pb-accepted-invitations-statistics",version:"current",sidebar:"Schema",previous:{title:"PBAcceptedInvitation",permalink:"/core-docs-bootstrap/docs/api/objects/pb-accepted-invitation"},next:{title:"PBCycle",permalink:"/core-docs-bootstrap/docs/api/objects/pb-cycle"}},p=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(r.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:p,Tag:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"No description"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'type PBAcceptedInvitationsStatistics {\n  acceptings(filterBy: AcceptingFiltersEnum = "ALL"): [PBAcceptedInvitation!]\n  total: Int!\n  totalConfirmed: Int!\n  totalNotConfirmed: Int!\n}\n')),Object(r.b)("h3",{id:"fields"},"Fields"),Object(r.b)("h4",{id:"acceptings-pbacceptedinvitation"},Object(r.b)("inlineCode",{parentName:"h4"},"acceptings")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/objects/pb-accepted-invitation"},Object(r.b)("inlineCode",{parentName:"a"},"[PBAcceptedInvitation!]")),")"),Object(r.b)("p",null,"Retrieve information about accepted invitations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("h5",{parentName:"li",id:"filterby-acceptingfiltersenum"},Object(r.b)("inlineCode",{parentName:"h5"},"filterBy")," (",Object(r.b)("a",{parentName:"h5",href:"/docs/api/enums/accepting-filters-enum"},Object(r.b)("inlineCode",{parentName:"a"},"AcceptingFiltersEnum")),")"))),Object(r.b)("h4",{id:"total-int"},Object(r.b)("inlineCode",{parentName:"h4"},"total")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(r.b)("inlineCode",{parentName:"a"},"Int!")),")"),Object(r.b)("p",null,"Total number of accepted invitations"),Object(r.b)("h4",{id:"totalconfirmed-int"},Object(r.b)("inlineCode",{parentName:"h4"},"totalConfirmed")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(r.b)("inlineCode",{parentName:"a"},"Int!")),")"),Object(r.b)("p",null,"Total number of confirmed accounts after accepting the invitation"),Object(r.b)("h4",{id:"totalnotconfirmed-int"},Object(r.b)("inlineCode",{parentName:"h4"},"totalNotConfirmed")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(r.b)("inlineCode",{parentName:"a"},"Int!")),")"),Object(r.b)("p",null,"Total number of non confirmed accounts after accepting the invitation"))}l.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(n),u=i,f=l["".concat(c,".").concat(u)]||l[u]||d[u]||r;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);