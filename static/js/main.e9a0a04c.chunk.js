(this["webpackJsonpnews-papr"]=this["webpackJsonpnews-papr"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(16),r=a.n(s),i=(a(24),a(25),a(7)),l=a(0),o=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(i.b,{className:"navbar-brand",to:"/general",children:"News Foster"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/business",children:"Business"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/entertainment",children:"Entertainment"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/general",children:"General"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/health",children:"Health"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/science",children:"Science"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/sports",children:"Sports"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/technology",children:"Technology"})})]})})]})})})},j=a(10),b=a.n(j),d=a(15),h=a(11),x=function(e){var t=e.title,a=e.desc,c=e.imgUrl,n=e.url,s=e.author,r=e.date;return Object(l.jsx)("div",{className:"my-3",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:c||"../img/news.jpg",className:"card-img-top",alt:t}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:t}),Object(l.jsx)("p",{className:"card-text",children:a||"".concat(t)}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsxs)("small",{className:"text-muted",children:["By ",s||"Unknown"," on ",new Date(r).toGMTString()]})}),Object(l.jsx)("a",{href:n,target:"_blank",className:"btn btn-sm  btn-dark",children:"For More Info"})]})]})})},u=a.p+"static/media/Rocket.9dd581ae.gif",p=function(){return Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("img",{className:"my-3",src:u,alt:"Loading"})})},m=a(19),O=function(e){var t=e.country,a=e.category,n=e.pageSize,s=Object(c.useState)([]),r=Object(h.a)(s,2),i=r[0],o=r[1],j=Object(c.useState)(!0),u=Object(h.a)(j,2),O=u[0],g=u[1],v=Object(c.useState)(1),y=Object(h.a)(v,2),N=y[0],f=y[1],S=Object(c.useState)(0),k=Object(h.a)(S,2),w=k[0],z=k[1],T=function(){var e=Object(d.a)(b.a.mark((function e(){var c,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://newsapi.org/v2/top-headlines?country=".concat(t,"&category=").concat(a,"&apiKey=abaa6107267d44c1bb3130af863788d7&page=").concat(N,"&pageSize=").concat(n),g(!0),e.next=4,fetch(c);case 4:return s=e.sent,e.next=7,s.json();case 7:r=e.sent,o(r.articles),z(r.totalResults),g(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){T()}),[]);var C,F=function(){var e=Object(d.a)(b.a.mark((function e(){var c,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://newsapi.org/v2/top-headlines?country=".concat(t,"&category=").concat(a,"&apiKey=abaa6107267d44c1bb3130af863788d7&page=").concat(N+1,"&pageSize=").concat(n),f(N+1),e.next=4,fetch(c);case 4:return s=e.sent,e.next=7,s.json();case 7:r=e.sent,o(i.concat(r.articles)),z(r.totalResults);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)("h2",{className:"text-center",style:{margin:"35px 0px",marginTop:"90px"},children:["Today's ",(C=a,C.charAt(0).toUpperCase()+C.slice(1))," Headlines"]}),O&&Object(l.jsx)(p,{}),Object(l.jsx)(m.a,{dataLength:i.length,next:F,hasMore:i.length!==w,loader:Object(l.jsx)(p,{}),children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:i.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 ",children:Object(l.jsx)(x,{title:e.title,desc:e.description?e.description:"",imgUrl:e.urlToImage,url:e.url,date:e.publishedAt,author:e.author})},e.url)}))})})})]})},g=a(2),v=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{exact:!0,path:"/general",children:Object(l.jsx)(O,{country:"in",category:"general"},"general")}),Object(l.jsx)(g.a,{exact:!0,path:"/business",children:Object(l.jsx)(O,{pageSize:5,country:"in",category:"business"},"business")}),Object(l.jsx)(g.a,{exact:!0,path:"/entertainment",children:Object(l.jsx)(O,{pageSize:5,country:"in",category:"entertainment"},"entertainment")}),Object(l.jsx)(g.a,{exact:!0,path:"/health",children:Object(l.jsx)(O,{pageSize:5,country:"in",category:"health"},"health")}),Object(l.jsx)(g.a,{exact:!0,path:"/science",children:Object(l.jsx)(O,{pageSize:5,country:"in",category:"science"},"science")}),Object(l.jsx)(g.a,{exact:!0,path:"/sports",children:Object(l.jsx)(O,{pageSize:5,country:"in",category:"sports"},"sports")}),Object(l.jsx)(g.a,{exact:!0,path:"/technology",children:Object(l.jsx)(O,{pageSize:5,country:"in",category:"technology"},"technology")})]})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.e9a0a04c.chunk.js.map