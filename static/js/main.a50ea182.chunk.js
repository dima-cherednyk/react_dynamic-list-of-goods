(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),c=e(3),a=e(6),s=e(1),u=e.n(s),i=e(2);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}e(12);var f=e(0),l=function(t){var n=t.goods;return Object(f.jsx)("ul",{children:n.map((function(t){return Object(f.jsx)("li",{"data-cy":"good",style:{color:"".concat(t.color)},children:t.name},t.id)}))})},p=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],o=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Dynamic list of Goods"}),Object(f.jsx)("button",{type:"button","data-cy":"all-button",onClick:o,children:"Load all goods"}),Object(f.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:s,children:"Load 5 first goods"}),Object(f.jsx)("button",{type:"button","data-cy":"red-button",onClick:p,children:"Load red goods"}),e.length>0&&Object(f.jsx)(l,{goods:e})]})};o.a.render(Object(f.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a50ea182.chunk.js.map