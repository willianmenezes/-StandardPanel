import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./modules/auth/auth.module').then(x => x.AuthModule)
    },
    {
        path: 'panel',
        loadChildren: () => import('./core/components/panel/panel.module').then(x => x.PanelModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }