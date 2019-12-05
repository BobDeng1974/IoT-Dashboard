import { NgModule } from "@angular/core";
import { RegisterComponent } from './register.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
    imports:[
        ThemeModule,
        NbCardModule,    
    ],
    declarations:[RegisterComponent],
})

export class RegisterModule {}