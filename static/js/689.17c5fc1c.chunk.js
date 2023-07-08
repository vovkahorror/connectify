"use strict";(self.webpackChunkconnectify=self.webpackChunkconnectify||[]).push([[689],{5376:function(e,n,t){t.d(n,{r:function(){return i}});var r,s=t(2791),a=["title","titleId"];function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function u(e,n){var t=e.title,u=e.titleId,i=o(e,a);return s.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"#ffffff",viewBox:"0 0 512 512",ref:n,"aria-labelledby":u},i),t?s.createElement("title",{id:u},t):null,r||(r=s.createElement("path",{d:"M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"})))}var i=s.forwardRef(u);t.p},5689:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(2791),s=t(2421),a=t(7375),c=t(8489),o=t(678),u=t(2426),i=t(6939),l="Message_message__khRHI",f="Message_userPhoto__AC4YW",d="Message_messageInfo__TpODg",h="Message_userName__Y61qO",g="Message_messageText__SxEow",m=t(184),p=(0,r.memo)((function(e){var n=e.userId,t=e.photo,r=e.userName,s=e.message;return(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)(u.OL,{to:"/profile/".concat(n),children:(0,m.jsx)("img",{className:f,src:t||i.Z,alt:""})}),(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)(u.OL,{className:h,to:"/profile/".concat(n),children:(0,m.jsx)("span",{children:r})}),(0,m.jsx)("span",{className:g,children:s})]})]})})),v="Messages_messages__I6e3Z",_="Messages_noMessages__stUGj",j=function(e){var n=e.noMessages,t=(0,a.v9)((function(e){return e.chat.messages})),s=(0,r.useRef)(null),u=(0,r.useState)(!0),i=(0,o.Z)(u,2),l=i[0],f=i[1];return(0,r.useEffect)((function(){l&&setTimeout((function(){var e;null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),100)}),[l,t]),(0,m.jsxs)("div",{className:v,onScroll:function(e){var n=e.currentTarget,t=n.scrollHeight-n.scrollTop-n.clientHeight;f(t<50)},children:[t.map((function(e){return(0,m.jsx)(p,(0,c.Z)({},e),e.id)})),!t.length&&(0,m.jsx)("span",{className:_,children:n.current}),(0,m.jsx)("div",{ref:s})]})},x=t(5376),y="AddMessageForm_addMessageForm__+xRNN",b="AddMessageForm_inputWrapper__zf3z1",O="AddMessageForm_notice__kzCYF",M="AddMessageForm_sendButton__1UTe-",N="AddMessageForm_sendIcon__MjooN",w=t(9230),I=function(){var e=(0,w.$G)("dialogs").t,n=(0,r.useState)(""),t=(0,o.Z)(n,2),c=t[0],u=t[1],i=(0,a.v9)((function(e){return e.chat.status})),l=(0,a.I0)(),f=function(){!c.trim()||c.length>100||(l((0,s.bG)(c)),u(""))};return(0,m.jsxs)("div",{className:y,children:[(0,m.jsxs)("div",{className:b,children:[(0,m.jsx)("input",{value:c,onKeyDown:function(e){"Enter"===e.key&&f()},placeholder:e("enterYourMessage"),onChange:function(e){u(e.currentTarget.value.slice(0,100))},autoFocus:!0}),(0,m.jsxs)("span",{className:O,children:[e("youHave")," ",100-c.length," ",e("charactersLeft")]})]}),(0,m.jsx)("button",{className:M,disabled:"ready"!==i||!c.length,onClick:f,children:(0,m.jsx)(x.r,{className:N})})]})},Z="Chat_chat__-aK9o",k=t(2789),C=t(2932),E=t(9073),A=(0,k.qC)(C.D,E.R)((function(){var e=(0,a.v9)((function(e){return e.chat.status})),n=(0,a.I0)(),t=(0,r.useRef)("");return(0,r.useEffect)((function(){return n((0,s.WE)()).then((function(){return t.current="There are no messages in the chat yet"})),function(){n((0,s.R7)())}}),[n]),(0,m.jsxs)("main",{className:Z,children:["error"===e&&(0,m.jsx)("div",{children:"Some error occurred. Please refresh the page"}),(0,m.jsx)(j,{noMessages:t}),(0,m.jsx)(I,{})]})}))},2932:function(e,n,t){t.d(n,{D:function(){return m}});var r=t(8489),s=t(3738),a=t(7853),c=t(4531),o=t(1020),u=t(8992),i=t(2791),l=t(9723),f=t(7375),d=t(184),h=["isAuth"],g=function(e){return{isAuth:e.auth.isAuth}};function m(e){var n=function(n){(0,o.Z)(i,n);var t=(0,u.Z)(i);function i(){return(0,a.Z)(this,i),t.apply(this,arguments)}return(0,c.Z)(i,[{key:"render",value:function(){var n=this.props,t=n.isAuth,a=(0,s.Z)(n,h);return t?(0,d.jsx)(e,(0,r.Z)({},a)):(0,d.jsx)(l.l_,{to:"/login"})}}]),i}(i.Component);return(0,f.$j)(g)(n)}},9073:function(e,n,t){t.d(n,{R:function(){return u}});var r=t(8489),s=t(2791),a=t(8281),c=t(7375),o=t(184),u=function(e){return function(n){var t=(0,c.I0)();return(0,s.useEffect)((function(){t((0,a.CX)())}),[t]),(0,o.jsx)(e,(0,r.Z)({},n))}}},3738:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=689.17c5fc1c.chunk.js.map