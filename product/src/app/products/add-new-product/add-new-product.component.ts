import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  constructor(private service: ProductService, private fb: FormBuilder) { }

  productForm!: FormGroup;
  
  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required]
    });
  }

  addNewProduct() {
    this.service.addproduct(this.productForm.value).subscribe((res) => {

    })
    this.reset();
  }

  reset() {
    this.productForm.reset();
  }



}
