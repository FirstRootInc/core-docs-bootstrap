(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"Tag",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(291)),i={id:"party-ballot-updates-response",title:"PartyBallotUpdatesResponse"},p={unversionedId:"api/objects/party-ballot-updates-response",id:"api/objects/party-ballot-updates-response",isDocsHomePage:!1,title:"PartyBallotUpdatesResponse",description:"<span",source:"@site/docs/api/objects/party-ballot-updates-response.mdx",slug:"/api/objects/party-ballot-updates-response",permalink:"/core-docs-bootstrap/docs/api/objects/party-ballot-updates-response",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/objects/party-ballot-updates-response.mdx",version:"current",sidebar:"Schema",previous:{title:"PartyBallotUpdatedPayload",permalink:"/core-docs-bootstrap/docs/api/objects/party-ballot-updated-payload"},next:{title:"PBAcceptedInvitation",permalink:"/core-docs-bootstrap/docs/api/objects/pb-accepted-invitation"}},l=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,a=e.color;return Object(o.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:l,Tag:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The payload to notify updates on a party ballot."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"type PartyBallotUpdatesResponse {\n  action: String!\n  isSubmitted: Boolean!\n  newValue: String\n  partyBallotId: ID!\n  proposalId: ID\n  remainingBudget: Decimal!\n}\n")),Object(o.b)("h3",{id:"fields"},"Fields"),Object(o.b)("h4",{id:"action-string"},Object(o.b)("inlineCode",{parentName:"h4"},"action")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(o.b)("p",null,"Indicates the action type performed by the user. Possiblevalues could be: ",Object(o.b)("inlineCode",{parentName:"p"},"funding"),", ",Object(o.b)("inlineCode",{parentName:"p"},"removeFunding"),", ",Object(o.b)("inlineCode",{parentName:"p"},"react"),", ",Object(o.b)("inlineCode",{parentName:"p"},"submit"),"."),Object(o.b)("h4",{id:"issubmitted-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"isSubmitted")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/boolean"},Object(o.b)("inlineCode",{parentName:"a"},"Boolean!")),")"),Object(o.b)("p",null,"Determined if party has submitted his ballot or not. If party has submitted his ballot this field will be ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", otherwise the field will be ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h4",{id:"newvalue-string"},Object(o.b)("inlineCode",{parentName:"h4"},"newValue")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(o.b)("inlineCode",{parentName:"a"},"String")),")"),Object(o.b)("p",null,"The new value after the user action. Possible values are: ",Object(o.b)("inlineCode",{parentName:"p"},"null")," | ",Object(o.b)("inlineCode",{parentName:"p"},"LIKE")," | ",Object(o.b)("inlineCode",{parentName:"p"},"NEUTRAL")," | ",Object(o.b)("inlineCode",{parentName:"p"},"DISLIKE")," | ",Object(o.b)("inlineCode",{parentName:"p"},"true")," | ",Object(o.b)("inlineCode",{parentName:"p"},"false")," depending on action."),Object(o.b)("h4",{id:"partyballotid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"partyBallotId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(o.b)("p",null,"Party ballot identifier. Is the same ID used to subscribe."),Object(o.b)("h4",{id:"proposalid-id"},Object(o.b)("inlineCode",{parentName:"h4"},"proposalId")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(o.b)("inlineCode",{parentName:"a"},"ID")),")"),Object(o.b)("p",null,"The party ballot proposal identifier. Notice that a party ballot is conformed by several proposals able to be voted. This field indicates which specific party ballot proposals was updated."),Object(o.b)("h4",{id:"remainingbudget-decimal"},Object(o.b)("inlineCode",{parentName:"h4"},"remainingBudget")," (",Object(o.b)("a",{parentName:"h4",href:"/docs/api/scalars/decimal"},Object(o.b)("inlineCode",{parentName:"a"},"Decimal!")),")"),Object(o.b)("p",null,"The total remaining budget in the party ballot. Every time the party funds or remove funding a proposal the party proposal budget is updated."))}s.isMDXComponent=!0},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return a?r.a.createElement(m,p(p({ref:t},c),{},{components:a})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);