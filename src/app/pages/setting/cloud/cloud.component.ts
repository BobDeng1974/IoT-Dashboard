import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../../@core/utils/cloud.service';
import { Cloud } from '../../../@core/data/cloudmodel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMqttServiceOptions, MqttService } from 'ngx-mqtt';



@Component({
    selector: 'ngx-cloud',
    templateUrl: './cloud.component.html',
    styleUrls:['./cloud.component.scss']
})
export class CloudComponent implements OnInit{

    private _mqttClient : any;

   cloud: Cloud = {
       URL: '',
       username: '',
       port: 0,
       password: '',
   }

   errors:string[];

    form: FormGroup;
    constructor(private cloudService: CloudService, private formBuilder: FormBuilder, private _mqttService: MqttService){
        
    }

    ngOnInit(){
        
    }


    
   
    

    // ngOnInit(){
    //     this.cloudService.getItems(). subscribe(items => {
    //         console.log(items);
    //         this.cloud = items;
    //     });
    // } get data

    onSubmit(formValues){
        this.cloudService.addServer(formValues);
        console.log(formValues);
        
    }

    onConnect(){
        this._mqttClient= this._mqttService.connect(this.cloud);
        this.cloudService.addServer(this.cloud);
        
        
    }

    

   

}