(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{239:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"Tag",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(291)),o={id:"party",title:"Party"},c={unversionedId:"api/objects/party",id:"api/objects/party",isDocsHomePage:!1,title:"Party",description:"<span",source:"@site/docs/api/objects/party.mdx",slug:"/api/objects/party",permalink:"/core-docs-bootstrap/docs/api/objects/party",version:"current",sidebar:"Schema",previous:{title:"JoinPBCycleWithExistingAccountPayload",permalink:"/core-docs-bootstrap/docs/api/objects/join-pb-cycle-with-existing-account-payload"},next:{title:"PartyBallot",permalink:"/core-docs-bootstrap/docs/api/objects/party-ballot"}},p=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:p,Tag:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Party {\n  createdAt: ISO8601DateTime!\n  details: JSON\n  id: ID!\n  relationships: [String!]\n  type: String\n  updatedAt: ISO8601DateTime!\n  user: User\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"createdat-iso8601datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601DateTime!")),")"),Object(i.b)("h4",{id:"details-json"},Object(i.b)("inlineCode",{parentName:"h4"},"details")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/json"},Object(i.b)("inlineCode",{parentName:"a"},"JSON")),")"),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"relationships-string"},Object(i.b)("inlineCode",{parentName:"h4"},"relationships")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"[String!]")),")"),Object(i.b)("h4",{id:"type-string"},Object(i.b)("inlineCode",{parentName:"h4"},"type")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("h4",{id:"updatedat-iso8601datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601DateTime!")),")"),Object(i.b)("h4",{id:"user-user"},Object(i.b)("inlineCode",{parentName:"h4"},"user")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/objects/user"},Object(i.b)("inlineCode",{parentName:"a"},"User")),")"))}d.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=b(r),u=n,m=d["".concat(o,".").concat(u)]||d[u]||l[u]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);