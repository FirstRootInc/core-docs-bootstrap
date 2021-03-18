(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{198:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"Tag",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(3),a=(r(0),r(286));const o={id:"update-category",title:"updateCategory"},c={unversionedId:"api/mutations/update-category",id:"api/mutations/update-category",isDocsHomePage:!1,title:"updateCategory",description:"<span",source:"@site/docs/api/mutations/update-category.mdx",slug:"/api/mutations/update-category",permalink:"/core-docs-bootstrap/docs/api/mutations/update-category",version:"current",sidebar:"Schema",previous:{title:"submitVotingWinners",permalink:"/core-docs-bootstrap/docs/api/mutations/submit-voting-winners"},next:{title:"updateProposal",permalink:"/core-docs-bootstrap/docs/api/mutations/update-proposal"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],i=({children:e,color:t})=>Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),u={toc:p,Tag:i};function d({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"updateCategory(\n  input: UpdateCategoryInput!\n): UpdateCategoryPayload\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"input-updatecategoryinput"},Object(a.b)("inlineCode",{parentName:"h4"},"input")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/inputs/update-category-input"},Object(a.b)("inlineCode",{parentName:"a"},"UpdateCategoryInput!")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"updatecategorypayload"},Object(a.b)("a",{parentName:"h4",href:"/docs/api/objects/update-category-payload"},Object(a.b)("inlineCode",{parentName:"a"},"UpdateCategoryPayload"))),Object(a.b)("p",null,"Autogenerated return type of UpdateCategory"))}d.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(r),b=n,y=l["".concat(c,".").concat(b)]||l[b]||s[b]||o;return r?a.a.createElement(y,p(p({ref:t},u),{},{components:r})):a.a.createElement(y,p({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);