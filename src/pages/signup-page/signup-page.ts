import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserDate } from "../../providers/user-date";

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup-page',
  templateUrl: 'signup-page.html',
})
export class SignupPage {
user
  constructor(public navCtrl: NavController, public navParams: NavParams,public userdate:UserDate,private alertCtrl: AlertController) {
this.user={Name:'',Password:''}  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount(user){
    this.userdate.createDatabase();
    this.userdate.add(user).then((result)=>{
        this.presentAlert(result);
       
    });
  }
presentAlert(message) {
  let alert = this.alertCtrl.create({
    title: 'User details',
    subTitle: message,
    buttons: ['ok']
  });
  alert.present();
}
}
