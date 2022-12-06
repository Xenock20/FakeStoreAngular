import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { FakeStoreApiService } from './services/fake-store-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private fakeStoreApiService: FakeStoreApiService){}

  products: Product[] = [];

  title = 'store';

  ngOnInit(): void {
    this.fakeStoreApiService.getCategory('jewelery').subscribe((res) => {
      this.products = res;

      console.log(this.products)
    });
  }
}
