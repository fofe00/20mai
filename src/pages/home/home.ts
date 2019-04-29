import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:any;
  contact:any;
  boisson:any;
  guestName:any;
  guestBoisson:any;
  constructor(public navCtrl: NavController) {
  }
saveData(){
    console.log(this.name);
}
}
