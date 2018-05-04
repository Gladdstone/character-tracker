import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { SpellbookProvider } from '../../providers/spellbook/spellbook';
import { InventoryPage } from '../inventory/inventory';
import { AddSpellPage } from '../add-spell/add-spell';

/**
 * Generated class for the SpellbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spellbook',
  templateUrl: 'spellbook.html',
})
export class SpellbookPage {

  private character:any;
  private index;
  private object:any;
  private spells = [];
  private spellSelect = [];

  constructor(public db: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams, public spellProv: SpellbookProvider) {
    this.character = this.navParams.get("Character");
    this.index = this.navParams.get("Index");

    this.db.loadAllSpells();
    this.spellSelect = this.spellProv.getSpellSelect();

    this.db.loadSpellbook(this.character.characterID);
    this.object = this.db.getData();
    this.spells = this.spellProv.getArr();
  }

  addSpell() {
    this.navCtrl.push(AddSpellPage, {Spells: this.spellSelect}, {animate: true, direction: 'forward'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpellbookPage');
  }

  onSwipeRight() {
    this.navCtrl.setRoot(InventoryPage, {Character: this.character, Index: this.index}, {animate: true, direction: 'back'});
  }

}
