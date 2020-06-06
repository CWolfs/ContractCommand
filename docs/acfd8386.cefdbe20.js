(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),l=(a(0),a(210)),i={id:"dialogue",title:"Dialogue",sidebar_label:"Dialogue"},c=[{value:"Simple",id:"simple",children:[]}],b={id:"contract-builder-api/nodes/dialogue",title:"Dialogue",description:"The `Dialogue` node allows for creating dialogue related game logic.",source:"@site/docs\\contract-builder-api\\nodes\\dialogue.md",permalink:"/docs/contract-builder-api/nodes/dialogue",sidebar_label:"Dialogue",sidebar:"docs",previous:{title:"Contract Edit",permalink:"/docs/contract-builder-api/nodes/contract-edit"},next:{title:"Objective",permalink:"/docs/contract-builder-api/nodes/objective"}},o={rightToc:c,metadata:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Dialogue")," node allows for creating dialogue related game logic."),Object(l.b)("p",null,"Often, it's best to trigger dialogue within an inactive chunk that is then enabled, then specifying the ",Object(l.b)("inlineCode",{parentName:"p"},"OnActiveExecute")," for the dialogue. However, there are multiple ways to activate it, such as the ",Object(l.b)("inlineCode",{parentName:"p"},"Simple")," node's ",Object(l.b)("inlineCode",{parentName:"p"},"Trigger")," property."),Object(l.b)("h2",{id:"simple"},"Simple"),Object(l.b)("p",null,"This node creates a simple dialogue node which can then be used in the contract json."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the Node that will be used for the Unity game object")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Dialogue")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of node")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SubType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Simple")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subtype of node")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Guid"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.uuidgenerator.net/"}),"UUIDv4"),". This is then used in the contract json to link to actual written dialogue")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Trigger"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any ",Object(l.b)("inlineCode",{parentName:"td"},"MessageCenterMessageType")," enum value name, e.g. ",Object(l.b)("inlineCode",{parentName:"td"},"OnEncounterBegin"),". Needs upgrading to also support MC's ",Object(l.b)("inlineCode",{parentName:"td"},"MessageTypes"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ShowOnlyOnce"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Name": "Dialogue_First_Point_Of_Interest",\n  "Type": "Dialogue",\n  "SubType": "Simple",\n  "Guid": "e0ca3227-ffbf-4088-a261-3d4e9ab7d4c5",\n  "Trigger": "OnEncounterBegin",\n  "ShowOnlyOnce": true\n}\n')))}d.isMDXComponent=!0},210:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),d=i(a),p=n,u=d[c+"."+p]||d[p]||b[p]||l;return a?r.a.createElement(u,Object.assign({},{ref:t},o,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=o;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<l;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);