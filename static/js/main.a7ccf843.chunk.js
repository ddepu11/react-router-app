(this.webpackJsonpr2=this.webpackJsonpr2||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(16),s=c.n(r),j=(c(24),c(12)),a=c.n(j),i=c(17),l=c(19),b=c(0),o=Object(n.createContext)(),d=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(l.a)(c,2),s=r[0],j=r[1];return Object(b.jsx)(o.Provider,{value:{setCart:j,cart:s},children:t})},h=function(){return Object(n.useContext)(o)},u=function(e){var t=h().setCart;function c(){return(c=Object(i.a)(a.a.mark((function c(){var n,r,s;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch(e);case 3:return n=c.sent,c.next=6,n.json();case 6:r=c.sent,s=r.cart,t(s),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.log(c.t0);case 14:case"end":return c.stop()}}),c,null,[[0,11]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[])},x=c(7),O=c(2);function p(){return Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("ul",{className:"links flex",children:[Object(b.jsx)("li",{children:Object(b.jsx)(x.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(x.b,{to:"/about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(x.b,{to:"/contact",children:"Contact"})})]})})}function f(){var e=h().cart;return Object(b.jsxs)("div",{className:"cart card",children:[Object(b.jsx)("h1",{children:"Products:"}),Object(b.jsx)("ul",{children:e.map((function(e,t){return Object(b.jsxs)("li",{className:"li flex",children:[Object(b.jsx)("p",{children:e.title}),Object(b.jsx)(x.b,{className:"detail",to:"/product/".concat(e.id),children:"Details"})]},t)}))})]})}function m(){return Object(b.jsx)(f,{})}function v(){return Object(b.jsx)("div",{className:"about",children:Object(b.jsx)("h1",{children:"j"})})}function g(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Error"})})}function N(){var e=h().cart,t=Object(O.f)().id,c=0!==e.length?e.filter((function(e){return e.id===+t})):[];return console.log(c),Object(b.jsx)("div",{className:"product flex",children:0===c.length?Object(b.jsx)("h2",{className:"loading",children:"Loading..."}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:c[0].imgSrc,alt:c[0].title}),Object(b.jsx)("p",{children:c[0].title}),Object(b.jsxs)("span",{children:["\u20b9",c[0].price]})]})})}var k=function(){return u("https://furniture-cart-react-app.herokuapp.com/"),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(x.a,{children:[Object(b.jsx)(p,{}),Object(b.jsx)("main",{className:"hero",children:Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/",exact:!0,children:Object(b.jsx)(m,{})}),Object(b.jsx)(O.a,{path:"/about",children:Object(b.jsx)(v,{})}),Object(b.jsx)(O.a,{path:"/Cart",children:Object(b.jsx)(f,{})}),Object(b.jsx)(O.a,{path:"/product/:id",children:Object(b.jsx)(N,{})}),Object(b.jsx)(O.a,{path:"*",children:Object(b.jsx)(g,{})})]})})]})})};s.a.render(Object(b.jsx)(d,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a7ccf843.chunk.js.map