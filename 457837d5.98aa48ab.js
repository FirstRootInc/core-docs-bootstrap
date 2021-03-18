(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"Tag",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(291)),o={id:"signed-url",title:"SignedUrl"},c={unversionedId:"api/objects/signed-url",id:"api/objects/signed-url",isDocsHomePage:!1,title:"SignedUrl",description:"<span",source:"@site/docs/api/objects/signed-url.mdx",slug:"/api/objects/signed-url",permalink:"/core-docs-bootstrap/docs/api/objects/signed-url",version:"current",sidebar:"Schema",previous:{title:"SignInUserPayload",permalink:"/core-docs-bootstrap/docs/api/objects/sign-in-user-payload"},next:{title:"SignedUrlResponse",permalink:"/core-docs-bootstrap/docs/api/objects/signed-url-response"}},s=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:s,Tag:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"No description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"type SignedUrl {\n  filename: String!\n  id: String!\n  objectAssigned: String!\n  objectType: String!\n  presignedUrl: String!\n  url: String!\n}\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("h4",{id:"filename-string"},Object(a.b)("inlineCode",{parentName:"h4"},"filename")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("p",null,"The filename created by server"),Object(a.b)("h4",{id:"id-string"},Object(a.b)("inlineCode",{parentName:"h4"},"id")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("p",null,"The id assigned to this uploaded file"),Object(a.b)("h4",{id:"objectassigned-string"},Object(a.b)("inlineCode",{parentName:"h4"},"objectAssigned")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("p",null,"The object id which this file was assigned to"),Object(a.b)("h4",{id:"objecttype-string"},Object(a.b)("inlineCode",{parentName:"h4"},"objectType")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("p",null,"The object type which this file was assigned to"),Object(a.b)("h4",{id:"presignedurl-string"},Object(a.b)("inlineCode",{parentName:"h4"},"presignedUrl")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("p",null,"Signed URL returned by S3. It must be used to upload the new file"),Object(a.b)("h4",{id:"url-string"},Object(a.b)("inlineCode",{parentName:"h4"},"url")," (",Object(a.b)("a",{parentName:"h4",href:"/docs/api/scalars/string"},Object(a.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(a.b)("p",null,"The public URL for file. This field represents the final URL where the\nfile will be stored. Note that when the presigned URL is requested, this\nURL is not available. This becomes automatically available after we verify\nthat file is acceptable according our rules."))}p.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,f=p["".concat(o,".").concat(u)]||p[u]||d[u]||a;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);