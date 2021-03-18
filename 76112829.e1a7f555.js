(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=(n(0),n(291));const i={},o={unversionedId:"code-snippets",id:"code-snippets",isDocsHomePage:!1,title:"code-snippets",description:"`python",source:"@site/docs/code-snippets.md",slug:"/code-snippets",permalink:"/core-docs-bootstrap/docs/code-snippets",version:"current"},c=[{value:"createPbCycleInvitationToken",id:"createpbcycleinvitationtoken",children:[]},{value:"acceptPbInvitation",id:"acceptpbinvitation",children:[]},{value:"createUser",id:"createuser",children:[]}],s={toc:c};function d({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime, timezone, timedelta\n\ndef create_phase(name, pb_cycle_id, from_date, to_date):\n  # Possible names: "PLANNING","IDEATION","REFINEMENT","VOTING","VOTING_RESULTS_RATIFICATION","FUNDING","IMPLEMENTATION"\n  if (from_date == None):\n    from_date = datetime.now(timezone.utc)\n  if (to_date == None):\n    to_date = from_date + timedelta(days=21)\n  if (pb_cycle_id == None):\n    raise Exception("No pb_cycle_id was given")\n\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  query = \'\'\' \n    mutation CreatePhase($pbCycleId: ID!, $name: PhasesEnum!, $startAt: ISO8601DateTime!, $endAt: ISO8601DateTime ){\n      createPhase(input: {\n        pbCycleId: $pbCycleId,\n        name: $name,\n        startAt: $startAt,\n        endAt: $endAt\n      }) {\n        pbCycleId\n        phaseId\n      }\n    }\n  \'\'\'  \n  variables = {"pbCycleId": pb_cycle_id, "name": name, "startAt": from_date.isoformat(), "endAt": to_date.isoformat()}\n  headers = {"Authorization":"Bearer "+admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print(data)\n  return data\n\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime, timezone, timedelta\n\ndef create_pb_cycle(theme, description, budget, startDate=None, endDate):\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  if (startDate == None):\n    startDate = datetime.now(timezone.utc)\n\n  query = \'\'\'\n    mutation($theme: String!, $description: String, $budget: Int!, $startDate: dISO8601DateTime!, $endDate: ISO8601DateTime!){\n        createPbCycle(input: {\n            theme: $theme,\n            description: $description,\n            budget: $budget,\n            startDate: $startDate,\n            endDate: $endDate,\n        }){\n            pbCycleId\n        }\n      }\'\'\'\n  variables = {"theme": theme, "description": description, "budget": budget, "startDate": startDate.isoformat(), "endDate": endDate.isoformat()}\n  headers = {"Authorization":"Bearer "+ admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print(data)\n  return data\n')),Object(r.b)("h3",{id:"createpbcycleinvitationtoken"},"createPbCycleInvitationToken"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'def create_pbcycle_invitation_token(pb_cycle_id=None, category="PARTICIPANT_INVITATION", password=None):\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  query = \'\'\' mutation createPbCycleInvitationToken($pbCycleId: ID!, $category: TokenTypesEnum, $password: String!){\n      createPbCycleInvitationToken(input: {\n        pbCycleId: $pbCycleId,\n        category: $category,\n        password: $password,\n      }){\n        token\n        pbCycleId\n      }\n    }\'\'\'\n  variables = { "pbCycleId": pb_cycle_id, "category": category, "password": password}\n  headers = {"Authorization":"Bearer "+admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print data\n  return data\n')),Object(r.b)("h3",{id:"acceptpbinvitation"},"acceptPbInvitation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'def accept_Pb_Invitation(token, firstname , lastName, email, password):\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  query = \'\'\' mutation acceptPbInvitation($token: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!){\n      createPbCycleInvitationToken(input: {\n        token: $token,\n        firstName: $firstName,\n        lastName: $lastName,\n        password: $password,\n      }){\n        pbCycle\n        status\n        type\n      }\n    }\'\'\'\n  variables = {"token": token, "firstName": firstName, "lastName": lastName, "password": password}\n  headers = {"Authorization":"Bearer "+admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print data\n  return data\n')),Object(r.b)("h3",{id:"createuser"},"createUser"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'def create_User(firstName, lastName, email, username, password, school):\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  query = \'\'\' mutation createUser($name: String!, $lastName: String!, $email: String!, $username: String!,\n    $password: String!, $school: String){\n      createUser(input: {\n        firstName: $name,\n        lastName: $lastName,\n        email: $email,\n        username: $username,\n        password: $password,\n        school: $school,\n      }){\n        User\n      }\n    }\'\'\'\n  variables = {"name": firstName, "lastName": lastName, "email": email, "username": username, "password": password, "school": school}\n  headers = {"Authorization":"Bearer "+admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print data\n  return data\n')))}d.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,b=l["".concat(o,".").concat(m)]||l[m]||u[m]||i;return n?r.a.createElement(b,c(c({ref:t},d),{},{components:n})):r.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);