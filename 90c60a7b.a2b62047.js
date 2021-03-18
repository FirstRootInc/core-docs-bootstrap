(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{188:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"Tag",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),o=(t(0),t(291));const a={id:"my-proposals",title:"myProposals"},c={unversionedId:"api/queries/my-proposals",id:"api/queries/my-proposals",isDocsHomePage:!1,title:"myProposals",description:"<span",source:"@site/docs/api/queries/my-proposals.mdx",slug:"/api/queries/my-proposals",permalink:"/core-docs-bootstrap/docs/api/queries/my-proposals",version:"current",sidebar:"Schema",previous:{title:"myPbCycles",permalink:"/core-docs-bootstrap/docs/api/queries/my-pb-cycles"},next:{title:"parties",permalink:"/core-docs-bootstrap/docs/api/queries/parties"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],i=({children:e,color:r})=>Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),s={toc:p,Tag:i};function l({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Find proposals that belong to a user"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"myProposals(\n  pbCycleId: ID = 0\n): [Proposal!]\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"pbcycleid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"pbCycleId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"proposal"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/proposal"},Object(o.b)("inlineCode",{parentName:"a"},"Proposal"))),Object(o.b)("p",null,"The proposal type is a widely used type in Firstroot GraphQL implementation and it is included in several queries and mutations."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Access level:")," ",Object(o.b)("inlineCode",{parentName:"p"},"public"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Note"),": anonymous access to some fields is restricted.")))}l.isMDXComponent=!0},291:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(m,p(p({ref:r},s),{},{components:t})):o.a.createElement(m,p({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);