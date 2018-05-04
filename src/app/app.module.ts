import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler, Tab, Tabs } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CharacterSelectPage } from '../pages/character-select/character-select';
import { CharacterMainPage } from '../pages/character-main/character-main';
import { InventoryPage } from '../pages/inventory/inventory';
import { SpellbookPage } from '../pages/spellbook/spellbook';
import { AddSpellPage } from '../pages/add-spell/add-spell';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CharacterProvider } from '../providers/character/character';
import { CharacterArrProvider } from '../providers/character-arr/character-arr';
import { DatabaseProvider } from '../providers/database/database';
import { SpellbookProvider } from '../providers/spellbook/spellbook';
import { InventoryProvider } from '../providers/inventory/inventory';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    CharacterSelectPage,
    CharacterMainPage,
    InventoryPage,
    SpellbookPage,
    AddSpellPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    CharacterSelectPage,
    CharacterMainPage,
    InventoryPage,
    SpellbookPage,
    AddSpellPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CharacterProvider,
    CharacterArrProvider,
    DatabaseProvider,
    SpellbookProvider,
    InventoryProvider
  ]
})
export class AppModule {}
