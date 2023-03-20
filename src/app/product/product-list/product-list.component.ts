import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  imgstyle = {
    'width.px': '200',
    'height.px': '200',
  };

  products: Product[] = [];

  constructor(private pro_ser: ProductService) {}
  ngOnInit(): void {
    this.pro_ser.getProducts().subscribe((products:any) => {
      this.products = products;
      this.filtered = products;
    });
  }

  addtocart(event: any, product: any) {
    // console.log(product);
    // console.log(event);
    // console.log(event, product);
    // console.log('Items added');
    this.pro_ser.increment();
  }

  //creating variable without changing original arr content
  filtered = this.products;

  private _filter = '';
  //readonly value get value from user
  get filter(): string {
    return this._filter;
  }

  //display char by char in console

  set filter(fb: string) {
    this._filter = fb;
    // console.log(fb);
    this.filterproducts(this._filter);
  }

  showimage = true;

  filterproducts(searchvalue: string) {
    this.filtered = this.products.filter((product) => {
      return product.name.includes(searchvalue);
      // return product.name.toLowerCase().includes(searchvalue.toLowerCase()); //to change in lower or upper case
    });
  }

  onRatingClicked(rating: number): void {
    alert(`you clicked ${rating}`);
  }
}
