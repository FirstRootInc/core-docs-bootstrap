(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),i=(n(0),n(286));const a={id:"sign-in-user-input",title:"SignInUserInput"},o={unversionedId:"api/inputs/sign-in-user-input",id:"api/inputs/sign-in-user-input",isDocsHomePage:!1,title:"SignInUserInput",description:"<span",source:"@site/docs/api/inputs/sign-in-user-input.mdx",slug:"/api/inputs/sign-in-user-input",permalink:"/core-docs-bootstrap/api/inputs/sign-in-user-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/inputs/sign-in-user-input.mdx",version:"current",sidebar:"IntroductionSidebar",previous:{title:"SetupPBCycleParticipantInput",permalink:"/core-docs-bootstrap/api/inputs/setup-pb-cycle-participant-input"},next:{title:"SubmitPartyBallotVoteInput",permalink:"/core-docs-bootstrap/api/inputs/submit-party-ballot-vote-input"}},c=[{value:"Fields",id:"fields",children:[]}],p=({children:e,color:t})=>Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),u={toc:c,Tag:p};function s({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Autogenerated input type of SignInUser"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type SignInUserInput {\n  email: Email!\n  password: String!\n  clientMutationId: String\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"email-email"},Object(i.b)("inlineCode",{parentName:"h4"},"email")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/email"},Object(i.b)("inlineCode",{parentName:"a"},"Email!")),")"),Object(i.b)("h4",{id:"password-string"},Object(i.b)("inlineCode",{parentName:"h4"},"password")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h4",{id:"clientmutationid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"A unique identifier for the client performing the mutation."))}s.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,f=l["".concat(o,".").concat(d)]||l[d]||b[d]||a;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);