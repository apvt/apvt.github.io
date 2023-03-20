import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReviewComponent } from './review/review.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { VerifyGuard } from './verify.guard';

const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Mysite | products' },
  //:id - placeholder
  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [VerifyGuard],
    children: [
      //nesting routes
      { path: 'review', component: ReviewComponent },
      { path: 'specifications', component: SpecificationsComponent },
    ],

    title: 'Mysite | pro_details',
  },
  //above paths should be static paths
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ProductRoutingModule {}
