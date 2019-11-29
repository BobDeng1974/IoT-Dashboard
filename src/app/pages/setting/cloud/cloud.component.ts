import { Component } from '@angular/core';
import { CloudService } from '../../../@core/utils/cloud.service';
import { Cloud } from '../../../@core/data/cloudmodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'ngx-cloud',
    templateUrl: './cloud.component.html',
    styleUrls:['./cloud.component.scss']
})
export class CloudComponent {
 //    cloud: Cloud[];
   

    form: FormGroup;
    constructor(private cloudService: CloudService, private formBuilder: FormBuilder){
      this.createForm();
    }

    createForm(){
        this.form = this.formBuilder.group({
            URL:['', Validators.required],
            username:['', Validators.required],
            port:['', Validators.required],
            password: ['', Validators.required],
        })
    }

    

    // ngOnInit(){
    //     this.cloudService.getItems(). subscribe(items => {
    //         console.log(items);
    //         this.cloud = items;
    //     });
    // } get data

    onSubmit(formValues){
        // this.cloudService.addServer(formValues);
        console.log(formValues);
        
    }

  
    

   

}