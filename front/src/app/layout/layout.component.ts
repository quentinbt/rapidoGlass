import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private hasSignedIn = false

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.hasSignedIn = this.userService.hasSignedIn()
  }

}
