import { Component, OnInit } from '@angular/core';
import { Options } from 'highcharts';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'ngx-testchart',
  template:`<div>it works</div>`
})
export class TestChartjs implements OnInit  {

    constructor(){

    }

    chart:Chart;
    options: Options;

    ngOnInit(){

    }

    addPoint(){
      if(this.chart){
        this.chart.addPoint(Math.floor(Math.random()* 10));

      } else{
        alert('init chart, first!');
      }
    }

    init(){
     



    }
   

}