(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"Tag",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(291)),o={id:"proposal",title:"Proposal"},b={unversionedId:"api/objects/proposal",id:"api/objects/proposal",isDocsHomePage:!1,title:"Proposal",description:"<span",source:"@site/docs/api/objects/proposal.mdx",slug:"/api/objects/proposal",permalink:"/core-docs-bootstrap/docs/api/objects/proposal",version:"current",sidebar:"Schema",previous:{title:"Phase",permalink:"/core-docs-bootstrap/docs/api/objects/phase"},next:{title:"ProposalUpdatedPayload",permalink:"/core-docs-bootstrap/docs/api/objects/proposal-updated-payload"}},c=[{value:"Fields",id:"fields",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:c,Tag:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The proposal type is a widely used type in Firstroot GraphQL implementation and it is included in several queries and mutations."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"Note"),": anonymous access to some fields is restricted.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Proposal {\n  alreadyReacted: Boolean\n  category: Category\n  categoryId: String\n  cost: Decimal\n  createdAt: ISO8601DateTime!\n  description: String\n  id: ID!\n  isOwner: Boolean\n  name: String\n  pbCycle: PBCycle\n  reactions: Reactions\n  registeredReactions: [String!]!\n  thumbnail: String\n  totalReactions: Int!\n  updatedAt: ISO8601DateTime!\n  user: User\n  userId: String\n  videoUrl: VideoUrl\n}\n")),Object(i.b)("h3",{id:"fields"},"Fields"),Object(i.b)("h4",{id:"alreadyreacted-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"alreadyReacted")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/boolean"},Object(i.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(i.b)("p",null,"Indicates the current user has reacted to the proposal, does not matter the type of reaction. Access to this field requires a logged in user, anonymous requests will always return ",Object(i.b)("inlineCode",{parentName:"p"},"null"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"participant"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PB admin"),".",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Returns"),": ",Object(i.b)("inlineCode",{parentName:"p"},"Int")," | ",Object(i.b)("inlineCode",{parentName:"p"},"null")),Object(i.b)("h4",{id:"category-category"},Object(i.b)("inlineCode",{parentName:"h4"},"category")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/objects/category"},Object(i.b)("inlineCode",{parentName:"a"},"Category")),")"),Object(i.b)("p",null,"Category object which this item belongs to."),Object(i.b)("p",null,"Through this type client can access al fields available in a Category including ",Object(i.b)("inlineCode",{parentName:"p"},"name"),", ",Object(i.b)("inlineCode",{parentName:"p"},"icon")," and others."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),"."),Object(i.b)("h4",{id:"categoryid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"categoryId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"The category ",Object(i.b)("inlineCode",{parentName:"p"},"UUID")," which the proposal belongs to."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),"."),Object(i.b)("h4",{id:"cost-decimal"},Object(i.b)("inlineCode",{parentName:"h4"},"cost")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/decimal"},Object(i.b)("inlineCode",{parentName:"a"},"Decimal")),")"),Object(i.b)("p",null,"The estimated cost for the proposal implementation."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),".",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Returns"),": ",Object(i.b)("inlineCode",{parentName:"p"},"Decimal")," | ",Object(i.b)("inlineCode",{parentName:"p"},"null")),Object(i.b)("h4",{id:"createdat-iso8601datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"createdAt")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601DateTime!")),")"),Object(i.b)("h4",{id:"description-string"},Object(i.b)("inlineCode",{parentName:"h4"},"description")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"A description of the proposal generated and refined by the PB Cycle participants."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),"."),Object(i.b)("h4",{id:"id-id"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/id"},Object(i.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(i.b)("p",null,"The proposal ",Object(i.b)("inlineCode",{parentName:"p"},"UUID")," identifier in the system."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),"."),Object(i.b)("h4",{id:"isowner-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"isOwner")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/boolean"},Object(i.b)("inlineCode",{parentName:"a"},"Boolean")),")"),Object(i.b)("p",null,"Indicates if current user is the proposal's creator. Access to this field requires a logged in user, anonymous requests will always return ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"false")),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PB admin"),"."),Object(i.b)("h4",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"The proposal name provided by participant."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),"."),Object(i.b)("h4",{id:"pbcycle-pbcycle"},Object(i.b)("inlineCode",{parentName:"h4"},"pbCycle")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/objects/pb-cycle"},Object(i.b)("inlineCode",{parentName:"a"},"PBCycle")),")"),Object(i.b)("p",null,"PB Cycle object which this proposal belongs to. Every single proposal must belong yo a PB Cycle, this field provides access to those ",Object(i.b)("inlineCode",{parentName:"p"},"PBCycle")," type fields."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"Note:")," some fields may not be available for anonymous users.")),Object(i.b)("h4",{id:"reactions-reactions"},Object(i.b)("inlineCode",{parentName:"h4"},"reactions")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/objects/reactions"},Object(i.b)("inlineCode",{parentName:"a"},"Reactions")),")"),Object(i.b)("p",null,"The totals per reaction type received by proposal."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"participant"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PB admin"),"."),Object(i.b)("h4",{id:"registeredreactions-string"},Object(i.b)("inlineCode",{parentName:"h4"},"registeredReactions")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"[String!]!")),")"),Object(i.b)("p",null,"Return the list of reactions this proposal received. Reactions are returned as an array in which every index correspond to a type of reaction the proposal has received."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),".",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Returns"),": ",Object(i.b)("inlineCode",{parentName:"p"},"[String]")," | ",Object(i.b)("inlineCode",{parentName:"p"},"null")),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Examples:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Returned"),Object(i.b)("th",{parentName:"tr",align:"left"},"Explanation"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"['LIKE', 'NEUTRAL']")),Object(i.b)("td",{parentName:"tr",align:"left"},"Proposal has only received reactions of type ",Object(i.b)("inlineCode",{parentName:"td"},"LIKE")," and ",Object(i.b)("inlineCode",{parentName:"td"},"NEUTRAL"),", but no reactions of type ",Object(i.b)("inlineCode",{parentName:"td"},"DISLIKE"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"[]")),Object(i.b)("td",{parentName:"tr",align:"left"},"Proposal has not received any reaction yet.")))),Object(i.b)("h4",{id:"thumbnail-string"},Object(i.b)("inlineCode",{parentName:"h4"},"thumbnail")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"The image assigned to proposal. All images are moderated using Amazon Rekognition before to accept then and before to be publicly available. The content of this field depends on the approval of provided image."),Object(i.b)("p",null,"This value will be ",Object(i.b)("inlineCode",{parentName:"p"},"null")," if the client did not upload and image for proposal or if the uploaded image is under approval process. Once the image is approved or rejected by system this value will be automatically fulfilled with the URL of uploaded image if it was approved, or with ",Object(i.b)("a",{parentName:"p",href:"https://core-dev-proposal-images.s3.us-east-2.amazonaws.com/flagged-image.png"},Object(i.b)("strong",{parentName:"a"},"this URL"))," if image was rejected."),Object(i.b)("p",null,"Rejection of an image depends on its content. Rekognition search for inappropriate content like nudity, gambling, violence and other not allowed content in the image."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("inlineCode",{parentName:"p"},"null")," | ",Object(i.b)("inlineCode",{parentName:"p"},"URL")),Object(i.b)("h4",{id:"totalreactions-int"},Object(i.b)("inlineCode",{parentName:"h4"},"totalReactions")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/int"},Object(i.b)("inlineCode",{parentName:"a"},"Int!")),")"),Object(i.b)("p",null,"The SUM of all reactions this proposal has received. This value includes all types of reactions."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"public"),"."),Object(i.b)("h4",{id:"updatedat-iso8601datetime"},Object(i.b)("inlineCode",{parentName:"h4"},"updatedAt")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/iso-8601-date-time"},Object(i.b)("inlineCode",{parentName:"a"},"ISO8601DateTime!")),")"),Object(i.b)("h4",{id:"user-user"},Object(i.b)("inlineCode",{parentName:"h4"},"user")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/objects/user"},Object(i.b)("inlineCode",{parentName:"a"},"User")),")"),Object(i.b)("p",null,"User object who created this proposal. This field provide access to all ",Object(i.b)("inlineCode",{parentName:"p"},"User")," type available fields."),Object(i.b)("p",null,"This field is available only for participants or admin in the PB Cycle, for anonymous requests the field will be always ",Object(i.b)("inlineCode",{parentName:"p"},"null"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"participant"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PB admin"),".",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Returns"),": ",Object(i.b)("inlineCode",{parentName:"p"},"UserType")," | ",Object(i.b)("inlineCode",{parentName:"p"},"null")),Object(i.b)("h4",{id:"userid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"userId")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"The user ",Object(i.b)("inlineCode",{parentName:"p"},"UUID"),", creator of the proposal. This fields is available only for logged in users, other case will always return ",Object(i.b)("inlineCode",{parentName:"p"},"null")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Access level:")," ",Object(i.b)("inlineCode",{parentName:"p"},"participant"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PB admin"),".",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Returns"),": ",Object(i.b)("inlineCode",{parentName:"p"},"UUID")," | ",Object(i.b)("inlineCode",{parentName:"p"},"null")),Object(i.b)("h4",{id:"videourl-videourl"},Object(i.b)("inlineCode",{parentName:"h4"},"videoUrl")," (",Object(i.b)("a",{parentName:"h4",href:"/docs/api/scalars/video-url"},Object(i.b)("inlineCode",{parentName:"a"},"VideoUrl")),")"),Object(i.b)("p",null,"The video URL if it was provided by participant. This URL will point to a YouTube video URL."))}s.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,O=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return n?r.a.createElement(O,b(b({ref:t},p),{},{components:n})):r.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);