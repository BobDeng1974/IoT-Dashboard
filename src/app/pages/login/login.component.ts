import { Component, OnInit } from "@angular/core";
import { Register } from '../../@core/data/registermodel';
import { Authentication } from '../../@core/utils/auth.service';

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']

})



export class LoginComponent implements OnInit{

    details: Register ={
        email: '',
        password: '',
    }
    authError:any;

    constructor(private auth: Authentication){
        
    }

    ngOnInit(){
        this.auth.eventAuthError$.subscribe( data => {
            this.authError = data;
            console.log(data)
        })
    }

    logincomponent(){
        this.auth.login(this.details.email, this.details.password);
    }
}