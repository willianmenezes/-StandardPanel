import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { PanelRoutingModule } from './panel.routing.module'
import { PanelComponent } from './panel.component'

@NgModule({
    declarations: [PanelComponent],
    imports: [CommonModule, FontAwesomeModule, PanelRoutingModule],
    exports: [],
    providers: [],
})
export class PanelModule { }