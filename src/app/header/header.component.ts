import { Call } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from './../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:String='default';
  sellerName:string='';
  searchResult:undefined| product[];
  userName:string='';

  constructor(private route: Router, private product:ProductService){

  }
  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
    if(val.url){
      if (localStorage.getItem('seller')&& val.url.includes('seller')){
          let sellerStore= localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName= sellerData.name;
          this.menuType="seller";
          
        }
     else if (localStorage.getItem('user')){
      let userStore= localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      this.userName= userData.name;
      this.menuType="user";
      console.log(this.userName);
      

     } else {
       // console.log("outside seller")
        this.menuType="default";
      }
    }
    })
  }
  logout(){
   localStorage.removeItem('seller');
   this.route.navigate(['/']);
  }
  userLogout(){
    localStorage.removeItem('user');
   this.route.navigate(['/user-auth']);
  }

  searchProduct(query:KeyboardEvent){
    if (query){
      const element = query.target as HTMLInputElement
     // console.log(element.value);
      this.product.searchProducts(element.value).subscribe((result)=>{
      this.searchResult=result;

      })
    }


  }
  hideSearch(){
    this.searchResult=undefined
  }
  submitSearch(value:string){
    //console.log(val);
    this.route.navigate([`search/${value}`])
  }

  reDirectToDetail(id:number){
    this.route.navigate(['/details/'+id]);
  }
}
