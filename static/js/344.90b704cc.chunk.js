"use strict";(self.webpackChunkconnectify=self.webpackChunkconnectify||[]).push([[344],{1344:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});r(2791);var c=r(6139),i=r(704),o=r(1117),t=r(3079),a=r(7344),s=r(482),l=r(2426),m=r(9230),d=r(9785),h=r(184),_=(0,i.Z)({form:"login"})((function(e){var n=e.initialValues.captcha,r=e.handleSubmit,i=e.error,_=(0,m.$G)("auth").t,u="light"===(0,d.F)().theme?s.Z.light:s.Z.dark;return(0,h.jsxs)("form",{className:s.Z.form,onSubmit:r,children:[(0,h.jsxs)("div",{className:s.Z.fieldWrapper,children:[(0,h.jsx)("span",{className:"".concat(s.Z.fieldTitle," ").concat(u),children:"Email"}),(0,o.Gr)(_("yourEmail"),"email","text",[t.C1],o.II)]}),(0,h.jsxs)("div",{className:s.Z.fieldWrapper,children:[(0,h.jsx)("span",{className:"".concat(s.Z.fieldTitle," ").concat(u),children:_("password")}),(0,o.Gr)(_("interPassword"),"password","password",[t.C1],o.II)]}),(0,h.jsxs)("label",{className:"".concat(s.Z.rememberMe," ").concat(u),children:[(0,h.jsx)(c.Z,{component:o.II,name:"rememberMe",type:"checkbox",className:"".concat(s.Z.checkbox," ").concat(u)}),(0,h.jsx)("span",{children:_("rememberMe")})]}),n&&(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:n,alt:"captcha"}),(0,o.Gr)(_("symbolsFromImage"),"captcha","text",[t.C1],o.II)]}),i&&(0,h.jsx)("div",{className:a.Z.formSummaryError,children:i}),(0,h.jsx)("button",{children:_("logIn")}),(0,h.jsxs)("div",{className:"".concat(s.Z.signUpBlock," ").concat(u),children:[(0,h.jsx)("span",{children:_("dontHaveAccount")}),(0,h.jsx)(l.OL,{to:"/register",children:_("register")})]})]})})),u=r(7375),p=r(9675),g=r(9723),f=r(6376),x=r(2519),Z=(0,u.$j)((function(e){return{captcha:e.auth.captcha,isAuth:e.auth.isAuth}}),{login:p.x4})((function(e){var n=e.login,r=e.isAuth,c=e.captcha,i=(0,m.$G)("auth").t,o="light"===(0,d.F)().theme?f.Z.light:f.Z.dark;return r?(0,h.jsx)(g.l_,{to:"/profile"}):(0,h.jsxs)("main",{className:"".concat(f.Z.main," ").concat(o),children:[(0,h.jsxs)("div",{className:"".concat(f.Z.title," ").concat(o),children:[(0,h.jsx)("h1",{children:i("signIn")}),(0,h.jsx)("span",{children:i("welcomeBack")})]}),(0,h.jsx)("div",{className:"".concat(f.Z.login," ").concat(o),children:(0,h.jsx)(_,{onSubmit:function(e){n(e.email,e.password,e.rememberMe,e.captcha)},initialValues:{captcha:c}})}),(0,h.jsxs)("div",{className:"".concat(f.Z.info," ").concat(o),children:[(0,h.jsxs)("span",{children:[i("youCan"),(0,h.jsxs)(l.OL,{to:"/register",children:[" ",i("createPersonalAccount")]}),",",i("useDemoAccount"),":"]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{className:f.Z.copiedTextTitle,children:"Email:"}),(0,h.jsx)(x.Z,{className:"".concat(f.Z.copiedText," ").concat(o),copyable:!0,children:"free@samuraijs.com"})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("span",{className:f.Z.copiedTextTitle,children:[i("password"),":"]}),(0,h.jsx)(x.Z,{className:"".concat(f.Z.copiedText," ").concat(o),copyable:!0,children:"free"})]})]})]})}))},1117:function(e,n,r){r.d(n,{gx:function(){return _},II:function(){return u},Gr:function(){return p}});var c=r(8489),i=r(3738),o=r(6139),t=r(7344),a=(r(2791),r(2311)),s=r(9785),l=r(184),m=["input","meta"],d=["input","meta"],h=function(e){e.input;var n=e.meta,r=n.touched,c=n.error,i=e.children,o=r&&c;return(0,l.jsxs)("div",{className:t.Z.formControl+" "+(o?t.Z.error:""),children:[(0,l.jsx)("div",{children:i}),o&&(0,l.jsx)("span",{children:c})]})},_=function(e){var n=e.input,r=(e.meta,(0,i.Z)(e,m)),o="light"===(0,s.F)().theme?t.Z.light:t.Z.dark;return(0,l.jsx)(h,(0,c.Z)((0,c.Z)({},e),{},{children:(0,l.jsx)(a.Z,(0,c.Z)((0,c.Z)({className:"".concat(t.Z.input," ").concat(o)},n),r))}))},u=function(e){var n=e.input,r=(e.meta,(0,i.Z)(e,d)),o="light"===(0,s.F)().theme?t.Z.light:t.Z.dark;return(0,l.jsx)(h,(0,c.Z)((0,c.Z)({},e),{},{children:(0,l.jsx)("input",(0,c.Z)((0,c.Z)({className:"".concat(t.Z.input," ").concat(o)},n),r))}))},p=function(e,n,r,i,t,a){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return(0,l.jsx)(o.Z,(0,c.Z)({placeholder:e,name:n,type:r,validate:i,component:t,autoComplete:a},s))}},3079:function(e,n,r){r.d(n,{C1:function(){return c}});var c=function(e){return e?void 0:"Field is required"}},6376:function(e,n){n.Z={main:"Login_main__+nOO0",light:"Login_light__uPQrD",dark:"Login_dark__8ELld",title:"Login_title__zXN9q",login:"Login_login__mg93A",register:"Login_register__tSR2G",info:"Login_info__9twtE",copiedTextTitle:"Login_copiedTextTitle__+T6Gw",copiedText:"Login_copiedText__eNUfq"}},482:function(e,n){n.Z={form:"LoginForm_form__jI7Wq",fieldWrapper:"LoginForm_fieldWrapper__xEAkr",fieldTitle:"LoginForm_fieldTitle__VG-ri",light:"LoginForm_light__54Cvz",dark:"LoginForm_dark__dBXUr",rememberMe:"LoginForm_rememberMe__jphOP",acceptOffer:"LoginForm_acceptOffer__Z0LwE",checkbox:"LoginForm_checkbox__bgBgj",signUpBlock:"LoginForm_signUpBlock__7q-b8",signInBlock:"LoginForm_signInBlock__JKQXI"}},7344:function(e,n){n.Z={formControl:"FormsControls_formControl__7fIeb",error:"FormsControls_error__KmL0f",formSummaryError:"FormsControls_formSummaryError__4sOvX",input:"FormsControls_input__Wooge",light:"FormsControls_light__z4mZX",dark:"FormsControls_dark__2R8LA"}}}]);
//# sourceMappingURL=344.90b704cc.chunk.js.map