(this.webpackJsonpreact_php_login=this.webpackJsonpreact_php_login||[]).push([[0],{27:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),a=s(17),c=s.n(a),o=(s(27),s(4)),i=s.n(o),l=s(5),u=s(1),j=s(18),b=s(19),d=s(22),g=s(21),h=s(20),m=s.n(h),O=s(0),p=Object(r.createContext)(),f=m.a.create({baseURL:"http://192.168.1.11/php-login-registration-api/"}),x=function(e){Object(d.a)(s,e);var t=Object(g.a)(s);function s(){var e;return Object(j.a)(this,s),(e=t.call(this)).state={showLogin:!0,isAuth:!1,theUser:null},e.toggleNav=function(){var t=!e.state.showLogin;e.setState(Object(u.a)(Object(u.a)({},e.state),{},{showLogin:t}))},e.logoutUser=function(){localStorage.removeItem("loginToken"),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{isAuth:!1}))},e.registerUser=function(){var e=Object(l.a)(i.a.mark((function e(t){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("register.php",{name:t.name,email:t.email,password:t.password});case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.loginUser=function(){var e=Object(l.a)(i.a.mark((function e(t){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("login.php",{email:t.email,password:t.password});case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.isLoggedIn=Object(l.a)(i.a.mark((function t(){var s,r,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(s=localStorage.getItem("loginToken"))){t.next=8;break}return f.defaults.headers.common.Authorization="bearer "+s,t.next=5,f.get("user-info.php");case 5:r=t.sent,(n=r.data).success&&n.user&&e.setState(Object(u.a)(Object(u.a)({},e.state),{},{isAuth:!0,theUser:n.user}));case 8:case"end":return t.stop()}}),t)}))),e.isLoggedIn(),e}return Object(b.a)(s,[{key:"render",value:function(){var e={rootState:this.state,toggleNav:this.toggleNav,isLoggedIn:this.isLoggedIn,registerUser:this.registerUser,loginUser:this.loginUser,logoutUser:this.logoutUser};return Object(O.jsx)(p.Provider,{value:e,children:this.props.children})}}]),s}(r.Component),v=s(6),w=s(7);var I=function(){var e=Object(r.useContext)(p),t=e.toggleNav,s=e.loginUser,n=e.isLoggedIn,a={userInfo:{email:"",password:""},errorMsg:"",successMsg:""},c=Object(r.useState)(a),o=Object(w.a)(c,2),j=o[0],b=o[1],d=function(e){b(Object(u.a)(Object(u.a)({},j),{},{userInfo:Object(u.a)(Object(u.a)({},j.userInfo),{},Object(v.a)({},e.target.name,e.target.value))}))},g=function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s(j.userInfo);case 3:if(!(r=e.sent).success||!r.token){e.next=11;break}return b(Object(u.a)({},a)),localStorage.setItem("loginToken",r.token),e.next=9,n();case 9:e.next=12;break;case 11:b(Object(u.a)(Object(u.a)({},j),{},{successMsg:"",errorMsg:r.message}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h="",m="";return j.errorMsg&&(m=Object(O.jsx)("div",{className:"error-msg",children:j.errorMsg})),j.successMsg&&(h=Object(O.jsx)("div",{className:"success-msg",children:j.successMsg})),Object(O.jsxs)("div",{className:"_loginRegister",children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:g,noValidate:!0,children:[Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{name:"email",type:"email",required:!0,placeholder:"Enter your email",value:j.userInfo.email,onChange:d})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"PassWord"}),Object(O.jsx)("input",{name:"password",type:"password",required:!0,placeholder:"Enter your password",value:j.userInfo.password,onChange:d})]}),m,h,Object(O.jsx)("div",{className:"form-control",children:Object(O.jsx)("button",{type:"submit",children:"Login"})})]}),Object(O.jsx)("div",{className:"_navBtn",children:Object(O.jsx)("button",{onClick:t,children:"Register"})})]})};var N=function(){var e=Object(r.useContext)(p),t=e.toggleNav,s=e.registerUser,n={userInfo:{name:"",email:"",password:""},errorMsg:"",successMsg:""},a=Object(r.useState)(n),c=Object(w.a)(a,2),o=c[0],j=c[1],b=function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s(o.userInfo);case 3:(r=e.sent).success?j(Object(u.a)(Object(u.a)({},n),{},{successMsg:r.message})):j(Object(u.a)(Object(u.a)({},o),{},{successMsg:"",errorMsg:r.message}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){j(Object(u.a)(Object(u.a)({},o),{},{userInfo:Object(u.a)(Object(u.a)({},o.userInfo),{},Object(v.a)({},e.target.name,e.target.value))}))},g="",h="";return o.errorMsg&&(h=Object(O.jsx)("div",{className:"error-msg",children:o.errorMsg})),o.successMsg&&(g=Object(O.jsx)("div",{className:"success-msg",children:o.successMsg})),Object(O.jsxs)("div",{className:"_loginRegister",children:[Object(O.jsx)("h1",{children:"Sign Up"}),Object(O.jsxs)("form",{onSubmit:b,noValidate:!0,children:[Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Full Name"}),Object(O.jsx)("input",{name:"name",required:!0,type:"text",value:o.userInfo.name,onChange:d,placeholder:"Enter your name"})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{name:"email",required:!0,type:"email",value:o.userInfo.email,onChange:d,placeholder:"Enter your email"})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{name:"password",required:!0,type:"password",value:o.userInfo.password,onChange:d,placeholder:"Enter your password"})]}),h,g,Object(O.jsx)("div",{className:"form-control",children:Object(O.jsx)("button",{type:"submit",children:"Sign Up"})})]}),Object(O.jsx)("div",{className:"_navBtn",children:Object(O.jsx)("button",{onClick:t,children:"Login"})})]})};var k=function(){var e=Object(r.useContext)(p),t=e.rootState,s=e.logoutUser,n=t.isAuth,a=t.theUser,c=t.showLogin;return n?Object(O.jsxs)("div",{className:"userInfo",children:[Object(O.jsx)("div",{className:"_img",children:Object(O.jsx)("span",{role:"img","aria-label":"User Image",children:"\ud83d\udc66"})}),Object(O.jsx)("h1",{children:a.name}),Object(O.jsx)("div",{className:"_email",children:Object(O.jsx)("span",{children:a.email})}),Object(O.jsx)("button",{onClick:s,children:"Logout"})]}):c?Object(O.jsx)(I,{}):Object(O.jsx)(N,{})};var U=function(){return Object(O.jsx)(x,{children:Object(O.jsx)(k,{})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),a(e),c(e)}))};c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.2cbaea52.chunk.js.map