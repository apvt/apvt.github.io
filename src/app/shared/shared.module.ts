import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Convert } from '../product/convert.pipe';
import { StarComponent } from './star/star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    Convert,
  ],

  imports: [
    CommonModule,
  ],

exports:[
  StarComponent,
  Convert,
  FormsModule,
  ReactiveFormsModule, 
],

})
export class SharedModule { }
