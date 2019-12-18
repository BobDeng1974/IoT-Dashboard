import { Component } from "@angular/core";
import { WeatherService } from "../../../@core/utils/weather.service";
import { Chart } from 'chart.js';


@Component({
    selector: 'ngx-testchart',
    template: `<div *ngIf="chart">
    <canvas id="canvas">{{ chart }}</canvas>
  </div>`

})

export class TestChartjs {


    chart: any;
    constructor(private weatherService: WeatherService)
    {
        
    }

    ngOnInit() {
        this.weatherService.getWeather('Bayan Baru', 'MY')
        .subscribe( data => {
            console.log(data);

            let temp_max = data['list'].map(data => data.main.temp_max)
            let temp_min = data['list'].map(data => data.main.temp_min);
            let alldates = data ['list'].map(data => data.dt);
            console.log(temp_min);
            let weatherDates = []
            alldates.forEach((data) => {
                let jsdate = new Date(data * 1000)
                weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
               
            })
            this.chart = new Chart('canvas', {
                type: 'line',
                data: {
                  labels: weatherDates,
                  datasets: [
                    { 
                      data: temp_max,
                      borderColor: "#3cba9f",
                      fill: false
                    },
                    { 
                      data: temp_min,
                      borderColor: "#ffcc00",
                      fill: false
                    },
                  ]
                },
                options: {
                  legend: {
                    display: false
                  },
                  scales: {
                    xAxes: [{
                      display: true
                    }],
                    yAxes: [{
                      display: true
                    }],
                  }
                }
              });
            

           
        })
    }
}