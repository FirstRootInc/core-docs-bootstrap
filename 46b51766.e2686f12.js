(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(291)),i={id:"pbcycle",title:"PB Cycle"},c={unversionedId:"pbcycle",id:"pbcycle",isDocsHomePage:!1,title:"PB Cycle",description:"In this section we describe a Participatory Budgeting Cycle on an object-level. For more information about what a PB Cycle is, visite our website, which includes many great ressources.",source:"@site/docs/pbcycle.md",slug:"/pbcycle",permalink:"/core-docs-bootstrap/docs/pbcycle",version:"current",sidebar:"CoreConceptSidebar",next:{title:"PB Participants",permalink:"/core-docs-bootstrap/docs/pb-inv"}},l=[{value:"Ideation Phase",id:"ideation-phase",children:[{value:"Proposals",id:"proposals",children:[]}]},{value:"Refinement Phase",id:"refinement-phase",children:[{value:"Ballots",id:"ballots",children:[]}]},{value:"Voting Phase",id:"voting-phase",children:[]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section we describe a Participatory Budgeting Cycle on an object-level. For more information about what a PB Cycle is, visite ",Object(o.b)("a",{parentName:"p",href:"https://firstroot.co/teacher-resources/"},"our website"),", which includes many great ressources."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"PBCycle")," object represents an instance of a Participatory Budgeting Cycle for any given  organization like a school, a class, or a group of people that wants to make a budgetary choice collaboratively. By using the ",Object(o.b)("a",{parentName:"p",href:"/docs/api/mutations/create-pb-cycle"},Object(o.b)("inlineCode",{parentName:"a"},"createPbCycle"))," mutation a valid object is created; Which can later be edited."),Object(o.b)("p",null,"Every PBCycle follows this flow/process:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Planning")," - Administrators define a theme, budget, categories and a schedule"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#ideation-phase"},Object(o.b)("strong",{parentName:"a"},"Ideation"))," - Participants submit, edit and share their ",Object(o.b)("a",{parentName:"li",href:"#proposals"},"proposals")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#refinment-phase"},Object(o.b)("strong",{parentName:"a"},"Refinement"))," - Administrators and leaders hand-pick the best proposals by preparing a ",Object(o.b)("a",{parentName:"li",href:"#ballots"},"ballot")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#voting-phase"},Object(o.b)("strong",{parentName:"a"},"Voting"))," - Participants vote, and admins do a voting results ratification process"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Implementation")," - Based on voting results, winning proposals get done!")),Object(o.b)("h2",{id:"ideation-phase"},"Ideation Phase"),Object(o.b)("h3",{id:"proposals"},"Proposals"),Object(o.b)("p",null,"A Proposal object is an entity that represents a specific idea of a participant which is categorized within a PBCycle."),Object(o.b)("p",null,"Using ",Object(o.b)("a",{parentName:"p",href:"docs/api/mutations/create-proposal"},Object(o.b)("inlineCode",{parentName:"a"},"createProposal"))," a participant can submit a proposal within a category, which can later, if selcted, be voted on.\nWith this muation a valid proposal object is created, which contains at least a name, a cost and a category."),Object(o.b)("p",null,"Participants can ",Object(o.b)("a",{parentName:"p",href:"/docs/api/mutations/react-to-proposal"},Object(o.b)("inlineCode",{parentName:"a"},"reactToProposal")),", through a like. The Proposals with a lot of likes will most likely end up on the voting ballot. This reaction can be reversed with the ",Object(o.b)("a",{parentName:"p",href:"/docs/api/mutations/remove-reaction-from-proposal"},Object(o.b)("inlineCode",{parentName:"a"},"removeReactionFromProposal")),"."),Object(o.b)("h2",{id:"refinement-phase"},"Refinement Phase"),Object(o.b)("h3",{id:"ballots"},"Ballots"),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"Ballot")," is the collection of Proposals that are ready for voting. The Ballot is prepared by an admin during the refinement phase using the ",Object(o.b)("a",{parentName:"p",href:"/docs/api/mutations/create-ballot"},Object(o.b)("inlineCode",{parentName:"a"},"createBallot"))," mutation."),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"BallotSubmission")," object is the 'vote' of a Party. Each proposal in the ballot for a party is initialized to an unfunded and \u2018no preference\u2019 value.\nA ",Object(o.b)("strong",{parentName:"p"},"VotingGroup")," and a ",Object(o.b)("strong",{parentName:"p"},"Person")," are both PartyTyes that can create a BallotSubmission with the ",Object(o.b)("a",{parentName:"p",href:"/docs/api/mutations/submit-party-ballot-vote"},Object(o.b)("inlineCode",{parentName:"a"},"submitPartyBallotVote"))," mutation."),Object(o.b)("h2",{id:"voting-phase"},"Voting Phase"),Object(o.b)("p",null,"The default voting process is simultaneous individual and collaborative voting. When voting begins, participants can vote individually and also participate in the collaborative vote."),Object(o.b)("p",null,"PB cycle participants vote on eligible proposals contained on a Ballot by deciding to fund them through the ",Object(o.b)("a",{parentName:"p",href:"/docs/api/mutations/fund-ballot-proposal"},Object(o.b)("inlineCode",{parentName:"a"},"fundBallotProposal"))," mutation. Additionally they can add a reaction using the ",Object(o.b)("a",{parentName:"p",href:"/docs/api/mutations/react-to-party-ballot-proposal"},Object(o.b)("inlineCode",{parentName:"a"},"reactToPartyBallotProposal"))," mutation."))}p.isMDXComponent=!0},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);