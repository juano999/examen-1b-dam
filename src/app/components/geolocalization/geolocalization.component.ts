import { Component, OnInit, NgZone  } from '@angular/core';
import  { CallbackID, Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/core';

@Component({
  selector: 'app-geolocalization',
  templateUrl: './geolocalization.component.html',
  styleUrls: ['./geolocalization.component.scss'],
})
export class GeolocalizationComponent implements OnInit {

  coordinate: any;
  watchCoordinate: any;
  watchId: any;

  constructor(private zone: NgZone) { }

  async requestPermissions() {
    const permResult = await Geolocation.requestPermissions();
    console.log('Perm request result: ', permResult);
  }

  getCurrentCoordinate() {
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      console.log('Plugin geolocation not available');
      return;
    }
    Geolocation.getCurrentPosition().then(data => {
      this.coordinate = {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
        accuracy: data.coords.accuracy
      };
    }).catch(err => {
      console.error(err);
    });
  }
  
  ngOnInit() {}

}
