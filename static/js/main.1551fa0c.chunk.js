(this.webpackJsonpnewsly=this.webpackJsonpnewsly||[]).push([[0],{29:function(e,t,a){e.exports=a(57)},57:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a.n(n),s=a(5),i=a.n(s),l=a(3),o=a(20),m=a(6),u=a(22),p=a(23),f=a(27),d=a(24),b=a(28),h=a(10),v=a.n(h),y=a(25),w=a(26),N=a.n(w).a.create({baseURL:"https://newsapi.org/v2/everything?q=Security&apiKey=".concat("bb91ea304b55479293619f2e62f8100d","&sortBy=publishedAt&pageSize=99")});!function(e){e[e.getNews=0]="getNews"}(r||(r={}));var g=function(e){var t=e.story,a=t.title,r=t.description,n=t.urlToImage,s=t.url,i=t.source;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:n,className:"card-img-top",alt:a}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},a),c.a.createElement("p",{className:"card-text"},r),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center border-primary"},c.a.createElement("small",{className:"text-primary"},i.name),c.a.createElement("div",{className:"btn-group"},c.a.createElement("a",{type:"button",href:s,className:"btn btn-sm btn-outline-primary"},"View")))))},E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).renderNewsList=function(){return a.props.news.map((function(e){return c.a.createElement(g,{story:e,key:e.url})}))},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar"},c.a.createElement("a",{href:"/",className:"navbar-brand"},"News.ly : Security "),c.a.createElement("span",{className:"navbar-text text-primary text-large "},c.a.createElement("a",{href:""}," Okorie Chiemerie (Chief)"),c.a.createElement("a",{className:" nav-link fab fa-twitter",href:"https://twitter.com/chief_emerie"}),c.a.createElement("a",{className:" nav-link fab fa-instagram",href:"https://www.instagram.com/chief.emerie/"}))),c.a.createElement("div",{className:"card-columns"},this.renderNewsList())))}}]),t}(c.a.Component),j=Object(m.b)((function(e){return e}),{getNews:function(){return function(){var e=Object(y.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("");case 2:a=e.sent,n=a.data,console.log(n.articles),t({type:r.getNews,payload:n.articles});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(E),O=Object(l.c)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.getNews:return t.payload;default:return e}}}),k=Object(l.d)(O,Object(l.a)(o.a));i.a.render(c.a.createElement(m.a,{store:k},c.a.createElement(j,null)),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.1551fa0c.chunk.js.map