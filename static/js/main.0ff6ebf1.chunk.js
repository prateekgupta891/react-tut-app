(this["webpackJsonpreact-tut-app"]=this["webpackJsonpreact-tut-app"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(7),r=a.n(n),c=a(9),i=a(2),s=a(3),h=a(5),j=a(4),o=a(1),b=a(0),u=function(){return Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Job"}),Object(b.jsx)("th",{children:"Remove"})]})})},l=function(t){var e=t.characterData.map((function(e,a){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.job}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return t.removeCharacter(a)},children:"Delete"})})]},a)}));return Object(b.jsx)("tbody",{children:e})},m=function(t){var e=t.characterData,a=t.removeCharacter;return Object(b.jsxs)("table",{children:[Object(b.jsx)(u,{}),Object(b.jsx)(l,{characterData:e,removeCharacter:a})]})},d=a(8),O=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).initialState={name:"",job:""},t.state=t.initialState,t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(d.a)({},n,r))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.job;return Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(b.jsx)("label",{htmlFor:"job",children:"Job"}),Object(b.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(b.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(o.Component),v=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={characters:[{name:"Prateek Gupta",job:"SE 1 - PayPal"},{name:"Tushar Bhatia",job:"Intern - UBS"},{name:"Hardik Mehta",job:"Intern - Nutanix"}]},t.removeCharacter=function(e){var a=t.state.characters;t.setState({characters:a.filter((function(t,a){return a!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(c.a)(t.state.characters),[e])})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state.characters;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(m,{characterData:t,removeCharacter:this.removeCharacter}),Object(b.jsx)(O,{handleSubmit:this.handleSubmit})]})}}]),a}(o.Component);a(15);r.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0ff6ebf1.chunk.js.map