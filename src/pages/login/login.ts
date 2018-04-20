import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { CharacterSelectPage } from '../character-select/character-select';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username;
  private password;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    // TODO
    this.navCtrl.setRoot('CharacterSelectPage', {}, {animate: true, direction: 'forward'});
  }

  signup() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon',
      subTitle: 'Alpha test signups coming soon!',
      buttons: ['OK']
    });
    alert.present();
  }

}
