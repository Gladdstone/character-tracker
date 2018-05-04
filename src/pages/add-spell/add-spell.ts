import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpellbookProvider } from '../../providers/spellbook/spellbook';

/**
 * Generated class for the AddSpellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-spell',
  templateUrl: 'add-spell.html',
})
export class AddSpellPage {

  private spellSelect;

  constructor(public navCtrl: NavController, public navParams: NavParams, public spell: SpellbookProvider) {
    this.spellSelect = this.spell.getSpellSelect();
  }

  add(spell) {
    this.spell.addSpell(spell);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSpellPage');
  }

}
