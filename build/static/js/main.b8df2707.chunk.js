(this.webpackJsonpsoc=this.webpackJsonpsoc||[]).push([[0],{104:function(e,t,n){"use strict";t.a=n.p+"static/media/avatar.e5117e8e.jpg"},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(133),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"440db37e-eb2c-400b-bea3-188dde83621c"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t))},followUser:function(e){return a.post("follow/".concat(e))},unfollowUser:function(e){return a.delete("follow/".concat(e))}},s={me:function(){return a.get("auth/me")},login:function(e,t,n,r){return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptcha:function(){return a.get("security/get-captcha-url")}},i={getMeProfile:function(e){return a.get("profile/"+e)},getMeStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},createPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateProfile:function(e){return a.put("profile",e)}}},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(36),a=n(4),c="ADD-NEW-MESSAGE",s={dialogs:[{id:1,name:"Lizok"},{id:2,name:"Oksik"},{id:3,name:"Dimon"},{id:4,name:"Denis"},{id:5,name:"Masha"}],messages:[{id:1,message:"Hello"},{id:2,message:"How are you?"},{id:3,message:"What is your name?"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}},i=function(e){return{type:c,newMessageBody:e}}},135:function(e,t,n){e.exports={preloader:"Preloader_preloader__2dvkO"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},169:function(e,t,n){},170:function(e,t,n){},26:function(e,t,n){e.exports={formControl:"FormsControl_formControl__WE9ql",error:"FormsControl_error__eY5EU",formSummaryError:"FormsControl_formSummaryError__3Uy6X"}},294:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,301)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(1),c=n.n(a),s=n(64),o=n.n(s),i=(n(169),n(129)),u=n(130),l=n(139),d=n(138),j=(n(170),n(16)),f=n.n(j),b=n(17),p=n(0);function h(){return Object(p.jsxs)("nav",{className:f.a.nav,children:[Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(p.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(p.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.active,children:"Messages"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/news",activeClassName:f.a.active,children:"News"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/music",activeClassName:f.a.active,children:"Music"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/users",activeClassName:f.a.active,children:"Users"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(b.b,{to:"/settings",activeClassName:f.a.active,children:"Settings"})})]})}var O=n(11),g=n(29);function m(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)("title",{children:"News"}),Object(p.jsx)("meta",{name:"description",content:"News application"})]}),"News"]})}function x(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)("title",{children:"Music"}),Object(p.jsx)("meta",{name:"description",content:"Music application"})]}),"Music"]})}function v(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)("title",{children:"Settings"}),Object(p.jsx)("meta",{name:"description",content:"Settings application"})]}),"Settings"]})}var w=n(4),C=n(44),_=n.n(C);function P(e){return Object(p.jsxs)("header",{className:_.a.header,children:[Object(p.jsx)("div",{className:_.a.image,children:Object(p.jsx)("img",{src:"https://art.pixilart.com/efa94fefad71c75.png",alt:""})}),Object(p.jsx)("div",{className:_.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{className:_.a.logout,children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(p.jsx)(b.b,{className:_.a.login,to:"/login",children:"Login"})})]})}var k=n(15),U=n(8),y=n.n(U),S=n(14),N=n(12),T=n(37),I="samurai-network/auth/SET_USER_DATA",E="samurai-network/auth/SET_CAPTCHA",A={userId:null,email:null,login:null,isAuth:!1,captcha:null},F=function(e,t,n,r){return{type:I,data:{userId:e,email:t,login:n,isAuth:r}}},z=function(e){return{type:E,captchaURl:e}},L=function(){return function(){var e=Object(S.a)(y.a.mark((function e(t){var n,r,a,c,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(F(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(){return function(){var e=Object(S.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.c.getCaptcha();case 2:n=e.sent,r=n.data.url,t(z(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=n(88);var R=Object(k.b)((function(e){return{isAuth:Object(D.a)(e),login:Object(D.b)(e)}}),{SetAuthUserDataAC:F,logoutThunkCreator:function(){return function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.logout();case 2:0===e.sent.data.resultCode&&t(F(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(p.jsx)(P,Object(w.a)(Object(w.a)({},e),{},{isAuth:e.isAuth,login:e.login,logout:e.logoutThunkCreator}))})),H=n(36),B=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},G="FOLLOW",W="UNFOLLOW",J="SET_USERS",q="SET_CURRENT_PAGE",V="SET_TOTAL_COUNT",Y="TOGGLE_IS_FETCHING",K="TOGGLE_IS_FOLLOWING_PROGRESS",Q={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Z=function(e){return{type:G,userId:e}},X=function(e){return{type:W,userId:e}},$=function(e){return{type:q,currentPage:e}},ee=function(e){return{type:Y,isFetching:e}},te=function(e,t){return{type:K,isFollowing:e,userID:t}},ne=function(){var e=Object(S.a)(y.a.mark((function e(t,n,r,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(te(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),re=n(32),ae=n.n(re),ce=n(67),se=n(95),oe=n(91),ie=n.n(oe),ue=n(134),le=n.n(ue),de=function(e){for(var t=e.pageSize,n=e.totalUsersCount,r=e.currentPage,c=e.onPageChanged,s=e.portionSize,o=void 0===s?5:s,i=Math.ceil(n/t),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/o),j=Object(a.useState)(1),f=Object(se.a)(j,2),b=f[0],h=f[1],O=(b-1)*o+1,g=b*o;return Object(p.jsxs)("div",{children:[b>1&&Object(p.jsx)("button",{onClick:function(){return h(b-1)},children:"PREV"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(p.jsx)("span",{className:le()(Object(ce.a)({},ie.a.selectedPage,r===e),ie.a.pageNumber),onClick:function(t){return c(e)},children:e},e)})),d>b&&Object(p.jsx)("button",{onClick:function(){return h(b+1)},children:"Next"})]})},je=n(104),fe=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollowUsersThunkCreator,a=e.followUsersThunkCreator;return Object(p.jsxs)("div",{className:ae.a.allUser,children:[Object(p.jsxs)("div",{className:ae.a.image,children:[Object(p.jsx)(b.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:je.a,alt:""})}),t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})]}),Object(p.jsxs)("div",{className:ae.a.main,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("div",{className:ae.a.location,children:[Object(p.jsxs)("div",{children:[" ","u.location.city",","]}),Object(p.jsx)("div",{children:"u.location.country"})]})]})]})},be=function(e){var t=e.users,n=e.pageSize,r=e.totalUsersCount,a=e.currentPage,c=e.onPageChanged,s=e.followingInProgress,o=e.unfollowUsersThunkCreator,i=e.followUsersThunkCreator;return Object(p.jsxs)("div",{className:ae.a.allUser,children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)("title",{children:"Users"}),Object(p.jsx)("meta",{name:"description",content:"Users application"})]}),Object(p.jsx)("div",{className:ae.a.titleUsers,children:"Users"}),Object(p.jsx)(de,{pageSize:n,totalUsersCount:r,currentPage:a,onPageChanged:c,portionSize:10}),Object(p.jsx)("div",{children:t.map((function(e){return Object(p.jsx)(fe,{user:e,followingInProgress:s,followUsersThunkCreator:i,unfollowUsersThunkCreator:o})}))})]})},pe=n(40),he=n(10),Oe=function(e){return e.usersPage.users},ge=function(e){return e.usersPage.pageSize},me=function(e){return e.usersPage.totalUsersCount},xe=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},we=function(e){return e.usersPage.followingInProgress};var Ce=Object(he.d)(Object(k.b)((function(e){return{users:Oe(e),pageSize:ge(e),totalUsersCount:me(e),currentPage:xe(e),isFetching:ve(e),followingInProgress:we(e)}}),{follow:Z,unfollow:X,setCurrentPage:$,toggleIsFollowingProgress:te,getUsersThunkCreator:function(e,t){return function(){var n=Object(S.a)(y.a.mark((function n(r){var a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ee(!0)),r($(e)),n.next=4,N.d.getUsers(e,t);case 4:a=n.sent,r((s=a.data.items,{type:J,users:s})),r((c=a.data.totalCount,{type:V,totalCount:c})),r(ee(!1));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()},unfollowUsersThunkCreator:function(e){return function(){var t=Object(S.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(n,e,N.d.unfollowUser.bind(N.d),X);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},followUsersThunkCreator:function(e){return function(){var t=Object(S.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(n,e,N.d.followUser.bind(N.d),Z);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){return Object(a.useEffect)((function(){e.getUsersThunkCreator(e.currentPage,e.pageSize)}),[]),Object(p.jsxs)(p.Fragment,{children:[e.isFetching?Object(p.jsx)(pe.a,{}):null,Object(p.jsx)(be,{users:e.users,pageSize:e.pageSize,follow:e.follow,unfollow:e.unfollow,currentPage:e.currentPage,totalUsersCount:e.totalUsersCount,onPageChanged:function(t){e.getUsersThunkCreator(t,e.pageSize)},followingInProgress:e.followingInProgress,toggleIsFollowingProgress:e.toggleIsFollowingProgress,unfollowUsersThunkCreator:e.unfollowUsersThunkCreator,followUsersThunkCreator:e.followUsersThunkCreator})]})})),_e=n(126),Pe=n(127),ke=n(48),Ue=n(65),ye=n(26),Se=n.n(ye),Ne=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=Object(k.c)((function(e){return e.auth.captcha}));return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("div",{children:Object(p.jsx)(_e.a,{placeholder:"Login",name:"login",component:ke.a,validate:[Ue.b]})}),Object(p.jsx)("div",{children:Object(p.jsx)(_e.a,{type:"password",placeholder:"Password",name:"password",component:ke.a,validate:[Ue.b]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(_e.a,{type:"checkbox",name:"rememberMe",component:ke.a})," remember me"]}),r&&Object(p.jsx)("img",{src:r,alt:""}),r&&Object(p.jsx)(_e.a,{placeholder:"Anti-bot symbols",name:"captcha",component:ke.a,validate:[Ue.b]}),n?Object(p.jsx)("div",{className:Se.a.formSummaryError,children:n}):"",Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),Te=Object(k.b)((function(e){return{captchaURL:e.auth.captcha,isAuth:e.auth.isAuth}}),{loginThunkCreator:function(e,t,n,r){return function(){var a=Object(S.a)(y.a.mark((function a(c){var s,o;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,N.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(L()):(10===s.data.resultCode&&c(M()),o=s.data.messages.length>0?s.data.messages[0]:"Some Error",c(Object(T.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.loginThunkCreator;return e.isAuth?Object(p.jsx)(O.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(Ne,{onSubmit:function(e){t(e.login,e.password,e.rememberMe,e.captcha)}})]})})),Ie={initialized:!1},Ee=n(94),Ae=n(125),Fe=n(137),ze=n(128),Le=Object(he.c)({profilePage:Ee.e,dialogPage:Ae.b,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(w.a)(Object(w.a)({},e),{},{users:B(e.users,t.userId,"id",{followed:!0})});case W:return Object(w.a)(Object(w.a)({},e),{},{users:B(e.users,t.userId,"id",{followed:!1})});case J:return Object(w.a)(Object(w.a)({},e),{},{users:Object(H.a)(t.users)});case q:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case V:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.totalCount});case Y:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case K:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(H.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!=t.userID}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=Object(w.a)({},e);switch(t.type){case I:return Object(w.a)(Object(w.a)({},n),t.data);case E:return Object(w.a)(Object(w.a)({},n),{},{captcha:t.captchaURl});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0,n=Object(w.a)({},e);switch(t.type){case"SET_INITIALIZED":return Object(w.a)(Object(w.a)({},n),{},{initialized:!0});default:return e}},form:ze.a}),Me=Object(he.e)(Le,Object(he.a)(Fe.a));function De(e){return function(t){return Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)(pe.a,{}),children:Object(p.jsx)(e,Object(w.a)({},t))})}}window.store=Me;var Re=c.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),He=c.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),Be=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(R,{}),Object(p.jsx)(h,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(O.b,{path:"/dialogs",render:De(Re)}),Object(p.jsx)(O.b,{path:"/profile/:userId?",render:De(He)}),Object(p.jsx)(O.b,{path:"/news",render:function(){return Object(p.jsx)(m,{})}}),Object(p.jsx)(O.b,{path:"/music",render:function(){return Object(p.jsx)(x,{})}}),Object(p.jsx)(O.b,{path:"/users",render:function(){return Object(p.jsx)(Ce,{})}}),Object(p.jsx)(O.b,{path:"/settings",render:function(){return Object(p.jsx)(v,{})}}),Object(p.jsx)(O.b,{path:"/login",render:function(){return Object(p.jsx)(Te,{})}})]})]}):Object(p.jsx)(pe.a,{})}}]),n}(c.a.Component),Ge=Object(he.d)(O.f,Object(k.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(L());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(Be),We=function(){return Object(p.jsx)(k.a,{store:Me,children:Object(p.jsx)(b.a,{children:Object(p.jsx)(Ge,{})})})};o.a.render(Object(p.jsx)(We,{}),document.getElementById("root")),r()},32:function(e,t,n){e.exports={user:"Users_user__1dQYj",allUsers:"Users_allUsers__2JqLA",image:"Users_image__2Sl9a",main:"Users_main__103N1",titleUsers:"Users_titleUsers__l2wTc",selectedPage:"Users_selectedPage__J63sh",numberPage:"Users_numberPage__1entT"}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n.p+"static/media/loader.70c0e9b1.gif",a=(n(1),n(135)),c=n.n(a),s=n(0);function o(){return Object(s.jsx)("div",{className:c.a.preloader,children:Object(s.jsx)("img",{src:r,style:{backgroundColor:"white"}})})}},44:function(e,t,n){e.exports={header:"Header_header__1VCKf",image:"Header_image__1zcEI",login:"Header_login__3V3Qa",loginBlock:"Header_loginBlock__6mma5"}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(4),a=n(87),c=n(26),s=n.n(c),o=n(0),i=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error&&s.a.error;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(i?s.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),c))}),i&&Object(o.jsx)("span",{children:n.error})]})},u=function(e){var t=e.input,n=e.meta,c=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error&&s.a.error;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(i?s.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),c))}),i&&Object(o.jsx)("span",{children:n.error})]})}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return e.auth.isAuth},a=function(e){return e.auth.login}},91:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3SIki"}},94:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return O})),n.d(t,"h",(function(){return g})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return v})),n.d(t,"i",(function(){return w})),n.d(t,"f",(function(){return C})),n.d(t,"g",(function(){return _}));var r=n(8),a=n.n(r),c=n(14),s=n(36),o=n(4),i=n(12),u=n(37),l="ADD-POST",d="DELETE-POST",j="SET_USER_PROFILE",f="SET_NEW_STATUS",b="SET_NEW_PHOTO",p={posts:[{id:1,message:"Hi, how are you?",likesCount:5},{id:2,message:"It's my first post",likesCount:23}],profile:null,status:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:3,message:t.newPostBody,likesCount:0}])});case j:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.newStatus});case d:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case b:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}},O=function(e){return{type:l,newPostBody:e}},g=function(e){return{type:j,profile:e}},m=function(e){return{type:f,newStatus:e}},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getMeProfile(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getMeStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.createPhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,i.b.updateProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(x(c)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}},[[294,1,2]]]);
//# sourceMappingURL=main.b8df2707.chunk.js.map