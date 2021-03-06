import { NgModule } from "@angular/core";
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { EchartsLineComponent } from './oeecharts/echarts-line.component';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartjsLineComponent } from './oeecharts/chartjs.component';
import {  EchartsBarComponent } from './oeecharts/echarts-bar.component';
import { TestChartjs } from './oeecharts/testchartjs.component';
import { HighChartComponent } from './oeecharts/highchartjs.component';
import { HighchartsChartModule } from 'highcharts-angular';

const component = [
    EchartsLineComponent,
    ChartjsLineComponent,
    EchartsBarComponent,
    TestChartjs,
    HighChartComponent,
    
    
    
];

@NgModule({
    imports: [
        NgxEchartsModule,
        ThemeModule,
        NbCardModule,
        ChartModule,
        ChartsRoutingModule,
        NgxChartsModule,
        HighchartsChartModule,

        

    ],
    declarations:[... routedComponents, ... component],
})

export class ChartsModule {}