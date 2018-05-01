import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

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
  private url = "http://localhost/sites/characterTracker";
  private body = {
    username: this.username,
    password: this.password
  };
  data:any = {};

  constructor(public alertCtrl: AlertController, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {    
    this.http.post(this.url + "/login.php", JSON.stringify(this.body))
    .subscribe(data => {
      this.data.response = data["_body"];
      console.log(this.data);
      this.navCtrl.setRoot('CharacterSelectPage', {}, {animate: true, direction: 'forward'});
    }, error => {
      console.log("Oooops!");
    });
    // this.navCtrl.setRoot('CharacterSelectPage', {}, {animate: true, direction: 'forward'});
  }

  // sendLogin() {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.apiUrl, JSON.stringify(this.body), {
  //       headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
  //       params: new HttpParams().set('id', '3'),
  //     })
  //     .subscribe(res => {
  //       resolve(res);
  //     }, (err) => {
  //       reject(err);
  //     });
  //   });
  // }

  signup() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon',
      subTitle: 'Alpha test signups coming soon!',
      buttons: ['OK']
    });
    alert.present();
  }

}
