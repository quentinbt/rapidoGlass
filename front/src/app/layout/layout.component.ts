import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from '../interfaces/user'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public currentUser: User
  private hasSignedIn = false

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.validateToken()
    this.userService.hasSignedIn()
    this.userService.getHasSignedIn().subscribe((hasSignedIn: boolean) => {
      this.hasSignedIn = hasSignedIn
    })
    this.userService.getCurrentUser().subscribe((currentUser: User) => {
      this.currentUser = currentUser
    })
  }

  public signOut(): void {
    this.userService.signOut()
  }

}
