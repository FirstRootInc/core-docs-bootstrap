(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(287)),i={id:"forgot-password-process-complete-input",title:"ForgotPasswordProcessCompleteInput"},s={unversionedId:"api/inputs/forgot-password-process-complete-input",id:"api/inputs/forgot-password-process-complete-input",isDocsHomePage:!1,title:"ForgotPasswordProcessCompleteInput",description:"<span",source:"@site/docs/api/inputs/forgot-password-process-complete-input.mdx",slug:"/api/inputs/forgot-password-process-complete-input",permalink:"/core-docs-bootstrap/docs/api/inputs/forgot-password-process-complete-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/inputs/forgot-password-process-complete-input.mdx",version:"current",sidebar:"Schema",previous:{title:"DeselectVotingResultInput",permalink:"/core-docs-bootstrap/docs/api/inputs/deselect-voting-result-input"},next:{title:"ForgotPasswordProcessStartInput",permalink:"/core-docs-bootstrap/docs/api/inputs/forgot-password-process-start-input"}},c=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:c,Tag:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Autogenerated input type of ForgotPasswordProcessComplete"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type ForgotPasswordProcessCompleteInput {\n  token: String!\n  newPassword: String!\n  clientMutationId: String\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"token-string"},Object(a.b)("inlineCode",{parentName:"h4"},"token")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("p",null,"Token sent to user via email."),Object(a.b)("h4",{id:"newpassword-string"},Object(a.b)("inlineCode",{parentName:"h4"},"newPassword")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("p",null,"The new password for user account."),Object(a.b)("h4",{id:"clientmutationid-string"},Object(a.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("p",null,"A unique identifier for the client performing the mutation."))}l.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return r?o.a.createElement(f,s(s({ref:t},p),{},{components:r})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);