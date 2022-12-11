import { Component } from '@angular/core';
import { SellerService } from './../services/seller.service';
import {Router} from '@angular/router'
import { Signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router) {}
  showLogin= false;
  authError:string ='';

  ngOnInit():void{
    this.seller.reloadSeller();
  }

  signUp(data:Signup):void{
   console.log(data);   //this gives the data in blank fields in the form 
   this.seller.userSignUp(data)
  }

  login(data:Signup):void{
    //this.authError="email or password is incorrect"
    console.log(data);   //this gives the data in blank fields in the form 
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError=>{
      if(isError){
        this.authError="email or password is incorrect"
      }
    }))
  }
  openLogin(){
   this.showLogin=true;
  }

  openSignUp(){
    this.showLogin=false;
  }

}
