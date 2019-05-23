import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { CreateInterventionComponent } from './create-intervention/create-intervention.component'
import { EditInterventionComponent } from './edit-intervention/edit-intervention.component'
import { InterventionsComponent } from './interventions/interventions.component'
import { InterventionComponent } from './intervention/intervention.component'
import { AngularTokenService }  from 'angular-token'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
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

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
