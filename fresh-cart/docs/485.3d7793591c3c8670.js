"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[485],{6485:(u,r,s)=>{s.r(r),s.d(r,{CatinfoComponent:()=>a});var c=s(6814),t=s(4769),_=s(7064),n=s(1120);function l(i,g){if(1&i&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",3)(5,"h2"),t._uU(6),t.qZA()()()()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("src",e.cat.image,t.LSH)("alt",e.cat.name),t.xp6(3),t.Oqu(e.cat.name)}}let a=(()=>{class i{constructor(e,o){this._ProductService=e,this._ActivatedRoute=o,this.cat={name:"",image:""},this.id=""}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.id=e.get("_id")}}),this._ProductService.getSubCategories(this.id).subscribe({next:e=>{this.cat=e.data,console.log(e)}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(_.M),t.Y36(n.gz))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-catinfo"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow bg-main-light p-3 my-4 ",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","my-4"],[1,"row","g-5"],[1,"col-md-6"],[1,"w-75",3,"src","alt"]],template:function(o,d){1&o&&t.YNc(0,l,7,3,"section",0),2&o&&t.Q6J("ngIf",d.cat._id)},dependencies:[c.ez,c.O5]})}return i})()},7064:(u,r,s)=>{s.d(r,{M:()=>_});var c=s(4769),t=s(9862);let _=(()=>{class n{constructor(a){this._HttpClient=a,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProduct(a=1){return this._HttpClient.get(this.baseUrl+`products?page=${a}`)}getcategories(){return this._HttpClient.get(this.baseUrl+"categories")}getDetails(a){return this._HttpClient.get(this.baseUrl+`products/${a}`)}getSubCategories(a){return this._HttpClient.get(this.baseUrl+`categories/${a}`)}static#t=this.\u0275fac=function(i){return new(i||n)(c.LFG(t.eN))};static#e=this.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);