import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SpellbookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpellbookProvider {

  private spellbook = [];
  private spellSelect:any = [];
  private character;
  private index;

  constructor(public http: HttpClient) {
    console.log('Hello SpellbookProvider Provider');
  }

  addSpell(spell) {
    let i = this.spellbook.length;
    this.spellbook[i++] = {name: spell};
  }

  build(data) {
    for(let i = 0; i < data.length; i++) {
      this.spellbook[i] = data[i];
    }
  }

  buildSelect(data) {
    for(let i = 1; i <= data.length; i++) {
      if(data[i] != null) {
        this.spellSelect[i] = data[i].name;
      }
    }
  }

  getArr():any[] {
    return this.spellbook;
  }

  getSpellSelect():any[] {
    return this.spellSelect;
  }

  getSpell(index) {
    return this.spellbook[index];
  }

}
