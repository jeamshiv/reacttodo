(this.webpackJsonpreacttodo=this.webpackJsonpreacttodo||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(22),r=a.n(s),o=(a(30),a(15)),l=a(25),i=(a(31),a(7)),j=a(0);function d(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:[Object(j.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsxs)(i.b,{className:"nav-link",to:"/",children:["Home ",Object(j.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"/contact",children:"Contact"})})]})})]})})}var b=a(2),m=a(8),u=a(9),h=a(11),O=a(10),p=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"bg-dark footer py-2",children:Object(j.jsxs)("p",{className:"text-center text-white",children:["Copyright \xa9 Jeamshiv ",(new Date).getFullYear()]})})}}]),a}(n.Component);function x(e){var t=e.todo,a=e.onDelete;return Object(j.jsxs)("div",{className:"col-lg-10 offset-lg-1 pb-5",children:[Object(j.jsx)("h4",{children:t.title}),Object(j.jsx)("p",{children:t.desc}),Object(j.jsx)("button",{className:"btn btn-warning",onClick:function(){a(t)},children:"Delete"}),Object(j.jsx)("hr",{})]})}function g(e){return Object(j.jsxs)("div",{className:"container col-lg-8 mb-5 pb-5",children:[Object(j.jsx)("h3",{className:"text-center pt-5 text-info",children:"Todos List"}),0===e.todos.length?Object(j.jsxs)("div",{className:"my-4 alert alert-primary fade show mb-5",role:"alert",children:[Object(j.jsx)("strong",{children:"Empty Todos!"})," No Todos to show Please Add."]}):e.todos.map((function(t){return Object(j.jsx)(x,{todo:t,onDelete:e.onDelete},t.sno)}))]})}function v(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],d=l[1];return Object(j.jsx)("div",{className:"col-lg-6 offset-lg-3 col-sm-10 text-center mt-4",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&i||alert("Require Title or Description"),e.addTodo(c,i),s(""),d("")},children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control",value:c,onChange:function(e){return s(e.target.value)},id:"title",placeholder:"Todo Item"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control",value:i,onChange:function(e){return d(e.target.value)},id:"desc",placeholder:"Description"})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add New"})]})})}var f=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"text-center my-5",children:"This is About Us"}),Object(j.jsxs)("div",{className:"row my-5",children:[Object(j.jsxs)("div",{className:"col-lg-7",children:[Object(j.jsx)("p",{children:"Me Shivam Kumar, I am Web Developer & Web Designer I also Provide Free SEO. I create custom Website with full responsive at any device. I provide Static and Dynamic Website Services."}),Object(j.jsx)("p",{children:"After completing my school I joined It-expert course and I learned Web Designing and Web Development. I am good in HTML, CSS, Bootstrap-3, JavaScript, JQuery, Ajax, PHP and MySQLi. Currently I am learning Bootstrap-4 and NodeJs, And this blog is all about the tips and tricks in Web Designing and Web Development and I want to all read and explore the internet Free Resources."})]}),Object(j.jsx)("div",{className:"col-lg-5",children:Object(j.jsx)("img",{src:"https://1.bp.blogspot.com/-ULuA2seafb8/YG2ILK6Z1vI/AAAAAAAAW3w/LehZ936cKiY8U7gGpSHoJflIWfzOxwr5QCPcBGAYYCw/s0/aboutimg.webp",className:"img-fluid",alt:"about Us"})})]})]})}}]),a}(n.Component),N=a(24),y=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(N.a)({},e.target.name,e.target.value))},n.clickHandler=function(e){e.preventDefault(),console.log(n.state),window.open("https://wa.me/918750303073?text=Hello I am ".concat(n.state.name," %0aEmail: ").concat(n.state.email," %0aContact For: ").concat(n.state.message," %0aThank Your!"),"_blank")},n.state={name:"",email:"",phone:"",message:""},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"text-center mt-5",children:Object(j.jsx)("h1",{children:"Get In Touch"})}),Object(j.jsxs)("div",{className:"row container",children:[Object(j.jsxs)("div",{className:"col-lg-6",children:[Object(j.jsx)("h2",{className:"mt-5",children:"DON'T BE SHY"}),Object(j.jsx)("p",{children:"Fell free to get in touch with me. I am always open to discussing new projects. Creative ideas or opportunities to be part of your visions."})]}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("form",{className:"mt-5",children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",name:"name",className:"form-control",onChange:function(t){return e.changeHandler(t)},placeholder:"Your Name"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",name:"email",className:"form-control",onChange:function(t){return e.changeHandler(t)},placeholder:"Your Email"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"tel",name:"phone",className:"form-control",onChange:function(t){return e.changeHandler(t)},placeholder:"Your Phone"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("textarea",{name:"message",className:"form-control",rows:"3",required:"required",onChange:function(t){return e.changeHandler(t)},placeholder:"Your Message"})}),Object(j.jsxs)("button",{type:"submit",className:"btn btn-success",onClick:function(t){return e.clickHandler(t)},children:[Object(j.jsx)("i",{className:"fab fa-whatsapp"})," Send WhatsApp "]})]})})]})]})}}]),a}(n.Component),w=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"container my-5",children:Object(j.jsxs)("div",{className:"my-5 text-center",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-6 offset-lg-3",children:Object(j.jsx)("img",{src:"assets/404page.png",className:"img-fluid",alt:"404 error"})})}),Object(j.jsx)("h2",{className:"my-2",children:"404 Page Not Found"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Ooops! "}),"The page you are looking for isn't available right now! Please contact Admin"]}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("h3",{children:"Go Back - Home"})})]})})}}]),a}(n.Component);var C=function(){var e=function(e){console.log("Delete kar raha hu",e),r(s.filter((function(t){return t!==e}))),localStorage.getItem("todos")},t=function(e,t){var a={sno:0===s.length?1:s[s.length-1].sno+1,title:e,desc:t};r([].concat(Object(l.a)(s),[a])),console.log(a),localStorage.getItem("todos")&&localStorage.setItem("todos",s)},a=Object(n.useState)([]),c=Object(o.a)(a,2),s=c[0],r=c[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(d,{title:"Shiv ToDo"}),Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{addTodo:t}),Object(j.jsx)(g,{todos:s,onDelete:e})]})}}),Object(j.jsx)(b.a,{exact:!0,path:"/about",children:Object(j.jsx)(f,{})}),Object(j.jsx)(b.a,{exact:!0,path:"/contact",children:Object(j.jsx)(y,{})}),Object(j.jsx)(b.a,{component:w})]}),Object(j.jsx)(p,{})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.9543a24c.chunk.js.map