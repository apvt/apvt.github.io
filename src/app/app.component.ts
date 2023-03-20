import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'MyStore';

  primary = true;

  themecolor = {
    'bg-primary': false,
    'bg-purple': true,
  };

  toggletheme() {
    this.primary = !this.primary;

    this.themecolor = {
      'bg-primary': this.primary,
      'bg-purple': !this.primary,
    };
  }

  cartCount = 0;
  constructor(private pro_ser: ProductService) {}

  getcartCount(): void {}

  // this.cartCount = this.pro_ser.cartCount;

  ngOnInit(): void {
    this.pro_ser.cartCount$.subscribe((count) => {
      console.log(count);
      this.cartCount = count;
    });
  }
}
