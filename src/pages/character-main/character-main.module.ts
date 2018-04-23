import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterMainPage } from './character-main';

@NgModule({
  declarations: [
    CharacterMainPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterMainPage),
  ],
})
export class CharacterMainPageModule {}
