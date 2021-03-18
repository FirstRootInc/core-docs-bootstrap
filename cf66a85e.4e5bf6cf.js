(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(286));const i={id:"update-category-input",title:"UpdateCategoryInput"},o={unversionedId:"api/inputs/update-category-input",id:"api/inputs/update-category-input",isDocsHomePage:!1,title:"UpdateCategoryInput",description:"<span",source:"@site/docs/api/inputs/update-category-input.mdx",slug:"/api/inputs/update-category-input",permalink:"/core-docs-bootstrap/docs/api/inputs/update-category-input",version:"current",sidebar:"Schema",previous:{title:"SubmitVotingWinnersInput",permalink:"/core-docs-bootstrap/docs/api/inputs/submit-voting-winners-input"},next:{title:"UpdateProposalInput",permalink:"/core-docs-bootstrap/docs/api/inputs/update-proposal-input"}},c=[{value:"Fields",id:"fields",children:[]}],p=({children:e,color:t})=>Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),u={toc:c,Tag:p};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Autogenerated input type of UpdateCategory"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type UpdateCategoryInput {\n  categoryId: ID!\n  title: String\n  color: String\n  icon: String\n  clientMutationId: String\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"categoryid-id"},Object(a.b)("inlineCode",{parentName:"h4"},"categoryId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(a.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(a.b)("h4",{id:"title-string"},Object(a.b)("inlineCode",{parentName:"h4"},"title")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("h4",{id:"color-string"},Object(a.b)("inlineCode",{parentName:"h4"},"color")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("h4",{id:"icon-string"},Object(a.b)("inlineCode",{parentName:"h4"},"icon")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("h4",{id:"clientmutationid-string"},Object(a.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String")),")"),Object(a.b)("p",null,"A unique identifier for the client performing the mutation."))}l.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);