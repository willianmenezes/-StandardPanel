import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './core/guards/auth.guard'
import { NotFoundComponent } from './shared/not-found/not-found.component'
import { NotAuthorizeComponent } from './shared/not-authorize/not-authorize.component'

const routes: Routes = [
    {
        path: 'panel',
        loadChildren: () => import('./core/components/panel/panel.module').then(x => x.PanelModule),
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/auth/auth.module').then(x => x.AuthModule),
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'not-authorize',
        component: NotAuthorizeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }