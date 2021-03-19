(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"Tag",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(286)),o={id:"phase",title:"Phase"},c={unversionedId:"api/objects/phase",id:"api/objects/phase",isDocsHomePage:!1,title:"Phase",description:"<span",source:"@site/docs/api/objects/phase.mdx",slug:"/api/objects/phase",permalink:"/core-docs-bootstrap/docs/api/objects/phase",version:"current",sidebar:"Schema",previous:{title:"PBInvitationInfo",permalink:"/core-docs-bootstrap/docs/api/objects/pb-invitation-info"},next:{title:"Proposal",permalink:"/core-docs-bootstrap/docs/api/objects/proposal"}},p=[{value:"Fields",id:"fields",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:p,Tag:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"No description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Phase {\n  endAt: ISO8601DateTime\n  id: ID!\n  name: String!\n  remainingDaysLeft: Int\n  startAt: ISO8601DateTime!\n  totalDays: Int\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"endat-iso8601datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"endAt")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601DateTime")),")"),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("h4",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h4",{id:"remainingdaysleft-int"},Object(i.b)("inlineCode",{parentName:"h4"},"remainingDaysLeft")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"),Object(i.b)("h4",{id:"startat-iso8601datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"startAt")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601DateTime!")),")"),Object(i.b)("h4",{id:"totaldays-int"},Object(i.b)("inlineCode",{parentName:"h4"},"totalDays")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int")),")"))}l.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(n),u=r,m=l["".concat(o,".").concat(u)]||l[u]||d[u]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);