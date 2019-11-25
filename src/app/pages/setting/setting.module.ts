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

@NgModule({
    imports: [
      
      ThemeModule,
      NbCardModule,
      NbUserModule,
      NbButtonModule,
      NbActionsModule,
      NbRadioModule,
      NbSelectModule,
      NbCheckboxModule,
      NbIconModule,
      NbButtonModule,
      NbInputModule,
     
    ],
    declarations: [
     SettingComponent,
     
    ],
  })
  export class SettingModule { }
  
