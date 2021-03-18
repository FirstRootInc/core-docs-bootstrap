(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{174:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"Tag",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),i=(t(0),t(286));const a={id:"sign-in-user",title:"signInUser"},o={unversionedId:"api/mutations/sign-in-user",id:"api/mutations/sign-in-user",isDocsHomePage:!1,title:"signInUser",description:"<span",source:"@site/docs/api/mutations/sign-in-user.mdx",slug:"/api/mutations/sign-in-user",permalink:"/core-docs-bootstrap/docs/api/mutations/sign-in-user",version:"current",sidebar:"Schema",previous:{title:"setupPbCycleParticipant",permalink:"/core-docs-bootstrap/docs/api/mutations/setup-pb-cycle-participant"},next:{title:"submitPartyBallotVote",permalink:"/core-docs-bootstrap/docs/api/mutations/submit-party-ballot-vote"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p=({children:e,color:n})=>Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e),s={toc:c,Tag:p};function u({components:e,...n}){return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"signInUser(\n  input: SignInUserInput!\n): SignInUserPayload\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"input-signinuserinput"},Object(i.b)("inlineCode",{parentName:"h4"},"input")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/inputs/sign-in-user-input"},Object(i.b)("inlineCode",{parentName:"a"},"SignInUserInput!")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"signinuserpayload"},Object(i.b)("a",{parentName:"h4",href:"/docs/api/objects/sign-in-user-payload"},Object(i.b)("inlineCode",{parentName:"a"},"SignInUserPayload"))),Object(i.b)("p",null,"Autogenerated return type of SignInUser"))}u.isMDXComponent=!0},286:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),d=r,f=l["".concat(o,".").concat(d)]||l[d]||b[d]||a;return t?i.a.createElement(f,c(c({ref:n},s),{},{components:t})):i.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);