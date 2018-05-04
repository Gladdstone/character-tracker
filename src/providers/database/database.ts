import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { CharacterArrProvider } from '../character-arr/character-arr';
import { SpellbookProvider } from '../spellbook/spellbook';
import { InventoryProvider } from '../inventory/inventory';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  // private url = "http://localhost/sites/characterTracker";
  private url = "http://serenity.ist.rit.edu/~jdf4921/characterTracker"
  private spellUrl = "http://ganskop.com/proxy/http://dnd5eapi.co/api/spells";
  private data:any = {};
  private charArr:CharacterArrProvider;
  private username;
  private password;

  constructor(public characterArr: CharacterArrProvider, public http: Http, public inventProv: InventoryProvider, public spell: SpellbookProvider) {
    console.log('Hello DatabaseProvider Provider');
  }

  get(url) {
    this.data = {};
    return new Promise( (resolve, reject) => {
      this.http.get(url)
      .subscribe(data => {
        this.data.response = data["_body"];
        // console.log(this.data);
        resolve();
      }, error => {
        reject("Post failure " + error);
      });
    });
  }

  getData() {
    return this.data.response;
  }

  login(username: string, password: string): boolean {
    this.username = username;
    this.password = password;

    let body = new FormData();
    body.append("username", username);
    body.append("password", password);

    this.post(this.url + "/login.php", body)
      .then( () => {
        //check data
        this.data = JSON.parse(this.data.response);
        this.loadData();
      }, error => {
        console.log(error);
        return false;
      });

    return true;
  }

  loadAllSpells() {
    let body = new FormData();

    this.get(this.spellUrl)
      .then( () => {
        this.spell.buildSelect(JSON.parse(this.data.response).results);
      }, error => {
        console.log(error);
      });
  }

  loadData() {
    let body = new FormData();
    body.append("username", this.username);
    body.append("password", this.password);

    this.post(this.url + "/loadData.php", body)
      .then( success => {
        this.characterArr.build(JSON.parse(this.data.response));
      }, error => {
        console.log(error);
      });
  }

  loadInventory(id):any {
    let body = new FormData();
    body.append("id", id);
    
    this.post(this.url + "/loadInventory.php", body)
      .then( success => {
        this.inventProv.build(JSON.parse(this.data.response));
      }, error => {
        console.log(error);
      });
  }

  loadSpellbook(id) {
    let body = new FormData();
    body.append("id", id);

    this.post(this.url + "/loadSpellbook.php", body)
      .then( success => {
        this.spell.build(JSON.parse(this.data.response));
        return;
      }, error => {
        console.log(error);
      });
  }

  post(url: string, body: FormData) {
    this.data = {};
    return new Promise( (resolve, reject) => {
      this.http.post(url, body)
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
