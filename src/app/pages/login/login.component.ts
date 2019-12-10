import { Component } from "@angular/core";
import { Register } from '../../@core/data/registermodel';

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']

})



export class LoginComponent{

    login: Register ={
        email: '',
        password: '',
    }

    constructor(){
        
    }
}