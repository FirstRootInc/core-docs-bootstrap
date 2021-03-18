(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{142:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"Tag",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(291)),c={id:"id",title:"ID"},i={unversionedId:"api/scalars/id",id:"api/scalars/id",isDocsHomePage:!1,title:"ID",description:"<span",source:"@site/docs/api/scalars/id.mdx",slug:"/api/scalars/id",permalink:"/core-docs-bootstrap/docs/api/scalars/id",version:"current",sidebar:"Schema",previous:{title:"Email",permalink:"/core-docs-bootstrap/docs/api/scalars/email"},next:{title:"Int",permalink:"/core-docs-bootstrap/docs/api/scalars/int"}},p=[],s=function(e){var r=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},l={toc:p,Tag:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ID")," scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as ",Object(o.b)("inlineCode",{parentName:"p"},'"4"'),") or integer (such as ",Object(o.b)("inlineCode",{parentName:"p"},"4"),") input value will be accepted as an ID."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"scalar ID\n")))}u.isMDXComponent=!0},291:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=n,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?a.a.createElement(b,i(i({ref:r},s),{},{components:t})):a.a.createElement(b,i({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);