(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=(n(0),n(286));const a={id:"pb-inv",title:"PB Participants"},o={unversionedId:"pb-inv",id:"pb-inv",isDocsHomePage:!1,title:"PB Participants",description:"After successfully creating a PB Cycle, the next step would be to begin inviting participants to join. Participants can be invited whilst the Cycle is active.",source:"@site/docs/pb-inv.md",slug:"/pb-inv",permalink:"/core-docs-bootstrap/pb-inv",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/pb-inv.md",version:"current",sidebar:"CoreConceptSidebar",previous:{title:"PB Cycle",permalink:"/core-docs-bootstrap/pbcycle"}},c=[],p={toc:c};function s({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"After successfully creating a PB Cycle, the next step would be to begin inviting participants to join. Participants can be invited whilst the Cycle is active."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The invite process starts with creating a new token using the ",Object(i.b)("a",{parentName:"li",href:"api/mutations/create-pb-cycle-invitation-token"},Object(i.b)("inlineCode",{parentName:"a"},"createPbCycleInvitationToken")),", which can be integrated/added to a hyperlink to share with the participants of a PB Cycle."),Object(i.b)("li",{parentName:"ol"},"Invited participants will be able to accept the invite and join the PB cycle by either creating a new account (for new users) using the ",Object(i.b)("a",{parentName:"li",href:"api/mutations/create-person-with-user-account"},Object(i.b)("inlineCode",{parentName:"a"},"createPersonWithUserAccount"))," mutation or through the login form (for existing users) ",Object(i.b)("a",{parentName:"li",href:"api/mutations/sign-in-user"},Object(i.b)("inlineCode",{parentName:"a"},"signInUser")),"."),Object(i.b)("li",{parentName:"ol"},"If the invitation token expired you can refreshed it with ",Object(i.b)("a",{parentName:"li",href:"api/mutations/refresh-auth-token"},Object(i.b)("inlineCode",{parentName:"a"},"refreshAuthToken")),".")))}s.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||a;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);