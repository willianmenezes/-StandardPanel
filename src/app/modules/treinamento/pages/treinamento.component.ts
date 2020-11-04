import { Component, OnInit } from '@angular/core'
import { NgxSpinnerService } from "ngx-spinner"
import { faPlus, faBell } from '@fortawesome/free-solid-svg-icons';

import { AcaoModal } from '../../../core/models/acao-modal'
import { Treinamento } from '../../../core/models/treinamento'
import { TableData } from '../../../core/models/table-data'
import { TableLabel } from '../../../core/models/table-label'
import { AlertFyService } from '../../../shared/services/alertfy/alertfy.service'
import { UserService } from 'src/app/core/services/user/user.service';

declare const $: any;

@Component({
    selector: 'app-customers',
    templateUrl: 'treinamento.component.html',
    styleUrls: ['./treinamento.component.scss']
})

export class TreinamentoComponent implements OnInit {

    tableValues: TableData<Treinamento> = { data: [], count: 0 };

    modalTitle: string;
    modalAction: AcaoModal;

    buttonActionName = 'Botão modal'

    icons = {
        faPlus, faBell
    }

    label: TableLabel[] = [
        {
            name: 'Título',
            value: 'titulo',
            isBoolean: false
        },
        {
            name: 'Carga horária',
            value: 'cargaHoraria',
            isBoolean: false
        },
        {
            name: 'Status',
            value: 'status',
            isBoolean: true
        }
    ];

    constructor(
        private spinner: NgxSpinnerService,
        private alertfy: AlertFyService,
        private userService: UserService
    ) { }

    ngOnInit() {
        // this.userService.verificarUsuarioCadastrado()
        //     .subscribe((response) => {
        //         console.log(response);
        //     });
    }
}