(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{266:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"Tag",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(3),a=(t(0),t(291));const o={id:"category",title:"category"},c={unversionedId:"api/queries/category",id:"api/queries/category",isDocsHomePage:!1,title:"category",description:"<span",source:"@site/docs/api/queries/category.mdx",slug:"/api/queries/category",permalink:"/core-docs-bootstrap/docs/api/queries/category",version:"current",sidebar:"Schema",previous:{title:"categories",permalink:"/core-docs-bootstrap/docs/api/queries/categories"},next:{title:"currentPhase",permalink:"/core-docs-bootstrap/docs/api/queries/current-phase"}},i=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:e,color:r})=>Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),u={toc:i,Tag:p};function s({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Find a category by UUID"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"category(\n  id: ID!\n): Category!\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"id-id"},Object(a.b)("inlineCode",{parentName:"h4"},"id")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.b)("p",null,"Category UUID"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"category"},Object(a.b)("a",{parentName:"h4",href:"/docs/api/objects/category"},Object(a.b)("inlineCode",{parentName:"a"},"Category"))))}s.isMDXComponent=!0},291:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),b=n,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return t?a.a.createElement(f,i(i({ref:r},u),{},{components:t})):a.a.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);