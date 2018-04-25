import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CharacterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharacterProvider {

  private characters = {
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
  };

  constructor() {
    console.log('Hello CharacterProvider Provider');
  }

  getName(index) {
    return this.characters[index].name;
  }

  getClass(index) {
    return this.characters[index].class;
  }

  getLevel(index) {
    return this.characters[index].level;
  }

  getHp(index) {
    return this.characters[index].hp;
  }

  getInit(index) {
    return this.characters[index].init;
  }

  getBab(index) {
    return this.characters[index].bab;
  }

  getAc(index) {
    return this.characters[index].ac;
  }

  getSpeed(index) {
    return this.characters[index].speed;
  }

  getStr(index) {
    return this.characters[index].str;
  }

  getInt(index) {
    return this.characters[index].int;
  }

  getDex(index) {
    return this.characters[index].dex;
  }

  getWis(index) {
    return this.characters[index].wis;
  }

  getCon(index) {
    return this.characters[index].con;
  }

  getCha(index) {
    return this.characters[index].cha;
  }

  getInvent(index) {
    return this.characters[index].invent;
  }

}
