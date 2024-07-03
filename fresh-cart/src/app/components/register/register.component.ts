import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule ,Validators} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor( private _AuthService:AuthService , private _Router:Router)
  {

  }



  err:string=''
  load:boolean=false
  registerGroup:FormGroup =new FormGroup({

    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required ,Validators.pattern(/^[a-zA-z0-9_@]{6,}$/)]),
      rePassword:new FormControl(''),
      phone:new FormControl('',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])


    }
  ,
  {validators:[this.confirm]} as FormControlOptions

  
  
  )

confirm(group:FormGroup):void{
const password=group.get('password')
const rePassword =group.get('rePassword');

if(rePassword?.value == '')
  {rePassword.setErrors({
    required:true
  })
  }

 else if(password?.value!=rePassword?.value)
{
  rePassword?.setErrors({mismatch:true})
}

}

handle():void
{
this.load=true
const userDate= this.registerGroup.value;
if(this.registerGroup.valid === true )
this._AuthService.register(userDate).subscribe({
  next:(response)=>{
if(response.message =="success")
  {

    //programing routing
    this._Router.navigate(['/login'])
  }

  },
  error:(err)=>{
    this.load=false
  this.err=err.error.message;
  
  }
})
}
}