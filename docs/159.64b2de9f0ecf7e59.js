"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[159],{159:(U,d,i)=>{i.r(d),i.d(d,{HomeComponent:()=>E});var r=i(6814),g=i(8129),_=i(756),u=i(1120),t=i(4769),m=i(7064),p=i(5371),h=i(2425),x=i(8777);function v(o,c){if(1&o&&(t._UZ(0,"img",20),t.TgZ(1,"h3",21),t._uU(2),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name),t.xp6(2),t.Oqu(e.name)}}function C(o,c){1&o&&(t.ynx(0,18),t.YNc(1,v,3,4,"ng-template",19),t.BQk())}function f(o,c){if(1&o&&(t.TgZ(0,"section",15)(1,"owl-carousel-o",16),t.YNc(2,C,2,0,"ng-container",17),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("options",e.categoriesOptions),t.xp6(1),t.Q6J("ngForOf",e.categories)}}const O=function(o){return{"rating-color":o}};function P(o,c){if(1&o&&t._UZ(0,"i",39),2&o){const e=c.$implicit,n=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(1,O,n.ratingsAverage>=e))}}const Z=function(o){return["/details",o]},M=function(){return[1,2,3,4,5]};function T(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",26)(1,"div",27)(2,"i",28),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.AddTofav(a._id))}),t.qZA(),t._UZ(3,"div",29),t.TgZ(4,"header")(5,"div",30),t._UZ(6,"img",31),t.TgZ(7,"h3",32),t._uU(8),t.ALo(9,"cuttext"),t.qZA(),t.TgZ(10,"h4",33),t._uU(11),t.qZA()(),t.TgZ(12,"div",34)(13,"span"),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"p",35),t.YNc(17,P,1,3,"i",36),t.TgZ(18,"span"),t._uU(19),t.qZA()()()(),t.TgZ(20,"footer")(21,"button",37,38),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.MAs(22),b=t.oxw(2);return t.KtG(b.addProduct(a._id,l))}),t._uU(23,"+Add to Cart"),t.qZA()()()()}if(2&o){const e=c.$implicit;t.xp6(5),t.Q6J("routerLink",t.VKq(15,Z,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("alt",e.title)("title",e.title),t.xp6(2),t.Oqu(t.xi3(9,9,e.title,3)),t.xp6(3),t.Oqu(e.category.name),t.xp6(3),t.Oqu(t.xi3(15,12,e.price,"E\xa3")),t.xp6(3),t.Q6J("ngForOf",t.DdM(17,M)),t.xp6(2),t.Oqu(e.ratingsAverage)}}function A(o,c){if(1&o&&(t.TgZ(0,"section",22)(1,"h2",23),t._uU(2,"Popular products :"),t.qZA(),t.TgZ(3,"div",24),t.YNc(4,T,24,18,"div",25),t.ALo(5,"slice"),t.qZA()()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.Dn7(5,1,e.products,20,32))}}let E=(()=>{class o{constructor(e,n,s,a,l){this._ProductService=e,this._CartService=n,this._toastr=s,this._Renderer2=a,this._WishlistService=l,this.products=[],this.categories=[],this.categoriesOptions={loop:!0,autoplay:!0,autoplayTimeout:2e3,autoplaySpeed:500,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!1}}ngOnInit(){this._ProductService.getProduct().subscribe({next:e=>{this.products=e.data}}),this._ProductService.getcategories().subscribe({next:e=>{this.categories=e.data}})}addProduct(e,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.AddToCart(e).subscribe({next:s=>{this._CartService.cartNumber.next(s.numOfCartItems),console.log(s.lentgh),this._toastr.success(s.message),this._Renderer2.removeAttribute(n,"disabled")},error:s=>{this._Renderer2.removeAttribute(n,"disabled")}})}AddTofav(e){this._WishlistService.AddTowishlist(e).subscribe({next:n=>{this._toastr.info(n.message),console.log(n.data),console.log(n),this._WishlistService.wishNumber.next(n.data.length)},error:n=>{console.log(n)}})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(m.M),t.Y36(p.N),t.Y36(h._W),t.Y36(t.Qsj),t.Y36(x.M))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:20,vars:2,consts:[["id","carouselExampleFade","data-bs-ride","carousel",1,"carousel","slide","carousel-fade","w-75","mx-auto","py-3","slide2"],[1,"carousel-inner","w-100"],["data-bs-interval","2000",1,"carousel-item","w-100","rounded-3"],["src","./assets/images/main-slider-3.jpeg","alt","Slide 2","height","400",1,"height-slide","w-100"],["data-bs-interval","2000",1,"carousel-item","active","w-100","rounded-3"],["src","./assets/images/slide-2.jpeg","alt","Slide 2","height","400",1,"height-slide","w-100"],["src","./assets/images/main-slider-2.jpeg","alt","Slide 2","height","400",1,"height-slide","w-100"],["src","./assets/images/main-slider-1.jpeg","alt","Slide 2","height","400",1,"height-slide","w-100"],["type","button","data-bs-target","#carouselExampleFade","data-bs-slide","prev ",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleFade","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],["class","py-4 w-90 mx-auto slide2",4,"ngIf"],["class","w-75 mx-auto py-4 section-home",4,"ngIf"],[1,"py-4","w-90","mx-auto","slide2"],[3,"options"],["class","active",4,"ngFor","ngForOf"],[1,"active"],["carouselSlide",""],["height","300",3,"src","alt","title"],[1,"h6"],[1,"w-75","mx-auto","py-4","section-home"],[1,"m-3","product_text","text-main"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-4 col-xl-3","role","button",4,"ngFor","ngForOf"],["role","button",1,"col-sm-6","col-md-4","col-lg-4","col-xl-3"],[1,"product","h-100","position-relative"],[1,"fa-solid","fa-heart","heart","position-absolute",3,"click"],[1,"item"],[3,"routerLink"],[1,"w-100",3,"src","alt","title"],[1,"small"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between","py-1","item"],[1,"mb-0"],["class","fas fa-star",3,"ngClass",4,"ngFor","ngForOf"],[1,"btn-main",3,"click"],["btn",""],[1,"fas","fa-star",3,"ngClass"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",2),t._UZ(7,"img",6),t.qZA(),t.TgZ(8,"div",2),t._UZ(9,"img",7),t.qZA()(),t.TgZ(10,"button",8),t._UZ(11,"span",9),t.TgZ(12,"span",10),t._uU(13,"Previous"),t.qZA()(),t.TgZ(14,"button",11),t._UZ(15,"span",12),t.TgZ(16,"span",10),t._uU(17,"Next"),t.qZA()()(),t.YNc(18,f,3,2,"section",13),t.YNc(19,A,6,5,"section",14)),2&n&&(t.xp6(18),t.Q6J("ngIf",s.categories.length>0),t.xp6(1),t.Q6J("ngIf",s.products.length>0))},dependencies:[r.ez,r.mk,r.sg,r.O5,r.OU,r.H9,g.r,_.bB,_.Fy,_.Mp,u.rH],styles:["header[_ngcontent-%COMP%]{cursor:pointer}.product[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]{transform:translateY(150%);width:100%;text-align:center}.product[_ngcontent-%COMP%]:hover   .btn-main[_ngcontent-%COMP%]{transform:translateY(0);transition:all .7s}@media (max-width: 950px){section[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{flex-direction:column!important}.section-home[_ngcontent-%COMP%]{width:90%!important}.section-home[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{gap:1}}@media (max-width: 450px){section[_ngcontent-%COMP%]   .height-slide[_ngcontent-%COMP%]{height:800px!important}section[_ngcontent-%COMP%]   .product_text[_ngcontent-%COMP%]{font-size:20px!important;width:100%}section[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{flex-direction:column!important}.slide2[_ngcontent-%COMP%]{width:100%!important}.section-home[_ngcontent-%COMP%]{width:90%!important}.section-home[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{gap:1}}"]})}return o})()}}]);