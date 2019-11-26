import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
 NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingComponent } from './setting.component';
import { CloudComponent } from './cloud/cloud.component';
import { SettingRoutingModule } from './setting-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      
      ThemeModule,
      NbCardModule,
      NbUserModule,
      NbButtonModule,
      NbActionsModule,
      SettingRoutingModule,
      NbRadioModule,
      NbSelectModule,
      NbCheckboxModule,
      NbIconModule,
      NbButtonModule,
      NbInputModule,
      FormsModule,
     
    ],
    declarations: [
     SettingComponent,
     CloudComponent,
     
    ],
  })
  export class SettingModule { }
  
