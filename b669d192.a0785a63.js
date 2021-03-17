(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{215:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"Tag",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),c=(r(0),r(287));const a={id:"pb-cycle",title:"pbCycle"},o={unversionedId:"api/queries/pb-cycle",id:"api/queries/pb-cycle",isDocsHomePage:!1,title:"pbCycle",description:"<span",source:"@site/docs/api/queries/pb-cycle.mdx",slug:"/api/queries/pb-cycle",permalink:"/core-docs-bootstrap/docs/api/queries/pb-cycle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/queries/pb-cycle.mdx",version:"current",sidebar:"Schema",previous:{title:"partyBallot",permalink:"/core-docs-bootstrap/docs/api/queries/party-ballot"},next:{title:"pbCycleInvitation",permalink:"/core-docs-bootstrap/docs/api/queries/pb-cycle-invitation"}},i=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:e,color:t})=>Object(c.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:i,Tag:p};function u({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Find a PB cycle by UUID"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-graphql"},"pbCycle(\n  id: ID!\n): PBCycle!\n\n")),Object(c.b)("h3",{id:"arguments"},"Arguments"),Object(c.b)("h4",{id:"id-id"},Object(c.b)("inlineCode",{parentName:"h4"},"id")," (",Object(c.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(c.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(c.b)("h3",{id:"type"},"Type"),Object(c.b)("h4",{id:"pbcycle"},Object(c.b)("a",{parentName:"h4",href:"/docs/api/objects/pb-cycle"},Object(c.b)("inlineCode",{parentName:"a"},"PBCycle"))))}u.isMDXComponent=!0},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,y=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return r?c.a.createElement(y,i(i({ref:t},l),{},{components:r})):c.a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);