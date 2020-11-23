import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpCartService } from '../emp-cart.service';
import { empanada } from '../empanadas-list/empanada';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  buyList$: Observable<empanada[]>;

  constructor(private cart: EmpCartService) {
    this.buyList$ = cart.buyList.asObservable();
   }

  ngOnInit(): void {
  }

}
