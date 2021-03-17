(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"Tag",(function(){return i})),r.d(t,"default",(function(){return l}));var o=r(3),n=(r(0),r(287));const a={id:"forgot-password-process-start-payload",title:"ForgotPasswordProcessStartPayload"},s={unversionedId:"api/objects/forgot-password-process-start-payload",id:"api/objects/forgot-password-process-start-payload",isDocsHomePage:!1,title:"ForgotPasswordProcessStartPayload",description:"<span",source:"@site/docs/api/objects/forgot-password-process-start-payload.mdx",slug:"/api/objects/forgot-password-process-start-payload",permalink:"/core-docs-bootstrap/docs/api/objects/forgot-password-process-start-payload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/forgot-password-process-start-payload.mdx",version:"current",sidebar:"Schema",previous:{title:"ForgotPasswordProcessCompletePayload",permalink:"/core-docs-bootstrap/docs/api/objects/forgot-password-process-complete-payload"},next:{title:"ForgotTokenStatus",permalink:"/core-docs-bootstrap/docs/api/objects/forgot-token-status"}},c=[{value:"Fields",id:"fields",children:[]}],i=({children:e,color:t})=>Object(n.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),p={toc:c,Tag:i};function l({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Autogenerated return type of ForgotPasswordProcessStart"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-graphql"},"type ForgotPasswordProcessStartPayload {\n  clientMutationId: String\n  message: String\n  status: String!\n}\n")),Object(n.b)("h3",{id:"fields"},"Fields"),Object(n.b)("h4",{id:"clientmutationid-string"},Object(n.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(n.b)("inlineCode",{parentName:"a"},"String")),")"),Object(n.b)("p",null,"A unique identifier for the client performing the mutation."),Object(n.b)("h4",{id:"message-string"},Object(n.b)("inlineCode",{parentName:"h4"},"message")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(n.b)("inlineCode",{parentName:"a"},"String")),")"),Object(n.b)("h4",{id:"status-string"},Object(n.b)("inlineCode",{parentName:"h4"},"status")," (",Object(n.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(n.b)("inlineCode",{parentName:"a"},"String!")),")"))}l.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),b=o,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return r?n.a.createElement(f,c(c({ref:t},p),{},{components:r})):n.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);