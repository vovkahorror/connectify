/*! For license information please see 827.53f9e8f2.chunk.js.LICENSE.txt */
(self.webpackChunkconnectify=self.webpackChunkconnectify||[]).push([[827],{4827:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return me}});var r=n(7853),o=n(4531),l=n(1020),a=n(8992),s=n(7375),c=n(8386),i=n(2791),u=n(3414),f=n(2426),p="User_user__F4zUi",h="User_light__pzIFv",g="User_dark__9+axC",d="User_userPhoto__lGvWw",m="User_userInfo__rbvzr",v="User_userName__NAkhb",y="User_userStatus__9UZEw",w="User_followButton__xB+YM",b="User_unfollowButton__jwOJa",_=n(9230),j=n(9785),x=n(3250),O=n(7701),P=n(184),S=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,o=e.unfollow,l=(0,_.$G)("users").t,a=(0,j.F)().theme,s="light"===a?h:g,c="light"===a?x.Z:O.Z;return(0,P.jsxs)("div",{className:"".concat(p," ").concat(s),children:[(0,P.jsx)(f.OL,{to:"/profile/".concat(t.id),children:(0,P.jsx)("img",{src:t.photos.large||c,className:d,alt:""})}),(0,P.jsxs)("div",{className:m,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)(f.OL,{className:"".concat(v," ").concat(s),to:"/profile/".concat(t.id),children:t.name}),(0,P.jsx)("div",{className:"".concat(y," ").concat(s),children:t.status})]}),t.followed?(0,P.jsx)("button",{className:"".concat(b," ").concat(s),disabled:n.some((function(e){return e===t.id})),onClick:function(){return o(t.id)},children:l("unsubscribe")}):(0,P.jsx)("button",{className:w,disabled:n.some((function(e){return e===t.id})),onClick:function(){return r(t.id)},children:l("subscribe")})]})]})},C="Users_main__Lgkye",E="Users_light__etjSy",N="Users_dark__xYkf+",k="Users_usersList__voR8x",U="Users_notFound__ESdrf",I=n(678);n(4322);var F=function(e,t){var n=(0,i.useState)(e),r=(0,I.Z)(n,2),o=r[0],l=r[1];return(0,i.useEffect)((function(){var n=setTimeout((function(){return l(e)}),t||500);return function(){clearTimeout(n)}}),[e,t]),o};"undefined"!==typeof window?i.useLayoutEffect:i.useEffect;var Z,L,z="UsersSearch_searchPanel__uPbQC",M="UsersSearch_search__wnJOy",B="UsersSearch_input__qmQFb",D="UsersSearch_light__-Huz1",A="UsersSearch_dark__tjzbf",R="UsersSearch_searchIcon__9k3zi",T="UsersSearch_xmarkIcon__McLT8",X="UsersSearch_onlyFollowed__vo9cF",q="UsersSearch_checkbox__y8xMd",G="UsersSearch_text__LTuXe",$=["title","titleId"];function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Y(e,t){var n=e.title,r=e.titleId,o=J(e,$);return i.createElement("svg",Q({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),n?i.createElement("title",{id:r},n):null,Z||(Z=i.createElement("path",{d:"M12.6266 11.5128L16 14.8855L14.8855 16L11.5128 12.6266C10.2579 13.6325 8.69706 14.1797 7.08871 14.1774C3.17574 14.1774 0 11.0017 0 7.08871C0 3.17574 3.17574 0 7.08871 0C11.0017 0 14.1774 3.17574 14.1774 7.08871C14.1797 8.69706 13.6325 10.2579 12.6266 11.5128ZM11.0466 10.9284C12.0462 9.90047 12.6044 8.52254 12.6021 7.08871C12.6021 4.04214 10.1345 1.57527 7.08871 1.57527C4.04214 1.57527 1.57527 4.04214 1.57527 7.08871C1.57527 10.1345 4.04214 12.6021 7.08871 12.6021C8.52254 12.6044 9.90047 12.0462 10.9284 11.0466L11.0466 10.9284Z",fill:"white"})),L||(L=i.createElement("path",{d:"M12.6266 11.5128L16 14.8855L14.8855 16L11.5128 12.6266C10.2579 13.6325 8.69706 14.1797 7.08871 14.1774C3.17574 14.1774 0 11.0017 0 7.08871C0 3.17574 3.17574 0 7.08871 0C11.0017 0 14.1774 3.17574 14.1774 7.08871C14.1797 8.69706 13.6325 10.2579 12.6266 11.5128ZM11.0466 10.9284C12.0462 9.90047 12.6044 8.52254 12.6021 7.08871C12.6021 4.04214 10.1345 1.57527 7.08871 1.57527C4.04214 1.57527 1.57527 4.04214 1.57527 7.08871C1.57527 10.1345 4.04214 12.6021 7.08871 12.6021C8.52254 12.6044 9.90047 12.0462 10.9284 11.0466L11.0466 10.9284Z",fill:"#4E5D78"})))}var H,K=i.forwardRef(Y),V=(n.p,["title","titleId"]);function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function te(e,t){var n=e.title,r=e.titleId,o=ee(e,V);return i.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",fill:"#4e5d78",viewBox:"0 0 384 512",ref:t,"aria-labelledby":r},o),n?i.createElement("title",{id:r},n):null,H||(H=i.createElement("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})))}var ne=i.forwardRef(te),re=(n.p,function(e){var t=e.nameSearch,n=e.onlyFollowed,r=e.setNameSearch,o=e.setOnlyFollowed,l=(0,_.$G)("users").t,a=(0,i.useState)(t),s=(0,I.Z)(a,2),c=s[0],u=s[1],f=F(c,500),p=(0,i.useState)(n),h=(0,I.Z)(p,2),g=h[0],d=h[1],m="light"===(0,j.F)().theme?D:A;return(0,i.useEffect)((function(){r(f)}),[r,f]),(0,i.useEffect)((function(){o(!!g||null)}),[g,o]),(0,P.jsxs)("div",{className:z,children:[(0,P.jsxs)("div",{className:M,children:[(0,P.jsx)("input",{className:"".concat(B," ").concat(m),type:"text",value:c,placeholder:l("enterNameToSearch"),onChange:function(e){u(e.currentTarget.value)}}),(0,P.jsx)(K,{className:"".concat(R," ").concat(m)}),c&&(0,P.jsx)(ne,{className:"".concat(T," ").concat(m),onClick:function(){u("")}})]}),(0,P.jsxs)("label",{className:X,children:[(0,P.jsx)("input",{className:"".concat(q," ").concat(m),type:"checkbox",checked:!!g,onChange:function(e){d(e.currentTarget.checked)}}),(0,P.jsx)("span",{className:"".concat(G," ").concat(m),children:l("showOnlySubscribed")})]})]})}),oe=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.nameSearch,l=e.onlyFollowed,a=e.onPageChanged,s=e.users,c=e.followingInProgress,i=e.setNameSearch,f=e.setOnlyFollowed,p=e.follow,h=e.unfollow,g="light"===(0,j.F)().theme?E:N;return(0,P.jsxs)("main",{className:"".concat(C," ").concat(g),children:[(0,P.jsx)(re,{nameSearch:o,onlyFollowed:l,setNameSearch:i,setOnlyFollowed:f}),(0,P.jsx)(u.D,{currentPage:t,totalItemsCount:n,pageSize:r,onPageChanged:a}),(0,P.jsx)("div",{className:k,children:s.map((function(e){return(0,P.jsx)(S,{user:e,followingInProgress:c,follow:p,unfollow:h},e.id)}))}),!s.length&&(0,P.jsx)("span",{className:"".concat(U," ").concat(g),children:"Users not found"})]})},le=n(4667),ae=n(2932),se=n(2789),ce=function(e){return e.usersPage.users},ie=function(e){return e.usersPage.pageSize},ue=function(e){return e.usersPage.totalUsersCount},fe=function(e){return e.usersPage.currentPage},pe=function(e){return e.app.isFetching},he=function(e){return e.usersPage.followingInProgress},ge=n(9073),de=function(e){(0,l.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var o=arguments.length,l=new Array(o),a=0;a<o;a++)l[a]=arguments[a];return(e=t.call.apply(t,[this].concat(l))).onPageChanged=function(t){(0,e.props.setCurrentPage)(t)},e}return(0,o.Z)(n,[{key:"getUsers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.currentPage,t=this.props,n=t.pageSize,r=t.nameSearch,o=t.onlyFollowed;this.props.requestUsers(e,n,r,o)}},{key:"componentDidMount",value:function(){this.getUsers()}},{key:"componentDidUpdate",value:function(e){this.props.nameSearch!==e.nameSearch||this.props.onlyFollowed!==e.onlyFollowed?this.getUsers(1):this.props.currentPage!==e.currentPage&&this.getUsers()}},{key:"render",value:function(){return(0,P.jsxs)(P.Fragment,{children:[this.props.isFetching?(0,P.jsx)(le.p,{}):null,(0,P.jsx)(oe,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,nameSearch:this.props.nameSearch,onlyFollowed:this.props.onlyFollowed,followingInProgress:this.props.followingInProgress,setNameSearch:this.props.setNameSearch,setOnlyFollowed:this.props.setOnlyFollowed,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),n}(i.Component),me=(0,se.qC)((0,s.$j)((function(e){return{users:ce(e),pageSize:ie(e),totalUsersCount:ue(e),currentPage:fe(e),nameSearch:e.usersPage.nameSearch,onlyFollowed:e.usersPage.onlyFollowed,isFetching:pe(e),followingInProgress:he(e)}}),{setCurrentPage:c.D4,setNameSearch:c.K4,setOnlyFollowed:c.jN,requestUsers:c.D7,follow:c.ZN,unfollow:c.fv}),ae.D,ge.R)(de)},3414:function(e,t,n){"use strict";n.d(t,{D:function(){return X}});var r,o=n(6222),l=n(678),a="Paginator_paginator__jM1XQ",s="Paginator_buttonsBlock__6eheV",c="Paginator_navigationButton__Cbq2S",i="Paginator_dark__3XXl2",u="Paginator_pageNumbersBlock__SX8Am",f="Paginator_pageNumber__CG+c0",p="Paginator_light__NysTg",h="Paginator_selectedPageNumber__xLcDm",g=n(2791),d=n(5999),m=n(1694),v=n.n(m),y=["title","titleId"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _(e,t){var n=e.title,o=e.titleId,l=b(e,y);return g.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#4e5d78",ref:t,"aria-labelledby":o},l),n?g.createElement("title",{id:o},n):null,r||(r=g.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))}var j,x=g.forwardRef(_),O=(n.p,["title","titleId"]);function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function C(e,t){var n=e.title,r=e.titleId,o=S(e,O);return g.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#4e5d78",ref:t,"aria-labelledby":r},o),n?g.createElement("title",{id:r},n):null,j||(j=g.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))}var E,N=g.forwardRef(C),k=(n.p,["title","titleId"]);function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function F(e,t){var n=e.title,r=e.titleId,o=I(e,k);return g.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#4e5d78",ref:t,"aria-labelledby":r},o),n?g.createElement("title",{id:r},n):null,E||(E=g.createElement("g",null,g.createElement("g",null,g.createElement("polygon",{points:"17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12"}),g.createElement("polygon",{points:"11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12"})))))}var Z,L=g.forwardRef(F),z=(n.p,["title","titleId"]);function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function D(e,t){var n=e.title,r=e.titleId,o=B(e,z);return g.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#4e5d78",ref:t,"aria-labelledby":r},o),n?g.createElement("title",{id:r},n):null,Z||(Z=g.createElement("g",null,g.createElement("g",null,g.createElement("polygon",{points:"6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12"}),g.createElement("polygon",{points:"13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"})))))}var A=g.forwardRef(D),R=(n.p,n(9785)),T=n(184),X=function(e){for(var t=e.currentPage,n=e.totalItemsCount,r=e.pageSize,m=e.onPageChanged,y=e.portionSize,w=void 0===y?20:y,b="light"===(0,R.F)().theme?p:i,_=Math.ceil(n/r),j=Math.ceil(t/w),O=[],P=1;P<=_;P++)O.push(P);var S=Math.ceil(_/w),C=(0,g.useState)(j),E=(0,l.Z)(C,2),k=E[0],U=E[1],I=(k-1)*w+1,F=k*w;return(0,g.useEffect)((function(){U(j)}),[j]),(0,T.jsxs)("div",{className:a,children:[(0,T.jsxs)("div",{className:s,children:[(0,T.jsx)("button",{className:"".concat(c," ").concat(b),disabled:1===k||!n,onClick:function(){return U(1)},children:(0,T.jsx)(L,{})}),(0,T.jsx)("button",{className:"".concat(c," ").concat(b),disabled:1===k||!n,onClick:function(){return U(k-1)},children:(0,T.jsx)(x,{})})]}),(0,T.jsx)("div",{className:u,children:O.filter((function(e){return e>=I&&e<=F})).map((function(e){return(0,T.jsx)("span",{className:v()(f,b,(0,o.Z)({},h,t===e)),onClick:function(){return m(e)},children:e},(0,d.Z)())}))}),(0,T.jsxs)("div",{className:s,children:[(0,T.jsx)("button",{className:"".concat(c," ").concat(b),disabled:k===S||!n,onClick:function(){return U(k+1)},children:(0,T.jsx)(N,{})}),(0,T.jsx)("button",{className:"".concat(c," ").concat(b),disabled:k===S||!n,onClick:function(){return U(S)},children:(0,T.jsx)(A,{})})]})]})}},2932:function(e,t,n){"use strict";n.d(t,{D:function(){return d}});var r=n(8489),o=n(3738),l=n(7853),a=n(4531),s=n(1020),c=n(8992),i=n(2791),u=n(9723),f=n(7375),p=n(184),h=["isAuth"],g=function(e){return{isAuth:e.auth.isAuth}};function d(e){var t=function(t){(0,s.Z)(i,t);var n=(0,c.Z)(i);function i(){return(0,l.Z)(this,i),n.apply(this,arguments)}return(0,a.Z)(i,[{key:"render",value:function(){var t=this.props,n=t.isAuth,l=(0,o.Z)(t,h);return n?(0,p.jsx)(e,(0,r.Z)({},l)):(0,p.jsx)(u.l_,{to:"/login"})}}]),i}(i.Component);return(0,f.$j)(g)(t)}},9073:function(e,t,n){"use strict";n.d(t,{R:function(){return c}});var r=n(8489),o=n(2791),l=n(8281),a=n(7375),s=n(184),c=function(e){return function(t){var n=(0,a.I0)();return(0,o.useEffect)((function(){n((0,l.CX)())}),[n]),(0,s.jsx)(e,(0,r.Z)({},t))}}},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3738:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=827.53f9e8f2.chunk.js.map