(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),u=n.n(c),s=n(2),l=n(3),o=n(5),i=n(4),h=n(6),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleClick=function(e){console.log(n.state.query),e.preventDefault();var t=n.state.query;if(""===t)alert("That was an invalid search, try again");else{var a="https://api.www.svenskaspel.se/player/sponsorship/autocomplete?search=".concat(t,"&numResponses=100");fetch(a).then(function(e){return e.json()}).then(function(e){n.setState({clubs:e.data}),console.log(e.data)})}},n.queryChange=function(e){n.setState({query:e.target.value})},n.state={clubs:[],query:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{id:"site-search",type:"search",placeholder:"Search for...",value:this.state.query,onChange:this.queryChange}),r.a.createElement("input",{type:"submit",value:"Search",onClick:this.handleClick})))}}]),t}(r.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null)}}]),t}(r.a.Component);n(22);u.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.be24f0f9.chunk.js.map