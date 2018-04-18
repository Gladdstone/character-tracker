import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterSelectPage } from './character-select';

@NgModule({
  declarations: [
    CharacterSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterSelectPage),
  ],
})
export class CharacterSelectPageModule {}
