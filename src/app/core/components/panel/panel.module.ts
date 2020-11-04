import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ReactiveFormsModule } from '@angular/forms'

import { PanelRoutingModule } from './panel.routing.module'
import { SharedModule } from '../../../shared/shared.module'

import { PanelComponent } from './panel.component'
import { TreinamentoComponent } from '../../../modules/treinamento/pages/treinamento.component'

@NgModule({
    declarations: [
        PanelComponent,
        TreinamentoComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        PanelRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class PanelModule { }