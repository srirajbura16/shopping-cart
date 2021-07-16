(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{32:function(t,e,c){"use strict";c.r(e);var i=c(1),n=c.n(i),s=c(17),r=c.n(s),j=c(7),a=c(2),o=(c(9),c(4)),l=c(0),d=Object(i.createContext)(),b=function(t){var e=Object(i.useState)([]),c=Object(o.a)(e,2),n=c[0],s=c[1];return Object(l.jsx)(d.Provider,{value:[n,s],children:t.children})};var O=function(t){t.title;var e=t.price,c=t.amount,n=t.img,s=t.id,r=Object(i.useContext)(d),j=Object(o.a)(r,2);return j[0],j[1],Object(l.jsxs)("tr",{className:"cart-items",children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{className:"cart-item-img",children:Object(l.jsx)("img",{src:window.location.origin+"/assets/".concat(n)})})}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{children:s})}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{children:c})}),Object(l.jsx)("td",{children:Object(l.jsx)("div",{children:e})})]})};var h=function(t){var e=Object(i.useContext)(d),c=Object(o.a)(e,2),n=c[0];function s(){var t=0;n.forEach((function(e){t+=e.price*e.amount}));var e=(t+.13*t).toFixed(2);return{subTotal:t,total:e}}return c[1],Object(l.jsxs)("div",{className:"Cart",children:[Object(l.jsx)("div",{className:"cart-products",children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("thead",{children:[Object(l.jsx)("th",{children:"Description"}),Object(l.jsx)("th",{children:"Item ID"}),Object(l.jsx)("th",{children:"Quantity"}),Object(l.jsx)("th",{children:"Value"})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("tbody",{children:[n.map((function(t){return Object(l.jsx)("tr",{children:Object(l.jsx)(O,{title:t.title,price:t.price,amount:t.amount,img:t.img,id:t.id},t.id)})})),Object(l.jsx)("tr",{})]})]})}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"total-amount",children:[Object(l.jsxs)("h1",{children:["Subtotal: $ ",s().subTotal]}),Object(l.jsxs)("h1",{children:["Total: $ ",s().total]})]})]})};var x=function(){return Object(l.jsxs)("div",{className:"Home",children:[Object(l.jsxs)("div",{children:["Welcome to Worths Hunting Store. ",Object(l.jsx)("br",{}),"Find everything you need",Object(l.jsx)("br",{}),"for your next hunting trip."]}),Object(l.jsx)(j.c,{to:"./shop",children:Object(l.jsx)("button",{class:"enter-shop-btn",children:"Enter Shop"})})]})},u=c(11),m=[{title:"Bow",price:33,img:"bow.jpg",id:Object(u.a)()},{title:"Hunting Knife",price:18,img:"hunting-knife.jpg",id:Object(u.a)()},{title:"Lasso",price:8,img:"lasso.jpg",id:Object(u.a)()},{title:"M1899",price:350,img:"m1899.jpg",id:Object(u.a)()},{title:"Semi Automatic Pistol",price:210,img:"semi-automatic-pistol.jpg",id:Object(u.a)()},{title:"Varmint Rifle",price:72,img:"varmint-rifle.jpg",id:Object(u.a)()}];function p(t){return m.find((function(e){if(e.id===t)return e}))}var v=function(t){var e=Object(i.useContext)(d),c=Object(o.a)(e,2),n=c[0],s=c[1],r=Object(i.useState)(1),j=Object(o.a)(r,2),b=j[0],O=j[1],h=Object(a.f)().id,x=p(h);return Object(l.jsxs)("div",{className:"item-details",children:[Object(l.jsx)("h1",{children:h}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=p(h);e.amount=b,s(n.concat(e)),O(1)},children:[Object(l.jsx)("div",{className:"product-img",children:Object(l.jsx)("img",{src:window.location.origin+"/assets/".concat(x.img)})}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("h3",{children:x.title}),Object(l.jsxs)("div",{children:["$",x.price]}),Object(l.jsx)("input",{onChange:function(t){var e=parseInt(t.target.value);O(e),console.log(b,n)},type:"number",max:"5",min:"1",placeholder:"1",className:"quant-btn"}),Object(l.jsx)("input",{className:"submit-btn",type:"submit",value:"Add"})]})]})]})};var g=function(){var t=Object(i.useContext)(d),e=Object(o.a)(t,2),c=e[0],n=(e[1],{textDecoration:"none",color:"black"});return Object(l.jsxs)("nav",{children:[Object(l.jsx)(j.c,{to:"/",style:n,children:Object(l.jsxs)("h1",{children:["Worths",Object(l.jsx)("br",{}),"Hunting Store"]})}),Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)(j.c,{to:"/shop",style:n,children:Object(l.jsx)("li",{children:"SHOP"})}),Object(l.jsx)(j.c,{to:"/cart",style:n,children:Object(l.jsxs)("li",{children:["CART ",Object(l.jsx)("span",{children:c.length>0&&" - "+c.length})]})})]})]})};var f=function(t){var e=t.title,c=t.price,i=t.img;return Object(l.jsxs)("div",{className:"product",children:[Object(l.jsx)("div",{className:"product-img",children:Object(l.jsx)("img",{src:window.location.origin+"/assets/".concat(i)})}),Object(l.jsx)("div",{children:e}),Object(l.jsx)("div",{children:"$".concat(c)})]})};var N=function(){var t=Object(i.useContext)(d),e=Object(o.a)(t,2);return e[0],e[1],Object(l.jsx)("div",{className:"shop",children:Object(l.jsx)("div",{className:"products",children:m.map((function(t){return Object(l.jsx)(j.c,{to:"/shop/".concat(t.id),children:Object(l.jsx)(f,{id:t.id,img:t.img,title:t.title,price:t.price},t.id)},t.id)}))})})};var y=function(){return Object(l.jsx)(j.b,{basename:"/",children:Object(l.jsx)(b,{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(g,{}),Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{exact:!0,path:"/",component:x}),Object(l.jsx)(a.a,{exact:!0,path:"/shop",component:N}),Object(l.jsx)(a.a,{exact:!0,path:"/shop/:id",component:v}),Object(l.jsx)(a.a,{exact:!0,path:"/cart",component:h})]})]})})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))},9:function(t,e,c){}},[[32,1,2]]]);
//# sourceMappingURL=main.dba84710.chunk.js.map