import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighScorePage } from './high-score-page';

@NgModule({
  declarations: [
    HighScorePage,
  ],
  imports: [
    IonicPageModule.forChild(HighScorePage),
  ],
  exports: [
    HighScorePage
  ]
})
export class HighScorePageModule {}
