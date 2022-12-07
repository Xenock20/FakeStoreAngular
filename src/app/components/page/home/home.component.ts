import { FakeStoreApiService } from './../../../services/fake-store-api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories = [];
  products: Product[] = [];
  product = {
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
  loading: boolean;
  loadingBall: boolean;
  home: boolean;

  constructor(private api:FakeStoreApiService) {
    this.loading = true;
    this.loadingBall = true;
    this.home = true;
  }

  ngOnInit() {
    this.api.getCategories().subscribe((res) => {
      this.categories = res;
      this.loading = false;
    });

    this.api.getProducts().subscribe((res) => {
      this.products = res;
      this.loadingBall = false;
    });
  }

  onProductCategory(category: string): void {
    this.loadingBall = true;
    this.products = [];
    this.api.getCategory(category).subscribe((res) => {
      this.products = res;
      this.loadingBall = false;
    });
  }

  onProductAll(): void {
    this.loadingBall = true;
    this.products = [];
    this.api.getProducts().subscribe((res) => {
      this.products = res;
      this.loadingBall = false;
    });
  }

  onProduct(i: number): void {
    this.product = this.products[i];
    this.home = false;
  }

  onHome(): void {
    this.home = true;
  }
}
