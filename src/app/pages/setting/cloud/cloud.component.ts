import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'ngx-cloud',
    templateUrl: './cloud.component.html',
    styleUrls:['./cloud.component.scss']
})
export class CloudComponent {
   URL : string = '';
   username: string = '';
   port : number = 0;
   password : any = ''

    constructor(private firestore: AngularFirestore){}

  
    // serversetting(URL){
    //     this.firestore.
    // }
    

   

}