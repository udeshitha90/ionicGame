import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameData } from "../../providers/game-data";

/**
 * Generated class for the HighScorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-high-score-page',
  templateUrl: 'high-score-page.html',
})
export class HighScorePage {
 public people: Array<Object>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public gameDate:GameData) {
    // this.people=[{Name:'',Min:''}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HighScorePage');
     this.gameDate.createDatabase();
    this.gameDate.refresh().then((result)=>{
        this.people=result;
        
    })
  }
}
