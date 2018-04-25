import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterMainPage } from '../character-main/character-main';
import { TabsPage } from '../tabs/tabs';

import { CharacterArrProvider } from '../../providers/character-arr/character-arr';

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

  private characters;

  constructor(private charArrProv: CharacterArrProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.characters = charArrProv.getArr();

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
