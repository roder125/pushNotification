import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { FCM } from '@ionic-native/fcm';


declare var FCMPlugin: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private platform: Platform, private alertCtrl: AlertController, private fcm: FCM) {
    this.onNotification();
  }

async onNotification(){
  try {
    await this.platform.ready();
    
    FCMPlugin.getToken(
      (t) => {
        console.log(t);
      },
      (e) => {
        console.log(e);
      }
    );
    
    FCMPlugin.onNotification(
      (data) => {
        console.log(data);
      },
      (e) => {
        console.log(e);
      }
    );

    /*
    FCMPlugin.onNotification((data) => {
      this.alertCtrl.create({
        message: data.message
      }).present();
    })
    .error((error)=>{
      console.log(error);
    })*/

  } catch (error) {
    
  }
}
}
