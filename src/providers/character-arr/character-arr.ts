import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CharacterProvider } from '../character/character';

/*
  Generated class for the CharacterArrProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharacterArrProvider {

  private characters = [
    {
      name: "Selthas",
      class: "Wizard",
      level: 3,
      hp: 24,
      init: "+5",
      bab: "+1",
      ac: "13",
      speed: "30",
      str: "0",
      int: "+5",
      dex: "+1",
      wis: "+2",
      con: "+1",
      cha: "0",
      invent: {},
      id: "001"
    },
    {
      name: "Ben",
      class: "Cleric",
      level: 1,
      hp: 20,
      init: "+6",
      bab: "+2",
      ac: "16",
      speed: "30",
      str: "0",
      int: "+2",
      dex: "+2",
      wis: "+4",
      con: "+1",
      cha: "+1",
      invent: {},
      id: "002"
    }
  ];

  constructor(public charProvider: CharacterProvider) {
    console.log('Hello CharacterArrProvider Provider');
  }

  getArr() {
    return this.characters;
  }

  getCharacter(index) {
    return this.characters[index];
  }

}
