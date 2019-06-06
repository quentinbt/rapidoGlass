import { Component, OnInit } from '@angular/core'
import { InterventionService } from '../services/intervention.service'
import { Intervention } from '../interfaces/intervention'

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.scss'],
})
export class InterventionsComponent implements OnInit {
  public displayedColumns: string[] = ['description', 'email']
  public interventions: Intervention[]

  constructor(private interventionService: InterventionService) {}

  ngOnInit() {
    this.getInterventions()
  }

  private getInterventions(): void {
    this.interventionService
      .getAll()
      .subscribe((interventions: Intervention[]) => {
        this.interventions = interventions
      })
  }
}
