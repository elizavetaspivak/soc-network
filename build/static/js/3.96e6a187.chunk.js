(this.webpackJsonpsoc=this.webpackJsonpsoc||[]).push([[3],{296:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var o=s(4),i=s(87),n=s(11),c=(s(1),s(19)),r=s(0),a=function(t){return{isAuth:t.auth.isAuth}};function u(t){return Object(c.b)(a)((function(e){var s=e.isAuth,c=Object(i.a)(e,["isAuth"]);return s?Object(r.jsx)(t,Object(o.a)({},c)):Object(r.jsx)(n.a,{to:"/login"})}))}},297:function(t,e,s){t.exports={description_block:"ProfileInfo_description_block__187mR",profilePhoto:"ProfileInfo_profilePhoto__9KLOb",updatePhoto:"ProfileInfo_updatePhoto__1oo45",image_block:"ProfileInfo_image_block__2czoV"}},298:function(t,e,s){t.exports={status:"ProfileStatus_status__SCDgG"}},299:function(t,e,s){t.exports={posts_block:"MyPosts_posts_block__12W53",posts:"MyPosts_posts__3ZUOo"}},300:function(t,e,s){t.exports={item:"Post_item__371Kq"}},302:function(t,e,s){"use strict";s.r(e);var o=s(4),i=s(1),n=s.n(i),c=s(29),r=s(95),a=s(297),u=s.n(a),l=s(40),j=s(298),b=s.n(j),d=s(0);function f(t){var e=Object(i.useState)(!1),s=Object(r.a)(e,2),o=s[0],n=s[1],c=Object(i.useState)(t.status),a=Object(r.a)(c,2),u=a[0],l=a[1];Object(i.useEffect)((function(){l(t.status)}),[t.status]);return Object(d.jsx)("div",{children:o?Object(d.jsx)("div",{children:Object(d.jsx)("input",{onBlur:function(){n(!1),t.updateStatus(u)},value:u,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0})}):Object(d.jsxs)("div",{className:b.a.status,children:["Status: ",Object(d.jsxs)("span",{onDoubleClick:function(){n(!0)},children:[t.status," "]})]})})}var h=s(104),p=s(19),O=s(55),x=s(126),v=s(127),m=function(t,e,s,o,i){return Object(d.jsx)("div",{children:Object(d.jsx)(x.a,{type:t,placeholder:e,name:s,component:o,validate:i})})};var g=Object(v.a)({form:"edit-profile"})((function(t){Object(p.c)();var e=Object(p.d)((function(t){return t.profilePage.profile}));return Object(d.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(d.jsxs)("div",{style:{listStyleType:"none",paddingLeft:"0px",marginLeft:"0px"},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Full name:"}),m("textarea","Full  name","fullName",O.a,[])," "]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"About Me: "}),e.aboutMe,m("textarea","About Me","aboutMe",O.b,[])]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Looking for a job:"})," ",e.lookingForAJob?"Yes":"No",m("checkbox","","lookingForAJob",O.a,[])]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"My professional skills"})," : ",e.lookingForAJobDescription,m("textarea","My professional skills","lookingForAJobDescription",O.b,[])]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(d.jsx)("div",{className:"contact",children:Object(d.jsxs)("b",{children:[t,": ",m(t,"textarea","contacts."+t,O.a,[])," "]})})}))]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Save"})})]})}));function P(t){var e=Object(i.useState)(!1),s=Object(r.a)(e,2),o=s[0],n=s[1];return t.profile?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:u.a.description_block,children:[Object(d.jsxs)("div",{className:u.a.profilePhoto,children:[Object(d.jsx)("img",{src:t.profile.photos.large||h.a,alt:""}),Object(d.jsx)("div",{className:u.a.updatePhoto,children:t.isOwner?Object(d.jsx)("input",{type:"file",onChange:function(e){return function(e){var s;(null===(s=e.target.files)||void 0===s?void 0:s.length)&&t.savePhoto(e.target.files[0])}(e)}}):""})]}),o?Object(d.jsx)(g,{initialValues:t.profile,onSubmit:function(e){t.saveProfile(e),n(!1)}}):Object(d.jsx)(k,{goToEditMode:function(){n(!0)},isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,changeStatusAC:t.changeStatusAC})]})}):Object(d.jsx)(l.a,{})}function k(t){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:["Name: ",t.profile.fullName]}),Object(d.jsx)(f,{status:t.status,changeStatusAC:t.changeStatusAC,updateStatus:t.updateStatus}),Object(d.jsxs)("p",{children:["About Me: ",t.profile.aboutMe]}),Object(d.jsxs)("p",{children:["Looking for a job: ",t.profile.lookingForAJob?"Yes ":"No "]}),t.profile.lookingForAJob&&Object(d.jsxs)("div",{children:["My professional skills: ",t.profile.lookingForAJobDescription]}),Object(d.jsxs)("div",{children:["Contacts: ",t.profile.contacts&&Object.entries(t.profile.contacts).map((function(t){return t[1]&&Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:t[1],children:t[0]})})}))]}),t.isOwner?Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:t.goToEditMode,children:"EDIT"})}):""]})}var _=s(94),S=s(299),A=s.n(S),C=s(300),M=s.n(C);function y(t){return Object(d.jsxs)("div",{className:M.a.item,children:[Object(d.jsx)("img",{src:"https://www.liveabout.com/thmb/pElYdfgKoydmsrso8fiU1wd-jO0=/1449x1449/smart/filters:no_upscale()/Avatar_12_HR_01-56a00ca93df78cafda9fd17c.jpg"}),t.message,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"like"})," ",t.likesCount]})]})}var w=s(72),N=Object(w.a)(10),I=Object(v.a)({form:"profileMyPostsForm"})((function(t){return Object(d.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(x.a,{placeholder:"Enter your post",name:"newPostBody",component:O.b,validate:[w.b,N]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Add"})})]})})),F=n.a.memo((function(t){var e=t.posts.map((function(t){return Object(d.jsx)(y,{message:t.message,likesCount:t.likesCount,id:t.id},t.id)}));return Object(d.jsxs)("div",{className:A.a.posts_block,children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsx)(I,{onSubmit:function(e){t.addPostActionCreator(e.newPostBody)}}),Object(d.jsx)("div",{className:A.a.posts,children:e})]})})),T=function(t){return t.profilePage.profile},D=function(t){return t.profilePage.status},J=function(t){return t.auth.userId},E=function(t){return t.profilePage.posts},U=Object(p.b)((function(t){return{posts:E(t)}}),{addPostActionCreator:_.a})(F);function L(t){return document.title="Profile",Object(d.jsxs)("div",{children:[Object(d.jsxs)(c.a,{children:[Object(d.jsx)("title",{children:"Profile"}),Object(d.jsx)("meta",{name:"description",content:"Profile application"})]}),Object(d.jsx)(P,{saveProfile:t.saveProfile,savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,changeStatusAC:t.changeStatusAC,updateStatus:t.updateStatus}),Object(d.jsx)(U,{})]})}var z=s(11),B=s(296),K=s(10),Y=s(88);e.default=Object(K.d)(Object(p.b)((function(t){return{profile:T(t),status:D(t),autorizedUserID:J(t),isAuth:Object(Y.a)(t)}}),{setUserProfile:_.h,getMeProfileThunkCreator:_.c,changeStatusAC:_.b,getMeStatusThunkCreator:_.d,updateStatusThunkCreator:_.i,savePhoto:_.f,saveProfile:_.g}),z.f,B.a)((function(t){return Object(i.useEffect)((function(){var e=Number(t.match.params.userId);e||(e=t.autorizedUserID)||t.history.push("/login"),t.getMeProfileThunkCreator(e),t.getMeStatusThunkCreator(e)}),[t.match.params.userId,t.autorizedUserID,t]),Object(d.jsxs)("div",{children:[Object(d.jsxs)(c.a,{children:[Object(d.jsx)("title",{children:"Profile"}),Object(d.jsx)("meta",{name:"description",content:"Profile application"})]}),Object(d.jsx)(L,Object(o.a)(Object(o.a)({},t),{},{saveProfile:t.saveProfile,savePhoto:t.savePhoto,isOwner:!t.match.params.userId,profile:t.profile,status:t.status,changeStatusAC:t.changeStatusAC,updateStatus:t.updateStatusThunkCreator}))]})}))}}]);
//# sourceMappingURL=3.96e6a187.chunk.js.map