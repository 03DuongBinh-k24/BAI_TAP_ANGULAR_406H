import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../services/product';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css']
})
export class ServiceProductImageEventComponent {
  public products: any;

  constructor(pservice: Product, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }

  viewDetail(f: any) {
    this.router.navigate(['/Bai13', f.ProductId]);
  }
}
