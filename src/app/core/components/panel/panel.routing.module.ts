import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PanelComponent } from './panel.component'
import { AuthGuard } from '../../guards/auth.guard'
import { TreinamentoComponent } from '../../../modules/treinamento/pages/treinamento.component'

const routes: Routes = [
    {
        path: '',
        component: PanelComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'treinamentos'
            },
            {
                path: 'treinamentos',
                component: TreinamentoComponent
            }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class PanelRoutingModule { }