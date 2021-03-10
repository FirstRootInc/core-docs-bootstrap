(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{269:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"Tag",(function(){return l})),r.d(t,"default",(function(){return d}));var a=r(3),n=(r(0),r(286));const o={id:"create-category-payload",title:"CreateCategoryPayload"},c={unversionedId:"api/objects/create-category-payload",id:"api/objects/create-category-payload",isDocsHomePage:!1,title:"CreateCategoryPayload",description:"<span",source:"@site/docs/api/objects/create-category-payload.mdx",slug:"/api/objects/create-category-payload",permalink:"/core-docs-bootstrap/api/objects/create-category-payload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/create-category-payload.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"CreateBallotPayload",permalink:"/core-docs-bootstrap/api/objects/create-ballot-payload"},next:{title:"CreatePBCycleInvitationTokenPayload",permalink:"/core-docs-bootstrap/api/objects/create-pb-cycle-invitation-token-payload"}},i=[{value:"Fields",id:"fields",children:[]}],l=({children:e,color:t})=>Object(n.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:i,Tag:l};function d({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Autogenerated return type of CreateCategory"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-graphql"},"type CreateCategoryPayload {\n  category: Category!\n  categoryId: ID!\n  clientMutationId: String\n}\n")),Object(n.b)("h3",{id:"fields"},"Fields"),Object(n.b)("h4",{id:"category-category"},Object(n.b)("inlineCode",{parentName:"h4"},"category")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/objects/category"},Object(n.b)("inlineCode",{parentName:"a"},"Category!")),")"),Object(n.b)("h4",{id:"categoryid-id"},Object(n.b)("inlineCode",{parentName:"h4"},"categoryId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(n.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(n.b)("h4",{id:"clientmutationid-string"},Object(n.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(n.b)("inlineCode",{parentName:"a"},"String")),")"),Object(n.b)("p",null,"A unique identifier for the client performing the mutation."))}d.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),d=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),s=a,y=u["".concat(c,".").concat(s)]||u[s]||b[s]||o;return r?n.a.createElement(y,i(i({ref:t},p),{},{components:r})):n.a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);