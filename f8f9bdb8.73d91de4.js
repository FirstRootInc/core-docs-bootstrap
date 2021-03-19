(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(286)),c={id:"pb-accepted-invitation",title:"PBAcceptedInvitation"},o={unversionedId:"api/objects/pb-accepted-invitation",id:"api/objects/pb-accepted-invitation",isDocsHomePage:!1,title:"PBAcceptedInvitation",description:"<span",source:"@site/docs/api/objects/pb-accepted-invitation.mdx",slug:"/api/objects/pb-accepted-invitation",permalink:"/core-docs-bootstrap/docs/api/objects/pb-accepted-invitation",version:"current",sidebar:"Schema",previous:{title:"PartyBallotUpdatesResponse",permalink:"/core-docs-bootstrap/docs/api/objects/party-ballot-updates-response"},next:{title:"PBAcceptedInvitationsStatistics",permalink:"/core-docs-bootstrap/docs/api/objects/pb-accepted-invitations-statistics"}},p=[{value:"Fields",id:"fields",children:[]}],b=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:p,Tag:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type PBAcceptedInvitation {\n  createdAt: ISO8601DateTime!\n  email: Email!\n  firstName: String!\n  id: ID!\n  lastName: String!\n  pbCycle: PBCycle!\n  updatedAt: ISO8601DateTime!\n  verifiedAt: ISO8601DateTime\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"createdat-iso8601datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601DateTime!")),")"),Object(i.b)("h4",{id:"email-email"},Object(i.b)("inlineCode",{parentName:"h4"},"email")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/email"},Object(i.b)("inlineCode",{parentName:"a"},"Email!")),")"),Object(i.b)("p",null,"The email registered by user when accepted the invitation."),Object(i.b)("h4",{id:"firstname-string"},Object(i.b)("inlineCode",{parentName:"h4"},"firstName")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("p",null,"The first name registered by user when accepted the invitation."),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"lastname-string"},Object(i.b)("inlineCode",{parentName:"h4"},"lastName")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("p",null,"The last name registered by user when accepted the invitation"),Object(i.b)("h4",{id:"pbcycle-pbcycle"},Object(i.b)("inlineCode",{parentName:"h4"},"pbCycle")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/objects/pb-cycle"},Object(i.b)("inlineCode",{parentName:"a"},"PBCycle!")),")"),Object(i.b)("p",null,"PB cycle information"),Object(i.b)("h4",{id:"updatedat-iso8601datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601DateTime!")),")"),Object(i.b)("h4",{id:"verifiedat-iso8601datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"verifiedAt")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601DateTime")),")"),Object(i.b)("p",null,"Date and time in which invitation was accepted by user."))}d.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.a.createElement(u,o(o({ref:t},b),{},{components:n})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);