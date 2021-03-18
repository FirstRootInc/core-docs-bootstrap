(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{223:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"Tag",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),o=(t(0),t(286));const a={id:"reactions-enum",title:"ReactionsEnum"},c={unversionedId:"api/enums/reactions-enum",id:"api/enums/reactions-enum",isDocsHomePage:!1,title:"ReactionsEnum",description:"<span",source:"@site/docs/api/enums/reactions-enum.mdx",slug:"/api/enums/reactions-enum",permalink:"/core-docs-bootstrap/docs/api/enums/reactions-enum",version:"current",sidebar:"Schema",previous:{title:"PhasesEnum",permalink:"/core-docs-bootstrap/docs/api/enums/phases-enum"},next:{title:"RelationshipsEnum",permalink:"/core-docs-bootstrap/docs/api/enums/relationships-enum"}},i=[{value:"Values",id:"values",children:[]}],u=({children:e,color:n})=>Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),s={toc:i,Tag:u};function p({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No description"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"enum ReactionsEnum {\n  LIKE\n  DISLIKE\n  NEUTRAL\n}\n")),Object(o.b)("h3",{id:"values"},"Values"),Object(o.b)("h4",{id:"like"},Object(o.b)("inlineCode",{parentName:"h4"},"LIKE")),Object(o.b)("h4",{id:"dislike"},Object(o.b)("inlineCode",{parentName:"h4"},"DISLIKE")),Object(o.b)("h4",{id:"neutral"},Object(o.b)("inlineCode",{parentName:"h4"},"NEUTRAL")))}p.isMDXComponent=!0},286:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,b=l["".concat(c,".").concat(d)]||l[d]||m[d]||a;return t?o.a.createElement(b,i(i({ref:n},s),{},{components:t})):o.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);