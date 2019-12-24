import { Component, OnInit } from "@angular/core";
import * as Highcharts from 'highcharts';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

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

    Highcharts: typeof Highcharts = Highcharts;

    constructor(private _mqttService:MqttService){
       
    }
    

 

    ngOnInit(){
         this.subs = this._mqttService.observe('temperature').subscribe((message: IMqttMessage) => {
            this.message = Number(message.payload.toString());
           //this.Highcharts.ref.series[0](this.message, true);
           
        })
        this.chartOptions = {
            chart: {
                type: 'spline',
                //animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
        
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
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
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
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
                            y: Math.random()
                           // y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
            
        }
    }
   
    
}
