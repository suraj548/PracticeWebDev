import { Messages } from './../../info';
import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/product-data.service';
import { Products } from 'src/app/Products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  
  
  
  constructor(public productList:ProductDataService,private router:Router) { }
  product:Array<Products> | undefined
  products:Array<Products> | undefined
  
  ngOnInit(): void {
   
  }
   
  onSubmit(){
		this.productList.addProducts(this.productList.newProduct).subscribe(data => {
			if(data === true) { 
				alert('Data stored,now you are redirected productlist')
				console.log(this.productList.newProduct)
				this.router.navigate(['/product-list'])
			} // redirect to the appropriate page
			else{
				alert('Product with this id allready exists')
			}
			console.log(data)
			console.log(this.productList.newProduct)
		},
		error => {
			console.log(error)
			alert('Problem in saving the data')
		})
    //this.resetForm()
	} 

  resetForm(): void {
		this.productList.newProduct = {
      id:0,
      name: "",
	  price: 0
		}
	} 
	
	
}
