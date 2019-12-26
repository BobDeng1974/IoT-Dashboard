import { Component, OnInit } from '@angular/core';
import { Options, chart } from 'highcharts';
import * as Highcharts from 'highcharts';



@Component({
  selector: 'ngx-testchart',
  template:`<div>it works</div>`
})
export class TestChartjs implements OnInit {

    chart: Chart;
    options: Options;

  constructor() { }

  ngOnInit() { 
    this.options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
     
    };

  }

}