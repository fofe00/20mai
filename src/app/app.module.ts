import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from "../pages/tabs/tabs";
import {ListPage} from "../pages/list/list";
import {ServedPage} from "../pages/served/served";
import {NotServedPage} from "../pages/not-served/not-served";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListPage,
    ServedPage,
    NotServedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
    mode:'md',
    tabsPlacement: 'bottom',
    pageTransition: 'ios-transition',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ListPage,
    ServedPage,
    NotServedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
