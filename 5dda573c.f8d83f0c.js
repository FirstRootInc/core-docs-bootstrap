(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(286));const o={id:"update-proposal-input",title:"UpdateProposalInput"},i={unversionedId:"api/inputs/update-proposal-input",id:"api/inputs/update-proposal-input",isDocsHomePage:!1,title:"UpdateProposalInput",description:"<span",source:"@site/docs/api/inputs/update-proposal-input.mdx",slug:"/api/inputs/update-proposal-input",permalink:"/core-docs-bootstrap/api/inputs/update-proposal-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/inputs/update-proposal-input.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"UpdateCategoryInput",permalink:"/core-docs-bootstrap/api/inputs/update-category-input"},next:{title:"Boolean",permalink:"/core-docs-bootstrap/api/scalars/boolean"}},p=[{value:"Fields",id:"fields",children:[]}],c=({children:e,color:t})=>Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),l={toc:p,Tag:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Autogenerated input type of UpdateProposal"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type UpdateProposalInput {\n  proposalId: ID!\n  name: String\n  description: String\n  cost: Decimal\n  categoryId: ID!\n  videoUrl: VideoUrl\n  clientMutationId: String\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"proposalid-id"},Object(a.b)("inlineCode",{parentName:"h4"},"proposalId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.b)("p",null,"The proposal ID to be updated."),Object(a.b)("h4",{id:"name-string"},Object(a.b)("inlineCode",{parentName:"h4"},"name")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("p",null,"A descriptive name for proposal."),Object(a.b)("h4",{id:"description-string"},Object(a.b)("inlineCode",{parentName:"h4"},"description")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("p",null,"Full length description for proposal."),Object(a.b)("h4",{id:"cost-decimal"},Object(a.b)("inlineCode",{parentName:"h4"},"cost")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/decimal"},Object(a.b)("inlineCode",{parentName:"a"},"Decimal")),")"),Object(a.b)("p",null,"Estimated cost for proposal. This cost is stored as decimal."),Object(a.b)("h4",{id:"categoryid-id"},Object(a.b)("inlineCode",{parentName:"h4"},"categoryId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.b)("p",null,"The category which this proposal will be assigned to."),Object(a.b)("h4",{id:"videourl-videourl"},Object(a.b)("inlineCode",{parentName:"h4"},"videoUrl")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/video-url"},Object(a.b)("inlineCode",{parentName:"a"},"VideoUrl")),")"),Object(a.b)("p",null,"A video URL for proposal. The provided video must be a ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://youtube.com"},"YouTube"))," video URL otherwise the server will return an error."),Object(a.b)("h4",{id:"clientmutationid-string"},Object(a.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("p",null,"A unique identifier for the client performing the mutation."))}s.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,p(p({ref:t},l),{},{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);