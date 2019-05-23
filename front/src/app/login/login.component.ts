import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms'
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'
import { MyErrorStateMatcher } from '../global/errorStateMachter'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  public hide = true
  public matcher: MyErrorStateMatcher

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getHasSignedIn().subscribe((hasSignedIn: boolean) => {
      hasSignedIn && this.router.navigate(['/'])
    })

    this.loginForm = this.formBuilder.group({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })

    this.matcher = new MyErrorStateMatcher()
  }

  public onSubmit() {
    if (!this.loginForm.valid) {
      return
    }
    this.userService.signIn(this.loginForm.value)
  }

}
