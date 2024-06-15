import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  chartData: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getList().subscribe((data: any) => {
      this.products = data;
      this.chartData = this.transformData(this.products);
      console.log('Products:', this.products);
      console.log('Chart Data:', this.chartData);
    });
  }

  transformData(products: Product[]): any[] {
    return products.map(product => ({
      name: product.name,
      value: Number(product.price) 
    }));
  }
}