"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[148],{7148:function(t,n,r){r.r(n),r.d(n,{default:function(){return O}});var e=r(8683),i=r(5671),s=r(3144),o=r(136),u=r(5716),a=r(2791),l=r(81),c=r(885),f="ProfileInfo_descriptionBlock__4NJUd",d="ProfileInfo_imageBlock__YxCgd",h="ProfileInfo_mainPhoto__u8rSU",p=r(1638),m=r(184),x=function(t){var n=(0,a.useState)(!1),r=(0,c.Z)(n,2),e=r[0],i=r[1],s=(0,a.useState)(t.status),o=(0,c.Z)(s,2),u=o[0],l=o[1];(0,a.useEffect)((function(){l(t.status)}),[t.status]);return(0,m.jsx)(m.Fragment,{children:e?(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(t){return l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(u)},value:u})}):(0,m.jsx)("div",{children:(0,m.jsx)("span",{onDoubleClick:function(){return i(!0)},children:t.status||"no status"})})})},j=r(4353),v=function(t){var n=t.profile,r=t.isOwner,e=t.goToEditMode,i=Object.keys(n.contacts).map((function(t){var r=n.contacts[t];return r&&"vk"!==t?(0,m.jsx)(g,{contactTitle:t,contactValue:r},t):null}));return(0,m.jsxs)("div",{children:[r&&(0,m.jsx)("button",{onClick:e,children:"Edit"}),(0,m.jsx)("h2",{children:n.fullName}),(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:["About me: ",n.aboutMe]}),(0,m.jsxs)("li",{children:["Looking for a job: ",n.lookingForAJob?"yes":"no"]}),n.lookingForAJob&&(0,m.jsxs)("li",{children:["My professional skills: ",n.lookingForAJobDescription]}),(0,m.jsxs)("li",{children:["Contacts:",(0,m.jsx)("ul",{children:i})]})]})]})},g=function(t){var n=t.contactTitle,r=t.contactValue;return(0,m.jsxs)("li",{children:[n,": ",r]})},b=r(704),Z=r(1117),y=r(3079),k=r(9234),P=(0,b.Z)({form:"edit-profile"})((function(t){var n=t.initialValues,r=t.handleSubmit,e=t.error,i=Object.keys(n.contacts).map((function(t){return"vk"!==t?(0,m.jsxs)("li",{children:[t,": ",(0,Z.Gr)(t,"contacts.".concat(t),"text",[],Z.II)]},t):null}));return(0,m.jsxs)("form",{children:[(0,m.jsx)("button",{onClick:r,children:"Save"}),e&&(0,m.jsx)("div",{className:k.Z.formSummaryError,children:e}),(0,m.jsxs)("ul",{children:[(0,m.jsxs)("li",{children:["Full name: ",(0,Z.Gr)("Full name","fullName","text",[y.C],Z.II)]}),(0,m.jsxs)("li",{children:["Looking for a job: ",(0,Z.Gr)("","lookingForAJob","checkbox",[],Z.II)]}),(0,m.jsxs)("li",{children:["My professional skills: ",(0,Z.Gr)("My professional skills","lookingForAJobDescription","text",[y.C],Z.gx)]}),(0,m.jsxs)("li",{children:["About me: ",(0,Z.Gr)("About me","aboutMe","text",[y.C],Z.gx)]}),(0,m.jsxs)("li",{children:["Contacts:",(0,m.jsx)("ul",{children:i})]})]})]})})),_=function(t){var n=t.profile,r=t.status,e=t.isOwner,i=t.updateStatus,s=t.savePhoto,o=t.saveProfile,u=(0,a.useState)(!1),l=(0,c.Z)(u,2),g=l[0],b=l[1];if(!n)return(0,m.jsx)(p.p,{});return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:f,children:[(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("img",{className:h,src:n.photos.large||j,alt:""}),e&&(0,m.jsx)("input",{type:"file",onChange:function(t){t.target.files&&t.target.files.length&&s(t.target.files[0])},accept:".jpg, .jpeg, .png"}),(0,m.jsx)(x,{status:r,updateStatus:i})]}),g?(0,m.jsx)(P,{initialValues:n,onSubmit:function(t){o(t).then((function(){return b(!1)})).catch((function(t){return t}))}}):(0,m.jsx)(v,{profile:n,isOwner:e,goToEditMode:function(){return b(!0)}})]})})},C="Post_item__ulIEf",S=function(t){return(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("img",{src:"https://www.terminal-a.com.ua/wp-content/uploads/2017/05/Koala.jpg",alt:""}),(0,m.jsx)("span",{children:t.message})," ",(0,m.jsxs)("span",{children:["Likes: ",t.likes]})]})},I="Posts_postsBlock__9oy-3",w=r(6139),A=(0,y.D)(70),D=(0,b.Z)({form:"profileAddPostForm"})((function(t){return(0,m.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,m.jsx)("div",{children:(0,m.jsx)(w.Z,{component:Z.gx,name:"newPostText",validate:[y.C,A],placeholder:"Post message"})}),(0,m.jsx)("button",{children:"Add post"})]})})),F=(0,a.memo)((function(t){var n=t.postsData.map((function(t){return(0,m.jsx)(S,{message:t.message,likes:t.likes},t.id)}));return(0,m.jsxs)("div",{className:I,children:[(0,m.jsx)("h3",{children:"My posts"}),(0,m.jsx)(D,{onSubmit:function(n){t.addPost(n.newPostText)}}),(0,m.jsx)("div",{children:n})]})})),N=r(364),E=(0,N.$j)((function(t){return{postsData:t.profilePage.postsData}}),(function(t){return{addPost:function(n){t((0,l.Pi)(n))}}}))(F),M=function(t){return(0,m.jsxs)("main",{children:[(0,m.jsx)(_,(0,e.Z)({},t)),(0,m.jsx)(E,{})]})},J=r(9271),T=r(2932),U=r(7781),G=function(t){(0,o.Z)(r,t);var n=(0,u.Z)(r);function r(){return(0,i.Z)(this,r),n.apply(this,arguments)}return(0,s.Z)(r,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userID;t||(t=this.props.authorizedUserID),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.userID!==t.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,m.jsxs)(m.Fragment,{children:[this.props.isFetching?(0,m.jsx)(p.p,{}):null,(0,m.jsx)(M,(0,e.Z)({isOwner:!this.props.match.params.userID},this.props))]})}}]),r}(a.Component),O=(0,U.qC)((0,N.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserID:t.auth.id,isAuth:t.auth.isAuth,isFetching:t.app.isFetching}}),{getUserProfile:l.et,getStatus:l.lR,updateStatus:l.Nf,savePhoto:l.Ju,saveProfile:l.Ii}),J.EN,T.D)(G)},1117:function(t,n,r){r.d(n,{gx:function(){return f},II:function(){return d},Gr:function(){return h}});var e=r(8683),i=r(5987),s=r(6139),o=r(9234),u=(r(2791),r(184)),a=["input","meta"],l=["input","meta"],c=function(t){t.input;var n=t.meta,r=n.touched,e=n.error,i=t.children,s=r&&e;return(0,u.jsxs)("div",{className:o.Z.formControl+" "+(s?o.Z.error:""),children:[(0,u.jsx)("div",{children:i}),s&&(0,u.jsx)("span",{children:e})]})},f=function(t){var n=t.input,r=(t.meta,(0,i.Z)(t,a));return(0,u.jsx)(c,(0,e.Z)((0,e.Z)({},t),{},{children:(0,u.jsx)("textarea",(0,e.Z)((0,e.Z)({},n),r))}))},d=function(t){var n=t.input,r=(t.meta,(0,i.Z)(t,l));return(0,u.jsx)(c,(0,e.Z)((0,e.Z)({},t),{},{children:(0,u.jsx)("input",(0,e.Z)((0,e.Z)({},n),r))}))},h=function(t,n,r,i,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return(0,u.jsx)("div",{children:(0,u.jsx)(s.Z,(0,e.Z)({placeholder:t,name:n,type:r,validate:i,component:o},a))})}},2932:function(t,n,r){r.d(n,{D:function(){return m}});var e=r(8683),i=r(5987),s=r(5671),o=r(3144),u=r(136),a=r(5716),l=r(2791),c=r(9271),f=r(364),d=r(184),h=["isAuth"],p=function(t){return{isAuth:t.auth.isAuth}};function m(t){var n=function(n){(0,u.Z)(l,n);var r=(0,a.Z)(l);function l(){return(0,s.Z)(this,l),r.apply(this,arguments)}return(0,o.Z)(l,[{key:"render",value:function(){var n=this.props,r=n.isAuth,s=(0,i.Z)(n,h);return r?(0,d.jsx)(t,(0,e.Z)({},s)):(0,d.jsx)(c.l_,{to:"/login"})}}]),l}(l.Component);return(0,f.$j)(p)(n)}},3079:function(t,n,r){r.d(n,{C:function(){return e},D:function(){return i}});var e=function(t){return t?void 0:"Field is required"},i=function(t){return function(n){return n.length>t?"Max length is ".concat(t," symbols"):void 0}}},9234:function(t,n){n.Z={formControl:"FormsControls_formControl__7Kujw",error:"FormsControls_error__VtPjP",formSummaryError:"FormsControls_formSummaryError__u1JdX"}},4353:function(t,n,r){t.exports=r.p+"static/media/user.cd1055abe0750bbaa00c.png"},885:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(181);function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,i,s=[],o=!0,u=!1;try{for(r=r.call(t);!(o=(e=r.next()).done)&&(s.push(e.value),!n||s.length!==n);o=!0);}catch(a){u=!0,i=a}finally{try{o||null==r.return||r.return()}finally{if(u)throw i}}return s}}(t,n)||(0,e.Z)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=148.197f2cb3.chunk.js.map