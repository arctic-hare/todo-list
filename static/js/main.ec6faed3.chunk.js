(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{34:function(e,t,a){e.exports=a(71)},39:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=(a(39),a(5)),l=a(1),u=function(e){return{type:"FETCH_TODOS",payload:e}},s=function(e,t){return{type:"ADD_TODO",payload:{id:e,title:t}}},m=function(e,t){return{type:"EDIT_TODO",payload:{id:e,title:t}}},d=function(){return{type:"SHOW_LOADER",payload:{}}},p=function(e){return{type:"REMOVE_TODO",payload:{id:e}}},b=a(30),f=a.n(b).a.create({baseURL:"https://test.megapolis-it.ru/api/list"}),O={fetchTodos:function(){return f.get("").then((function(e){return{items:e.data.data}}))},addTodo:function(e){return f.post("",e).then((function(e){return e.data}))},editTodo:function(e,t){return f.post("".concat(e),t)},deleteTodo:function(e){return f.delete("".concat(e))}};function E(e){var t=Object(l.b)();return r.a.createElement("div",{className:"todo-item"},r.a.createElement("div",{className:"todo-item__id"},r.a.createElement("span",null,"\u0417\u0430\u0434\u0430\u0447\u0430")," \u2116",e.id),r.a.createElement("div",{className:"todo-item__title"},e.title),r.a.createElement("div",{className:"todo-item__control"},r.a.createElement(o.A,{href:"/".concat(e.id),className:"todo-item__edit"},r.a.createElement("span",{className:"i-edit"})),r.a.createElement("button",{type:"button",className:"todo-item__remove",onClick:function(){t(d()),O.deleteTodo(e.id).then((function(){t(p(e.id))}))}},r.a.createElement("span",{className:"i-remove"}))))}var v=a(3),j=a(9),y=a.n(j),h=r.a.createContext({data:null});function g(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),c=a[0],i=a[1];function o(){i(!1)}var l={closePopup:o};return r.a.createElement("div",{className:y()("popup",e.modifier)},r.a.createElement("button",{type:"button",className:"btn ml-auto",onClick:function(){i(!0)}},e.btnText),c&&r.a.createElement("div",{className:"popup__body"},r.a.createElement("div",{className:"popup__overlay",onClick:o}),r.a.createElement("div",{className:"popup__inner"},r.a.createElement("div",{className:"popup__content"},r.a.createElement(h.Provider,{value:{popup:l}},e.children)),r.a.createElement("button",{type:"button",className:"popup__close",onClick:o},r.a.createElement("span",{className:"i-close"})))))}function N(e){var t=Object(n.useState)(e.initValue||""),a=Object(v.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(!1),l=Object(v.a)(o,2),u=l[0],s=l[1];return r.a.createElement("div",{className:y()("form-group",e.className,{required:e.required,disabled:e.disabled})},r.a.createElement("label",{htmlFor:e.id,className:"control-label"},e.label),r.a.createElement("input",{type:"text",className:"form-control",onInvalid:function(e){e.preventDefault(),s(!0)},onChange:function(t){e.onChange(t.target.value),i(t.target.value)},value:c,required:e.required,style:e.style}),u&&0===String(c).length&&r.a.createElement("span",{className:"invalid-feedback"},"\u041f\u043e\u043b\u0435 \xab",e.label,"\xbb \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"))}function _(){var e=r.a.useContext(h).popup,t=Object(n.useState)(""),a=Object(v.a)(t,2),c=a[0],i=a[1],o=Object(l.b)();return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),O.addTodo({title:c}).then((function(t){var a=t.id;o(s(a,c)),e.closePopup()}))}},r.a.createElement(N,{label:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",initValue:c,onChange:i,id:"add_task",required:!0}),r.a.createElement("div",{className:"d-flex"},r.a.createElement("button",{type:"submit",className:"btn ml-auto"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))}var D=function(){var e=Object(l.c)((function(e){return e.items}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex mb-4"},r.a.createElement("h1",{className:"m-0"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"),r.a.createElement(g,{btnText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",modifier:"popup--add-task"},r.a.createElement(_,null))),r.a.createElement("div",{className:"list"},e.map((function(e){return r.a.createElement(E,Object.assign({},e,{key:e.id}))}))))},T=function(e){return e?r.a.createElement(o.A,{href:"/",className:"btn btn-info"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0441\u043f\u0438\u0441\u043a\u0443"):r.a.createElement("button",{type:"submit",className:"btn"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")};function w(e){var t=Object(n.useState)(e.title),a=Object(v.a)(t,2),c=a[0],i=a[1],u=Object(l.b)();return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),u(d()),O.editTodo(e.id,{title:c}).then((function(){u(m(e.id,c)),Object(o.navigate)("/")}))}},r.a.createElement("div",{className:"d-flex mb-4"},r.a.createElement("h1",null,"\u0417\u0430\u0434\u0430\u0447\u0430 \u2116",e.id),r.a.createElement("button",{type:"button",className:"btn btn-danger ml-auto",onClick:function(){u(d()),O.deleteTodo(e.id).then((function(){u(p(e.id))}))}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),r.a.createElement(N,{onChange:i,label:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",initValue:c,style:{maxWidth:"400px"},required:!0}),T(c===e.title))}var k=function(e){return{"/":function(){return r.a.createElement(D,null)},"/:id":function(t){var a=t.id,n=e.find((function(e){return+e.id===+a}));return n?r.a.createElement(w,{id:+a,title:n.title}):null}}},S=r.a.createElement("div",{className:"loader-waiting"},r.a.createElement("div",{className:"loader",role:"progressbar"},r.a.createElement("svg",{viewBox:"22 22 44 44"},r.a.createElement("circle",{className:"circle",cx:"44",cy:"44",r:"20.2",fill:"none",strokeWidth:"3.6"}))));function x(e){var t=Object(l.c)((function(e){return e.isLoading}));return r.a.createElement("div",{className:y()({"loader-wrapper":t})},e.children,t&&S)}var C=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.items}));Object(n.useEffect)((function(){O.fetchTodos().then((function(t){e(u(t.items))}))}),[e]);var a=Object(o.useRoutes)(k(t));return r.a.createElement("div",{className:"App"},r.a.createElement(x,null,r.a.createElement("main",{className:"all"},t.length>0&&r.a.createElement("div",{className:"container"},a||Object(o.navigate)("/")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L,P=a(8),A=a(31),W=a(32),q=a(33),F=a(6);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){Object(F.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={items:[],isLoading:!0},I=(L={},Object(F.a)(L,"SHOW_LOADER",(function(e){return V({},e,{isLoading:!0})})),Object(F.a)(L,"ADD_TODO",(function(e,t){var a=t.payload;return V({},e,{items:[].concat(Object(q.a)(e.items),[a])})})),Object(F.a)(L,"EDIT_TODO",(function(e,t){var a=t.payload;return V({},e,{isLoading:!1,items:e.items.map((function(e){return e.id===a.id?{title:a.title,id:a.id}:e}))})})),Object(F.a)(L,"FETCH_TODOS",(function(e,t){return V({},e,{items:t.payload,isLoading:!1})})),Object(F.a)(L,"REMOVE_TODO",(function(e,t){var a=t.payload;return V({},e,{isLoading:!1,items:e.items.filter((function(e){return a.id!==e.id}))})})),Object(F.a)(L,"DEFAULT",(function(e){return e})),L),B=Object(P.createStore)((function(e,t){return(I[t.type]||I.DEFAULT)(void 0===e?H:e,t)}),Object(W.composeWithDevTools)(Object(P.applyMiddleware)(A.a)));i.a.render(r.a.createElement(l.a,{store:B},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.ec6faed3.chunk.js.map