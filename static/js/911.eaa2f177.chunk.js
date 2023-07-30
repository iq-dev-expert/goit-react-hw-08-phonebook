"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[911],{3911:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,o,a,i,c,s=t(2791),u=t(9434),l=t(6713),d=t(6916),m=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},h=function(n){return n.filter},x=(0,d.P1)([m,h],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),b=function(){var n=(0,u.v9)(m),e=(0,u.v9)(f),t=(0,u.v9)(p),r=(0,u.v9)(h),o=(0,u.v9)(x),a=(0,u.I0)();return{contacts:n,isLoading:e,error:t,filter:r,filteredContacts:o,addContact:function(n){var e=n.name,t=n.number;a(l.uK({name:e,number:t}))},deleteContact:function(n){return a(l.GK(n))},fetchContacts:(0,s.useCallback)((function(){return a(l.yF())}),[a])}},g=t(168),v=t(9202),C=v.Z.form(r||(r=(0,g.Z)(["\n  display: table-caption;\n  padding: 10px;\n  margin: 0 0 20px 0;\n\n  border: 1px solid;\n\n  label {\n    display: block;\n\n    margin: 0 0 20px 0;\n  }\n"]))),j=v.Z.button(o||(o=(0,g.Z)(["\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: ",";\n  border-color: ",";\n  transition: background-color\n      ",",\n    border-color ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.buttonBgColor}),(function(n){return n.theme.colors.buttonBorderColor}),(function(n){return n.theme.animation.durationAndTimingFunction}),(function(n){return n.theme.animation.durationAndTimingFunction}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent})),y=t(3329),k=function(){var n=b(),e=n.contacts,t=n.addContact,r=function(n){return e.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))};return(0,y.jsxs)(C,{onSubmit:function(n){n.preventDefault();var e=n.target,o=e.elements.name.value,a=e.elements.phone.value;if(r(o))return alert("".concat(o," is already in contacts.")),void e.reset();t({name:o,number:a}),e.reset()},children:[(0,y.jsxs)("label",{children:["Name",(0,y.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)("label",{children:["Number",(0,y.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(j,{type:"submit",children:"Add contact"})]})},Z=v.Z.ul(a||(a=(0,g.Z)(["\n  list-style: none;\n\n  li {\n    display: flex;\n    align-items: center;\n    margin: 0 0 10px 0;\n\n    p {\n      margin: 0 30px 0 0;\n    }\n  }\n"]))),w=function(){var n=b(),e=n.filteredContacts,t=n.deleteContact,r=n.error;return(0,y.jsx)(y.Fragment,{children:r?(0,y.jsx)("p",{children:r}):e.length>0&&(0,y.jsx)(Z,{children:e.map((function(n){var e=n.id,r=n.name,o=n.number;return(0,y.jsxs)("li",{children:[(0,y.jsxs)("p",{children:[r,": ",o," "]}),(0,y.jsx)(j,{type:"button",onClick:function(){t(e)},children:"Delete"})]},e)}))})})},A=t(3782),L=v.Z.label(i||(i=(0,g.Z)(["\n  display: table-caption;\n\n  margin: 0 0 20px 0;\n"]))),F=function(){var n=(0,u.I0)(),e=b().filter;return(0,y.jsxs)(L,{children:["Find contacts by name",(0,y.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.target.value;n((0,A.xO)(t))}})]})},B=t(3742),z=function(){var n=b().isLoading;return(0,s.useEffect)((function(){n?B.Loading.dots():B.Loading.remove()})),null},_=t(6472),N=v.Z.div(c||(c=(0,g.Z)(["\n  padding: 20px 0 0 60px;\n\n  h1,\n  h2 {\n    margin: 0 0 10px 0;\n  }\n"]))),P={colors:{accent:"#7edffc",buttonBgColor:"#e6eaeb",buttonBorderColor:"#c5c9c9"},animation:{durationAndTimingFunction:"250ms linear"}},T=function(){var n=b().fetchContacts;return(0,s.useEffect)((function(){n()}),[n]),(0,y.jsxs)(_.a,{theme:P,children:[(0,y.jsx)(z,{}),(0,y.jsxs)(N,{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(k,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(F,{}),(0,y.jsx)(w,{})]})]})}}}]);
//# sourceMappingURL=911.eaa2f177.chunk.js.map