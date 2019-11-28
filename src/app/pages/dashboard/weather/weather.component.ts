import { Component } from "@angular/core";
import { WeatherService } from '../../../@core/utils/weather.service';

@Component({
    selector: 'ngx-weather',
    styleUrls: ['./weather.component.scss'],
    templateUrl: './weather.component.html',
})

export class WeatherComponent{
    location={
        city:'Bayan Baru',
        code:'Penang',
    };

    
    mydate = new Date();
    public weatherData: any;
    
    constructor(private weatherservice: WeatherService){
        
    }

   
    ngOnInit(){
        this.weatherservice.getWeather(this.location.city,this.location.code).subscribe((data)=>{
        this.weatherData = data;
        console.log(this.weatherData);
        })
    }

    
    

   
}