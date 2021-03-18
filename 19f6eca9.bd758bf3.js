(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),b=r,d=l["".concat(i,".").concat(b)]||l[b]||m[b]||a;return t?o.a.createElement(d,c(c({ref:n},u),{},{components:t})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"Tag",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(291)),i={id:"token-types-enum",title:"TokenTypesEnum"},c={unversionedId:"api/enums/token-types-enum",id:"api/enums/token-types-enum",isDocsHomePage:!1,title:"TokenTypesEnum",description:"<span",source:"@site/docs/api/enums/token-types-enum.mdx",slug:"/api/enums/token-types-enum",permalink:"/core-docs-bootstrap/docs/api/enums/token-types-enum",version:"current",sidebar:"Schema",previous:{title:"TokenStatusesEnum",permalink:"/core-docs-bootstrap/docs/api/enums/token-statuses-enum"},next:{title:"AcceptPBInvitationInput",permalink:"/core-docs-bootstrap/docs/api/inputs/accept-pb-invitation-input"}},p=[{value:"Values",id:"values",children:[]}],u=function(e){var n=e.children,t=e.color;return Object(a.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},s={toc:p,Tag:u};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"enum TokenTypesEnum {\n  PARTICIPANT_INVITATION\n  ADMIN_INVITATION\n  ACCEPTED_INVITATION\n}\n")),Object(a.b)("h3",{id:"values"},"Values"),Object(a.b)("h4",{id:"participant_invitation"},Object(a.b)("inlineCode",{parentName:"h4"},"PARTICIPANT_INVITATION")),Object(a.b)("h4",{id:"admin_invitation"},Object(a.b)("inlineCode",{parentName:"h4"},"ADMIN_INVITATION")),Object(a.b)("h4",{id:"accepted_invitation"},Object(a.b)("inlineCode",{parentName:"h4"},"ACCEPTED_INVITATION")))}l.isMDXComponent=!0}}]);