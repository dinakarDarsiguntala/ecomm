(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{116:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),r=c(12),n=c.n(r),i=(c(88),c(22)),j=c(23),l=c(25),o=c(24),d=c(67),h=c(40),b=c(14),O=c(27),x=c(38),m=c(155),u=c(2),p=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var s;Object(i.a)(this,c);return(s=t.call(this)).state={username:"",password:"",usernameError:"",passwordError:"",loggedIn:!1},s.onChange=s.onChange.bind(Object(h.a)(s)),s.submitFrom=s.submitFrom.bind(Object(h.a)(s)),s}return Object(j.a)(c,[{key:"onChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"submitFrom",value:function(e){e.preventDefault();var t=this.state,c=t.username,s=t.password;"A"===c&&"B"===s?(localStorage.setItem("token","kdashflsajbhfljeb"),this.setState({loggedIn:!0})):"A"!=c&&"B"!=s?this.setState({usernameError:"enter valid name",passwordError:"password invalid"}):"A"!=c?this.setState({usernameError:"enter valid name"}):"B"!=s&&this.setState({passwordError:"password invalid"})}},{key:"render",value:function(){return this.state.loggedIn?(this.setState({usernameError:"",passwordError:""}),Object(u.jsx)(b.a,{to:"/productpage"})):Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"container",style:{display:"flex",justifyContent:"center",flexDirection:"row"},children:Object(u.jsx)("div",{className:"row text-center",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)(O.a,{style:{marginTop:"180px",padding:"50px",width:"20rem",backgroundColor:"whitesmoke"},children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)("br",{}),Object(u.jsxs)("form",{onSubmit:this.submitFrom,children:[Object(u.jsx)(m.a,{type:"text",label:"Username",variant:"outlined",name:"username",value:this.state.username,onChange:this.onChange}),Object(u.jsx)("p",{style:{color:"red"},children:this.state.usernameError}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{type:"password",label:"Password",variant:"outlined",name:"password",value:this.state.password,onChange:this.onChange}),Object(u.jsx)("p",{style:{color:"red"},children:this.state.passwordError}),Object(u.jsx)("br",{}),Object(u.jsx)(x.a,{type:"submit",variant:"primary",children:"Submit"}),Object(u.jsx)("br",{})]})]})})})})})}}]),c}(s.Component),v=c(44),g=c(148),f=c(152),y=c(150),w=c(149),C=c(153),N=c(151),S=c.p+"static/media/lenovo1.c31b722c.jpg",k=c.p+"static/media/macpro.37a28093.jpg",z=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var s;Object(i.a)(this,c),s=t.call(this,e);var a=!0;return null==localStorage.getItem("token")&&(a=!1),s.state={loggedIn:a},s}return Object(j.a)(c,[{key:"render",value:function(){return!1===this.state.loggedIn?Object(u.jsx)(b.a,{to:"/"}):Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("h1",{children:"Welcome to store"})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{class:"col-3  text-center",children:Object(u.jsxs)(O.a,{href:"./productdetails",children:[Object(u.jsxs)(g.a,{children:[Object(u.jsx)("a",{href:"./productdetails",children:Object(u.jsx)(w.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:S,title:"Contemplative Reptile"})}),Object(u.jsxs)(y.a,{children:[Object(u.jsx)(N.a,{gutterBottom:!0,variant:"h5",component:"h2",href:"./productdetails",children:Object(u.jsx)("a",{href:"./productdetails",style:{outline:"none",textDecoration:"none"},children:"   Lenovo"})}),Object(u.jsx)(N.a,{variant:"body2",color:"textSecondary",component:"p",children:"\u20b910000"})]})]}),Object(u.jsx)(f.a,{children:Object(u.jsx)(C.a,{size:"small",color:"primary",href:"./productdetails",className:"justify-content-center",style:{width:"100%"},children:"Add to cart"})})]})}),Object(u.jsx)("div",{class:"col-3 text-center",children:Object(u.jsxs)(O.a,{children:[Object(u.jsxs)(g.a,{children:[Object(u.jsx)(w.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:k,title:"Contemplative Reptile"}),Object(u.jsxs)(y.a,{children:[Object(u.jsx)(N.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lenovo"}),Object(u.jsx)(N.a,{variant:"body2",color:"textSecondary",component:"p",children:"\u20b9100000"})]})]}),Object(u.jsx)(f.a,{children:Object(u.jsx)(C.a,{size:"small",color:"primary",href:"./productdetails",className:"justify-content-center",style:{width:"100%"},children:"Add to cart"})})]})}),Object(u.jsx)("div",{class:"col-3 text-center",children:Object(u.jsxs)(O.a,{children:[Object(u.jsxs)(g.a,{children:[Object(u.jsx)(w.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:S,title:"Contemplative Reptile"}),Object(u.jsx)(y.a,{children:Object(u.jsx)(N.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"})})]}),Object(u.jsx)(f.a,{children:Object(u.jsx)(C.a,{size:"small",color:"primary",href:"./productdetails",className:"justify-content-center",style:{width:"100%"},children:"Add to cart"})})]})}),Object(u.jsx)("div",{class:"col-3 text-center",children:Object(u.jsxs)(O.a,{children:[Object(u.jsxs)(g.a,{children:[Object(u.jsx)(w.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:S,title:"Contemplative Reptile"}),Object(u.jsx)(y.a,{children:Object(u.jsx)(N.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"})})]}),Object(u.jsx)(f.a,{children:Object(u.jsx)(C.a,{size:"small",color:"primary",href:"./productdetails",className:"justify-content-center",style:{width:"100%"},children:"Add to cart"})})]})})]})})]})}}]),c}(s.Component),E=c(154),A=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(E.a,{children:[Object(u.jsxs)(g.a,{children:[Object(u.jsx)(w.a,{image:"/static/images/cards/contemplative-reptile.jpg",title:"Contemplative Reptile"}),Object(u.jsxs)(y.a,{children:[Object(u.jsx)(N.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"}),Object(u.jsx)(N.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(u.jsxs)(f.a,{children:[Object(u.jsx)(C.a,{size:"small",color:"primary",children:"Share"}),Object(u.jsx)(C.a,{size:"small",color:"primary",children:"Learn More"})]})]})})}}]),c}(s.Component),B=c(68),L=c(43),I=c(31),D=c(69),R=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(i.a)(this,c),(e=t.call(this)).state={plus:1,minus:1},e}return Object(j.a)(c,[{key:"adding",value:function(){this.setState({plus:this.state.plus+1})}},{key:"minus",value:function(){this.setState({plus:this.state.plus-1&&!this.state.plus<0})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("h2",{children:"Product Details"})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(B.a,{fluid:!0,children:Object(u.jsxs)(L.a,{children:[Object(u.jsxs)(I.a,{md:6,className:"text-center",children:[Object(u.jsx)("img",{className:"mr-5",src:S,alt:"Generic placeholder"}),Object(u.jsx)("div",{className:"fixed=bottom",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(O.a,{style:{width:"5rem",height:"5rem"},children:Object(u.jsx)(O.a.Body,{children:Object(u.jsx)("img",{width:50,height:50,className:"mr-5",src:S,alt:"Generic placeholder"})})})})})})]}),Object(u.jsx)(I.a,{md:4,className:"text-left",children:Object(u.jsxs)(D.a,{children:[Object(u.jsx)(L.a,{children:Object(u.jsx)(I.a,{children:Object(u.jsx)("h4",{children:"Lenovo laptop IDeal pad"})})}),Object(u.jsx)("br",{}),Object(u.jsx)(L.a,{children:Object(u.jsxs)(I.a,{children:[Object(u.jsx)("p",{children:"Price:\u20b9100000"}),Object(u.jsx)("p",{children:"You saved:\u20b9100000"})]})}),Object(u.jsxs)(L.a,{children:[Object(u.jsxs)(I.a,{children:[Object(u.jsx)(x.a,{size:"sm",onClick:function(){return e.minus()},children:"-"}),Object(u.jsx)("input",{style:{width:"50px"},value:this.state.plus}),Object(u.jsx)(x.a,{size:"sm",onClick:function(){return e.adding()},children:"+"})]}),Object(u.jsx)("div",{className:"fixed=bottom",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-12 text-center",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(x.a,{href:"/CustomerDetails",children:"Add to Cart"})]})})})]})]})})]})})]})}}]),c}(s.Component),F=(c(96),c(49));var P=function(){var e=Object(s.useState)([]),t=Object(F.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(!1),n=Object(F.a)(r,2),i=n[0],j=n[1],l=Object(s.useState)(),o=Object(F.a)(l,2),d=o[0],h=o[1];return Object(s.useEffect)((function(){j(!0),fetch("http://localhost:3001/products/").then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){h(e)})).finally((function(){j(!1)}))}),[]),i?Object(u.jsx)("p",{children:"Data is loading..."}):d||!Array.isArray(c)?Object(u.jsx)("p",{children:"There was an error loading your data!"}):Object(u.jsx)("ul",{children:c.map((function(e){return Object(u.jsx)("li",{children:e.names},e.id)}))})},T=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsx)(v.a,{children:Object(u.jsxs)(b.d,{children:[Object(u.jsx)(b.b,{exact:!0,path:"/",component:p}),Object(u.jsx)(b.b,{path:"/productpage",component:z}),Object(u.jsx)(b.b,{path:"/Cart",component:A}),Object(u.jsx)(b.b,{path:"/productdetails",component:R}),Object(u.jsx)(b.b,{path:"/CustomerDetails",component:P})]})})}}]),c}(a.a.Component),G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,157)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))};c(115);n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),G()},88:function(e,t,c){}},[[116,1,2]]]);
//# sourceMappingURL=main.8dc7c70b.chunk.js.map