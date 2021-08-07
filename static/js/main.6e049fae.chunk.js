(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={filterName:"FIlter_filterName__2Tx2-",filterInput:"FIlter_filterInput__3_rAi"}},31:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(9),s=n.n(o),i=n(5),l=n(16),u=n(14),m=n(6),b=n(17),d=n(18),j=n(21),f=n(20),p=n(3),O=Object(p.b)("phonebook/addContact"),h=Object(p.b)("phonebook/deleteContact"),C=Object(p.b)("phonebook/setFilter"),x={addContact:O,deleteContact:h,setFilter:C},_=n(37),g=n(7),N=n.n(g),I=n(1),v=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onHandleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.contacts.find((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()}))?alert("".concat(t.state.name," is already in contacts")):(t.props.addContact(Object(u.a)(Object(u.a)({},t.state),{},{id:Object(_.a)()})),t.setState({name:"",number:""}))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(I.jsxs)("form",{className:N.a.form,onSubmit:this.onHandleSubmit,children:[Object(I.jsxs)("label",{className:N.a.formName,children:["Name:",Object(I.jsx)("input",{className:N.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,onChange:this.onHandleChange,required:!0})]}),Object(I.jsxs)("label",{className:N.a.formName,children:["Phone\u2116:",Object(I.jsx)("input",{className:N.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,onChange:this.onHandleChange,required:!0})]}),Object(I.jsx)("button",{type:"submit",className:N.a.formButton,children:"Add contact"})]})}}]),n}(c.Component),L=Object(i.b)((function(t){return{contacts:t.items}}),(function(t){return{addContact:function(e){return t(O(e))},deleteContact:function(e){return t(h(e))}}}))(v),y=n(8),F=n.n(y),k=Object(i.b)((function(t){return{items:t.items.filter((function(e){return e.name.toLowerCase().includes(t.filter.toLowerCase())}))}}),{deleteContact:h})((function(t){var e=t.items,n=t.deleteContact;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("ul",{className:F.a.contactList,children:e.length>0&&e.map((function(t){return Object(I.jsxs)("li",{className:F.a.contactListItem,children:[Object(I.jsx)("span",{className:F.a.contactListItemSpan,children:t.name}),":",Object(I.jsx)("span",{className:F.a.contactListItemSpan,children:t.number}),Object(I.jsx)("button",{type:"button",className:F.a.listItemButton,onClick:function(){return n(t.id)},children:"Detete"})]},t.id)}))})})})),w=n(15),S=n.n(w),A=Object(i.b)(null,{setFilter:C})((function(t){var e=t.value,n=t.setFilter;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("label",{className:S.a.filterName,children:["Find contacts by name",Object(I.jsx)("input",{className:S.a.filterInput,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})})),B=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h1",{className:"appHeading",children:"Phonebook"}),Object(I.jsx)(L,{}),Object(I.jsx)("h2",{className:"appHeading",children:"Contacts"}),Object(I.jsx)(A,{}),Object(I.jsx)(k,{})]})},H=(n(31),n(32),n(10)),z=n(4),J=n(19),Z=n.n(J),q=n(2),D=Object(p.c)([],(a={},Object(m.a)(a,x.addContact,(function(t,e){var n=e.payload;return[].concat(Object(H.a)(t),[n])})),Object(m.a)(a,x.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),P=Object(p.c)("",Object(m.a)({},x.setFilter,(function(t,e){return e.payload}))),T=Object(q.b)({items:D,filter:P}),M=Object(H.a)(Object(p.d)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})),U={key:"root",storage:Z.a},E=T,G=Object(z.g)(U,E),K=Object(p.a)({reducer:G,middleware:M,devTools:!1}),Q={store:K,persistor:Object(z.h)(K)};s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(i.a,{store:Q.store,children:Object(I.jsx)(l.a,{loading:Object(I.jsx)("h2",{children:"...isloading"}),persistor:Q.persistor,children:Object(I.jsx)(B,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__1JpcQ",formName:"ContactForm_formName__4UJPx",formInput:"ContactForm_formInput__1rKvO",formButton:"ContactForm_formButton__2U46Z"}},8:function(t,e,n){t.exports={contactList:"ContactList_contactList__2qokW",contactListItem:"ContactList_contactListItem__3XOhT",contactListItemSpan:"ContactList_contactListItemSpan__3g33L",listItemButton:"ContactList_listItemButton__3DYGo"}}},[[35,1,2]]]);
//# sourceMappingURL=main.6e049fae.chunk.js.map