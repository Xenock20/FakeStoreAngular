import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  listCart: any = [];

  ngOnInit(): void {
    const data = sessionStorage.getItem('product')

    if(data){
      this.listCart = JSON.parse(data)
    }

    console.log(this.listCart)
  }
}
