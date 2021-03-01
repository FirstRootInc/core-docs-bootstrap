(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(111)),i={id:"pbcycle",title:"Flow of a PB Cycle"},c={unversionedId:"pbcycle",id:"pbcycle",isDocsHomePage:!1,title:"Flow of a PB Cycle",description:"The PBCycle object represents an instance of Participatory Budgeting cycle for a given organisation, like a School or School Group.",source:"@site/docs/pbcycle.md",slug:"/pbcycle",permalink:"/core-docs-bootstrap/docs/pbcycle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/pbcycle.md",version:"current",sidebar:"sidebar",previous:{title:"GraphQL Playground / Voyager / GraphiQL",permalink:"/core-docs-bootstrap/docs/explorer"},next:{title:"Participant Invitation",permalink:"/core-docs-bootstrap/docs/user-inv"}},l=[{value:"createPbCycle",id:"createpbcycle",children:[]},{value:"Proposals",id:"proposals",children:[]},{value:"Ballots",id:"ballots",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The PBCycle object represents an instance of Participatory Budgeting cycle for a given organisation, like a School or School Group. "),Object(o.b)("p",null,"Every PBCycle guides you through the process of"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Planning the coming cycle,"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#proposals"},"Collecting ideas from the participants and creating proposals"),","),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#ballots"},"Refining")," the proposals,"),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("a",{parentName:"li",href:"voting"},"Voting phase")," followed by ",Object(o.b)("a",{parentName:"li",href:"ratification"},"the voting result ratification phase"),","),Object(o.b)("li",{parentName:"ol"},"and ends with the implementation of the winning proposal(s).")),Object(o.b)("p",null,"The different Phases are created using the following mutation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime, timezone, timedelta\n\ndef create_phase(name, pb_cycle_id, from_date=None, to_date=None):\n  # Possible names: "PLANNING","IDEATION","REFINEMENT","VOTING","VOTING_RESULTS_RATIFICATION","FUNDING","IMPLEMENTATION"\n  if (from_date == None):\n    from_date = datetime.now(timezone.utc)\n  if (to_date == None):\n    to_date = from_date + timedelta(days=21)\n  if (pb_cycle_id == None):\n    raise Exception("No pb_cycle_id was given")\n\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  query = \'\'\' \n    mutation CreatePhase($pbCycleId: ID!, $name: PhasesEnum!, $startAt: ISO8601DateTime!, $endAt: ISO8601DateTime ){\n      createPhase(input: {\n        pbCycleId: $pbCycleId,\n        name: $name,\n        startAt: $startAt,\n        endAt: $endAt\n      }) {\n        pbCycleId\n        phaseId\n      }\n    }\n  \'\'\'  \n  variables = {"pbCycleId": pb_cycle_id, "name": name, "startAt": from_date.isoformat(), "endAt": to_date.isoformat()}\n  headers = {"Authorization":"Bearer "+admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print(data)\n  return data\n\n')),Object(o.b)("h3",{id:"createpbcycle"},"createPbCycle"),Object(o.b)("p",null,"Using this mutation creates a valid object, which can later be edited:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime, timezone, timedelta\n\ndef create_pb_cycle(theme, description, budget, startDate=None, endDate):\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  if (startDate == None):\n    startDate = datetime.now(timezone.utc)\n\n  query = \'\'\'\n    mutation($theme: String!, $description: String, $budget: Int!, $startDate: dISO8601DateTime!, $endDate: ISO8601DateTime!){\n        createPbCycle(input: {\n            theme: $theme,\n            description: $description,\n            budget: $budget,\n            startDate: $startDate,\n            endDate: $endDate,\n        }){\n            pbCycleId\n        }\n      }\'\'\'\n  variables = {"theme": theme, "description": description, "budget": budget, "startDate": startDate.isoformat(), "endDate": endDate.isoformat()}\n  headers = {"Authorization":"Bearer "+ admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print(data)\n  return data\n')),Object(o.b)("h3",{id:"proposals"},"Proposals"),Object(o.b)("p",null,"A Proposal object is an entity that represents a specific idea of a participant which is categorized within a PBCycle."),Object(o.b)("p",null,"Using the ",Object(o.b)("inlineCode",{parentName:"p"},"createProposal")," a participant can submmit a proposal within a category, which can later if selcted be voted on during the voting phase.\nIf the category doesn't existes use the ",Object(o.b)("inlineCode",{parentName:"p"},"createCategory")," mutation."),Object(o.b)("h3",{id:"ballots"},"Ballots"),Object(o.b)("p",null,"PB cycle participants vote on eligible proposals contained on a Ballot. A Ballot is the collection of Proposals that are ready for voting. A BallotSubmission is the 'vote' of a Party. "),Object(o.b)("p",null,"The Ballot is prepared during the refinement Phase. All Proposals on the Ballot must have at least a name, a cost and a category. Once voting begins the proposals on the ballot, the ballot itself, and the PB Cycle budget cannot be edited anymore."))}p.isMDXComponent=!0}}]);