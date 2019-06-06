import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { CreateInterventionComponent } from './create-intervention/create-intervention.component'
import { EditInterventionComponent } from './edit-intervention/edit-intervention.component'
import { InterventionsComponent } from './interventions/interventions.component'
import { InterventionComponent } from './intervention/intervention.component'
import { AngularTokenService }  from 'angular-token'
import { LayoutComponent } from './layout/layout.component'
import { HomeComponent } from './home/home.component'
import { RegisterUserInfosComponent } from './register-user-infos/register-user-infos.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'register-user-infos',
        component: RegisterUserInfosComponent,
        canActivate: [AngularTokenService]
      },
      {
        path: 'interventions/create',
        component: CreateInterventionComponent,
        canActivate: [AngularTokenService]
      },
      {
        path: 'interventions/edit/:id',
        component: EditInterventionComponent,
        canActivate: [AngularTokenService]
      },
      {
        path: 'interventions',
        component: InterventionsComponent,
        canActivate: [AngularTokenService]
      },
      {
        path: 'interventions/:id',
        component: InterventionComponent,
        canActivate: [AngularTokenService]
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
