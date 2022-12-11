import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Login, Signup } from './../data-type';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogin:boolean=true;
  authError:string=''
constructor(private user : UserService){

}
ngOnInit() : void{
  this.user.userAuthReload();

}

  signUp(data:Signup){
    //console.log(data)
 this.user.userSignUp(data)
  }

  login(data:Login){
this.user.userLogin(data);
this.user.inValiduserAuth.subscribe((result)=>{
  if (result){
    this.authError="Please enter valid user details"
  }
})
  }

  openSignUp(){
this.showLogin=false;
  }

  openLogin(){
    this.showLogin=true;
  }
}
