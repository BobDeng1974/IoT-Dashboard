import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { WeatherService } from '../../../@core/utils/weather.service';


@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  public subs: Subscription;
  public message: string;
  temperature:number;
  
  weatherData: any;
  temp_max: any[];
  test: number [] = [1,2,3,4];
  
  


  constructor(private theme: NbThemeService, private _mqttService: MqttService, private _weatherService: WeatherService) {
    
  
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this._weatherService.getWeather('Bayan Baru', 'MY').subscribe(data => {
        
        // this.weatherData = data;
        // let temp_max = [10,21,3]
        // this.temp_max=[this.weatherData.list[0].main.temp_max,this.weatherData.list[1].main.temp_max];
        // console.log(this.temp_max);
        
        //   console.log(this.test);
        
  
        
        // this.temp_max = data['list'].map( data => data.main.temp_max )
        // console.log(this.temp_max);
      })

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['Line 1', 'Line 2', 'Line 3'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'log',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: [
          {
            name: 'Line 1',
            type: 'line',
            // data: this.temp_max,
            data: [12,34.3,55,67,421],
          },
          {
            name: 'Line 2',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 222, 3333, 444],
          },
          {
            name: 'Line 3',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
