import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthService {

    constructor(
        private angularFireAuth: AngularFireAuth,
    ) { }

    registrar(email: string, password: string) {
        
        return from(this.angularFireAuth.createUserWithEmailAndPassword(email, password));
    }
}