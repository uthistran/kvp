(this.webpackJsonpmenudisplay=this.webpackJsonpmenudisplay||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/appletree.fb90e812.svg"},,,,function(e,t,n){e.exports=n(32)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),u=n(1),l=n(2),i=n(5),s=n(3),m=(n(21),n(12)),p=n.n(m),f=n(4),d=n(8),v=n(6),E=new(function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,[{key:"actionCall",value:function(e,t,n){fetch(e).then((function(e){return e.json()})).then((function(e){t(e)}),(function(e){n(e)}))}}]),e}());function b(e){console.log(e)}E.actionCall("translation/globalization.json",(function(e){e.SupportedLanguage.forEach((function(e){E.actionCall("translation/"+e+".json",j,b)}))}),b);var h={};function j(e){Object.assign(h,e)}d.a.use(v.e).init({resources:h,lng:"en-US",keySeparator:!1,interpolation:{escapeValue:!1}});var g=d.a;n(22);var O=function(){var e=Object(a.useState)("en-US"),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){g.changeLanguage(n,(function(e){console.log("language updated")}))})),c.a.createElement("div",{className:"translateDiv"},c.a.createElement("select",{value:n,onChange:function(e){r(e.target.value)}},c.a.createElement("option",{value:"en-US"},"English"),c.a.createElement("option",{value:"zh-ZH"},"Chinese"),c.a.createElement("option",{value:"es-ES"},"Spanish"),c.a.createElement("option",{value:"ta-IN"},"Tamil")))},y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("img",{src:p.a,alt:"hotelName"}),c.a.createElement(O,null))}}]),n}(c.a.Component),N=(n(23),n(24),n(33));var k=function(e){var t,n=Object(N.a)().t;return c.a.createElement("li",null,c.a.createElement("h4",{className:"productName"},n(e.product.name)),c.a.createElement("div",{className:"productDescription"},n(e.product.description)),c.a.createElement("div",{className:"productPrice"},(t=e.product.price,new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(t))))};n(30);var S=function(e){var t,n=Object(a.useState)(!1),r=Object(f.a)(n,2),o=r[0],u=r[1],l=Object(N.a)().t;return t=o?c.a.createElement("span",{className:"arrowsDown"}):c.a.createElement("span",{className:"arrowsUp"}),c.a.createElement("div",null,c.a.createElement("div",{className:"category",onClick:function(){u(!o)}},l(e.category),t),o?c.a.createElement("ul",{className:"productList"},e.products.map((function(e,t){return c.a.createElement(k,{key:t,product:e})}))):null)},C=(n(31),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={productData:{},dataPopulated:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("product.json").then((function(e){return e.json()})).then((function(t){e.setState({productData:t,dataPopulated:!0})}),(function(e){console.log("error in loading")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"menuDiv"},this.state.dataPopulated?Object.entries(this.state.productData).map((function(e,t){var n=Object(f.a)(e,2),a=n[0],r=n[1];return c.a.createElement(S,{category:a,products:r,key:t})})):c.a.createElement("div",{className:"loader"},"Loading..."))}}]),n}(c.a.Component)),D=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"mainDiv"},c.a.createElement(y,null),c.a.createElement(C,null))}}]),n}(c.a.Component);o.a.render(c.a.createElement(D,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.5cf58f7f.chunk.js.map