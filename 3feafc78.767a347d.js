(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{113:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return c})),t.d(r,"Tag",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(291)),i={id:"parties",title:"parties"},p={unversionedId:"api/queries/parties",id:"api/queries/parties",isDocsHomePage:!1,title:"parties",description:"<span",source:"@site/docs/api/queries/parties.mdx",slug:"/api/queries/parties",permalink:"/core-docs-bootstrap/docs/api/queries/parties",version:"current",sidebar:"Schema",previous:{title:"myProposals",permalink:"/core-docs-bootstrap/docs/api/queries/my-proposals"},next:{title:"party",permalink:"/core-docs-bootstrap/docs/api/queries/party"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=function(e){var r=e.children,t=e.color;return Object(o.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},u={toc:c,Tag:s};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Find parties by type"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"parties(\n  type: PartyTypesEnum\n): [Party!]!\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"type-partytypesenum"},Object(o.b)("inlineCode",{parentName:"h4"},"type")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/enums/party-types-enum"},Object(o.b)("inlineCode",{parentName:"a"},"PartyTypesEnum")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"party"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/party"},Object(o.b)("inlineCode",{parentName:"a"},"Party"))))}l.isMDXComponent=!0},291:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return y}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(t),d=n,y=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return t?a.a.createElement(y,p(p({ref:r},s),{},{components:t})):a.a.createElement(y,p({ref:r},s))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);