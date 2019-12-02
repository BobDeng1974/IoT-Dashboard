import { NgModule } from "@angular/core";
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { EchartsLineComponent } from './oeecharts/echarts-line.component';

const component = [
    EchartsLineComponent,
];

@NgModule({
    imports: [
        NgxEchartsModule,
        ThemeModule,
        NbCardModule,
        ChartsModule,
        ChartsRoutingModule,

    ],
    declarations:[... routedComponents, ... component],
})

export class ChartsModule {}