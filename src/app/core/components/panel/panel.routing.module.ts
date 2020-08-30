import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { PanelComponent } from './panel.component'

const routes: Routes = [
    {
        path: '',
        component: PanelComponent
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class PanelRoutingModule { }