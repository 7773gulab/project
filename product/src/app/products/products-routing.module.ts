import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'product-list', component: ProductListComponent},
  {path:'add-new-product', component: AddNewProductComponent},
  {path:"update-product", component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
