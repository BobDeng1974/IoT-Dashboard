import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { NbActionsModule, NbCardModule, NbUserModule, NbButtonModule, NbTabsetModule, NbRadioModule, NbSelectModule, NbCheckboxModule, NbListModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    imports:[
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbCheckboxModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbInputModule,
    ],
    declarations:[LoginComponent],
})

export class LoginModule{

}