/*! For license information please see 545.742e4699.chunk.js.LICENSE.txt */
(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[545],{8545:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return Q}});var t,o=e(5671),s=e(3144),i=e(136),u=e(5716),a=e(364),l=e(8386),c=e(2791),f=e(4942),d=e(885),p="Paginator_paginator__YeMQJ",h="Paginator_pageNumber__pzTIq",g="Paginator_selectedPageNumber__h1lhJ",v=new Uint8Array(16);function y(){if(!t&&!(t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(v)}var m=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var w=function(n){return"string"===typeof n&&m.test(n)},j=[],b=0;b<256;++b)j.push((b+256).toString(16).substr(1));var x,P,C=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(j[n[r+0]]+j[n[r+1]]+j[n[r+2]]+j[n[r+3]]+"-"+j[n[r+4]]+j[n[r+5]]+"-"+j[n[r+6]]+j[n[r+7]]+"-"+j[n[r+8]]+j[n[r+9]]+"-"+j[n[r+10]]+j[n[r+11]]+j[n[r+12]]+j[n[r+13]]+j[n[r+14]]+j[n[r+15]]).toLowerCase();if(!w(e))throw TypeError("Stringified UUID is invalid");return e},S=0,Z=0;var k=function(n,r,e){var t=r&&e||0,o=r||new Array(16),s=(n=n||{}).node||x,i=void 0!==n.clockseq?n.clockseq:P;if(null==s||null==i){var u=n.random||(n.rng||y)();null==s&&(s=x=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==i&&(i=P=16383&(u[6]<<8|u[7]))}var a=void 0!==n.msecs?n.msecs:Date.now(),l=void 0!==n.nsecs?n.nsecs:Z+1,c=a-S+(l-Z)/1e4;if(c<0&&void 0===n.clockseq&&(i=i+1&16383),(c<0||a>S)&&void 0===n.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");S=a,Z=l,P=i;var f=(1e4*(268435455&(a+=122192928e5))+l)%4294967296;o[t++]=f>>>24&255,o[t++]=f>>>16&255,o[t++]=f>>>8&255,o[t++]=255&f;var d=a/4294967296*1e4&268435455;o[t++]=d>>>8&255,o[t++]=255&d,o[t++]=d>>>24&15|16,o[t++]=d>>>16&255,o[t++]=i>>>8|128,o[t++]=255&i;for(var p=0;p<6;++p)o[t+p]=s[p];return r||C(o)},I=e(1694),_=e.n(I),U=e(184),z=function(n){for(var r=n.currentPage,e=n.totalItemsCount,t=n.pageSize,o=n.onPageChanged,s=n.portionSize,i=void 0===s?20:s,u=Math.ceil(e/t),a=[],l=1;l<=u;l++)a.push(l);var v=Math.ceil(u/i),y=(0,c.useState)(Math.ceil(r/i)),m=(0,d.Z)(y,2),w=m[0],j=m[1],b=(w-1)*i+1,x=w*i;return(0,U.jsxs)("div",{className:p,children:[(0,U.jsx)("button",{disabled:1===w,onClick:function(){return j(1)},children:"<---"}),(0,U.jsx)("button",{disabled:1===w,onClick:function(){return j(w-1)},children:"<--"}),a.filter((function(n){return n>=b&&n<=x})).map((function(n){return(0,U.jsx)("span",{className:_()(h,(0,f.Z)({},g,r===n)),onClick:function(){return o(n)},children:n},k())})),(0,U.jsx)("button",{disabled:w===v,onClick:function(){return j(w+1)},children:"--\x3e"}),(0,U.jsx)("button",{disabled:w===v,onClick:function(){return j(v)},children:"---\x3e"})]})},A=e(1523),O=e(6939),q="User_userPhoto__TIYz7",D=function(n){var r=n.user,e=n.followingInProgress,t=n.follow,o=n.unfollow;return(0,U.jsxs)("div",{children:[(0,U.jsxs)("span",{children:[(0,U.jsx)("div",{children:(0,U.jsx)(A.OL,{to:"/profile/".concat(r.id),children:(0,U.jsx)("img",{src:r.photos.large||O.Z,className:q,alt:""})})}),(0,U.jsx)("div",{children:r.followed?(0,U.jsx)("button",{disabled:e.some((function(n){return n===r.id})),onClick:function(){return o(r.id)},children:"Unfollow"}):(0,U.jsx)("button",{disabled:e.some((function(n){return n===r.id})),onClick:function(){return t(r.id)},children:"Follow"})})]}),(0,U.jsxs)("span",{children:[(0,U.jsxs)("span",{children:[(0,U.jsx)("div",{children:r.name}),(0,U.jsx)("div",{children:r.status})]}),(0,U.jsxs)("span",{children:[(0,U.jsx)("div",{children:"user.location.city"}),(0,U.jsx)("div",{children:"user.location.country"})]})]})]})},M=function(n){for(var r=n.currentPage,e=n.totalUsersCount,t=n.pageSize,o=n.onPageChanged,s=n.users,i=n.followingInProgress,u=n.follow,a=n.unfollow,l=Math.ceil(e/t),c=[],f=1;f<=l;f++)c.push(f);return(0,U.jsxs)("div",{children:[(0,U.jsx)(z,{currentPage:r,totalItemsCount:e,pageSize:t,onPageChanged:o}),(0,U.jsx)("div",{children:s.map((function(n){return(0,U.jsx)(D,{user:n,followingInProgress:i,follow:u,unfollow:a},n.id)}))})]})},N=e(1638),E=e(2932),F=e(7781),R=function(n){return n.usersPage.users},V=function(n){return n.usersPage.pageSize},T=function(n){return n.usersPage.totalUsersCount},$=function(n){return n.usersPage.currentPage},J=function(n){return n.app.isFetching},L=function(n){return n.usersPage.followingInProgress},Y=function(n){(0,i.Z)(e,n);var r=(0,u.Z)(e);function e(){var n;(0,o.Z)(this,e);for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return(n=r.call.apply(r,[this].concat(s))).onPageChanged=function(r){var e=n.props,t=e.pageSize,o=e.setCurrentPage,s=e.requestUsers;o(r),s(r,t)},n}return(0,s.Z)(e,[{key:"componentDidMount",value:function(){var n=this.props,r=n.currentPage,e=n.pageSize;this.props.requestUsers(r,e)}},{key:"render",value:function(){return(0,U.jsxs)(U.Fragment,{children:[this.props.isFetching?(0,U.jsx)(N.p,{}):null,(0,U.jsx)(M,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),e}(c.Component),Q=(0,F.qC)((0,a.$j)((function(n){return{users:R(n),pageSize:V(n),totalUsersCount:T(n),currentPage:$(n),isFetching:J(n),followingInProgress:L(n)}}),{setCurrentPage:l.D4,requestUsers:l.D7,follow:l.ZN,unfollow:l.fv}),E.D)(Y)},2932:function(n,r,e){"use strict";e.d(r,{D:function(){return g}});var t=e(1413),o=e(5987),s=e(5671),i=e(3144),u=e(136),a=e(5716),l=e(2791),c=e(9271),f=e(364),d=e(184),p=["isAuth"],h=function(n){return{isAuth:n.auth.isAuth}};function g(n){var r=function(r){(0,u.Z)(l,r);var e=(0,a.Z)(l);function l(){return(0,s.Z)(this,l),e.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){var r=this.props,e=r.isAuth,s=(0,o.Z)(r,p);return e?(0,d.jsx)(n,(0,t.Z)({},s)):(0,d.jsx)(c.l_,{to:"/login"})}}]),l}(l.Component);return(0,f.$j)(h)(r)}},1694:function(n,r){var e;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var s=typeof e;if("string"===s||"number"===s)n.push(e);else if(Array.isArray(e)){if(e.length){var i=o.apply(null,e);i&&n.push(i)}}else if("object"===s)if(e.toString===Object.prototype.toString)for(var u in e)t.call(e,u)&&e[u]&&n.push(u);else n.push(e.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(e=function(){return o}.apply(r,[]))||(n.exports=e)}()},5987:function(n,r,e){"use strict";e.d(r,{Z:function(){return o}});var t=e(3366);function o(n,r){if(null==n)return{};var e,o,s=(0,t.Z)(n,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(s[e]=n[e])}return s}},885:function(n,r,e){"use strict";e.d(r,{Z:function(){return o}});var t=e(181);function o(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,o,s=[],i=!0,u=!1;try{for(e=e.call(n);!(i=(t=e.next()).done)&&(s.push(t.value),!r||s.length!==r);i=!0);}catch(a){u=!0,o=a}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return s}}(n,r)||(0,t.Z)(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=545.742e4699.chunk.js.map