//import { Products } from './../../Products';
import { ProductDataService } from './../../product-data.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productList:ProductDataService) { }
  product:Array<Products> | undefined
  products:Array<Products> | undefined
  
  ngOnInit(): void {
    this.productList.getProducts().subscribe(products=>{
      this.product=products;
    },error=>console.log(error))
  }
 
}

 