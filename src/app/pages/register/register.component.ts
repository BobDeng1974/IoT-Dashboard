import { Component } from "@angular/core";
import { Register } from '../../@core/data/registermodel';


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


    
}