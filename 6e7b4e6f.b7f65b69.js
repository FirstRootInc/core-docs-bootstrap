(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=(n(0),n(291));const o={id:"create-pb-cycle-invitation-token-payload",title:"CreatePBCycleInvitationTokenPayload"},c={unversionedId:"api/objects/create-pb-cycle-invitation-token-payload",id:"api/objects/create-pb-cycle-invitation-token-payload",isDocsHomePage:!1,title:"CreatePBCycleInvitationTokenPayload",description:"<span",source:"@site/docs/api/objects/create-pb-cycle-invitation-token-payload.mdx",slug:"/api/objects/create-pb-cycle-invitation-token-payload",permalink:"/core-docs-bootstrap/docs/api/objects/create-pb-cycle-invitation-token-payload",version:"current",sidebar:"Schema",previous:{title:"CreateCategoryPayload",permalink:"/core-docs-bootstrap/docs/api/objects/create-category-payload"},next:{title:"CreatePBCyclePayload",permalink:"/core-docs-bootstrap/docs/api/objects/create-pb-cycle-payload"}},i=[{value:"Fields",id:"fields",children:[]}],l=({children:e,color:t})=>Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:i,Tag:l};function d({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Autogenerated return type of CreatePBCycleInvitationToken"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type CreatePBCycleInvitationTokenPayload {\n  clientMutationId: String\n  pbCycleId: ID!\n  token: String!\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"clientmutationid-string"},Object(a.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("p",null,"A unique identifier for the client performing the mutation."),Object(a.b)("h4",{id:"pbcycleid-id"},Object(a.b)("inlineCode",{parentName:"h4"},"pbCycleId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.b)("h4",{id:"token-string"},Object(a.b)("inlineCode",{parentName:"h4"},"token")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"))}d.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=r,y=b["".concat(c,".").concat(u)]||b[u]||s[u]||o;return n?a.a.createElement(y,i(i({ref:t},p),{},{components:n})):a.a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);