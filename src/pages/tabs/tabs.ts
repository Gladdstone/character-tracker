import { Component } from '@angular/core';
import { CharacterMainPage } from '../character-main/character-main';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root = CharacterMainPage;
  tab2Root = CharacterMainPage;
  tab3Root = CharacterMainPage;

  constructor() {

  }
}
