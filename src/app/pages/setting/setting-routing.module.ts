import { NgModule } from "@angular/core";
import{ RouterModule, Routes } from '@angular/router';

import { SettingComponent } from './setting.component';
import { CloudComponent } from './cloud/cloud.component';


const routes: Routes =[
    {
        path:'',
        component: SettingComponent,
        children:[
            {
                path: 'cloud',
                component: CloudComponent,
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule,
    ]
})

export class SettingRoutingModule {

}