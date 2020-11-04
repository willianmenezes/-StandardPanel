import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { from } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private angularFireAuth: AngularFireAuth,
        private http: HttpClient
    ) { }


    login(email: string, password: string) {

        return from(this.angularFireAuth.signInWithEmailAndPassword(email, password))
    }
}