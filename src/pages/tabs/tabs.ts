import { Component } from '@angular/core';

import { CharacterMainPage } from '../character-main/character-main';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CharacterMainPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
