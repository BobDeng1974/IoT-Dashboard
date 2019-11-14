import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Subscription } from 'rxjs';


import {
  IMqttMessage,
  MqttService
} from 'ngx-mqtt';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {

  private alive = true;

  temperatureData: Temperature;
  temperature: number;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidityData: Temperature;
  humidity: number;
  humidityOff = false;
  humidityMode = 'heat';

  theme: any;
  themeSubscription: any;

  private subs : Subscription;
  public message: string;
  public humiditymessage : string;

  constructor(private themeService: NbThemeService,
              private temperatureHumidityService: TemperatureHumidityData, 
              private _mqttService: MqttService) {

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
      this.theme = config.variables.temperature;
    });
    
   

    forkJoin(
      this.temperatureHumidityService.getTemperatureData(),
      this.temperatureHumidityService.getHumidityData(),
    )
      .subscribe(([temperatureData, humidityData]: [Temperature, Temperature]) => {
        this.subs = this._mqttService.observe('temperature').subscribe((message: IMqttMessage) => {
          this.message = message.payload.toString();
          console.log('Temperature :' + this.message);

        this.temperatureData = temperatureData;
        this.temperature = Number(this.message);

     
      });
      this.subs = this._mqttService.observe('humidity').subscribe((message: IMqttMessage) => {
        this.humiditymessage = message.payload.toString();
        console.log('Humidity :' + this.humiditymessage);

      this.humidityData = humidityData;
      this.humidity = Number(this.humiditymessage);
      });
      });


  }

  

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}