import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { tap } from 'rxjs/operators'

import { UserService } from '../services/user/user.service'

@Injectable({ providedIn: 'root' })
export class LoginGuard {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userService.isLoggedLocal()) {

            this.router.navigate(['panel']);
            return false;
        }
        
        return true;
    }
}