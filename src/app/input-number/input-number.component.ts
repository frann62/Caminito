import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { empanada } from '../empanadas-list/empanada';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;
  
  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter <number> = new EventEmitter <number>();

  
  @Output()
  maxReached: EventEmitter <string> = new EventEmitter <string>();

  ngOnInit(): void {
  }

  upQuantity(): void{
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
  }
      else
        this.maxReached.emit("Se alcanzo el maximo de empanadas");
  }
 
  downQuantity(): void{
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
 }
 
 onChangeQuantity(event): void {
   console.log(event.target);
   this.quantityChange.emit(this.quantity);
 }

}
