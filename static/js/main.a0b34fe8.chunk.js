(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(1),l=t(0),i=t(16),a=t(3),s=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&s.a.initialize(j);var b=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){"production"===o&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=t(5),d=t(22),h=[{index:!0,label:"Nittany Energy",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(l.lazy)((function(){return t.e(5).then(t.t.bind(null,172,7))})),m=function(){var e=Object(l.useState)(!1),n=Object(d.a)(e,2),t=n[0],i=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return i(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=t(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/demo","/images/me.jpg"),alt:""})}),Object(c.jsx)("header",{children:Object(c.jsx)("h2",{children:"Nittany Energy"})})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Nittany Energy is a family owned business locally owned and operated in Central Pennsylvania. Our experience and dependability in delivering quality fuels as well as our top notch service and installation make all the difference. Nittany Energy businesses have been serving Central and Northern Pennsylvania for over 50 years."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Michael D'Angelo ",Object(c.jsx)(u.b,{to:"/",children:"mldangelo.com"}),"."]})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Michael D'Angelo",defaultTitle:"Michael D'Angelo",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Michael D'Angelo's personal website."};n.a=v},25:function(e,n,t){"use strict";var c=t(1),l=(t(0),t(29)),i=t(30),a=t(31),s=t(32),r=t(33),o=t(34),j=t(35),b=t(36),u=[{link:"https://github.com/mldangelo",label:"Github",icon:i.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:a.faFacebookF},{link:"https://www.instagram.com/dangelosaurus/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/michaelldangelo",label:"LinkedIn",icon:r.faLinkedinIn},{link:"https://angel.co/michael-d-angelo",label:"Angel List",icon:o.faAngellist},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:j.faTwitter},{link:"mailto:michael.l.dangelo@gmail.com",label:"Email",icon:b.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:u.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(l.a,{icon:e.icon})})},e.label)}))})}},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var c=t(1),l=t(0),i=t.n(l),a=t(15),s=t(5),r=t(3),o=t(21),j=(t(49),Object(l.lazy)((function(){return Promise.all([t.e(2),t.e(8)]).then(t.bind(null,169))}))),b=Object(l.lazy)((function(){return t.e(9).then(t.bind(null,176))})),u=Object(l.lazy)((function(){return t.e(10).then(t.bind(null,170))})),d=Object(l.lazy)((function(){return t.e(11).then(t.bind(null,171))})),h=Object(l.lazy)((function(){return t.e(7).then(t.bind(null,175))})),O=Object(l.lazy)((function(){return t.e(6).then(t.bind(null,173))})),m=Object(l.lazy)((function(){return Promise.all([t.e(4),t.e(12)]).then(t.bind(null,174))})),x=function(){return Object(c.jsx)(s.a,{basename:"/demo",children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:j}),Object(c.jsx)(r.a,{path:"/projects",component:h}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(p,{}),f):Object(a.render)(Object(c.jsx)(p,{}),f)}},[[50,1,3]]]);
//# sourceMappingURL=main.a0b34fe8.chunk.js.map