import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';




@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    FormsModule,
    RegisterModule,
    LoginModule,
    
    
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
