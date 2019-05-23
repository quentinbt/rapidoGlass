import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { AngularTokenModule } from 'angular-token';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CreateInterventionComponent } from './create-intervention/create-intervention.component';
import { InterventionsComponent } from './interventions/interventions.component'


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, CreateInterventionComponent, InterventionsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularTokenModule.forRoot({
      apiBase:                    null,
      apiPath:                    null,

      signInPath:                 'auth/sign_in',
      signInRedirect:             '/login',
      signInStoredUrlStorageKey:  null,

      signOutPath:                'auth/sign_out',
      validateTokenPath:          'auth/validate_token',
      signOutFailedValidate:      false,

      registerAccountPath:        'auth',
      deleteAccountPath:          'auth',
      registerAccountCallback:    window.location.href,

      updatePasswordPath:         'auth',
      resetPasswordPath:          'auth/password',
      resetPasswordCallback:      window.location.href,
    })
  ],
  providers: [AngularTokenModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
