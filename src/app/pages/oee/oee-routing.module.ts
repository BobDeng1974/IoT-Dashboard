import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { OeeComponent } from './oee.component';
import { EchartsComponent } from './chart/chart.component';

const routes: Routes = [{
    path:'',
    component:OeeComponent,
    children:[{
        path: 'line-chart',
        component:EchartsComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChartsRoutingModule {}

export const routedComponents = [
    EchartsComponent,
];