(this.webpackJsonpmenudisplay=this.webpackJsonpmenudisplay||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/appletree.fb90e812.svg"},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=a(1),u=a(2),i=a(4),l=a(3),p=(a(15),a(8)),d=a.n(p),m=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:d.a,alt:"hotelName"}))}}]),a}(r.a.Component),h=(a(16),a(9)),f=a(5),v=(a(17),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement("h4",{className:"productName"},this.props.product.name),r.a.createElement("div",{className:"productDescription"},this.props.product.description),r.a.createElement("div",{className:"productPrice"},(e=this.props.product.price,new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(e))));var e}}]),a}(r.a.Component)),b=(a(18),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={showProducts:!1},e.handleCategoryClick=e.handleCategoryClick.bind(Object(f.a)(e)),e}return Object(u.a)(a,[{key:"handleCategoryClick",value:function(){this.setState({showProducts:!this.state.showProducts})}},{key:"render",value:function(){var e;return e=this.state.showProducts?r.a.createElement("span",{className:"arrowsDown"}):r.a.createElement("span",{className:"arrowsUp"}),r.a.createElement("div",null,r.a.createElement("div",{className:"category",onClick:this.handleCategoryClick},this.props.category,e),this.state.showProducts?r.a.createElement("ul",{className:"productList"},this.props.products.map((function(e,t){return r.a.createElement(v,{key:t,product:e})}))):null)}}]),a}(r.a.Component)),j=(a(19),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={productData:{},dataPopulated:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("product.json").then((function(e){return e.json()})).then((function(t){e.setState({productData:t,dataPopulated:!0})}),(function(e){console.log("error in loading")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"menuDiv"},this.state.dataPopulated?Object.entries(this.state.productData).map((function(e,t){var a=Object(h.a)(e,2),n=a[0],c=a[1];return r.a.createElement(b,{category:n,products:c,key:t})})):r.a.createElement("div",{className:"loader"},"Loading..."))}}]),a}(r.a.Component)),y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainDiv"},r.a.createElement(m,null),r.a.createElement(j,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d743cd38.chunk.js.map