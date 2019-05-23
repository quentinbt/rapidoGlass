import { Component, OnInit } from '@angular/core';
import { InterventionService } from './intervention.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public interventions

  constructor(private interventionService: InterventionService) {
  }

  ngOnInit() {
    this.getInterventions()
  }

  private getInterventions() {
    this.interventionService.getInterventions().subscribe(interventions => {
      this.interventions = interventions
    }
    )
  }
}
