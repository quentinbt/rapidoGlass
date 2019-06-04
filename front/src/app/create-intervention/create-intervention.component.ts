import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { InterventionService } from '../services/intervention.service'
import { Intervention } from '../interfaces/intervention'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-intervention',
  templateUrl: './create-intervention.component.html',
  styleUrls: ['./create-intervention.component.scss']
})
export class CreateInterventionComponent implements OnInit {
  public interventionForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private interventionService: InterventionService
  ) {}

  ngOnInit() {
    this.interventionForm = this.formBuilder.group({
      description: ['', Validators.required],
      plate_number: [''],
      car_model: [''],
      insurance_number: [''],
    })
  }

  public onSubmit() {
    if (!this.interventionForm.valid) {
      return
    }
    this.interventionService.create(this.interventionForm.value).subscribe((intervention: Intervention) => {
      this.router.navigate(['interventions', intervention.id]);
    })
  }

}
