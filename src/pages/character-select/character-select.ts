import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
      name: "Character",
      class: "Wizard",
      level: "3"
    },
    {
      name: "Character",
      class: "Cleric",
      level: "1"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterSelectPage');
  }

  selectCharacter(event) {
    console.log(event);
  }

}
