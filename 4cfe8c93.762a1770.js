(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{125:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return i})),t.d(r,"Tag",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(291)),c={id:"proposals-reacted",title:"proposalsReacted"},p={unversionedId:"api/queries/proposals-reacted",id:"api/queries/proposals-reacted",isDocsHomePage:!1,title:"proposalsReacted",description:"<span",source:"@site/docs/api/queries/proposals-reacted.mdx",slug:"/api/queries/proposals-reacted",permalink:"/core-docs-bootstrap/docs/api/queries/proposals-reacted",version:"current",sidebar:"Schema",previous:{title:"proposals",permalink:"/core-docs-bootstrap/docs/api/queries/proposals"},next:{title:"signedProposalPhotoUrl",permalink:"/core-docs-bootstrap/docs/api/queries/signed-proposal-photo-url"}},i=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s=function(e){var r=e.children,t=e.color;return Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},l={toc:i,Tag:s};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Get all proposals current user has reacted"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"proposalsReacted(\n  pbCycleId: ID!\n): [Proposal!]\n\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"pbcycleid-id"},Object(a.b)("inlineCode",{parentName:"h4"},"pbCycleId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("h4",{id:"proposal"},Object(a.b)("a",{parentName:"h4",href:"/docs/api/objects/proposal"},Object(a.b)("inlineCode",{parentName:"a"},"Proposal"))),Object(a.b)("p",null,"The proposal type is a widely used type in Firstroot GraphQL implementation and it is included in several queries and mutations."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Access level:")," ",Object(a.b)("inlineCode",{parentName:"p"},"public"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"Note"),": anonymous access to some fields is restricted.")))}u.isMDXComponent=!0},291:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(m,p(p({ref:r},s),{},{components:t})):o.a.createElement(m,p({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);