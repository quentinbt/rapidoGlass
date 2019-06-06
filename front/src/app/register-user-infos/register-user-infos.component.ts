import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-user-infos',
  templateUrl: './register-user-infos.component.html',
  styleUrls: ['./register-user-infos.component.scss'],
})
export class RegisterUserInfosComponent implements OnInit {
  public userInfosForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userInfosForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      address: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
    })
  }

  public onSubmit() {
    if (!this.userInfosForm.valid) {
      return
    }
    this.userService.update(this.userInfosForm.value).subscribe(user => {
      this.router.navigate(['/interventions'])
    })
  }
}
