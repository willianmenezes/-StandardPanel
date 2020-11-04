import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './pages/login/login.component'
import { LoginGuard } from '../../core/guards/login.guard'

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [LoginGuard]
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AuthRoutingModule { }