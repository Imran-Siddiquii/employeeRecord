(this.webpackJsonpemprec=this.webpackJsonpemprec||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(8),i=a.n(c),l=(a(14),a(5)),s=a(7),r=a(2),d=a(0),m=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"Head",children:Object(d.jsx)("span",{children:"Employee management app"})}),Object(d.jsx)("h1",{className:"empText",children:"Employees list"})]})},j=a(9),o=[{id:1,firstName:"imran",lastName:"siddiqui",emailId:"siddiqui@gmail.com"},{id:2,firstName:"Ram",lastName:"Kumar",emailId:"RamK122@gmail.com"},{id:3,firstName:"Sunil",lastName:"Nayak",emailId:"NayakS105@gmail.com"},{id:4,firstName:"Jyoti",lastName:"Gangan",emailId:"jyothi012@gmail.com"},{id:5,firstName:"Shewta",lastName:"Patil",emailId:"shewta676@gmail.com"}],b=function(e){var t=e.listt,a=e.clickEdit,n=e.deleteBtn;e.view;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.firstName}),Object(d.jsx)("td",{children:t.lastName}),Object(d.jsx)("td",{children:t.emailId}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[Object(d.jsx)("button",{type:"button",className:"update",onClick:function(e){return a(e,t)},children:"Update"}),Object(d.jsx)("button",{type:"button",className:"delete",onClick:function(){return n(t.id)},children:"Delete "}),Object(d.jsx)("button",{type:"button",className:"view",children:" View"})]})})]})})},u=function(e){var t=e.editForm,a=e.formChange,n=e.cancelClick;return Object(d.jsxs)("tr",{id:"RowInput",children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"Enten your firstname",name:"firstName",onChange:a,value:t.firstName})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",placeholder:"Enter your lastname",name:"lastName",onChange:a,value:t.lastName})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"email",placeholder:"Enter your emailId ",name:"emailId",id:"email",onChange:a,value:t.emailId})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[Object(d.jsx)("button",{type:"submit",className:"save",children:"Save"}),Object(d.jsx)("button",{onClick:n,className:"cancel",children:"Cancel"})]})})]})},h=function(){var e=Object(n.useState)(o),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({firstName:" ",lastName:" ",emailId:" "}),h=Object(r.a)(i,2),O=h[0],p=h[1],x=Object(n.useState)(null),f=Object(r.a)(x,2),N=f[0],y=f[1],v=Object(n.useState)({firstName:" ",lastName:" ",emailId:" "}),I=Object(r.a)(v,2),g=I[0],C=I[1],E=Object(n.useState)(!1),k=Object(r.a)(E,2),S=k[0],w=k[1],q=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value,c=Object(s.a)({},O);c[a]=n,p(c)},D=function(e,t){e.preventDefault(),y(t.id);var a={firstName:t.firstName,lastName:t.lastName,emailId:t.emailId};C(a)},F=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value,c=Object(s.a)({},g);c[a]=n,C(c)},A=function(){y(null)},B=function(e){var t=Object(l.a)(a),n=a.findIndex((function(t){return t.id===e}));t.splice(n,1),c(t)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{id:"openForm",children:S?Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("button",{onClick:function(){w(!1)},className:"btnX",children:"X"})}),Object(d.jsx)("span",{className:"Addtext",children:"Add Employee"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(j.a)(),firstName:O.firstName,lastName:O.lastName,emailId:O.emailId},n=[].concat(Object(l.a)(a),[t]);c(n)},className:"InputDe",children:[Object(d.jsx)("input",{type:"text",name:"firstName",required:"required",onChange:q,placeholder:"Enter your firstname*",autoComplete:"off"}),Object(d.jsx)("input",{type:"text",name:"lastName",required:"required",onChange:q,placeholder:"Enter your last name*",autoComplete:"off"}),Object(d.jsx)("input",{type:"email",name:"emailId",required:"required",onChange:q,placeholder:"Enter your email Id*",autoComplete:"off"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn1",children:"Add Employee Detail"})]})]}):null}),Object(d.jsx)("div",{className:"addEmployy",children:Object(d.jsx)("button",{type:"button",onClick:function(){w(!0)},className:"btn",children:" Add Employee"})}),Object(d.jsx)("div",{className:"table-row",children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:N,firstName:g.firstName,lastName:g.lastName,emailId:g.emailId},n=Object(l.a)(a);n[a.findIndex((function(e){return e.id===N}))]=t,c(n),y(null)},children:Object(d.jsxs)("table",{width:"100%",cellSpacing:"0",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Employee First Name"}),Object(d.jsx)("th",{children:"Employee Last Name"}),Object(d.jsx)("th",{children:"Employee email Id"}),Object(d.jsx)("th",{children:" Actions"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e,t){return Object(d.jsx)(d.Fragment,{children:N===e.id?Object(d.jsx)(u,{editForm:g,formChange:F,cancelClick:A}):Object(d.jsx)(b,{listt:e,clickEdit:D,deleteBtn:B},t)})}))})]})})})]})};i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2ce1febe.chunk.js.map