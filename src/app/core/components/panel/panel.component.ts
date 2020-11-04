import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {
    faSignOutAlt,
    faUser,
    faStore,
    faPlusSquare
} from '@fortawesome/free-solid-svg-icons';

import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { AlertFyService } from 'src/app/shared/services/alertfy/alertfy.service';
import { AlertfyEnum } from '../../models/alertfy.enum';
import { TableData } from '../../models/table-data';
import { count } from 'rxjs/operators';

// CONSTANTS
declare const $: any;

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

    icons = {
        faSignOutAlt,
        faUser,
        faStore,
        faPlusSquare
    }

    label = [
        {
            name: 'Nome',
            value: 'name'
        },
        {
            name: 'Idade',
            value: 'age'
        },
        {
            name: 'Pais',
            value: 'country'
        }
    ]

    values: TableData<any> = {
        data: [
            {
                name: 'willian',
                age: 17,
                country: 'brasil'
            },
            {
                name: 'willian 2',
                age: 35,
                country: 'mexico'
            },
            {
                name: 'willian 3',
                age: 37,
                country: 'argentina'
            }
        ],
        count: 3
    }

    constructor(
        private userService: UserService,
        private spinner: NgxSpinnerService,
        private router: Router,
        private alertfy: AlertFyService
    ) { }

    ngOnInit(): void {
        this.createMenu();
    }

    title = 'basePanel';

    logout() {

        this.spinner.show();

        this.userService
            .logout()
            .subscribe(() => {
                this.spinner.hide();
                this.router.navigate(['/login']);
            }, error => {
                this.spinner.hide();
                this.alertfy.message('Erro ao sair da aplicação', AlertfyEnum.Error);
                console.log(error);
            });
    }

    createMenu() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    }

    clickMenu() {
        $('#sidebar').toggleClass('active');
    }

    editarDados(item) {
        console.log(item)
    }

    removerDados(item) {
        console.log(item)
    }

    visualizarDados(item) {
        console.log(item)
    }
}
