(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),l=(a(0),a(191)),i={id:"release-0.4.0",title:"Release v0.4.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.4.0"]},o=[{value:"Major Features",id:"major-features",children:[]},{value:"Minor Features",id:"minor-features",children:[]},{value:"Bugs Fixed",id:"bugs-fixed",children:[]}],c={permalink:"/blog/release-0.4.0",source:"@site/blog\\2019-12-21-release-0.4.0.md",description:"This release brings in custom contract types with reuse of story map support.",date:"2019-12-21T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v0.4.0",permalink:"/blog/tags/v-0-4-0"}],title:"Release v0.4.0",prevItem:{title:"Release v0.4.1",permalink:"/blog/release-0.4.1"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},s={rightToc:o,metadata:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This release brings in custom contract types with reuse of story map support."),Object(l.b)("p",null,"Tracked by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/milestone/6?closed=1"}),"Milestone - v0.4.0")),Object(l.b)("h2",{id:"major-features"},"Major Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Added a system to build contract types at runtime"),Object(l.b)("li",{parentName:"ul"},"Added custom contract types",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Solo Duel")," - A 1v1 fight in the arena showcased in the story mission \u2018Showdown\u2019"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Duo Duel")," - A 2v2 fight in the arena showcased in the story mission \u2018Showdown\u2019"))),Object(l.b)("li",{parentName:"ul"},"Added 3 contracts for ",Object(l.b)("inlineCode",{parentName:"li"},"Solo Duel"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"A Taste for War"),Object(l.b)("li",{parentName:"ul"},"Life Lesson"),Object(l.b)("li",{parentName:"ul"},"Proxy War"))),Object(l.b)("li",{parentName:"ul"},"Added 3 contracts for ",Object(l.b)("inlineCode",{parentName:"li"},"Duo Duel"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Double Trouble"),Object(l.b)("li",{parentName:"ul"},"Festive Couple"),Object(l.b)("li",{parentName:"ul"},"Words Hurt")))),Object(l.b)("h2",{id:"minor-features"},"Minor Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Unknown contract type fallback ruleset - If an unknown countract type is encountered, a fallback contract type ruleset will be applied so access to the full MC featureset will still work for that contract type"),Object(l.b)("li",{parentName:"ul"},"Added ",Object(l.b)("inlineCode",{parentName:"li"},"IncludeContractTypes")," and ",Object(l.b)("inlineCode",{parentName:"li"},"ExcludeContractTypes")," to ",Object(l.b)("inlineCode",{parentName:"li"},"RandomSpawns"),", ",Object(l.b)("inlineCode",{parentName:"li"},"HotDrop"),", ",Object(l.b)("inlineCode",{parentName:"li"},"AdditionalLances"),", ",Object(l.b)("inlineCode",{parentName:"li"},"ExtendedLances"),", ",Object(l.b)("inlineCode",{parentName:"li"},"ExtendedBoundaries")," and ",Object(l.b)("inlineCode",{parentName:"li"},"DynamicWithdraw")," settings.json options")),Object(l.b)("h2",{id:"bugs-fixed"},"Bugs Fixed"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AI - Friendly turrets will no longer get the 'Follow Heaviest Mech' AI applied to them. This was causing issues where turrets wouldn't fire on the enemy if the player's heaviest mech was too far away. The turrets wanted to sprint after the player."),Object(l.b)("li",{parentName:"ul"},"Additional Lance Dialogue - Fixed spelling mistake")))}u.isMDXComponent=!0},191:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},o=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=i(a),b=n,p=u[o+"."+b]||u[b]||c[b]||l;return a?r.a.createElement(p,Object.assign({},{ref:t},s,{components:a})):r.a.createElement(p,Object.assign({},{ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);