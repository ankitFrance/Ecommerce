import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { product } from './../data-type';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productData:undefined | product
  productmessage:undefined | string
  constructor(private route : ActivatedRoute, private product: ProductService){}

  ngOnInit():void{
    let productId= this.route.snapshot.paramMap.get('id')
   productId&& this.product.getProduct(productId).subscribe((data)=>{
    this.productData=data;
    })
  }
submit(data:product){
  if(this.productData){
    data.id= this.productData.id
  }
this.product.updateProduct(data).subscribe((result)=>{
  if(result){
   this.productmessage="Product has updated"
  }
});
setTimeout(() => {
  this.productmessage=undefined;
}, 3000);
}
}
