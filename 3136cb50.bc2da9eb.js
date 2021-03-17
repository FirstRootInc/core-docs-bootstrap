(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"Tag",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(287)),o={id:"verification-token",title:"VerificationToken"},c={unversionedId:"api/objects/verification-token",id:"api/objects/verification-token",isDocsHomePage:!1,title:"VerificationToken",description:"<span",source:"@site/docs/api/objects/verification-token.mdx",slug:"/api/objects/verification-token",permalink:"/core-docs-bootstrap/docs/api/objects/verification-token",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/verification-token.mdx",version:"current",sidebar:"Schema",previous:{title:"User",permalink:"/core-docs-bootstrap/docs/api/objects/user"},next:{title:"VerificationTokenStatus",permalink:"/core-docs-bootstrap/docs/api/objects/verification-token-status"}},b=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(r.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:b,Tag:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"No description"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"type VerificationToken {\n  category: String!\n  createdAt: ISO8601DateTime!\n  id: ID!\n  singleUse: Boolean!\n  token: String!\n  updatedAt: ISO8601DateTime!\n  usedAt: ISO8601DateTime\n  validFrom: ISO8601DateTime\n  validUntil: ISO8601DateTime\n  verifiableId: ID!\n  verifiableType: String!\n}\n")),Object(r.b)("h3",{id:"fields"},"Fields"),Object(r.b)("h4",{id:"category-string"},Object(r.b)("inlineCode",{parentName:"h4"},"category")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(r.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(r.b)("p",null,"Category for the verification token."),Object(r.b)("h4",{id:"createdat-iso8601datetime"},Object(r.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(r.b)("inlineCode",{parentName:"a"},"ISO8601DateTime!")),")"),Object(r.b)("h4",{id:"id-id"},Object(r.b)("inlineCode",{parentName:"h4"},"id")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(r.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(r.b)("h4",{id:"singleuse-boolean"},Object(r.b)("inlineCode",{parentName:"h4"},"singleUse")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/boolean"},Object(r.b)("inlineCode",{parentName:"a"},"Boolean!")),")"),Object(r.b)("p",null,"Indicates if this verification token has been created to be uses only once."),Object(r.b)("h4",{id:"token-string"},Object(r.b)("inlineCode",{parentName:"h4"},"token")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(r.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(r.b)("p",null,"The code or ",Object(r.b)("em",{parentName:"p"},"token")," that will be used to verify the action."),Object(r.b)("h4",{id:"updatedat-iso8601datetime"},Object(r.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(r.b)("inlineCode",{parentName:"a"},"ISO8601DateTime!")),")"),Object(r.b)("h4",{id:"usedat-iso8601datetime"},Object(r.b)("inlineCode",{parentName:"h4"},"usedAt")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(r.b)("inlineCode",{parentName:"a"},"ISO8601DateTime")),")"),Object(r.b)("h4",{id:"validfrom-iso8601datetime"},Object(r.b)("inlineCode",{parentName:"h4"},"validFrom")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(r.b)("inlineCode",{parentName:"a"},"ISO8601DateTime")),")"),Object(r.b)("p",null,"The initial value in which this verification token starts to be valid."),Object(r.b)("h4",{id:"validuntil-iso8601datetime"},Object(r.b)("inlineCode",{parentName:"h4"},"validUntil")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(r.b)("inlineCode",{parentName:"a"},"ISO8601DateTime")),")"),Object(r.b)("p",null,"The final date and time in which this token still be valid."),Object(r.b)("h4",{id:"verifiableid-id"},Object(r.b)("inlineCode",{parentName:"h4"},"verifiableId")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(r.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(r.b)("p",null,"The related entity ID. This is the entity that uses the token to verify a certain action"),Object(r.b)("h4",{id:"verifiabletype-string"},Object(r.b)("inlineCode",{parentName:"h4"},"verifiableType")," (",Object(r.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(r.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(r.b)("p",null,"The related entity type."))}d.isMDXComponent=!0},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?i.a.createElement(u,c(c({ref:t},s),{},{components:n})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);