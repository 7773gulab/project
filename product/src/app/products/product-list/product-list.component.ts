import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(private service: ProductService, private router: Router) { }
  products: any;
  id: any
  
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.service.getList().subscribe((res) => {
      this.products = res
    })
  }


  setData(id:number){
    this.service.setData(id)
    this.router.navigate(['product/update-product'])
  }
 


  deleteProduct(id: number): void {
    this.service.deleteProduct(id).subscribe(() => {
      this.getProductList();
    });
  }
}
