(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(191)),l={id:"ai-behaviours",title:"AI Behaviours"},c=[{value:"Follow Lance",id:"follow-lance",children:[]}],o={id:"features/ai-behaviours",title:"AI Behaviours",description:"Completely new AI behaviours that do not exist in the vanilla game.",source:"@site/docs\\features\\ai-behaviours.md",permalink:"/docs/features/ai-behaviours",sidebar:"docs",previous:{title:"Dynamic Withdraw",permalink:"/docs/features/dynamic-withdraw"},next:{title:"Quick Skirmish",permalink:"/docs/features/quick-skirmish"}},b={rightToc:c,metadata:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Completely new AI behaviours that do not exist in the vanilla game."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow Lance - Follows the player lance. Used by ally or player AI lances.")),Object(i.b)("h2",{id:"follow-lance"},"Follow Lance"),Object(i.b)("p",null,"You can configure the follow lance AI with the follow ",Object(i.b)("inlineCode",{parentName:"p"},"settings.json")," options."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"AI": {\n  "FollowPlayer": {\n    "Target": "HeaviestMech", // HeaviestMech or LanceOrder\n    "StopWhen": "OnEnemyDetected", // OnEnemyDetected, OnEnemyVisible, WhenNotNeeded\n    "MaxDistanceFromTargetBeforeSprinting": 200, // Distance beyond which the ally will only sprint to catch up\n    "TargetZoneRadius": 120 // The zone radius the following mech will try to get within\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Details"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Target"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"HeaviestMech")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"HeaviestMech")," follows heaviest mech. ",Object(i.b)("inlineCode",{parentName:"td"},"LanceOrder")," follows units 1 (if it dies they follow unit 2 etc)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"StopWhen"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"OnEnemyDetected")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"OnEnemyDetected"),", ",Object(i.b)("inlineCode",{parentName:"td"},"OnEnemyVisible"),", ",Object(i.b)("inlineCode",{parentName:"td"},"WhenNotNeeded"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MaxDistanceFromTargetBeforeSprinting"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"200")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Distance beyond which the ally will only sprint to catch up")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TargetZoneRadius"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"120")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Distance to keep within of the target. 1 grid point = 24 units. Straight line check.")))))}d.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,u=d[c+"."+p]||d[p]||o[p]||i;return n?r.a.createElement(u,Object.assign({},{ref:t},b,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var d=2;d<i;d++)l[d]=n[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);