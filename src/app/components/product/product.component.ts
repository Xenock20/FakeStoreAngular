import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {


  constructor(private router: Router) { }


  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  }

  listBuy: Product[] = []


  onBuy(): void {

    const data = sessionStorage.getItem('product')

    if (!data) {
      this.listBuy.push(this.product)
      sessionStorage.setItem('product', JSON.stringify(this.listBuy))
    } else {
      this.listBuy = JSON.parse(data)
      this.listBuy.push(this.product)
      sessionStorage.setItem('product', JSON.stringify(this.listBuy))
    }

    this.router.navigateByUrl('/cart')
  }
}
