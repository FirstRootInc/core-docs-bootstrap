(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"Tag",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(291)),p={id:"update-proposal",title:"updateProposal"},i={unversionedId:"api/mutations/update-proposal",id:"api/mutations/update-proposal",isDocsHomePage:!1,title:"updateProposal",description:"<span",source:"@site/docs/api/mutations/update-proposal.mdx",slug:"/api/mutations/update-proposal",permalink:"/core-docs-bootstrap/docs/api/mutations/update-proposal",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/mutations/update-proposal.mdx",version:"current",sidebar:"Schema",previous:{title:"updateCategory",permalink:"/core-docs-bootstrap/docs/api/mutations/update-category"},next:{title:"ballotVotingResultsUpdated",permalink:"/core-docs-bootstrap/docs/api/subscriptions/ballot-voting-results-updated"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:c,Tag:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Allows to update a proposal under next restrictions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Only participant who creates this proposal can edit it."),Object(o.b)("li",{parentName:"ul"},"The proposal can be assigned only to a PB Cycle in which the participant is allowd to participate."),Object(o.b)("li",{parentName:"ul"},"Only provided arguments will be updated.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"updateProposal(\n  input: UpdateProposalInput!\n): UpdateProposalPayload\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"input-updateproposalinput"},Object(o.b)("inlineCode",{parentName:"h4"},"input")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/inputs/update-proposal-input"},Object(o.b)("inlineCode",{parentName:"a"},"UpdateProposalInput!")),")"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("h4",{id:"updateproposalpayload"},Object(o.b)("a",{parentName:"h4",href:"/docs/api/objects/update-proposal-payload"},Object(o.b)("inlineCode",{parentName:"a"},"UpdateProposalPayload"))),Object(o.b)("p",null,"Autogenerated return type of UpdateProposal"))}s.isMDXComponent=!0},291:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),b=n,m=s["".concat(p,".").concat(b)]||s[b]||d[b]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);