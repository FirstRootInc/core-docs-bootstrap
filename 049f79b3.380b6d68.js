(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{287:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(287)),c={id:"reactions",title:"Reactions"},i={unversionedId:"api/objects/reactions",id:"api/objects/reactions",isDocsHomePage:!1,title:"Reactions",description:"<span",source:"@site/docs/api/objects/reactions.mdx",slug:"/api/objects/reactions",permalink:"/core-docs-bootstrap/docs/api/objects/reactions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/reactions.mdx",version:"current",sidebar:"Schema",previous:{title:"ReactToProposalPayload",permalink:"/core-docs-bootstrap/docs/api/objects/react-to-proposal-payload"},next:{title:"RefreshAuthTokenPayload",permalink:"/core-docs-bootstrap/docs/api/objects/refresh-auth-token-payload"}},b=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:b,Tag:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The total reactions received by a ",Object(o.b)("inlineCode",{parentName:"p"},"Reactionable")," object."),Object(o.b)("p",null,"This type contains the total number for every single reaction type."),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Payload"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"{likes: 10, dislikes: 1, neutral: 3}")),Object(o.b)("td",{parentName:"tr",align:"left"},"This proposal has received ",Object(o.b)("strong",{parentName:"td"},"10")," reactions of type ",Object(o.b)("inlineCode",{parentName:"td"},"LIKE"),", ",Object(o.b)("strong",{parentName:"td"},"1")," reaction of type ",Object(o.b)("inlineCode",{parentName:"td"},"DISLIKE")," and ",Object(o.b)("strong",{parentName:"td"},"3")," reactions of type ",Object(o.b)("inlineCode",{parentName:"td"},"NEUTRAL"),".")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type Reactions {\n  dislikes: Int!\n  likes: Int!\n  neutral: Int!\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"dislikes-int"},Object(o.b)("inlineCode",{parentName:"h4"},"dislikes")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int!")),")"),Object(o.b)("h4",{id:"likes-int"},Object(o.b)("inlineCode",{parentName:"h4"},"likes")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int!")),")"),Object(o.b)("h4",{id:"neutral-int"},Object(o.b)("inlineCode",{parentName:"h4"},"neutral")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(o.b)("inlineCode",{parentName:"a"},"Int!")),")"))}s.isMDXComponent=!0}}]);