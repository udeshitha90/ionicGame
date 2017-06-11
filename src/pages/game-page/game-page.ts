import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GameData } from "../../providers/game-data";

/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game-page',
  templateUrl: 'game-page.html',
})
export class GamePage {
sTime:String;
sValue
eTime:String;
eValue
totalScore
Score
user
  constructor(public navCtrl: NavController, public navParams: NavParams,public gameDate:GameData ,private alertCtrl: AlertController) {
         this.user={Name:'',Password:''}
      this.user=this.navParams.get('params1');
   this.sTime=new Date().toTimeString();
   console.log("Start"+this.sTime.substring(0,2)+"-"+this.sTime.substring(3,5)+"-"+this.sTime.substring(6,8));

   this.sValue=(Number.parseInt(this.sTime.substring(0,2))*60)+Number.parseInt(this.sTime.substring(3,5));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');

    
  }
submit(){
   this.eTime=new Date().toTimeString();
   console.log("End"+this.eTime.substring(0,2)+"-"+this.eTime.substring(3,5)+"-"+this.eTime.substring(6,8));

   this.eValue=(Number.parseInt(this.eTime.substring(0,2))*60)+Number.parseInt(this.eTime.substring(3,5));
    this.totalScore=this.eValue-this.sValue;
    console.log(this.totalScore);
    this.gameDate.createDatabase();
    this.Score={Name:this.user.Name,Min:this.totalScore};
    this.gameDate.add(this.Score).then((result)=>{
        this.presentAlert(result);
       
    });
  }
  presentAlert(message) {
  let alert = this.alertCtrl.create({
    title: 'Score ',
    subTitle: message,
    buttons: ['ok']
  });
  alert.present();
}
}
