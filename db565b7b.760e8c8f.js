(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{250:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"Tag",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),a=(t(0),t(287));const o={id:"decimal",title:"Decimal"},c={unversionedId:"api/scalars/decimal",id:"api/scalars/decimal",isDocsHomePage:!1,title:"Decimal",description:"<span",source:"@site/docs/api/scalars/decimal.mdx",slug:"/api/scalars/decimal",permalink:"/core-docs-bootstrap/docs/api/scalars/decimal",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/scalars/decimal.mdx",version:"current",sidebar:"Schema",previous:{title:"Boolean",permalink:"/core-docs-bootstrap/docs/api/scalars/boolean"},next:{title:"Email",permalink:"/core-docs-bootstrap/docs/api/scalars/email"}},i=[],l=({children:e,color:r})=>Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),s={toc:i,Tag:l};function p({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Decimal scalar accepts number with the format ",Object(a.b)("inlineCode",{parentName:"p"},"0.00")," and returns values in the same format but as a ",Object(a.b)("inlineCode",{parentName:"p"},"String"),", for instance ",Object(a.b)("inlineCode",{parentName:"p"},'"50.00"'),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"scalar Decimal\n")))}p.isMDXComponent=!0},287:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(f,i(i({ref:r},s),{},{components:t})):a.a.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);