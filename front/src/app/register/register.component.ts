import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup
  public hide = true
  public hideConfirmation = true

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (this.userService.hasSignedIn()) {
      this.router.navigate(['/'])
    }
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    })
  }

  public onSubmit() {
    if (!this.registerForm.valid) {
      return
    }
    this.userService.register(this.registerForm.value).subscribe(user => {
      this.router.navigate(['/register-user-infos'])
    })
  }
}
