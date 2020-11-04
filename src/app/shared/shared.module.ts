import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { TablePaginatedComponent } from './table-paginated/table-paginated.component'
import { CardComponent } from './cards/card/card.component'
import { CardTitleComponent } from './cards/card-title/card-title.component'

@NgModule({
    imports: [
        CommonModule,
        NgxPaginationModule,
        FontAwesomeModule
    ],
    exports: [
        TablePaginatedComponent,
        CardComponent,
        CardTitleComponent
    ],
    declarations: [
        TablePaginatedComponent,
        CardComponent,
        CardTitleComponent
    ],
    providers: [],
})
export class SharedModule { }
