import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { InterventionService } from '../services/intervention.service'
import { Intervention } from '../interfaces/intervention'
import { Router } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit-intervention',
  templateUrl: './edit-intervention.component.html',
  styleUrls: ['./edit-intervention.component.scss'],
})
export class EditInterventionComponent implements OnInit {
  public interventionForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private interventionService: InterventionService,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIntervention(params.id)
      }
    })
  }

  ngOnInit() {}

  private getIntervention(id: number): void {
    this.interventionService
      .show(id)
      .subscribe((intervention: Intervention) => {
        this.buildForm(intervention)
      })
  }

  private buildForm(intervention: Intervention) {
    this.interventionForm = this.formBuilder.group({
      id: [intervention.id, Validators.required],
      description: [intervention.description],
      plate_number: [intervention.plate_number],
      car_model: [intervention.car_model],
      insurance_number: [intervention.insurance_number],
    })
  }

  public onSubmit(): void {
    if (!this.interventionForm.valid) {
      return
    }
    this.interventionService
      .update(this.interventionForm.value)
      .subscribe((intervention: Intervention) => {
        this.router.navigate(['interventions', intervention.id])
      })
  }

  public cancel(): void {
    this.location.back()
  }
}
