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
import { InterventionsComponent } from './interventions/interventions.component';
import { InterventionComponent } from './intervention/intervention.component';
import { EditInterventionComponent } from './edit-intervention/edit-intervention.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { GlobalModule } from './global/global.module';
import { LayoutComponent } from './layout/layout.component'


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, CreateInterventionComponent, InterventionsComponent, InterventionComponent, EditInterventionComponent, LayoutComponent],
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
    }),
    GlobalModule,
    BrowserAnimationsModule
  ],
  providers: [AngularTokenModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
