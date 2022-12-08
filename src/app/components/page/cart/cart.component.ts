import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(){}

  listCart: any = [];
  price = 0;

  ngOnInit(): void {
    const data = sessionStorage.getItem('product')

    if(data){
      this.listCart = JSON.parse(data)
    }

    this.listCart.forEach((element: any) => {
      this.price += parseFloat(element.price)
    });
  }

  onDelete(i: number): void {
    this.listCart.splice(i,1)
    sessionStorage.setItem('product', JSON.stringify(this.listCart))
    this.price = 0
    this.listCart.forEach((element: any) => {
      this.price += parseFloat(element.price)
    });
  }
}
