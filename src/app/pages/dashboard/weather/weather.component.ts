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
        code:'MY',
    };

    
    mydate = new Date();
    public weatherData: any;
    
    constructor(private weatherservice: WeatherService){
        this.weatherservice.getWeather(this.location.city, this.location.code).subscribe((data) => {
            
            
        })
    }

   
    ngOnInit(){
        this.weatherservice.getWeather(this.location.city,this.location.code).subscribe((data)=>{
        this.weatherData = data;
        // console.log(this.weatherData.list[0].main.temp_max);

        // let temp_max = data['list'].map( data => data.main.temp_max)
        // console.log(temp_max);
        })
    }

    
    

   
}