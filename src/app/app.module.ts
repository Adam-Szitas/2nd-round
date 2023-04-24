import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseService } from './services/base.service';
import { AuthService } from './services/auth-service/auth.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { WebModule } from './pages/web/web.module';
import { StoreModule, StoreRootModule } from '@ngrx/store'
import { PushModule } from '@ngrx/component';

export enum Languages {
  EN = 'EN',
  // RO = 'RO',
  // CH = 'CH'
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WebModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreRootModule,
    PushModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    }),
    TranslateModule.forRoot({
      defaultLanguage: Languages.EN
    })
  ],
  providers: [
    BaseService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    TranslateModule,
  ]
})
export class AppModule {
  constructor(private translateService: TranslateService){
    this.translateService.addLangs([Languages.EN]);
    this.translateService.setDefaultLang(Languages.EN);
  }
}
