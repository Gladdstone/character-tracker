import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterSelectPage } from '../character-select/character-select';

import { CharacterProvider } from '../../providers/character/character';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CharacterMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-main',
  templateUrl: 'character-main.html',
})
export class CharacterMainPage {

  private character: any;
  private index;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(this.navParams.get("Character")) {
      this.character = this.navParams.get("Character");
      this.index = this.navParams.get("Index");
    } else {
      this.character = {
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
        id: "001"
      };
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterMainPage');
  }

  decreaseHealth() {
    this.character.hp -= 1;
  }

  goToSelect() {
    this.navCtrl.setRoot(CharacterSelectPage, {Character: this.character, Index: this.index}, {animate: true, direction: 'back'})
  }

  levelUp() {
    this.character.level += 1;
  }

  increaseHealth() {
    this.character.hp += 1;
  }

}
