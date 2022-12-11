import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductService } from './../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 popularProduct:undefined|product[]
 TrendyProduct:undefined|product[]
  constructor(private product: ProductService){

  }
  ngOnInit():void{
    this.product.popularProducts().subscribe((data)=>{
this.popularProduct=data;
    })

    this.product.TrendyProducts().subscribe((data)=>{
      this.TrendyProduct=data;
          })
  }
}
