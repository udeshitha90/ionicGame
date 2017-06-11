import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { SignupPage } from "../signup-page/signup-page";
import { UserDate } from "../../providers/user-date";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {
user
  constructor(public navCtrl: NavController, public navParams: NavParams,private userDate:UserDate,private alertCtrl: AlertController) {
  this.user={Name:'',Password:''}
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user){
    //  this.navCtrl.push(HomePage);
    this.userDate.createDatabase();
    this.userDate.getUserDetailsByNamePassword(user).then((result)=>{
        if(result==true){
          
             this.presentAlert("Login Succefully");
               this.navCtrl.push(HomePage,{params1:user});
        }else{
             this.presentAlert("Try Again");
        }
       
    });
   
  }
 SignUp(){
   this.navCtrl.push(SignupPage);
 }
 presentAlert(message) {
  let alert = this.alertCtrl.create({
    title: 'Loginn',
    subTitle: message,
    buttons: ['ok']
  });
  alert.present();
}
}
