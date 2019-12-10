(this["webpackJsonphbvhuwe.github.io"]=this["webpackJsonphbvhuwe.github.io"]||[]).push([[0],{58:function(e,a,n){e.exports=n(80)},63:function(e,a,n){},64:function(e,a,n){},69:function(e,a,n){e.exports=n.p+"static/media/man-on-table.da307e6a.svg"},70:function(e,a,n){},71:function(e,a,n){},74:function(e,a,n){e.exports=n.p+"static/media/developer-activity.7d7afcd6.svg"},75:function(e,a,n){},78:function(e,a,n){},80:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(21),c=n.n(i),o=(n(63),n(28)),l=n(29),s=n(36),m=n(30),d=n(38),u=n(9),p=n(102),g=(n(64),Object(u.a)({root:{margin:"16px",textTransform:"uppercase"}})(p.a));function v(){return r.a.createElement("div",{className:"greeting-main",id:"greeting"},r.a.createElement("div",{className:"greeting-text-div"},r.a.createElement("h1",{className:"greeting-text"},"Hello ",r.a.createElement("span",{role:"img","aria-label":"hello"},"\ud83d\udc4b")," I'm Chornonoh Volodymyr"),r.a.createElement("p",{className:"greeting-text-subtitle subtitle"},"A passionate Full Stack Software Developer ",r.a.createElement("span",{role:"img","aria-label":"space"},"\ud83d\ude80"),"having an experience of building Web and Mobile applications with JavaScript / Angular / React / Nodejs / Java / Kotlin. Have an experience of building backend for Web and mobile applications, often for integration them with third-party services and APIs."),r.a.createElement("div",{className:"button-greeting-div"},r.a.createElement(g,{variant:"contained",color:"primary",href:"#contact"},"Contact me"),r.a.createElement(g,{variant:"contained",color:"primary",href:"https://drive.google.com/open?id=1jjMo-17-tkbu-g6Q8PDw8Fu2x1UGQknx"},"See my resume"))),r.a.createElement("div",{className:"greeting-image-div"},r.a.createElement("img",{alt:"Greeting",src:n(69)})))}n(70),n(71);var E=n(15),h=n(16),b=[{name:"Linux",icon:r.a.createElement(E.a,{icon:h.h})},{name:"HTML5",icon:r.a.createElement(E.a,{icon:h.e})},{name:"CSS3",icon:r.a.createElement(E.a,{icon:h.c})},{name:"Java",icon:r.a.createElement(E.a,{icon:h.f})},{name:"Android",icon:r.a.createElement(E.a,{icon:h.a})},{name:"JavaScript",icon:r.a.createElement(E.a,{icon:h.g})},{name:"React",icon:r.a.createElement(E.a,{icon:h.k})},{name:"Node.js",icon:r.a.createElement(E.a,{icon:h.i})},{name:"Angular",icon:r.a.createElement(E.a,{icon:h.b})},{name:"Python",icon:r.a.createElement(E.a,{icon:h.j})},{name:"Docker",icon:r.a.createElement(E.a,{icon:h.d})}],f=["\u26a1 Develop highly interactive Front end for web applications","\u26a1 REST API backend","\u26a1 Real-time communication web-socket backend","\u26a1 Distributed container-native systems","\u26a1 Integration with third party services and APIs"];function y(){return r.a.createElement("div",null,r.a.createElement("div",{className:"software-skills-main-div"},r.a.createElement("ul",{className:"dev-icons"},b.map((function(e){return r.a.createElement("li",{className:"software-skill-inline",key:e.name},e.icon)})))),r.a.createElement("div",null,f.map((function(e,a){return r.a.createElement("p",{className:"subtitle skills-text",key:a},e)}))))}function k(){return r.a.createElement("div",{className:"skills-main",id:"skills"},r.a.createElement("div",{className:"skills-main-div"},r.a.createElement("div",{className:"skills-image-div"},r.a.createElement("img",{alt:"Developer activity",src:n(74)})),r.a.createElement("div",{className:"skills-text-div"},r.a.createElement("h1",{className:"skills-heading"},"What i do"),r.a.createElement("p",{className:"subtitle skills-text-subtitle"},"Full Stack developer, who never ends learning something new"),r.a.createElement(y,null))))}var N=n(49),w=n(42),x=n(27),j=n.n(x),O=n(97),S=n(103),C=n(104),A=n(98),R=n(39),I=n(99),W=n(100),D=n(20),M=Object(O.a)((function(e){return Object(S.a)({card:{margin:"8px",cursor:"pointer"},languageColor:{width:"10px",height:"10px",backgroundColor:"blue",marginRight:"0.75rem",borderRadius:"100%"},cardActions:{display:"flex",flexGrow:1,padding:"16px"},cardActionSpan:{display:"flex",alignItems:"center",marginRight:"0.75rem"},octicon:{marginRight:"0.75rem"}})}));function T(e){var a=e.repo,n=M();return r.a.createElement(C.a,{className:n.card,onClick:function(){window.open(a.node.url,"_blank")}},r.a.createElement(A.a,{avatar:r.a.createElement(D.d,{icon:D.b}),title:r.a.createElement(R.a,{variant:"h5",component:"h2"},a.node.nameWithOwner)}),r.a.createElement(I.a,null,r.a.createElement(R.a,{variant:"body2",color:"textSecondary",component:"p"},a.node.description)),r.a.createElement(W.a,{className:n.cardActions},r.a.createElement("span",{className:n.cardActionSpan},r.a.createElement("div",{className:n.languageColor,style:{backgroundColor:a.node.primaryLanguage.color}}),r.a.createElement(R.a,{variant:"body2",color:"textSecondary",component:"p"},a.node.primaryLanguage.name)),r.a.createElement("span",{className:n.cardActionSpan},r.a.createElement(D.d,{className:n.octicon,icon:D.a}),r.a.createElement(R.a,{variant:"body2",color:"textSecondary",component:"p"},a.node.forkCount)),r.a.createElement("span",{className:n.cardActionSpan},r.a.createElement(D.d,{className:n.octicon,icon:D.c}),r.a.createElement(R.a,{variant:"body2",color:"textSecondary",component:"p"},a.node.stargazers.totalCount))))}n(75);function J(){var e=Object(N.a)(['{\n  repositoryOwner(login: "hbvhuwe") {\n    ... on User {\n      pinnedRepositories(first: 6) {\n        edges {\n          node {\n            nameWithOwner\n            description\n            forkCount\n            stargazers {\n              totalCount\n            }\n            url\n            id\n            diskUsage\n            primaryLanguage {\n              name\n              color\n            }\n          }\n        }\n      }\n    }\n  }\n}']);return J=function(){return e},e}var L=j()(J()),P=Object(u.a)({root:{margin:"16px",textTransform:"uppercase"}})(p.a);function z(){var e=Object(w.a)(L),a=e.loading,n=e.error,t=e.data;if(a)return r.a.createElement("p",null,"Loading...");if(n)return r.a.createElement("p",null,"Error: ",n.message);var i=t.repositoryOwner.pinnedRepositories.edges;return console.log(i),r.a.createElement("div",{className:"opensource-main",id:"opensource"},r.a.createElement("h1",{className:"project-title"},"Open Source Projects"),r.a.createElement("div",{className:"repo-cards-div-main"},i.map((function(e){return r.a.createElement(T,{repo:e,key:e.node.id})}))),r.a.createElement(P,{variant:"contained",color:"primary",href:"https://github.com/hbvhuwe"},"More projects"))}var G=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(k,null),r.a.createElement(z,null))}}]),a}(t.Component),F=(n(78),n(54)),Y=n(101),B=n(12),H=new(n(55).a)({uri:"https://api.github.com/graphql",request:function(e){e.setContext({headers:{authorization:"Bearer ".concat(atob("YTM3MGIxMDc1NzEwNjg4YWI0NzVlNTZmNDZiN2QyOWY2ZTY0OGM4NA=="))}})}}),Q=Object(F.a)({palette:{primary:{main:"#645beb"}}}),U=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(Y.a,{theme:Q},r.a.createElement(B.a,{client:H},r.a.createElement(G,null)))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.e7677091.chunk.js.map