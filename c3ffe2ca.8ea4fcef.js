(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(291)),c={id:"create-pb-cycle-input",title:"CreatePBCycleInput"},o={unversionedId:"api/inputs/create-pb-cycle-input",id:"api/inputs/create-pb-cycle-input",isDocsHomePage:!1,title:"CreatePBCycleInput",description:"<span",source:"@site/docs/api/inputs/create-pb-cycle-input.mdx",slug:"/api/inputs/create-pb-cycle-input",permalink:"/core-docs-bootstrap/docs/api/inputs/create-pb-cycle-input",version:"current",sidebar:"Schema",previous:{title:"CreateCategoryInput",permalink:"/core-docs-bootstrap/docs/api/inputs/create-category-input"},next:{title:"CreatePBCycleInvitationTokenInput",permalink:"/core-docs-bootstrap/docs/api/inputs/create-pb-cycle-invitation-token-input"}},p=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:p,Tag:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Autogenerated input type of CreatePBCycle"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type CreatePBCycleInput {\n  theme: String!\n  description: String\n  budget: Int!\n  startDate: ISO8601Date\n  endDate: ISO8601Date\n  clientMutationId: String\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"theme-string"},Object(i.b)("inlineCode",{parentName:"h4"},"theme")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h4",{id:"description-string"},Object(i.b)("inlineCode",{parentName:"h4"},"description")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"budget-int"},Object(i.b)("inlineCode",{parentName:"h4"},"budget")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int!")),")"),Object(i.b)("h4",{id:"startdate-iso8601date"},Object(i.b)("inlineCode",{parentName:"h4"},"startDate")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601Date")),")"),Object(i.b)("h4",{id:"enddate-iso8601date"},Object(i.b)("inlineCode",{parentName:"h4"},"endDate")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601Date")),")"),Object(i.b)("h4",{id:"clientmutationid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"A unique identifier for the client performing the mutation."))}b.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(c,".").concat(d)]||b[d]||s[d]||i;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);