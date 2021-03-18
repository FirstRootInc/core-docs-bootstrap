(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(291)),c={id:"join-pb-cycle-with-existing-account-input",title:"JoinPBCycleWithExistingAccountInput"},a={unversionedId:"api/inputs/join-pb-cycle-with-existing-account-input",id:"api/inputs/join-pb-cycle-with-existing-account-input",isDocsHomePage:!1,title:"JoinPBCycleWithExistingAccountInput",description:"<span",source:"@site/docs/api/inputs/join-pb-cycle-with-existing-account-input.mdx",slug:"/api/inputs/join-pb-cycle-with-existing-account-input",permalink:"/core-docs-bootstrap/docs/api/inputs/join-pb-cycle-with-existing-account-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/inputs/join-pb-cycle-with-existing-account-input.mdx",version:"current",sidebar:"Schema",previous:{title:"FundBallotProposalInput",permalink:"/core-docs-bootstrap/docs/api/inputs/fund-ballot-proposal-input"},next:{title:"ReactToPartyBallotProposalInput",permalink:"/core-docs-bootstrap/docs/api/inputs/react-to-party-ballot-proposal-input"}},p=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:p,Tag:u};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Autogenerated input type of JoinPBCycleWithExistingAccount"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type JoinPBCycleWithExistingAccountInput {\n  token: String!\n  password: String!\n  clientMutationId: String\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"token-string"},Object(o.b)("inlineCode",{parentName:"h4"},"token")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(o.b)("p",null,"Invitation token used to access the PB cycle."),Object(o.b)("h4",{id:"password-string"},Object(o.b)("inlineCode",{parentName:"h4"},"password")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(o.b)("p",null,"Password for the invitation token."),Object(o.b)("h4",{id:"clientmutationid-string"},Object(o.b)("inlineCode",{parentName:"h4"},"clientMutationId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String")),")"),Object(o.b)("p",null,"A unique identifier for the client performing the mutation."))}l.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,f=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return n?i.a.createElement(f,a(a({ref:t},u),{},{components:n})):i.a.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);