import { NgModule } from "@angular/core";
import { OeeComponent } from './oee.component';
import { NgxEchartsModule } from 'ngx-echarts'; 
import { EchartsLineComponent } from './chart/line-chart.component';

const components =[
    EchartsLineComponent,
];

@NgModule({
    imports: [
        NgxEchartsModule,
    ],
    declarations:[
        OeeComponent,
        ...components,
    ],
})


export class OeeModule{}