"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[545],{8545:function(n,r,e){e.r(r),e.d(r,{default:function(){return J}});var t,o=e(5671),s=e(3144),i=e(136),u=e(5716),a=e(364),l=e(8386),c=e(2791),f=e(885),d="Paginator_paginator__YeMQJ",p="Paginator_pageNumber__pzTIq",h="Paginator_selectedPageNumber__h1lhJ",g=new Uint8Array(16);function v(){if(!t&&!(t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(g)}var m=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var y=function(n){return"string"===typeof n&&m.test(n)},w=[],b=0;b<256;++b)w.push((b+256).toString(16).substr(1));var j,P,x=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(w[n[r+0]]+w[n[r+1]]+w[n[r+2]]+w[n[r+3]]+"-"+w[n[r+4]]+w[n[r+5]]+"-"+w[n[r+6]]+w[n[r+7]]+"-"+w[n[r+8]]+w[n[r+9]]+"-"+w[n[r+10]]+w[n[r+11]]+w[n[r+12]]+w[n[r+13]]+w[n[r+14]]+w[n[r+15]]).toLowerCase();if(!y(e))throw TypeError("Stringified UUID is invalid");return e},C=0,S=0;var k=function(n,r,e){var t=r&&e||0,o=r||new Array(16),s=(n=n||{}).node||j,i=void 0!==n.clockseq?n.clockseq:P;if(null==s||null==i){var u=n.random||(n.rng||v)();null==s&&(s=j=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==i&&(i=P=16383&(u[6]<<8|u[7]))}var a=void 0!==n.msecs?n.msecs:Date.now(),l=void 0!==n.nsecs?n.nsecs:S+1,c=a-C+(l-S)/1e4;if(c<0&&void 0===n.clockseq&&(i=i+1&16383),(c<0||a>C)&&void 0===n.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");C=a,S=l,P=i;var f=(1e4*(268435455&(a+=122192928e5))+l)%4294967296;o[t++]=f>>>24&255,o[t++]=f>>>16&255,o[t++]=f>>>8&255,o[t++]=255&f;var d=a/4294967296*1e4&268435455;o[t++]=d>>>8&255,o[t++]=255&d,o[t++]=d>>>24&15|16,o[t++]=d>>>16&255,o[t++]=i>>>8|128,o[t++]=255&i;for(var p=0;p<6;++p)o[t+p]=s[p];return r||x(o)},Z=e(184),I=function(n){for(var r=n.currentPage,e=n.totalItemsCount,t=n.pageSize,o=n.onPageChanged,s=n.portionSize,i=void 0===s?20:s,u=Math.ceil(e/t),a=[],l=1;l<=u;l++)a.push(l);var g=Math.ceil(u/i),v=(0,c.useState)(Math.ceil(r/i)),m=(0,f.Z)(v,2),y=m[0],w=m[1],b=(y-1)*i+1,j=y*i;return(0,Z.jsxs)("div",{className:d,children:[(0,Z.jsx)("button",{disabled:1===y,onClick:function(){return w(1)},children:"<---"}),(0,Z.jsx)("button",{disabled:1===y,onClick:function(){return w(y-1)},children:"<--"}),a.filter((function(n){return n>=b&&n<=j})).map((function(n){return(0,Z.jsx)("span",{className:p+" "+(r===n?h:""),onClick:function(){return o(n)},children:n},k())})),(0,Z.jsx)("button",{disabled:y===g,onClick:function(){return w(y+1)},children:"--\x3e"}),(0,Z.jsx)("button",{disabled:y===g,onClick:function(){return w(g)},children:"---\x3e"})]})},_=e(1523),U=e(4353),z="User_userPhoto__TIYz7",A=function(n){var r=n.user,e=n.followingInProgress,t=n.follow,o=n.unfollow;return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("span",{children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(_.OL,{to:"/profile/".concat(r.id),children:(0,Z.jsx)("img",{src:r.photos.large?r.photos.large:U,className:z,alt:""})})}),(0,Z.jsx)("div",{children:r.followed?(0,Z.jsx)("button",{disabled:e.some((function(n){return n===r.id})),onClick:function(){return o(r.id)},children:"Unfollow"}):(0,Z.jsx)("button",{disabled:e.some((function(n){return n===r.id})),onClick:function(){return t(r.id)},children:"Follow"})})]}),(0,Z.jsxs)("span",{children:[(0,Z.jsxs)("span",{children:[(0,Z.jsx)("div",{children:r.name}),(0,Z.jsx)("div",{children:r.status})]}),(0,Z.jsxs)("span",{children:[(0,Z.jsx)("div",{children:"user.location.city"}),(0,Z.jsx)("div",{children:"user.location.country"})]})]})]})},q=function(n){for(var r=n.currentPage,e=n.totalUsersCount,t=n.pageSize,o=n.onPageChanged,s=n.users,i=n.followingInProgress,u=n.follow,a=n.unfollow,l=Math.ceil(e/t),c=[],f=1;f<=l;f++)c.push(f);return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(I,{currentPage:r,totalItemsCount:e,pageSize:t,onPageChanged:o}),(0,Z.jsx)("div",{children:s.map((function(n){return(0,Z.jsx)(A,{user:n,followingInProgress:i,follow:u,unfollow:a},n.id)}))})]})},D=e(1638),M=e(2932),O=e(7781),N=function(n){return n.usersPage.users},E=function(n){return n.usersPage.pageSize},F=function(n){return n.usersPage.totalUsersCount},R=function(n){return n.usersPage.currentPage},V=function(n){return n.usersPage.isFetching},T=function(n){return n.usersPage.followingInProgress},$=function(n){(0,i.Z)(e,n);var r=(0,u.Z)(e);function e(){var n;(0,o.Z)(this,e);for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return(n=r.call.apply(r,[this].concat(s))).onPageChanged=function(r){var e=n.props,t=e.pageSize,o=e.setCurrentPage,s=e.requestUsers;o(r),s(r,t)},n}return(0,s.Z)(e,[{key:"componentDidMount",value:function(){var n=this.props,r=n.currentPage,e=n.pageSize;this.props.requestUsers(r,e)}},{key:"render",value:function(){return(0,Z.jsxs)(Z.Fragment,{children:[this.props.isFetching?(0,Z.jsx)(D.p,{}):null,(0,Z.jsx)(q,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),e}(c.Component),J=(0,O.qC)((0,a.$j)((function(n){return{users:N(n),pageSize:E(n),totalUsersCount:F(n),currentPage:R(n),isFetching:V(n),followingInProgress:T(n)}}),{setCurrentPage:l.D4,requestUsers:l.D7,follow:l.ZN,unfollow:l.fv}),M.D)($)},2932:function(n,r,e){e.d(r,{D:function(){return g}});var t=e(8683),o=e(5987),s=e(5671),i=e(3144),u=e(136),a=e(5716),l=e(2791),c=e(9271),f=e(364),d=e(184),p=["isAuth"],h=function(n){return{isAuth:n.auth.isAuth}};function g(n){var r=function(r){(0,u.Z)(l,r);var e=(0,a.Z)(l);function l(){return(0,s.Z)(this,l),e.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){var r=this.props,e=r.isAuth,s=(0,o.Z)(r,p);return e?(0,d.jsx)(n,(0,t.Z)({},s)):(0,d.jsx)(c.l_,{to:"/login"})}}]),l}(l.Component);return(0,f.$j)(h)(r)}},4353:function(n,r,e){n.exports=e.p+"static/media/user.cd1055abe0750bbaa00c.png"},5987:function(n,r,e){e.d(r,{Z:function(){return o}});var t=e(3366);function o(n,r){if(null==n)return{};var e,o,s=(0,t.Z)(n,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(s[e]=n[e])}return s}},885:function(n,r,e){e.d(r,{Z:function(){return o}});var t=e(181);function o(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,o,s=[],i=!0,u=!1;try{for(e=e.call(n);!(i=(t=e.next()).done)&&(s.push(t.value),!r||s.length!==r);i=!0);}catch(a){u=!0,o=a}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return s}}(n,r)||(0,t.Z)(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=545.3e3c9a8f.chunk.js.map