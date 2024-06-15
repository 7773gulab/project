import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [{
      path: '',
      loadChildren: () =>
        import('./dashboard/dashboard.module').then(
          (mod) => mod.DashboardModule),
    },
    {
      path:'product',
      loadChildren: () => import('./products/products.module').then((mod)=> mod.ProductsModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
