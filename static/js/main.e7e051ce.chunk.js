(this.webpackJsonpblitz_jun=this.webpackJsonpblitz_jun||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(21),a=n.n(s),i=(n(28),n(10)),r=n(8),o=(n(29),n(30),n(7)),l=n(1),j=function(e){var t=e.name,n=e.bgUrl;return Object(l.jsx)("li",{children:Object(l.jsxs)(o.b,{to:{pathname:"/".concat(t)},className:"pokeCard",children:[Object(l.jsx)("div",{className:"pokeImg",style:{backgroundImage:"url(".concat(n,")")}}),Object(l.jsx)("div",{className:"pokeName",children:t})]})})},u=(n(37),function(e){var t=e.pokeNames,n=e.pokeImgUrls;return Object(l.jsx)("ul",{className:"pokeCards",children:t.map((function(e,t){return Object(l.jsx)(j,{name:e,bgUrl:n[t]},t)}))})}),b=n(19),m=(n(38),function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useRef)(null);Object(c.useEffect)((function(){for(var e=1;e<9;e++)fetch("https://pokeapi.co/api/v2/generation/".concat(e)).then((function(e){return e.json()})).then((function(e){s((function(t){return[].concat(Object(i.a)(t),[Object(i.a)(e.pokemon_species.map((function(e){return e.name}))).sort()])}))}))}),[]);var j=function(){a.current.classList.toggle("navbar--active")};return Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)(o.b,{to:"#",className:"menu--open",onClick:j,children:"MENU"}),Object(l.jsxs)("nav",{className:"navbar",ref:a,children:[Object(l.jsx)(o.b,{to:"#",className:"menu--close",onClick:j,children:Object(l.jsx)(b.b,{})}),Object(l.jsx)("ul",{className:"generations-list",children:n.map((function(e,t){return Object(l.jsxs)("li",{className:"generation",children:[Object(l.jsxs)("button",{className:"generation__btn",onClick:function(e){return function(e){e.target.nextSibling.classList.toggle("generation__list--active")}(e)},children:[++t+" GENERATION"," ",Object(l.jsx)(b.a,{})]}),Object(l.jsx)("ul",{className:"generation__list",children:e.map((function(e,t){return Object(l.jsx)("li",{className:"generation__item",children:Object(l.jsx)(o.b,{to:{pathname:"/".concat(e)},className:"generation__link",onClick:j,children:e})},t)}))})]},t)}))})]})]})}),d=n(2),h=n(18),p=n.n(h),f=n(23),O=(n(40),function(){var e=Object(d.e)().pokeName,t=Object(c.useState)({}),n=Object(r.a)(t,2),s=n[0],a=n[1],i=function(){var t=Object(f.a)(p.a.mark((function t(){var n,c,s,i,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://pokeapi.co/api/v2/pokemon/".concat(e),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:s=t.sent,i=s.types.map((function(e){return e.type.name})),r=s.abilities.map((function(e){return e.ability.name})),a({id:s.id,height:s.height,weight:s.weight,types:i.join(", "),abilities:r.join(", "),imgUrl:s.sprites.front_default});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[s]),Object(l.jsxs)("div",{className:"pokeDetails",children:[Object(l.jsx)("h1",{className:"pokeDetails__name",children:e}),Object(l.jsxs)("div",{className:"pokeDetail__id",children:["#",s.id]}),Object(l.jsx)("div",{className:"pokeDetails__img",style:{backgroundImage:"url(".concat(s.imgUrl,")")}}),Object(l.jsxs)("div",{className:"pokeDetails__container",children:[Object(l.jsxs)("div",{className:"pokeDetails__height",children:[Object(l.jsx)("div",{className:"pokeDetails__left_raw",children:"height:"}),Object(l.jsxs)("div",{className:"pokeDetails__right_raw",children:[s.height/10,"m"]})]}),Object(l.jsxs)("div",{className:"pokeDetails__weight",children:[Object(l.jsx)("div",{className:"pokeDetails__left_raw",children:"weight:"}),Object(l.jsxs)("div",{className:"pokeDetails__right_raw",children:[s.weight/10,"kg"]})]}),Object(l.jsxs)("div",{className:"pokeDetails__types",children:[Object(l.jsx)("div",{className:"pokeDetails__left_raw",children:"type(s):"}),Object(l.jsx)("div",{className:"pokeDetails__right_raw",children:s.types})]}),Object(l.jsxs)("div",{className:"pokeDetails__abilities",children:[Object(l.jsx)("div",{className:"pokeDetails__left_raw",children:"abilities:"}),Object(l.jsx)("div",{className:"pokeDetails__right_raw",children:s.abilities})]})]})]})});var _=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),o=Object(r.a)(a,2),j=o[0],b=o[1],h=Object(c.useState)(0),p=Object(r.a)(h,2),f=p[0],_=p[1];Object(c.useEffect)((function(){!function(e){var t="https://pokeapi.co/api/v2/pokemon/?offset=".concat(20*e,"&limit=20");fetch(t).then((function(e){return e.json()})).then((function(e){e.results.map((function(e){return s((function(t){return[].concat(Object(i.a)(t),[e.name])})),fetch(e.url).then((function(e){return e.json()})).then((function(e){var t=e.sprites.front_default;b((function(e){return[].concat(Object(i.a)(e),[t])}))}))}))}))}(f)}),[f]);var x=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&_((function(e){return e+1}))};return Object(c.useEffect)((function(){window.addEventListener("scroll",x)}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{}),Object(l.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(l.jsx)(u,{pokeNames:n,pokeImgUrls:j})}}),Object(l.jsx)(d.a,{exact:!0,path:"/:pokeName",render:function(){return Object(l.jsx)(O,{})}})]})};a.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(_,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e7e051ce.chunk.js.map