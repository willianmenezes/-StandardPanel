import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { UserService } from '../services/user/user.service'
import { AlertFyService } from '../../shared/services/alertfy/alertfy.service'
import { AlertfyEnum } from '../../core/models/alertfy.enum';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(
        private userService: UserService,
        private router: Router,
        private http: HttpClient,
        private alertService: AlertFyService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.userService.isLoggedLocal()) {

            const token = this.userService.getToken();

            //clonando a requisição e setando o header com o token
            if (token) {
                req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            }

            if (!req.headers.has('Content-Type')) {
                req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
            }

            req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        }

        //verificando erros do retorno para fazer ou não uma nova requisição
        return next.handle(req).pipe(catchError((error) => {

            if (error.status == 401 && error.statusText == "OK") {
                this.userService.logout();
                this.router.navigate(['']);
                this.alertService.message("Sessão expidara. Realize o login novamente.", AlertfyEnum.Warning);
                throw error;

            } else if (error.status == 0 && error.statusText == "Unknown Error") {
                this.alertService.message("Servidor indisponível.", AlertfyEnum.Error);
                this.userService.logout();
                this.router.navigate(['']);
                throw error;

            } else {
                throw error;
            }
        }));
    }
}