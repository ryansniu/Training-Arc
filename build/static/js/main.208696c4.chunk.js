(this["webpackJsonpword-problem-solver"]=this["webpackJsonpword-problem-solver"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),c=n(16),o=n.n(c),a=(n(22),n(23),n(24),n(9)),i=n(1);var u=function(){return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("p",{className:"navbar-component",children:Object(i.jsx)(a.b,{to:"/input-form",style:{textDecoration:"none",color:"#F6DD90"},children:"Word Problem Solver"})}),Object(i.jsx)("p",{className:"navbar-component",children:Object(i.jsx)(a.b,{to:"/take-quiz",style:{textDecoration:"none",color:"#F6DD90"},children:"Take Quiz"})})]})},l=n(8);n(31);var j=function(){var e=r.a.useRef(null),t={},n=[],c=0,o=[],a=Object(s.useState)([]),u=Object(l.a)(a,2),j=u[0],b=u[1],p=Object(s.useState)([]),x=Object(l.a)(p,2),h=x[0],d=x[1];return Object(s.useEffect)((function(){}),[j]),Object(i.jsxs)("div",{className:"input-form",children:[Object(i.jsxs)("form",{onSubmit:function(s){s.preventDefault(),fetch("/wolfram",{method:"POST",cache:"no-cache",headers:{content_type:"application/json"},body:JSON.stringify(e.current.value)}).then((function(e){return e.json()})).then((function(e){if(!1===e.queryresult.success)o.push("Can't solve word problem. Try another problem!");else{var s;for(t=e.queryresult,c=t.numpods,s=0;s<c;s++){var r,a=t.pods[s],i=a.numsubpods;for(r=0;r<i;r++)o.push(JSON.stringify(a.subpods[r].plaintext))}var u,l=e.topics;for(u=0;u<l.length;u++)n.push(JSON.stringify(l[u]))}b(o),d(n)}))},children:[Object(i.jsxs)("label",{className:"textbox-label",children:["Put word problem here:",Object(i.jsx)("input",{className:"input-component",type:"text",name:"problem",ref:e})]}),Object(i.jsx)("input",{className:"submit",type:"submit",value:"Submit"})]}),j.map((function(e,t){var n=e.split("\\n").map((function(e){return Object(i.jsx)("p",{className:"queries",children:e})}));return Object(i.jsxs)("div",{children:[n,Object(i.jsx)("br",{})]})})),h.map((function(e,t){return Object(i.jsx)("p",{className:"topics",children:e})}))]})};n(32);var b=function(){var e=[{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]}],t=Object(s.useState)(0),n=Object(l.a)(t,2),r=n[0],c=n[1],o=Object(s.useState)(!1),a=Object(l.a)(o,2),u=a[0],j=a[1],b=Object(s.useState)(0),p=Object(l.a)(b,2),x=p[0],h=p[1];return Object(i.jsx)("div",{className:"app",children:u?Object(i.jsxs)("div",{className:"score-section",children:["You scored ",x," out of ",e.length]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"question-section",children:[Object(i.jsxs)("div",{className:"question-count",children:[Object(i.jsxs)("span",{children:["Question ",r+1]}),"/",e.length]}),Object(i.jsx)("div",{className:"question-text",children:e[r].questionText})]}),Object(i.jsx)("div",{className:"answer-section",children:e[r].answerOptions.map((function(t){return Object(i.jsx)("button",{onClick:function(){return function(t){t&&h(x+1);var n=r+1;n<e.length?c(n):j(!0)}(t.isCorrect)},children:t.answerText})}))})]})})},p=n(2);var x=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsxs)(p.c,{children:[Object(i.jsx)(p.a,{path:"/input-form",component:Object(p.f)(j)}),Object(i.jsx)(p.a,{path:"/take-quiz",component:Object(p.f)(b)})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(a.a,{children:Object(i.jsx)(x,{})})}),document.getElementById("root")),h()}},[[33,1,2]]]);
//# sourceMappingURL=main.208696c4.chunk.js.map