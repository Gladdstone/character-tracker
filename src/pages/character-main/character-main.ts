import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterSelectPage } from '../character-select/character-select';

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

  character = {};
  index = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.character = this.navParams.get("Character");
    this.index = this.navParams.get("Index");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterMainPage');
  }

  decreaseHealth() {
    this.character.hp -= 1;
  }

  goToSelect() {
    this.navCtrl.setRoot("CharacterSelectPage", {Character: this.character, Index: this.index}, {animate: true, direction: 'back'})
  }

  levelUp() {
    this.character.level += 1;
  }

  increaseHealth() {
    this.character.hp += 1;
  }

}