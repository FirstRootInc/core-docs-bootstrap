(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{177:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"Tag",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),o=(t(0),t(286));const a={id:"users",title:"users"},c={unversionedId:"api/queries/users",id:"api/queries/users",isDocsHomePage:!1,title:"users",description:"<span",source:"@site/docs/api/queries/users.mdx",slug:"/api/queries/users",permalink:"/core-docs-bootstrap/docs/api/queries/users",version:"current",sidebar:"Schema",previous:{title:"user",permalink:"/core-docs-bootstrap/docs/api/queries/user"},next:{title:"verifyAuthTokenStatus",permalink:"/core-docs-bootstrap/docs/api/queries/verify-auth-token-status"}},i=[{value:"Type",id:"type",children:[]}],u=({children:e,color:r})=>Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),s={toc:i,Tag:u};function p({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Find all users"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"users: [User!]\n\n")),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"user"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/user"},Object(o.b)("inlineCode",{parentName:"a"},"User"))))}p.isMDXComponent=!0},286:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,b=l["".concat(c,".").concat(d)]||l[d]||f[d]||a;return t?o.a.createElement(b,i(i({ref:r},s),{},{components:t})):o.a.createElement(b,i({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);