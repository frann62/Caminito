import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { empanada } from './empanadas-list/empanada';

@Injectable({
  providedIn: 'root'
})
export class EmpCartService {

  private _buyList : empanada[] = [];

  buyList: BehaviorSubject<empanada[]> = new BehaviorSubject([]);

  constructor() { }

  addCart(empanadas: empanada) {
    let item: empanada = this._buyList.find((v1) => v1.type == empanadas.type);
    if (!item) {
      this._buyList.push({...empanadas});
    } else {
      item.quantity += empanadas.quantity;
    }
    this.buyList.next(this._buyList);
    console.log(this._buyList);
  }

}
