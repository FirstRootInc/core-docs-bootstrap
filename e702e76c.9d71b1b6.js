(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=(n(0),n(111));const i={id:"user-inv",title:"Participant Invitation"},o={unversionedId:"user-inv",id:"user-inv",isDocsHomePage:!1,title:"Participant Invitation",description:"This section goes through the process of inviting participants to an existing PBCycle with code snippets written in python as an example on how to integrate the different components in your app.",source:"@site/docs/user-inv.md",slug:"/user-inv",permalink:"/core-docs-bootstrap/docs/user-inv",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-inv.md",version:"current",sidebar:"sidebar",previous:{title:"Lifecycle (Flow) of a PB Cycle",permalink:"/core-docs-bootstrap/docs/pbcycle"},next:{title:"GraphQL Ressources",permalink:"/core-docs-bootstrap/docs/graphql"}},c=[{value:"createPbCycleInvitationToken",id:"createpbcycleinvitationtoken",children:[]},{value:"acceptPbInvitation",id:"acceptpbinvitation",children:[]},{value:"createUser",id:"createuser",children:[]}],s={toc:c};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section goes through the process of inviting participants to an existing PBCycle with code snippets written in python as an example on how to integrate the different components in your app."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The invitation process starts by ",Object(a.b)("a",{parentName:"li",href:"#createPbCycleInvitationToken"},"creating a new token"),". This token can be integrated/added to a link and send to the participants."),Object(a.b)("li",{parentName:"ol"},"Invited participants accept to participate in the cycle and can access the PBCycle either through an existing account or by ",Object(a.b)("a",{parentName:"li",href:"#createuser"},"creating a new one"),"."),Object(a.b)("li",{parentName:"ol"},"If a user with an existing account ")),Object(a.b)("h3",{id:"createpbcycleinvitationtoken"},"createPbCycleInvitationToken"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'def create_pbcycle_invitation_token(pb_cycle_id=None, category="PARTICIPANT_INVITATION", password=None):\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  query = \'\'\' mutation createPbCycleInvitationToken($pbCycleId: ID!, $category: TokenTypesEnum, $password: String!){\n      createPbCycleInvitationToken(input: {\n        pbCycleId: $pbCycleId,\n        category: $category,\n        password: $password,\n      }){\n        token\n        pbCycleId\n      }\n    }\'\'\'\n  variables = { "pbCycleId": pb_cycle_id, "category": category, "password": password}\n  headers = {"Authorization":"Bearer "+admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print data\n  return data\n')),Object(a.b)("h3",{id:"acceptpbinvitation"},"acceptPbInvitation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'def accept_Pb_Invitation(token, firstname , lastName, email, password):\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  query = \'\'\' mutation acceptPbInvitation($token: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!){\n      createPbCycleInvitationToken(input: {\n        token: $token,\n        firstName: $firstName,\n        lastName: $lastName,\n        password: $password,\n      }){\n        pbCycle\n        status\n        type\n      }\n    }\'\'\'\n  variables = {"token": token, "firstName": firstName, "lastName": lastName, "password": password}\n  headers = {"Authorization":"Bearer "+admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print data\n  return data\n')),Object(a.b)("h3",{id:"createuser"},"createUser"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'def create_User(firstName, lastName, email, username, password, school):\n  client = GraphqlClient(endpoint=gql_endpoint)\n\n  query = \'\'\' mutation createUser($name: String!, $lastName: String!, $email: String!, $username: String!,\n    $password: String!, $school: String){\n      createUser(input: {\n        firstName: $name,\n        lastName: $lastName,\n        email: $email,\n        username: $username,\n        password: $password,\n        school: $school,\n      }){\n        User\n      }\n    }\'\'\'\n  variables = {"name": firstName, "lastName": lastName, "email": email, "username": username, "password": password, "school": school}\n  headers = {"Authorization":"Bearer "+admin_user_token}\n  data = client.execute(query=query, variables=variables, headers=headers)\n  #print data\n  return data\n')))}p.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);