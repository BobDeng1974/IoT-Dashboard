import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { OEEChartsComponents } from './oeecharts/oeecharts.component';

const routes: Routes = [{
    path:'',
    component: ChartsComponent,
    children: [
        {
            path:'oeecharts',
            component: OEEChartsComponents,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ChartsRoutingModule {}

export const routedComponents = [
    ChartsComponent,
    OEEChartsComponents
]