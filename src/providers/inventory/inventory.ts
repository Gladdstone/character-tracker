import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InventoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InventoryProvider {

  private inventory = [];
  private character;
  private index;

  constructor(public http: HttpClient) {
    console.log('Hello InventoryProvider Provider');
  }

  build(data) {
    for(let i = 0; i < data.length; i++) {
      this.inventory[i] = data[i];
    }
  }

  getArr():any[] {
    return this.inventory;
  }

  getItem(index) {
    return this.inventory[index];
  }

}
