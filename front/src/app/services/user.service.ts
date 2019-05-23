import { Injectable } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private tokenService: AngularTokenService) { }

  public register(user) {
    this.tokenService.registerAccount({...user}).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

  public signIn(user) {
    this.tokenService.signIn({...user}).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

}
