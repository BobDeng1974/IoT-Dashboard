import { NgModule } from "@angular/core";
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { EchartsLineComponent } from './oeecharts/echarts-line.component';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const component = [
    EchartsLineComponent,
];

@NgModule({
    imports: [
        NgxEchartsModule,
        ThemeModule,
        NbCardModule,
        ChartModule,
        ChartsRoutingModule,
        NgxChartsModule,
        

    ],
    declarations:[... routedComponents, ... component],
})

export class ChartsModule {}