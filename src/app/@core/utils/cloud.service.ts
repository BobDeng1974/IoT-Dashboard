import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
 from '@angular/fire/firestore'
 import { Cloud } from '../data/cloudmodel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CloudService {

    cloudCollection: AngularFirestoreCollection<Cloud>;
    cloud: Observable<Cloud[]>

    constructor(public afs:AngularFirestore){
        // this.cloud = this.afs.collection('cloud').valueChanges();
        this.cloudCollection = this.afs.collection('cloud');

        this.cloud = this.afs.collection('cloud').snapshotChanges().pipe(map(changes =>{
         return changes.map(a =>{
             const data = a.payload.doc.data() as Cloud
             data.id = a.payload.doc.id;
             return data;
         })
     }))
     
    }

    getItems(){
        return this.cloud;
    }

    addServer(cloud: Cloud){
        this.cloudCollection.add(cloud);
    }
}
