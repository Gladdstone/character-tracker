import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { CharacterArrProvider } from '../character-arr/character-arr';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private url = "http://localhost/sites/characterTracker";
  private body = new FormData();
  private data:any = {};
  private charArr:CharacterArrProvider;

  constructor(public characterArr: CharacterArrProvider, public http: Http) {
    console.log('Hello DatabaseProvider Provider');
  }

  login(username: string, password: string): boolean {
    this.body.append("username", username);
    this.body.append("password", password);

    this.post("/login.php", this.body)
      .then( () => {
        //check data
        this.data = JSON.parse(this.data.response);
        console.log(this.data);
        this.loadData();
      }, error => {
        console.log(error);
        return false;
      });

    return true;
  }

  loadData() {
    this.post("/loadData.php", this.body)
      .then( success => {
        this.characterArr.build(JSON.parse(this.data.response));
      }, error => {
        console.log(error);
      });
  }

  post(ext: string, body: FormData) {
    return new Promise( (resolve, reject) => {
      this.http.post(this.url + ext, body)
      .subscribe(data => {
        this.data.response = data["_body"];
        // console.log(this.data);
        resolve();
      }, error => {
        reject("Post failure " + error);
      });
    });
  }
}
