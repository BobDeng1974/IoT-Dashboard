import { Component } from '@angular/core';
import { CloudService } from '../../../@core/utils/cloud.service';
import { Cloud } from '../../../@core/data/cloudmodel';

@Component({
    selector: 'ngx-cloud',
    templateUrl: './cloud.component.html',
    styleUrls:['./cloud.component.scss']
})
export class CloudComponent {
 //    cloud: Cloud[];
    cloud: Cloud = {
        URL: '',
        username: '',
        port: 0,
        password: '',
    }


    constructor(private cloudService: CloudService){
      
    }

    // ngOnInit(){
    //     this.cloudService.getItems(). subscribe(items => {
    //         console.log(items);
    //         this.cloud = items;
    //     });
    // } get data

    onSubmit(){
        this.cloudService.addServer(this.cloud);
    }

  
    

   

}