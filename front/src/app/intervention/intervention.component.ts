import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { InterventionService } from '../services/intervention.service'
import { Intervention } from '../interfaces/intervention'

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit {
  public intervention: Intervention

  constructor(
    private interventionService: InterventionService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIntervention(params.id)
      }
    })
  }
    

  ngOnInit() {
  }

  private getIntervention(id: number): void {
    this.interventionService.show(id).subscribe((intervention: Intervention) => {
      this.intervention = intervention
    })
  }
}
