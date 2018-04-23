import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterMainPage } from '../character-main/character-main';

/**
 * Generated class for the CharacterSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-select',
  templateUrl: 'character-select.html',
})
export class CharacterSelectPage {

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
      id: "002"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If parameter exists, update database
    // TODO - how can I routinely update the database without monopolizing processing time?
    if(this.navParams.get("Character")) {
      let index = this.navParams.get("Index");
      let character = this.navParams.get("Character");

      // update character model from parameters
      this.characters[index] = character;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterSelectPage');
  }

  selectCharacter(index) {
    let character = this.characters[index];
    this.navCtrl.setRoot(CharacterMainPage, {Character: character, Index: index}, {animate: true, direction: 'forward'});
  }

}
