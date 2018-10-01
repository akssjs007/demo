import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RocketsPage } from '../pages/rockets/rockets';


import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './httpservice.service';
import { InfoPage } from '../pages/info/info';

@NgModule({
  declarations: [
    MyApp,
    RocketsPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RocketsPage,
    InfoPage
  ],
  providers: [
    HTTPService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
