(this.webpackJsonpsoc=this.webpackJsonpsoc||[]).push([[4],{294:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogs_items:"Dialogs_dialogs_items__16PrC",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},295:function(e,s,a){"use strict";a.d(s,"a",(function(){return r}));var t=a(5),i=a(87),n=a(11),c=(a(1),a(19)),o=a(0),d=function(e){return{isAuth:e.auth.isAuth}};function r(e){return Object(c.b)(d)((function(s){var a=s.isAuth,c=Object(i.a)(s,["isAuth"]);return a?Object(o.jsx)(e,Object(t.a)({},c)):Object(o.jsx)(n.a,{to:"/login"})}))}},302:function(e,s,a){"use strict";a.r(s);var t=a(123),i=(a(1),a(294)),n=a.n(i),c=a(16),o=a(0);function d(e){return Object(o.jsx)("div",{className:"".concat(n.a.dialog," ").concat(n.a.active),children:Object(o.jsx)(c.b,{to:"/dialogs/"+e.id,children:e.name})})}function r(e){return Object(o.jsx)("div",{className:n.a.message,children:e.message})}var l=a(29),j=a(124),g=a(125),u=a(63),b=a(72),m=Object(b.a)(100),O=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{placeholder:"Enter your message",name:"newMessageBody",component:u.b,validate:[b.b,m]})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Send"})})]})}));var h=a(19),_=a(10),x=a(295),f=function(e){return e.dialogPage};s.default=Object(_.d)(Object(h.b)((function(e){return{dialogsPage:f(e)}}),(function(e){return{sendMessage:function(s){e(Object(t.a)(s))}}})),x.a)((function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(o.jsx)(d,{name:e.name,id:e.id},e.id)})),a=e.dialogsPage.messages.map((function(e){return Object(o.jsx)(r,{message:e.message,id:e.id},e.id)}));return Object(o.jsxs)("div",{className:n.a.dialogs,children:[Object(o.jsxs)(l.a,{children:[Object(o.jsx)("title",{children:"Dialogs"}),Object(o.jsx)("meta",{name:"description",content:"Dialogs application"})]}),Object(o.jsx)("div",{className:n.a.dialogs_items,children:s}),Object(o.jsxs)("div",{className:n.a.messages,children:[a,Object(o.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})}))}}]);
//# sourceMappingURL=4.7e360412.chunk.js.map