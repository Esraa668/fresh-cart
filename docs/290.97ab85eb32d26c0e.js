"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[290],{5290:(g,m,c)=>{c.r(m),c.d(m,{CartComponent:()=>f});var d=c(6814),p=c(1120),t=c(4769),h=c(5371),_=c(2425);function x(s,C){if(1&s){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13),t._UZ(2,"img",14),t.qZA(),t.TgZ(3,"div",15)(4,"div")(5,"h3",16),t._uU(6),t.qZA(),t.TgZ(7,"p",17),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",18,19),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.MAs(11),l=t.oxw(2);return t.KtG(l.removeItem(i.product._id,a))}),t._UZ(12,"i",20),t._uU(13,"Remove"),t.qZA()(),t.TgZ(14,"div")(15,"button",21,22),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.MAs(16),l=t.MAs(21),b=t.oxw(2);return t.KtG(b.changeCount(i.product._id,i.count-1,a,l))}),t._uU(17,"-"),t.qZA(),t.TgZ(18,"span",23),t._uU(19),t.qZA(),t.TgZ(20,"button",21,24),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.MAs(16),l=t.MAs(21),b=t.oxw(2);return t.KtG(b.changeCount(i.product._id,i.count+1,a,l))}),t._uU(22,"+"),t.qZA()()()()}if(2&s){const e=C.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.hij(" ",e.product.title,""),t.xp6(2),t.hij("Price: ",t.xi3(9,5,e.price,"EGP "),""),t.xp6(11),t.Oqu(e.count)}}const o=function(s){return["/Payment",s]};function u(s,C){if(1&s){const e=t.EpF();t.TgZ(0,"section",2)(1,"h1",3),t._uU(2,"Shop Cart:"),t.qZA(),t.YNc(3,x,23,8,"div",4),t.TgZ(4,"div",5)(5,"div",6)(6,"button",7),t._uU(7,"Online Payment "),t._UZ(8,"img",8),t.qZA()(),t.TgZ(9,"div",6)(10,"p",9),t._uU(11),t.ALo(12,"currency"),t.qZA()()(),t.TgZ(13,"button",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.clear())}),t._uU(14," Clear Cart"),t._UZ(15,"i",11),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",e.cart.products),t.xp6(3),t.Q6J("routerLink",t.VKq(6,o,e.cart._id)),t.xp6(5),t.hij(" Total Price: ",t.xi3(12,3,e.cart.totalCartPrice,"EGP ")," ")}}function v(s,C){1&s&&(t.TgZ(0,"div",25),t._UZ(1,"img",26),t.TgZ(2,"h4",27),t._uU(3," Your Cart Is Free Shop Now!.."),t.qZA()())}let f=(()=>{class s{constructor(e,r,n){this.cartService=e,this.toastr=r,this.renderer2=n,this.cart=null}ngOnInit(){this.cartService.GetCart().subscribe({next:e=>{console.log(e),this.cart=e.data},error:e=>{}})}removeItem(e,r){this.renderer2.setAttribute(r,"disabled","true"),this.cartService.removeCartItem(e).subscribe({next:n=>{this.cart=n.data,this.toastr.warning("Item removed successfully from your cart"),this.renderer2.removeAttribute(r,"disabled"),this.cartService.cartNumber.next(n.numOfCartItems)},error:n=>{this.renderer2.removeAttribute(r,"disabled")}})}changeCount(e,r,n,i){r>=1&&(this.renderer2.setAttribute(n,"disabled","true"),this.renderer2.setAttribute(i,"disabled","true"),this.cartService.updateCart(e,r).subscribe({next:a=>{this.cart=a.data,this.renderer2.removeAttribute(n,"disabled"),this.renderer2.removeAttribute(i,"disabled"),console.log(a)},error:a=>{this.renderer2.removeAttribute(n,"disabled"),this.renderer2.removeAttribute(i,"disabled")}}))}clear(){this.cartService.ClearCart().subscribe({next:e=>{"success"===e.message&&(this.cart=null,this.cartService.cartNumber.next(0))},error:e=>{}})}static#t=this.\u0275fac=function(r){return new(r||s)(t.Y36(h.N),t.Y36(_._W),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto rounded shadow bg-main-light p-3 my-4 ",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","my-4"],[1,"h2","text-main"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","align-items-center","row"],[1,"col-md-12","col-xl-3"],[1,"text-main","btn-main","text-center","mb-0",3,"routerLink"],["src","./assets/images/visa-1.svg","alt",""],[1,"text-main","btn-main","text-center","mb-0","ms-auto","fit","mt-0"],[1,"fit","mx-auto","text-center","bg-danger","d-block","btn","mt-2","my-2",3,"click"],[1,"fa-solid","fa-trash-arrow-up","px-1"],[1,"row","border-bottom","py-2"],[1,"col-md-2"],[1,"w-100",3,"src","alt"],[1,"col-md-10","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main"],[1,"btn-main","m-1","p-2",3,"click"],["remove",""],[1,"fas","fa-trash-can","p-1"],[1,"btn","btn-sm","border-success",3,"click"],["btnChange1",""],[1,"p-2"],["btnChange2",""],[1,"text-center","pt-0","mb-5"],["src","./assets/images/image.png","alt","cart empty"],[1,"text-main","mt-2"]],template:function(r,n){if(1&r&&(t.YNc(0,u,16,8,"section",0),t.YNc(1,v,4,0,"ng-template",null,1,t.W1O)),2&r){const i=t.MAs(2);t.Q6J("ngIf",n.cart)("ngIfElse",i)}},dependencies:[d.ez,d.sg,d.O5,d.H9,p.rH],styles:[".btn-main[_ngcontent-%COMP%]{padding:7px 1px!important}"]})}return s})()},5371:(g,m,c)=>{c.d(m,{N:()=>h});var d=c(5619),p=c(4769),t=c(9862);let h=(()=>{class _{constructor(o){this._HttpClient=o,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new d.X(0)}AddToCart(o){return this._HttpClient.post(this.baseUrl+"cart",{productId:o})}GetCart(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(o){return this._HttpClient.delete(this.baseUrl+`cart/${o}`)}updateCart(o,u){return this._HttpClient.put(this.baseUrl+`cart/${o}`,{count:u})}ClearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}CheckOut(o,u){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${o}?url=http://localhost:4200`,{shippingAddress:u})}static#t=this.\u0275fac=function(u){return new(u||_)(p.LFG(t.eN))};static#e=this.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);