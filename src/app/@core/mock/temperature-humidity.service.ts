import { Injectable } from '@angular/core';
import { of as observableOf,  Observable, Subscription } from 'rxjs';
import { TemperatureHumidityData, Temperature } from '../data/temperature-humidity';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { parse } from 'path';

@Injectable()
export class TemperatureHumidityService extends TemperatureHumidityData {


  private temperatureDate: Temperature = {
    value: 24,  
    min: 12,
    max: 100,
  };



  private humidityDate: Temperature = {
    value: 20,
    min: 0,
    max: 100,
  };

  getTemperatureData(): Observable<Temperature> {
    return observableOf(this.temperatureDate);
  }

  getHumidityData(): Observable<Temperature> {
    return observableOf(this.humidityDate);
  }
}
