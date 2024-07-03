"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[932],{6666:(A,p,l)=>{l.r(p),l.d(p,{LoginComponent:()=>w});var _=l(6814),i=l(95),m=l(1120),t=l(4769),g=l(1378);function c(e,a){1&e&&(t.TgZ(0,"p",15),t._UZ(1,"i",16),t._uU(2," email Required "),t.qZA())}function d(e,a){1&e&&(t.TgZ(0,"p",15),t._UZ(1,"i",16),t._uU(2," invalid email "),t.qZA())}function f(e,a){if(1&e&&(t.TgZ(0,"div",13),t.YNc(1,c,3,0,"p",14),t.YNc(2,d,3,0,"p",14),t.qZA()),2&e){const r=t.oxw();let n,o;t.xp6(1),t.Q6J("ngIf",null==(n=r.loginGroup.get("email"))?null:n.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(o=r.loginGroup.get("email"))?null:o.getError("email"))}}function Z(e,a){1&e&&(t.TgZ(0,"p",15),t._UZ(1,"i",16),t._uU(2," password Required "),t.qZA())}function h(e,a){1&e&&(t.TgZ(0,"p",15),t._UZ(1,"i",16),t._uU(2," password must start with upperCase then from 6 to 10 "),t.qZA())}function v(e,a){if(1&e&&(t.TgZ(0,"div",13),t.YNc(1,Z,3,0,"p",14),t.YNc(2,h,3,0,"p",14),t.qZA()),2&e){const r=t.oxw();let n,o;t.xp6(1),t.Q6J("ngIf",null==(n=r.loginGroup.get("password"))?null:n.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(o=r.loginGroup.get("password"))?null:o.getError("pattern"))}}function x(e,a){1&e&&(t.TgZ(0,"span"),t._UZ(1,"i",17),t.qZA())}function T(e,a){if(1&e&&(t.TgZ(0,"div")(1,"p",18),t._uU(2),t.qZA(),t.TgZ(3,"p",19),t._uU(4,"Don't have an account? Register Now."),t.qZA()()),2&e){const r=t.oxw();t.xp6(2),t.hij(" ",r.err," ")}}let w=(()=>{class e{constructor(r,n){this._AuthService=r,this._Router=n,this.err="",this.load=!1,this.loginGroup=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[a-zA-z0-9_@]{6,}$/)])})}handle(){this.load=!0,!0===this.loginGroup.valid&&this._AuthService.login(this.loginGroup.value).subscribe({next:n=>{"success"==n.message&&(this.load=!1,localStorage.setItem("token",n.token),this._AuthService.decodeDate(),this._Router.navigate(["/home"]))},error:n=>{this.load=!1,this.err=n.error.message}})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(g.e),t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[t.jDz],decls:21,vars:6,consts:[[1,"bg-main-light","w-50","mx-auto","rounded-3","mt-5","p-3"],[1,"h2","text-main"],[3,"formGroup","ngSubmit"],[1,"mb-2"],["for","email"],["type","email","formControlName","email","id","email",1,"form-control","mt-1"],["class","alert alert-danger   p-1 m-1 w-50 mx-auto text-center  w-50 mx-auto text-center",4,"ngIf"],["for","password"],["type","password","formControlName","password","id","password",1,"form-control","mt-1"],[1,"d-flex","align-items-center","justify-content-between"],[1,"btn-main","d-block","my-2",3,"disabled"],[4,"ngIf"],["routerLink","/ForgotPassword","role","button","routerLinkActive","style",1,"text-main"],[1,"alert","alert-danger","p-1","m-1","w-50","mx-auto","text-center","w-50","mx-auto","text-center"],["class","m-0 my-1",4,"ngIf"],[1,"m-0","my-1"],[1,"fa-solid","fa-triangle-exclamation","ps-1"],[1,"fas","fa-spin","fa-spinner"],[1,"p-1","w-50","text-center","mb-0","mx-auto","alert","alert-danger"],["routerLink","/register",1,"p-1","w-50","text-center","mb-0","mx-auto","alert","alert-info","mt-2"]],template:function(n,o){if(1&n&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2,"Login Now:"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return o.handle()}),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"email:"),t.qZA(),t._UZ(7,"input",5),t.qZA(),t.YNc(8,f,3,2,"div",6),t.TgZ(9,"div",3)(10,"label",7),t._uU(11,"password:"),t.qZA(),t._UZ(12,"input",8),t.qZA(),t.YNc(13,v,3,2,"div",6),t.TgZ(14,"div",9)(15,"button",10),t._uU(16," Login "),t.YNc(17,x,2,0,"span",11),t.qZA(),t.TgZ(18,"p",12),t._uU(19," Forgot Password ?"),t.qZA()(),t.YNc(20,T,5,1,"div",11),t.qZA()()),2&n){let s,u;t.xp6(3),t.Q6J("formGroup",o.loginGroup),t.xp6(5),t.Q6J("ngIf",(null==(s=o.loginGroup.get("email"))?null:s.errors)&&(null==(s=o.loginGroup.get("email"))?null:s.touched)),t.xp6(5),t.Q6J("ngIf",(null==(u=o.loginGroup.get("password"))?null:u.errors)&&(null==(u=o.loginGroup.get("password"))?null:u.touched)),t.xp6(2),t.Q6J("disabled",o.loginGroup.invalid),t.xp6(2),t.Q6J("ngIf",o.load),t.xp6(3),t.Q6J("ngIf",o.err)}},dependencies:[_.ez,_.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.rH]})}return e})()}}]);