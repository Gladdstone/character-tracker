import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CharacterArrProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharacterArrProvider {

  private characters = [];

  constructor() {
    console.log('Hello CharacterArrProvider Provider');
  }

  build(data) {
    for(let i = 0; i < data.length; i++) {
      this.characters[i] = data[i];
    }
  }

  getArr() {
    return this.characters;
  }

  getCharacter(index) {
    return this.characters[index];
  }

}
