import { Component } from "@angular/core";
import { WeatherService } from "../../../@core/utils/weather.service";
import { Chart } from 'chart.js';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';


@Component({
    selector: 'ngx-testchart',
    template: `<div *ngIf="chart">
    <canvas id="canvas">{{ chart }}</canvas>
  </div>`

})

export class TestChartjs {


    chart= {};
    private subs : Subscription;
    public message : string;
    //temperature: number;
    
    constructor(private weatherService: WeatherService, private _mqttService: MqttService )
    {
        
    }

    ngOnInit() {
      this.subs = this._mqttService.observe('temperature').subscribe((message : IMqttMessage)=>{
        this.message = message.payload.toString();
        console.log('Temperature :' + this.message)

        let temperature = []
        temperature.push(this.message);
        
        // console.log(temperature);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: ['1','2','3','4','5','6','7'],
            datasets: [
              { 
                data: temperature,
                borderColor: "#3cba9f",
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
        // this.weatherService.getWeather('Bayan Baru', 'MY')
        // .subscribe( data => {
            

        //     let temp_max = data['list'].map(data => data.main.temp_max)
        //     let temp_min = data['list'].map(data => data.main.temp_min);
        //     let alldates = data ['list'].map(data => data.dt);
           
        //     let weatherDates = []
        //     alldates.forEach((data) => {
        //         let jsdate = new Date(data * 1000)
        //         weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
               
        //     })

            
        //     this.chart = new Chart('canvas', {
        //         type: 'line',
        //         data: {
        //           labels: weatherDates,
        //           datasets: [
        //             { 
        //               data: temp_max,
        //               borderColor: "#3cba9f",
        //               fill: false
        //             },
        //             { 
        //               data: temp_min,
        //               borderColor: "#ffcc00",
        //               fill: false
        //             },
        //           ]
        //         },
        //         options: {
        //           legend: {
        //             display: false
        //           },
        //           scales: {
        //             xAxes: [{
        //               display: true
        //             }],
        //             yAxes: [{
        //               display: true
        //             }],
        //           }
        //         }
        //       });
            

           
        // })
    }
}