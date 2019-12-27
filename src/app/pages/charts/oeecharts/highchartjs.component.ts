import { Component, OnInit } from "@angular/core";
import * as Highcharts from 'highcharts';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Subscription, Observable } from 'rxjs';
import { chart, Options } from 'highcharts';
import { map } from 'rxjs/internal/operators/map';


@Component({
 selector: 'ngx-highchart',
 template: `<highcharts-chart 
 [Highcharts]="Highcharts"
 [options]="chartOptions"
 
 style="width: 100%; height: 400px; display: block;"
></highcharts-chart>`
})

export class HighChartComponent implements OnInit {
    chartOptions : {}
    private subs: Subscription;
    public message : number;
    temp: number;

    Highcharts = Highcharts;

    constructor(private _mqttService:MqttService){
        this.testData().subscribe((data)=>console.log(data))      
    }

     //    this.subs = this._mqttService.observe('temperatuer'). subscribe((message: IMqttMessage) => {
        //        this.message = Number(message.payload.toString());
        //    })

//    testData() {

//         return new Promise((resolve)=> {
//                this.subs = this._mqttService.observe('temperature'). subscribe((message: IMqttMessage) => {
//                this.message = Number(message.payload.toString());
//                resolve(this.message);
//            })

//         })
//    }
    testData(): Observable<string> {
        return this._mqttService.observe('temperature').pipe(
            map((message: IMqttMessage) => { 
                return message.payload.toString() 
            })
        )
    }


     // async function addData(){
        //     this.subs = this._mqttService.observe('temperature').subscribe((message: IMqttMessage) => {
        //         this.message = Number(message.payload.toString());
                
        //         console.log(this.message);
        //         //this.Highcharts.ref.series[0](this.message, true);
                
        //      })
        // }

   
    ngOnInit(){
        
        
        
        // function testData(){
        //     return 1;
        // }
        
        this.chartOptions = {
            chart: {
                type: 'spline',
                renderTo: 'container',
                //animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        
                        // set up the updating of the chart each second
                        var series = this.series[0];

                       
                       
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                // y = testData();
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);   
                    }
                }
            },
        
            time: {
                useUTC: false
            },
        
            title: {
                text: 'Live Data'
            },
        
            
        
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
        
            yAxis: {
                title: {
                    text: 'Value'
                },
               
            },
        
            tooltip: {
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
            },
        
            legend: {
                enabled: false
            },
        
            exporting: {
                enabled: false
            },
        
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
        
                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: null
                            // y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
            
        }
       
        
    }
   
    
}
