(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{275:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(291)),o={id:"create-person-with-user-account-input",title:"CreatePersonWithUserAccountInput"},c={unversionedId:"api/inputs/create-person-with-user-account-input",id:"api/inputs/create-person-with-user-account-input",isDocsHomePage:!1,title:"CreatePersonWithUserAccountInput",description:"<span",source:"@site/docs/api/inputs/create-person-with-user-account-input.mdx",slug:"/api/inputs/create-person-with-user-account-input",permalink:"/core-docs-bootstrap/docs/api/inputs/create-person-with-user-account-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/inputs/create-person-with-user-account-input.mdx",version:"current",sidebar:"Schema",previous:{title:"CreatePBCycleInvitationTokenInput",permalink:"/core-docs-bootstrap/docs/api/inputs/create-pb-cycle-invitation-token-input"},next:{title:"CreatePhaseInput",permalink:"/core-docs-bootstrap/docs/api/inputs/create-phase-input"}},p=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:p,Tag:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Autogenerated input type of CreatePersonWithUserAccount"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type CreatePersonWithUserAccountInput {\n  givenName: String!\n  surname: String!\n  email: Email!\n  password: String!\n  clientMutationId: String\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"givenname-string"},Object(i.b)("inlineCode",{parentName:"h4"},"givenName")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h4",{id:"surname-string"},Object(i.b)("inlineCode",{parentName:"h4"},"surname")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h4",{id:"email-email"},Object(i.b)("inlineCode",{parentName:"h4"},"email")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/email"},Object(i.b)("inlineCode",{parentName:"a"},"Email!")),")"),Object(i.b)("h4",{id:"password-string"},Object(i.b)("inlineCode",{parentName:"h4"},"password")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h4",{id:"clientmutationid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"A unique identifier for the client performing the mutation."))}l.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);