import { Component } from "@angular/core";
import { Register } from '../../@core/data/registermodel';
import { Authentication } from '../../@core/utils/auth.service';
import { fromValue } from 'long';


@Component({
    selector:'ngx-register',
    templateUrl:'./register.component.html',
    styleUrls: ['./register.component.scss']
})


export class RegisterComponent{

    submitted=false;
    
    register:Register ={
        name: '',
        email: '',
        password: '',
        confirmpassword:'',
    }
    constructor(private registerService: Authentication)
    {

    }
   

    onRegister(){
        this.registerService.addRegister(this.register);
    }

    
}