import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private hasSignedIn$ = new BehaviorSubject<boolean>(false)

  constructor(private tokenService: AngularTokenService) { }

  public register(user): void {
    this.tokenService.registerAccount({...user}).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

  public signIn(user): void {
    this.tokenService.signIn({...user}).subscribe(
      res => {
        this.setHasSignedIn(true)
      },
      error =>    console.log(error)
    );
  }

  public signOut(): void {
    this.tokenService.signOut().subscribe(
      res => {
        this.setHasSignedIn(false)
      },
      error =>    console.log(error)
    );
  }

  public hasSignedIn():boolean {
    this.hasSignedIn$.next(this.tokenService.userSignedIn())
    return this.tokenService.userSignedIn()
  }

  public getHasSignedIn(): Observable<boolean> {
    return this.hasSignedIn$.asObservable()
  }

  private setHasSignedIn(hasSignedIn): void {
    this.hasSignedIn$.next(hasSignedIn)
  }

}
