(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5oEb":function(e,t,a){},"6MIl":function(e,t,a){},"7PG1":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n);function c(e){return r.a.createElement("ul",{className:"tags"},e.tags.map((function(t,a){return r.a.createElement("li",{className:"tag"+(e.isMain?"-main":"")+" "+(e.isMain?"":t)+" ",key:a},"#",t)})))}},LbRr:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),c=a.n(r),l=(a("6MIl"),function(e){e.siteTitle;return c.a.createElement("header",null,c.a.createElement(n.Link,{to:"/"},"Kococo"),c.a.createElement("nav",null,c.a.createElement(n.Link,{to:"/"},"Posts"),c.a.createElement(n.Link,{to:"/about"},"about")))});l.defaultProps={siteTitle:""},t.a=l},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var n=a("q1tI"),r=a.n(n),c=a("LbRr"),l=(a("XjQp"),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement("main",null,t))}),o=a("vrFN"),i=a("Wbzz"),u=a("7PG1");function s(e){var t=e.post;return r.a.createElement(i.Link,{className:"card",to:t.frontmatter.slug},r.a.createElement("img",{src:t.frontmatter.thumbs,alt:"thumb"}),r.a.createElement("strong",{className:"title"},t.frontmatter.title),r.a.createElement("div",{className:"date"},t.frontmatter.date),r.a.createElement("div",{className:"card-tags"},r.a.createElement(u.a,{isMain:!0,tags:t.frontmatter.tags})))}a("5oEb"),a("pxef"),t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return r.a.createElement(s,{key:e.node.id,post:e.node})}));return r.a.createElement(l,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement("section",{className:"Contents"},t))};var m="3436015389"},XjQp:function(e,t,a){},pxef:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-3e44ae3fa4a083773985.js.map