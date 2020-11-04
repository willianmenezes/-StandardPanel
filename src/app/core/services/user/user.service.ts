import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators'
import { from } from 'rxjs';

const KEY = 'TOKEN';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(
        private angularFireAuth: AngularFireAuth
    ) { }

    isLoggedFirebase() {
        return this.angularFireAuth.authState
            .pipe(map((response) => {
                return response ? true : false
            }))
    }

    isLoggedLocal() {
        return !!localStorage.getItem(KEY);
    }

    getToken() {
        return localStorage.getItem(KEY);
    }

    logout() {
        localStorage.removeItem(KEY);
        return from(this.angularFireAuth.signOut());
    }

    setUserToken(token: string) {
        localStorage.setItem(KEY, token);
    }

    esqueciSenha(email: string) {
        return from(this.angularFireAuth.sendPasswordResetEmail(email));
    }
}