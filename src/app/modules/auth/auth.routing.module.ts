import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AuthRoutingModule { }