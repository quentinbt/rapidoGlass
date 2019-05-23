import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private hasSignedIn = false

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.hasSignedIn = this.userService.hasSignedIn()
  }

}
