(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{111:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,b=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=(r(0),r(111));const a={id:"introduction",title:"Introduction"},i={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"The FirstRoot API is a GraphQL API. The GraphQL query language provides a complete and understandable description of the data in our API.",source:"@site/docs/introduction.md",slug:"/introduction",permalink:"/core-docs-bootstrap/docs/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/introduction.md",version:"current",sidebar:"sidebar",previous:{title:"Get Started",permalink:"/core-docs-bootstrap/docs/"},next:{title:"Public schema/References",permalink:"/core-docs-bootstrap/docs/references"}},c=[],s={toc:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The FirstRoot API is a GraphQL API. The ",Object(o.b)("a",{parentName:"p",href:"https://graphql.org/learn/"},"GraphQL query language")," provides a complete and understandable description of the data in our API. "),Object(o.b)("p",null,"GraphQL APIs are organized in terms of types and fields, so all the data is accessed through a single endpoint.\nA GraphQL call's structure is similar to the JSON data it returns. Nested fields let you query for specific data your app requires in a single request."),Object(o.b)("p",null,"Using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/graphql/graphql-playground"},"GraphQL Playground")," you can easily view the ",Object(o.b)("a",{parentName:"p",href:"/core-docs-bootstrap/docs/references"},"FirstRoot API schema")," including the reference documentation of the queries and mutations."),Object(o.b)("p",null,"We linked more great ressources to get familiar with and learn GraphQL ",Object(o.b)("a",{parentName:"p",href:"/core-docs-bootstrap/docs/graphql"},"here"),"."))}u.isMDXComponent=!0}}]);