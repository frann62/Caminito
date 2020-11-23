import { Component, OnInit } from '@angular/core';
import { EmpCartService } from '../emp-cart.service';
import { empanada } from './empanada';



@Component({
  selector: 'app-empanadas-list',
  templateUrl: './empanadas-list.component.html',
  styleUrls: ['./empanadas-list.component.scss']
})

export class EmpanadasListComponent implements OnInit {

  

  empanadas : empanada[] =  [
    {
    type : "Carne",
    price : 40,
    stock : 10,
    image : "assets/img/carne.jpg",
    empty : false,
    quantity : 0,
  },
  {
    type : "Pollo",
    price : 40,
    stock : 6,
    image : "assets/img/pollo.jpg",
    empty : false,
    quantity : 0,
  },
  {
    type : "Jamon y Queso",
    price : 35,
    stock : 0,
    image : "assets/img/jyq.jpg",
    empty : true,
    quantity : 0,
  },
  {
    "type" : "Verdura",
    "price" : 35,
    "stock" : 6,
    "image" : "assets/img/verdura.jpg",
    empty : false,
    quantity : 0,
  },
];

constructor(private cart: EmpCartService) {
   }

  ngOnInit(): void {
  }

  addCart(empanadas) : void {
    this.cart.addCart(empanadas);
    empanadas.stock -= empanadas.quantity;
    empanadas.quantity = 0;
  }

  maxReached(m: string) {
    alert (m);
  }

}
