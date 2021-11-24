(this["webpackJsonpsentiment-analysis-dashboard"]=this["webpackJsonpsentiment-analysis-dashboard"]||[]).push([[0],{177:function(t,e,c){},178:function(t,e,c){},237:function(t){t.exports=JSON.parse('{"dataset":{"datasetLength":13863,"noNeutrals":4461,"noPositives":429,"noNegatives":8973},"multinomialNB":{"total":{"accuracy":0.79,"kfoldAvg":0.7846,"precision":0.68,"recall":0.55,"f1":0.59}},"bernoulliNB":{"total":{"accuracy":0.79,"kfoldAvg":0.7867,"precision":0.52,"recall":0.52,"f1":0.52}},"complementNB":{"total":{"accuracy":0.79,"kfoldAvg":0.7686,"precision":0.66,"recall":0.58,"f1":0.61}},"gaussianNB":{"total":{"accuracy":0.73,"kfoldAvg":0.7373,"precision":0.51,"recall":0.5,"f1":0.5}},"SVC":{"total":{"accuracy":0.82,"kfoldAvg":0.8086,"precision":0.71,"recall":0.58,"f1":0.61}},"LSVC":{"total":{"accuracy":0.8,"kfoldAvg":0.78,"precision":0.69,"recall":0.63,"f1":0.65}},"KNN":{"total":{"accuracy":0.5,"kfoldAvg":0.5285,"precision":0.58,"recall":0.42,"f1":0.36}}}')},239:function(t,e,c){"use strict";c.r(e);var a=c(0),i=c.n(a),l=c(15),r=c.n(l),o=(c(177),c(178),c(105)),n=c(18),s=c(288),j=c(286),m=c(123),d=c(282),x=c(287),u=c(283),b=c(2),f=function(t){return Object(b.jsx)(j.a,Object(m.a)(Object(m.a)({item:!0},t),{},{children:Object(b.jsx)(u.a,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{children:t.children})})})}))},O=c(152),h=function(t){var e=t.children;return Object(b.jsx)(j.a,{item:!0,xs:12,md:6,xl:4,children:Object(b.jsx)(u.a,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{children:e})})})})},p=function(t){var e=t.title,c=t.children;return Object(b.jsxs)(h,{children:[Object(b.jsx)(s.a,{variant:"h6",color:"text.secondary",gutterBottom:!0,children:e}),c]})},g=function(t){var e=t.children;return Object(b.jsx)(s.a,{variant:"h2",align:"center",children:e})},v=function(t){var e=t.title,c=t.model,a=t.attr,i=t.suffix,l=void 0===i?" tweets":i,r=t.multiplier,o=void 0===r?1:r,n=t.forceDecimalPlaces,s=void 0===n?0:n;return Object(b.jsx)(p,{title:e,children:Object(b.jsxs)(g,{children:[c&&(+a.split(".").reduce((function(t,e){return t[e]}),c)*o).toFixed(s)+l,!c&&Object(b.jsx)(O.BounceLoader,{})]})})},N=i.a.createContext(),P=function(){var t=Object(a.useContext)(N);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{style:{display:"flex",textAlign:"center"},mx:4,ml:6,xs:12,maxWidth:"79%",children:Object(b.jsx)(s.a,{children:'Este dashboard \xe9 um prot\xf3tipo constru\xeddo em React + MaterialUI que visa apresentar resultados referentes \xe0 pesquisa "AN\xc1LISE DE SENTIMENTOS DO TWITTER SOBRE A ATUAL SITUA\xc7\xc3O DA POL\xcdTICA BRASILEIRA".'})}),Object(b.jsxs)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:[Object(b.jsx)(v,{title:"Tamanho do dataset",model:t,attr:"dataset.datasetLength"}),Object(b.jsx)(v,{title:"Qtd. de tweets neutros",model:t,attr:"dataset.noNeutrals"}),Object(b.jsx)(v,{title:"Qtd. de tweets positivos",model:t,attr:"dataset.noPositives"}),Object(b.jsx)(v,{title:"Qtd. de tweets negativos",model:t,attr:"dataset.noNegatives"})]})]})},D=c(289),A=c.p+"static/media/output.98022880.png",B=function(){var t=function(t){var e=t.children;return Object(b.jsx)(j.a,{item:!0,xs:12,children:Object(b.jsx)(u.a,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{children:e})})})})},e=function(e){var c=e.title,a=e.children;return Object(b.jsxs)(t,{children:[Object(b.jsx)(s.a,{variant:"h6",color:"text.secondary",gutterBottom:!0,children:c}),a]})};return Object(b.jsx)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:Object(b.jsx)(e,{title:"Word Cloud",children:Object(b.jsx)(D.a,{component:"img",image:A})})})},S=function(){var t=function(t){var e=t.children;return Object(b.jsx)(j.a,{item:!0,xs:12,children:Object(b.jsx)(u.a,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{children:e})})})})},e=function(e){var c=e.title,a=e.children;return Object(b.jsxs)(t,{children:[Object(b.jsx)(s.a,{variant:"h6",color:"text.secondary",gutterBottom:!0,children:c}),a]})};return Object(b.jsx)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:Object(b.jsx)(e,{title:"Oops!!",children:Object(b.jsx)(s.a,{children:"Desculpe, esta p\xe1gina n\xe3o existe. \ud83d\ude22"})})})},C=c(31),y=c(281),F=c(38),k=c(43),L=Object(F.f)(k.a),W=function(){return Object(b.jsx)(L,{})},K=c(276),T=c(110),V=Object(F.g)(k.a),I=Object(F.i)(k.a),E=function(){return Object(b.jsx)(V,{children:Object(b.jsxs)(K.a,{children:[Object(b.jsx)(I,{sidebarId:"main"}),Object(b.jsx)(T.a,{children:"An\xe1lise de sentimentos da pol\xedtica brasileira"})]})})},R=c(280),w=c(162),M=c.n(w),J=c(163),Q=c.n(J),U=c(57),q=c.n(U),G=c(277),H=c(278),z=c(279),X=function(t){var e=t.icon,c=t.title,a=t.to;return Object(b.jsx)(o.b,{exact:!0,to:a,activeStyle:{color:"#d00"},children:Object(b.jsxs)(G.a,{button:!0,children:[Object(b.jsx)(H.a,{children:e}),Object(b.jsx)(z.a,{primary:c})]})})},Y=Object(F.e)(k.a),Z=Object(F.h)(k.a),$=Object(F.c)(k.a),_=[{to:"/",icon:Object(b.jsx)(M.a,{}),name:"In\xedcio"},{to:"/cloud",icon:Object(b.jsx)(Q.a,{}),name:"Word Cloud"},{to:"/mnb",icon:Object(b.jsx)(q.a,{}),name:"MultinomialNB"},{to:"/bnb",icon:Object(b.jsx)(q.a,{}),name:"BernoulliNB"},{to:"/cnb",icon:Object(b.jsx)(q.a,{}),name:"ComplementNB"},{to:"/gnb",icon:Object(b.jsx)(q.a,{}),name:"GaussianNB"},{to:"/svc",icon:Object(b.jsx)(q.a,{}),name:"SVC"},{to:"/lsvc",icon:Object(b.jsx)(q.a,{}),name:"LSVC"},{to:"/knn",icon:Object(b.jsx)(q.a,{}),name:"KNN"}],tt=function(t){var e=t.sidebarState;return Object(b.jsxs)(Y,{sidebarId:"main",children:[Object(b.jsx)(Z,{style:{textAlign:"center",marginTop:20},children:(e.open||!e.collapsed)&&Object(b.jsx)(R.a,{children:_.map((function(t){return Object(b.jsx)(X,{to:t.to,icon:t.icon,title:t.name})}))})}),Object(b.jsx)($,{})]})},et=Object(F.b)();et.configureHeader((function(t){t.registerConfig("xs",{position:"sticky"}).registerConfig("md",{position:"relative"})})),et.configureEdgeSidebar((function(t){t.create("main",{anchor:"left"}).registerTemporaryConfig("xs",{width:"auto"})})),et.configureEdgeSidebar((function(t){t.create("main",{anchor:"left"}).registerTemporaryConfig("xs",{anchor:"left",width:"auto"}).registerPermanentConfig("md",{width:256,collapsible:!0,collapsedWidth:64})}));var ct=Object(F.d)(k.a),at=function(t){var e=t.children,i=Object(a.useState)(!1),l=Object(C.a)(i,2),r=l[0],o=l[1];return Object(a.useEffect)((function(){var t=c(237);o(t)}),[]),Object(b.jsx)(N.Provider,{value:r,children:Object(b.jsx)("div",{children:Object(b.jsx)(F.a,{scheme:et,children:function(t){var c=t.state.sidebar;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.a,{}),Object(b.jsx)(tt,{sidebarState:c.main}),Object(b.jsx)(E,{}),Object(b.jsx)(ct,{children:e}),Object(b.jsx)(W,{})]})}})})})},it=function(){var t=Object(a.useContext)(N);return Object(b.jsxs)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:[Object(b.jsx)(v,{title:"Acur\xe1cia (total)",model:t,attr:"multinomialNB.total.accuracy",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Acur\xe1cia m\xe9dia - KFold (total)",model:t,attr:"multinomialNB.total.kfoldAvg",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Precis\xe3o (total)",model:t,attr:"multinomialNB.total.precision",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Revoca\xe7\xe3o (total)",model:t,attr:"multinomialNB.total.recall",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"F1-Score (total)",model:t,attr:"multinomialNB.total.f1",multiplier:100,suffix:"%",forceDecimalPlaces:2})]})},lt=function(){var t=Object(a.useContext)(N);return Object(b.jsxs)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:[Object(b.jsx)(v,{title:"Acur\xe1cia (total)",model:t,attr:"complementNB.total.accuracy",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Acur\xe1cia m\xe9dia - KFold (total)",model:t,attr:"complementNB.total.kfoldAvg",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Precis\xe3o (total)",model:t,attr:"complementNB.total.precision",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Revoca\xe7\xe3o (total)",model:t,attr:"complementNB.total.recall",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"F1-Score (total)",model:t,attr:"complementNB.total.f1",multiplier:100,suffix:"%",forceDecimalPlaces:2})]})},rt=function(){var t=Object(a.useContext)(N);return Object(b.jsxs)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:[Object(b.jsx)(v,{title:"Acur\xe1cia (total)",model:t,attr:"complementNB.total.accuracy",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Acur\xe1cia m\xe9dia - KFold (total)",model:t,attr:"complementNB.total.kfoldAvg",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Precis\xe3o (total)",model:t,attr:"complementNB.total.precision",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Revoca\xe7\xe3o (total)",model:t,attr:"complementNB.total.recall",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"F1-Score (total)",model:t,attr:"complementNB.total.f1",multiplier:100,suffix:"%",forceDecimalPlaces:2})]})},ot=function(){var t=Object(a.useContext)(N);return Object(b.jsxs)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:[Object(b.jsx)(v,{title:"Acur\xe1cia (total)",model:t,attr:"gaussianNB.total.accuracy",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Acur\xe1cia m\xe9dia - KFold (total)",model:t,attr:"gaussianNB.total.kfoldAvg",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Precis\xe3o (total)",model:t,attr:"gaussianNB.total.precision",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Revoca\xe7\xe3o (total)",model:t,attr:"gaussianNB.total.recall",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"F1-Score (total)",model:t,attr:"gaussianNB.total.f1",multiplier:100,suffix:"%",forceDecimalPlaces:2})]})},nt=function(){var t=Object(a.useContext)(N);return Object(b.jsxs)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:[Object(b.jsx)(v,{title:"Acur\xe1cia (total)",model:t,attr:"SVC.total.accuracy",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Acur\xe1cia m\xe9dia - KFold (total)",model:t,attr:"SVC.total.kfoldAvg",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Precis\xe3o (total)",model:t,attr:"SVC.total.precision",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Revoca\xe7\xe3o (total)",model:t,attr:"SVC.total.recall",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"F1-Score (total)",model:t,attr:"SVC.total.f1",multiplier:100,suffix:"%",forceDecimalPlaces:2})]})},st=function(){var t=Object(a.useContext)(N);return Object(b.jsxs)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:[Object(b.jsx)(v,{title:"Acur\xe1cia (total)",model:t,attr:"LSVC.total.accuracy",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Acur\xe1cia m\xe9dia - KFold (total)",model:t,attr:"LSVC.total.kfoldAvg",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Precis\xe3o (total)",model:t,attr:"LSVC.total.precision",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Revoca\xe7\xe3o (total)",model:t,attr:"LSVC.total.recall",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"F1-Score (total)",model:t,attr:"LSVC.total.f1",multiplier:100,suffix:"%",forceDecimalPlaces:2})]})},jt=function(){var t=Object(a.useContext)(N);return Object(b.jsxs)(j.a,{container:!0,spacing:2,mt:2,mx:4,maxWidth:"80%",children:[Object(b.jsx)(v,{title:"Acur\xe1cia (total)",model:t,attr:"KNN.total.accuracy",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Acur\xe1cia m\xe9dia - KFold (total)",model:t,attr:"KNN.total.kfoldAvg",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Precis\xe3o (total)",model:t,attr:"KNN.total.precision",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"Revoca\xe7\xe3o (total)",model:t,attr:"KNN.total.recall",multiplier:100,suffix:"%",forceDecimalPlaces:2}),Object(b.jsx)(v,{title:"F1-Score (total)",model:t,attr:"KNN.total.f1",multiplier:100,suffix:"%",forceDecimalPlaces:2})]})};var mt=function(){return Object(b.jsx)(o.a,{basename:"/political-sentiment-dashboard",children:Object(b.jsx)(at,{children:Object(b.jsxs)(n.c,{children:[Object(b.jsx)(n.a,{path:"/cloud",children:Object(b.jsx)(B,{})}),Object(b.jsx)(n.a,{path:"/mnb",children:Object(b.jsx)(it,{})}),Object(b.jsx)(n.a,{path:"/bnb",children:Object(b.jsx)(lt,{})}),Object(b.jsx)(n.a,{path:"/cnb",children:Object(b.jsx)(rt,{})}),Object(b.jsx)(n.a,{path:"/gnb",children:Object(b.jsx)(ot,{})}),Object(b.jsx)(n.a,{path:"/svc",children:Object(b.jsx)(nt,{})}),Object(b.jsx)(n.a,{path:"/lsvc",children:Object(b.jsx)(st,{})}),Object(b.jsx)(n.a,{path:"/knn",children:Object(b.jsx)(jt,{})}),Object(b.jsx)(n.a,{exact:!0,path:"/",children:Object(b.jsx)(P,{})}),Object(b.jsx)(n.a,{path:"/",children:Object(b.jsx)(S,{})})]})})})},dt=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,290)).then((function(e){var c=e.getCLS,a=e.getFID,i=e.getFCP,l=e.getLCP,r=e.getTTFB;c(t),a(t),i(t),l(t),r(t)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(mt,{})}),document.getElementById("root")),dt()}},[[239,1,2]]]);
//# sourceMappingURL=main.1547cc4f.chunk.js.map