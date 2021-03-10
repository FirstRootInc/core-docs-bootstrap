(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"Tag",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(286)),i={id:"verify-auth-token-status",title:"verifyAuthTokenStatus"},c={unversionedId:"api/queries/verify-auth-token-status",id:"api/queries/verify-auth-token-status",isDocsHomePage:!1,title:"verifyAuthTokenStatus",description:"<span",source:"@site/docs/api/queries/verify-auth-token-status.mdx",slug:"/api/queries/verify-auth-token-status",permalink:"/core-docs-bootstrap/api/queries/verify-auth-token-status",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/queries/verify-auth-token-status.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"users",permalink:"/core-docs-bootstrap/api/queries/users"},next:{title:"acceptPbInvitation",permalink:"/core-docs-bootstrap/api/mutations/accept-pb-invitation"}},u=[{value:"Type",id:"type",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:u,Tag:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Checks the validity of authorization token"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"verifyAuthTokenStatus: TokenStatus!\n\n")),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"tokenstatus"},Object(a.b)("a",{parentName:"h4",href:"/docs/api/objects/token-status"},Object(a.b)("inlineCode",{parentName:"a"},"TokenStatus"))))}l.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,d=l["".concat(i,".").concat(b)]||l[b]||f[b]||a;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);