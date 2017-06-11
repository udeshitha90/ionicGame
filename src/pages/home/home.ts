import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GamePage } from "../game-page/game-page";
import { HighScorePage } from "../high-score-page/high-score-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
user
  constructor(public navCtrl: NavController,public navParams: NavParams) {
      this.user={Name:'',Password:''}
      this.user=this.navParams.get('params1');
  }
  playNow(){
    this.navCtrl.push(GamePage,{params1:this.user});
  }
  score(){
    this.navCtrl.push(HighScorePage);
  }
}
