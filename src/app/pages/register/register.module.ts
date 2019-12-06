import { NgModule } from "@angular/core";
import { RegisterComponent } from './register.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbActionsModule, NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports:[
        ThemeModule,
        NbCardModule,
        NbActionsModule,
        NbButtonModule,
        NbIconModule,
        NbInputModule, 
        FormsModule,
        ReactiveFormsModule, 
    ],
    declarations:[RegisterComponent],
})

export class RegisterModule {}