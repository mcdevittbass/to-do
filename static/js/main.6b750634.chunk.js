(this["webpackJsonpant-app"]=this["webpackJsonpant-app"]||[]).push([[0],{146:function(e,t,a){e.exports=a(276)},151:function(e,t,a){},271:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),r=a.n(l),o=(a(151),a(85)),i=a(51),u=a(283),m=a(61),s=a(39),d=a(279),E=a(285),k=a(284),b=a(282),h=a(49),f=a(280),y=a(278),p=a(281),v=a(277),j=a(286),g=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(null),u=Object(i.a)(o,2),d=u[0],E=u[1],k=function(){r(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{type:"default",style:{color:"#5b8c00"},icon:c.a.createElement(j.a,null),size:"small",onClick:function(){E(null),r(!0)}},"Add task"),c.a.createElement(f.a,{visible:l,onCancel:k,footer:null},c.a.createElement(m.a,null,c.a.createElement(s.a,{span:20},c.a.createElement(y.a,null,c.a.createElement(y.a.Item,{name:"textInput"},c.a.createElement(p.a,{placeholder:"Task",id:"task-input",name:"item",onChange:function(e){return E(e.target.value)}})),c.a.createElement(y.a.Item,{name:"buttons"},c.a.createElement(v.a,null,c.a.createElement(h.a,{type:"default",style:{color:"#5b8c00"},htmlType:"cancel",onClick:k},"Cancel"),c.a.createElement(h.a,{type:"primary",style:{background:"#5b8c00"},htmlType:"submit",onClick:function(){e.onSubmit(d),k()}},"Add Task"))))))))},C=a(287),O=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],r=a[1],f=Object(n.useState)("Hide Checked"),y=Object(i.a)(f,2),p=y[0],v=y[1],j=Object(n.useState)(!0),O=Object(i.a)(j,2),w=O[0],S=O[1],x=Object(n.useState)([]),T=Object(i.a)(x,2),N=T[0],H=T[1],I=u.a.Header,A=u.a.Content;return c.a.createElement(u.a,{className:"layout"},c.a.createElement(I,null,c.a.createElement("div",{className:"head"},"Your To Do List!")),c.a.createElement(A,null,c.a.createElement("div",{className:"content"},c.a.createElement(m.a,{style:{justifyContent:"center"}},c.a.createElement(s.a,null,c.a.createElement("div",{className:"site-card-border-less-wrapper"},c.a.createElement(d.a,{bordered:!1,style:{width:300},className:"card"},c.a.createElement("div",{style:{textAlign:"center",margin:"10px"}},c.a.createElement("p",null,p),c.a.createElement(E.a,{checked:w,onChange:function(){!0===w?(H(l.filter((function(e){return!0===e.checked}))),r(l.filter((function(e){return!1===e.checked})))):(r([].concat(Object(o.a)(l),Object(o.a)(N))),H([])),S(!w),v("Hide Checked"===p?"Show Checked":"Hide Checked")},style:{background:"#5b8c00"}},"Hide checked")),c.a.createElement("ul",{style:{listStyleType:"none"}},l.map((function(e){return c.a.createElement("li",{key:e.key},c.a.createElement(k.a,{className:"ant-checkbox",checked:e.checked,onChange:function(){return function(e){var t=!0!==e.checked;r(l.map((function(a){return a.key===e.key?{key:a.key,text:a.text,checked:t}:a})))}(e)}},e.text,c.a.createElement(b.a,{title:"Remove list item"},c.a.createElement(h.a,{type:"text",icon:c.a.createElement(C.a,{style:{color:"red"}}),size:"small",onClick:function(){return function(e){r(l.filter((function(t){return t.key!==e.key})))}(e)}}))),c.a.createElement("br",null))}))),c.a.createElement("br",null),c.a.createElement(g,{onSubmit:function(e){var t=(new Date).getTime();r([].concat(Object(o.a)(l),[{key:t,text:e,checked:!1}]))}}))))))))},w=a(139);a(271);var S=function(){return c.a.createElement(w.a,null,c.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(275);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.6b750634.chunk.js.map