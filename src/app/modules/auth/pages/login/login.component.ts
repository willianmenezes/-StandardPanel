import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

import { LoginService } from '../../services/login/login.service'
import { AlertFyService } from '../../../../shared/services/alertfy/alertfy.service'
import { AlertfyEnum } from 'src/app/core/models/alertfy.enum';
import { UserService } from 'src/app/core/services/user/user.service';
import { FirebaseResponseEnum } from 'src/app/core/models/firebase-response.enum';
import { ErrorMessage } from 'src/app/shared/error-message/error-message';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;
    formEsqueciSenha: FormGroup;
    esqueciSenha = false;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private loginService: LoginService,
        private alert: AlertFyService,
        private spinner: NgxSpinnerService,
        private userService: UserService) { }

    ngOnInit(): void {
        this.formLogin = this.fb.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(20)
                ]
            ]
        });

        this.formEsqueciSenha = this.fb.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ]
        })
    }

    login() {

        // esqueci senha
        if (this.esqueciSenha) {

            let email = this.formEsqueciSenha.get('email').value;
            this.spinner.show();
            this.userService
                .esqueciSenha(email)
                .subscribe((response) => {
                    this.spinner.hide();
                    this.alert.message('Sua nova senha foi enviada para seu e-mail', AlertfyEnum.Success)
                }, (error) => {

                    if (error.code === FirebaseResponseEnum.AuthInvalidEmail) {

                        this.alert.message('Email inválido', AlertfyEnum.Warning);
                    } else {

                        this.alert.message('Erro ao tentar enviar redefinição de senha', AlertfyEnum.Error);
                    }

                    this.spinner.hide();
                    console.log(error);
                })

            // login
        } else {

            let email = this.formLogin.get('email').value;
            let password = this.formLogin.get('password').value;

            this.spinner.show();
            this.loginService
                .login(email, password)
                .subscribe((response) => {

                    this.getToken(response);
                }, (error) => {

                    this.spinner.hide();
                    this.alert.message('Erro ao tentar autenticar na aplicação', AlertfyEnum.Error);
                    console.log(error);
                })
        }
    }

    getToken(credential: firebase.auth.UserCredential) {
        credential.user
            .getIdToken()
            .then((response) => {
                this.userService.setUserToken(response);
                this.router.navigate(['/panel']);

            })
            .catch((error) => {
                this.spinner.hide();
                this.alert.message('Erro ao tentar autenticar na aplicação', AlertfyEnum.Error);
                console.log(error)
            })
    }

    setEsqueciSenha() {
        this.esqueciSenha = !this.esqueciSenha;
    }
}
