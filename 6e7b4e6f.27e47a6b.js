(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(286)),c={id:"create-pb-cycle-invitation-token-payload",title:"CreatePBCycleInvitationTokenPayload"},i={unversionedId:"api/objects/create-pb-cycle-invitation-token-payload",id:"api/objects/create-pb-cycle-invitation-token-payload",isDocsHomePage:!1,title:"CreatePBCycleInvitationTokenPayload",description:"<span",source:"@site/docs/api/objects/create-pb-cycle-invitation-token-payload.mdx",slug:"/api/objects/create-pb-cycle-invitation-token-payload",permalink:"/core-docs-bootstrap/docs/api/objects/create-pb-cycle-invitation-token-payload",version:"current",sidebar:"Schema",previous:{title:"CreateCategoryPayload",permalink:"/core-docs-bootstrap/docs/api/objects/create-category-payload"},next:{title:"CreatePBCyclePayload",permalink:"/core-docs-bootstrap/docs/api/objects/create-pb-cycle-payload"}},l=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:l,Tag:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Autogenerated return type of CreatePBCycleInvitationToken"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type CreatePBCycleInvitationTokenPayload {\n  clientMutationId: String\n  pbCycleId: ID!\n  token: String!\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"clientmutationid-string"},Object(o.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String")),")"),Object(o.b)("p",null,"A unique identifier for the client performing the mutation."),Object(o.b)("h4",{id:"pbcycleid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"pbCycleId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("h4",{id:"token-string"},Object(o.b)("inlineCode",{parentName:"h4"},"token")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String!")),")"))}d.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),s=r,y=d["".concat(c,".").concat(s)]||d[s]||u[s]||o;return n?a.a.createElement(y,i(i({ref:t},p),{},{components:n})):a.a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);