"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[774],{8774:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,o,i,c,s,u,d=t(2791),l=t(9434),m=t(6713),h=t(6916),f=function(n){return n.contacts.items},p=function(n){return n.contacts.isLoading},x=function(n){return n.contacts.error},b=function(n){return n.filter},g=(0,h.P1)([f,b],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),v=function(){var n=(0,l.v9)(f),e=(0,l.v9)(p),t=(0,l.v9)(x),r=(0,l.v9)(b),a=(0,l.v9)(g),o=(0,l.I0)();return{contacts:n,isLoading:e,error:t,filter:r,filteredContacts:a,fetchContacts:(0,d.useCallback)((function(){return o(m.yF())}),[o]),addContact:function(n){var e=n.name,t=n.number;return o(m.uK({name:e,number:t}))},deleteContact:function(n){return o(m.GK(n))},editContact:function(n,e){return o(m.mP({contactId:n,editedContact:e}))}}},j=t(168),C=t(9202),y=C.Z.form(r||(r=(0,j.Z)(["\n  display: table-caption;\n  padding: 10px;\n  margin: 0 0 20px 0;\n\n  border: 1px solid;\n\n  label {\n    display: block;\n\n    margin: 0 0 20px 0;\n  }\n"]))),Z=C.Z.button(a||(a=(0,j.Z)(["\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: ",";\n  border-color: ",";\n  transition: background-color\n      ",",\n    border-color ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.buttonBgColor}),(function(n){return n.theme.colors.buttonBorderColor}),(function(n){return n.theme.animation.durationAndTimingFunction}),(function(n){return n.theme.animation.durationAndTimingFunction}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent})),k=t(3329),w=function(){var n=v(),e=n.contacts,t=n.addContact,r=function(n){return e.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))};return(0,k.jsxs)(y,{onSubmit:function(n){n.preventDefault();var e=n.target,a=e.elements.name.value,o=e.elements.phone.value;if(r(a))return alert("".concat(a," is already in contacts.")),void e.reset();t({name:a,number:o}),e.reset()},children:[(0,k.jsxs)("label",{children:["Name",(0,k.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)("label",{children:["Number",(0,k.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)(Z,{type:"submit",children:"Add contact"})]})},A=C.Z.ul(o||(o=(0,j.Z)(["\n  list-style: none;\n\n  li {\n    display: flex;\n    align-items: center;\n    margin: 0 0 10px 0;\n\n    p {\n      margin: 0 30px 0 0;\n    }\n  }\n"]))),L=t(9439),z=t(1413),F=t(4925),N=C.Z.div(i||(i=(0,j.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),E=C.Z.div(c||(c=(0,j.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),M=function(n){var e=n.toggleModal,t=n.id,r=n.name,a=n.number,o=v().editContact;return(0,k.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r={name:n.target.name.value,number:n.target.phone.value};o(t,r),e()},style:{width:400,height:400,backgroundColor:"white"},children:[(0,k.jsxs)("label",{children:["Name",(0,k.jsx)("input",{type:"text",name:"name",defaultValue:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsx)("br",{}),(0,k.jsxs)("label",{children:["Number",(0,k.jsx)("input",{type:"tel",name:"phone",defaultValue:a,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)("br",{}),(0,k.jsx)(Z,{type:"submit",children:"Save"}),(0,k.jsx)(Z,{type:"button",onClick:e,children:"Close"})]})},B=["toggleModal"],P=function(n){var e=n.toggleModal,t=(0,F.Z)(n,B);(0,d.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[e]);return(0,k.jsx)(N,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,k.jsx)(E,{children:(0,k.jsx)(M,(0,z.Z)({toggleModal:e},t))})})},q=function(n){var e=n.id,t=n.name,r=n.number,a=n.contactNumber,o=(0,d.useState)(!1),i=(0,L.Z)(o,2),c=i[0],s=i[1],u=v().deleteContact,l=function(){s(!c)};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("span",{children:["#",a,"=="]}),(0,k.jsxs)("p",{children:[t,": ",r]}),(0,k.jsx)(Z,{type:"button",onClick:function(){u(e)},children:"Delete"}),(0,k.jsx)(Z,{type:"button",onClick:l,children:"Edit"}),c&&(0,k.jsx)(P,{toggleModal:l,id:e,name:t,number:r})]})},S=function(){var n=v(),e=n.filteredContacts,t=n.error;return(0,k.jsx)(k.Fragment,{children:t?(0,k.jsx)("p",{children:t}):e.length>0&&(0,k.jsx)(A,{children:e.map((function(n,e){var t=n.id,r=n.name,a=n.number;return(0,k.jsx)("li",{children:(0,k.jsx)(q,{id:t,name:r,number:a,contactNumber:e+1})},t)}))})})},T=t(3782),_=C.Z.label(s||(s=(0,j.Z)(["\n  display: table-caption;\n\n  margin: 0 0 20px 0;\n"]))),D=function(){var n=(0,l.I0)(),e=v().filter;return(0,k.jsxs)(_,{children:["Find contacts by name",(0,k.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.target.value;n((0,T.xO)(t))}})]})},I=t(3742),J=function(){var n=v().isLoading;return(0,d.useEffect)((function(){n?I.Loading.dots():I.Loading.remove()})),null},K=t(6472),V=C.Z.div(u||(u=(0,j.Z)(["\n  padding: 20px 0 0 60px;\n\n  h1,\n  h2 {\n    margin: 0 0 10px 0;\n  }\n"]))),$={colors:{accent:"#7edffc",buttonBgColor:"#e6eaeb",buttonBorderColor:"#c5c9c9"},animation:{durationAndTimingFunction:"250ms linear"}},G=function(){var n=v().fetchContacts;return(0,d.useEffect)((function(){n()}),[n]),(0,k.jsxs)(K.a,{theme:$,children:[(0,k.jsx)(J,{}),(0,k.jsxs)(V,{children:[(0,k.jsx)("h1",{children:"Phonebook"}),(0,k.jsx)(w,{}),(0,k.jsx)("h2",{children:"Contacts"}),(0,k.jsx)(D,{}),(0,k.jsx)(S,{})]})]})}}}]);
//# sourceMappingURL=774.89460593.chunk.js.map