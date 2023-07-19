"use strict";(self.webpackChunkconnectify=self.webpackChunkconnectify||[]).push([[689],{5376:function(e,t,n){n.d(t,{r:function(){return i}});var r,s=n(2791),a=["title","titleId"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function u(e,t){var n=e.title,u=e.titleId,i=o(e,a);return s.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"#ffffff",viewBox:"0 0 512 512",ref:t,"aria-labelledby":u},i),n?s.createElement("title",{id:u},n):null,r||(r=s.createElement("path",{d:"M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"})))}var i=s.forwardRef(u);n.p},5689:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(2791),s=n(2421),a=n(7375),c=n(8489),o=n(678),u=n(2426),i="Message_message__khRHI",l="Message_light__lnSNC",f="Message_dark__K7duP",d="Message_userPhoto__AC4YW",h="Message_messageInfo__TpODg",g="Message_userName__Y61qO",_="Message_messageText__SxEow",m=n(9785),v=n(3250),p=n(7701),j=n(184),x=(0,r.memo)((function(e){var t=e.userId,n=e.photo,r=e.userName,s=e.message,a=(0,m.F)().theme,c="light"===a?l:f,o="light"===a?v.Z:p.Z;return(0,j.jsxs)("div",{className:"".concat(i," ").concat(c),children:[(0,j.jsx)(u.OL,{to:"/profile/".concat(t),children:(0,j.jsx)("img",{className:d,src:n||o,alt:""})}),(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)(u.OL,{className:"".concat(g," ").concat(c),to:"/profile/".concat(t),children:(0,j.jsx)("span",{children:r})}),(0,j.jsx)("span",{className:"".concat(_," ").concat(c),children:s})]})]})})),M="Messages_messages__I6e3Z",y="Messages_noMessages__stUGj",b="Messages_light__qu6CS",O="Messages_dark__tQVWM",N=function(e){var t=e.noMessages,n="light"===(0,m.F)().theme?b:O,s=(0,a.v9)((function(e){return e.chat.messages})),u=(0,r.useRef)(null),i=(0,r.useState)(!0),l=(0,o.Z)(i,2),f=l[0],d=l[1];return(0,r.useEffect)((function(){f&&setTimeout((function(){var e;null===(e=u.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),100)}),[f,s]),(0,j.jsxs)("div",{className:M,onScroll:function(e){var t=e.currentTarget,n=t.scrollHeight-t.scrollTop-t.clientHeight;d(n<50)},children:[s.length?s.map((function(e){return(0,j.jsx)(x,(0,c.Z)({},e),e.id)})):(0,j.jsx)("span",{className:"".concat(y," ").concat(n),children:t.current}),(0,j.jsx)("div",{ref:u})]})},w=n(5376),C="AddMessageForm_addMessageForm__+xRNN",k="AddMessageForm_light__Y7xaC",F="AddMessageForm_dark__UQ0oT",A="AddMessageForm_inputWrapper__zf3z1",I="AddMessageForm_input__ldwW6",Z="AddMessageForm_notice__kzCYF",E="AddMessageForm_sendButton__1UTe-",S="AddMessageForm_sendIcon__MjooN",R=n(9230),T=function(){var e=(0,R.$G)("dialogs").t,t="light"===(0,m.F)().theme?k:F,n=(0,r.useState)(""),c=(0,o.Z)(n,2),u=c[0],i=c[1],l=(0,a.v9)((function(e){return e.chat.status})),f=(0,a.I0)(),d=function(){!u.trim()||u.length>100||(f((0,s.bG)(u)),i(""))};return(0,j.jsxs)("div",{className:"".concat(C," ").concat(t),children:[(0,j.jsxs)("div",{className:A,children:[(0,j.jsx)("input",{className:"".concat(I," ").concat(t),value:u,onKeyDown:function(e){"Enter"===e.key&&d()},placeholder:e("enterYourMessage"),onChange:function(e){i(e.currentTarget.value.slice(0,100))},autoFocus:document.documentElement.clientWidth>768}),(0,j.jsxs)("span",{className:"".concat(Z," ").concat(t),children:[e("youHave")," ",100-u.length," ",e("charactersLeft")]})]}),(0,j.jsx)("button",{className:E,disabled:"ready"!==l||!u.length,onClick:d,children:(0,j.jsx)(w.r,{className:S})})]})},P="Chat_chat__-aK9o",L="Chat_light__DR7uS",W="Chat_dark__fjM0U",D=n(2789),Y=n(2932),z=n(9073),G=(0,D.qC)(Y.D,z.R)((function(){var e=(0,R.$G)("dialogs").t,t="light"===(0,m.F)().theme?L:W,n=(0,a.v9)((function(e){return e.chat.status})),c=(0,a.I0)(),o=(0,r.useRef)("");return(0,r.useEffect)((function(){return c((0,s.WE)()).then((function(){return o.current=e("noMessagesInChat")})),function(){c((0,s.R7)())}}),[c,e]),(0,j.jsxs)("main",{className:"".concat(P," ").concat(t),children:["error"===n&&(0,j.jsx)("div",{children:e("error")}),(0,j.jsx)(N,{noMessages:o}),(0,j.jsx)(T,{})]})}))},2932:function(e,t,n){n.d(t,{D:function(){return _}});var r=n(8489),s=n(3738),a=n(7853),c=n(4531),o=n(1020),u=n(8992),i=n(2791),l=n(9723),f=n(7375),d=n(184),h=["isAuth"],g=function(e){return{isAuth:e.auth.isAuth}};function _(e){var t=function(t){(0,o.Z)(i,t);var n=(0,u.Z)(i);function i(){return(0,a.Z)(this,i),n.apply(this,arguments)}return(0,c.Z)(i,[{key:"render",value:function(){var t=this.props,n=t.isAuth,a=(0,s.Z)(t,h);return n?(0,d.jsx)(e,(0,r.Z)({},a)):(0,d.jsx)(l.l_,{to:"/login"})}}]),i}(i.Component);return(0,f.$j)(g)(t)}},9073:function(e,t,n){n.d(t,{R:function(){return u}});var r=n(8489),s=n(2791),a=n(8281),c=n(7375),o=n(184),u=function(e){return function(t){var n=(0,c.I0)(),u=(0,c.v9)((function(e){return e.auth.isAuth}));return(0,s.useEffect)((function(){u&&n((0,a.CX)())}),[n,u]),(0,o.jsx)(e,(0,r.Z)({},t))}}},3738:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=689.3050167c.chunk.js.map