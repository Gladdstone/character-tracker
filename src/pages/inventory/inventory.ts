import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { SpellbookPage } from '../spellbook/spellbook';
import { CharacterMainPage } from '../character-main/character-main';
import { InventoryProvider } from '../../providers/inventory/inventory';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  private character: any;
  private index;
  private object:any;
  private inventory = [];

  constructor(public db: DatabaseProvider, public inventProv: InventoryProvider, public navCtrl: NavController, public navParams: NavParams) {
    let object;

    if(this.navParams.get("Character")) {
      this.character = this.navParams.get("Character");

      this.db.loadInventory(this.character.characterID);
      this.object = this.db.getData();
      this.inventory = this.inventProv.getArr();
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
        invent: {}
      };

      this.inventory[0] = {
        name: "thing"
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryPage');
  }

  onSwipeLeft() {
    this.navCtrl.setRoot(SpellbookPage, {Character: this.character, Index: this.index}, {animate: true, direction: 'forward'});
  }

  onSwipeRight() {
    this.navCtrl.setRoot(CharacterMainPage, {Character: this.character, Index: this.index}, {animate: true, direction: 'back'});
  }

}
