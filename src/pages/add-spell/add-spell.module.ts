import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSpellPage } from './add-spell';

@NgModule({
  declarations: [
    AddSpellPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSpellPage),
  ],
})
export class AddSpellPageModule {}
