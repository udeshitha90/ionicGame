import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login-page/login-page";
import { SignupPage } from "../pages/signup-page/signup-page";
import { GamePage } from "../pages/game-page/game-page";
import { HighScorePage } from "../pages/high-score-page/high-score-page";
import { UserDate } from "../providers/user-date";
import { SQLite } from "@ionic-native/sqlite";
import { GameData } from "../providers/game-data";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    GamePage,
    HighScorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    GamePage,
    HighScorePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserDate,
    SQLite,
    GameData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
