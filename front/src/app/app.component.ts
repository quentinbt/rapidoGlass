import { Component, OnInit } from '@angular/core'
import { InterventionService } from './services/intervention.service'
import { Intervention } from './interfaces/intervention'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public interventions: Intervention[]

  constructor(private interventionService: InterventionService) {}

  ngOnInit() {
    this.getInterventions()
  }

  private getInterventions() {
    this.interventionService.getInterventions().subscribe((interventions: Intervention[]) => {
      this.interventions = interventions
    })
  }
}
