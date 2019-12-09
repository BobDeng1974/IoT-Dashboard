import { Injectable } from "@angular/core";
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { 
    AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection
       }
 from '@angular/fire/firestore';
import { Register } from '../data/registermodel'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterComponent } from '../../pages/register/register.component';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class Authentication {
    registerCollection: AngularFirestoreCollection<Register>;
    register: Observable<Register[]>;
    newUser: any;

    constructor(public afs: AngularFirestore, private afAuth: AngularFireAuth, private router:Router)
    {
        this.registerCollection = this.afs.collection('register');
        
        this.register = this.afs.collection('cloud').snapshotChanges().pipe(map(changes =>{
            return changes.map(a => {
                const data = a.payload.doc.data() as Register
                data.id = a.payload.doc.id;
                return data;
            })
        }))

       
    }

    addRegister(register: Register)
    {
        this.registerCollection.add(register);
        // this.afAuth.auth.createUserWithEmailAndPassword(register.email, register.password)
        // .then( userCredential =>{
        //     this.newUser = register;
        //     console.log(userCredential);
        //     userCredential.user.updateProfile({
        //       displayName: register.name, 
        //     });



        // })
    }

    insertUserData(userCredential: firebase.auth.UserCredential)
    {

    }
}