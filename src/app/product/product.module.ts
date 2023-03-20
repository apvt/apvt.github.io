import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReviewComponent } from './review/review.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataPipe } from '../data.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ReviewComponent,
    SpecificationsComponent,
    DataPipe,
    
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ProductRoutingModule,
  ],
})
export class ProductModule { }
