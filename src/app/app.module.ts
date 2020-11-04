import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxSpinnerModule } from "ngx-spinner"
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'
import { AuthModule } from './modules/auth/auth.module'
import { environment } from 'src/environments/environment'
import { NotFoundComponent } from './shared/not-found/not-found.component'
import { RequestInterceptor } from './core/interceptors/request.interceptor'
import { PanelModule } from './core/components/panel/panel.module'
import { NotAuthorizeComponent } from './shared/not-authorize/not-authorize.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotAuthorizeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    PanelModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
