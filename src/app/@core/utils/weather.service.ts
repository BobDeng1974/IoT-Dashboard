import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class WeatherService {


    apiKey = 'c48785e650f66855ffe18fe69eadf2df';
    
    url;
    constructor(private http:HttpClient){
        this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
        
    }

    getWeather(city, location){
        return this.http.get(this.url+city+','+location+'&APPID='+this.apiKey + '&units=metric')
    }

   


}