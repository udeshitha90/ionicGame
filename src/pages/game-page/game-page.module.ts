import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamePage } from './game-page';

@NgModule({
  declarations: [
    GamePage,
  ],
  imports: [
    IonicPageModule.forChild(GamePage),
  ],
  exports: [
    GamePage
  ]
})
export class GamePageModule {}
