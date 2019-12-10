import { Component, OnInit } from "@angular/core";
import { Register } from '../../@core/data/registermodel';
import { Authentication } from '../../@core/utils/auth.service';



@Component({
    selector:'ngx-register',
    templateUrl:'./register.component.html',
    styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit{

    submitted=false;
    
    register:Register ={
        name: '',
        email: '',
        password: '',
        confirmpassword:'',
    }
    authError: any;
    constructor(private registerService : Authentication)
    {
        

    }
   
    ngOnInit(){
        this.registerService.eventAuthError$.subscribe( data =>{
            this.authError = data;
        })
    }
    onRegister()
    {
        
        this.registerService.addRegister(this.register);
        
    }

    
}