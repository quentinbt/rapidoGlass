import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { InterventionService } from '../services/intervention.service'
import { UserService } from '../services/user.service'
import { Intervention } from '../interfaces/intervention'
import { User } from '../interfaces/user'

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit {
  public intervention: Intervention
  public currentUser: User

  constructor(
    private interventionService: InterventionService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIntervention(params.id)
      }
    })
    this.userService.getCurrentUser().subscribe((currentUser: User) => {
      this.currentUser = currentUser
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
