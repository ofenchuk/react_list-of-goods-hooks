(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),c=n.n(o),i=n(6),r=n(8),u=n(1),a=(n(13),n(14),n(4)),l=n.n(a),b=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var h=function(){var t=Object(u.useState)(!1),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(u.useState)(s.NONE),a=Object(i.a)(c,2),h=a[0],d=a[1],N=function(t,e){var n=e.sortType,o=e.isReversed,c=Object(r.a)(t);return n===s.ALPHABET&&c.sort((function(t,e){return t.localeCompare(e)})),n===s.LENGTH&&c.sort((function(t,e){return t.length-e.length})),o&&c.reverse(),c}(j,{sortType:h,isReversed:n}),O=n||h!==s.NONE;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":h!==s.ALPHABET}),onClick:function(){return d(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":h!==s.LENGTH}),onClick:function(){return d(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":!n}),onClick:function(){return o(!n)},children:"Reverse"}),O&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(!1),d(s.NONE)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:N.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};c.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e226a27e.chunk.js.map