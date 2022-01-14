import { Router } from '@angular/router';
//import { Products } from './../../Products';
import { ProductDataService } from './../../product-data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/Products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Output() notify = new EventEmitter()

  constructor(public productList:ProductDataService) { }
  product:Array<Products> | undefined
  products:Array<Products> | undefined
  
  ngOnInit(): void {
    
    this.productList.getProducts().subscribe(products=>{ //products is being returned by the data-service
      this.product=products;
    },error=>console.log(error)) 
  }
   

}

 