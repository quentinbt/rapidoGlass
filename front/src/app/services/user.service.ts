import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { AngularTokenService, SignInData, RegisterData } from 'angular-token';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private hasSignedIn$ = new BehaviorSubject<boolean>(false)
  private currentUser$ = new BehaviorSubject<User>({})

  constructor(private tokenService: AngularTokenService) { }

  public register(user: RegisterData): void {
    this.tokenService.registerAccount({...user}).subscribe(
      res =>      console.log(res),
      error =>    console.log(error)
    );
  }

  public signIn(user: SignInData): void {
    this.tokenService.signIn({...user}).subscribe(
      res => {
        console.log(res)
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

  public validateToken(): void {
    this.tokenService.validateToken().subscribe(res => {
      const user: User = this.tokenService.currentUserData
      this.setCurrentUser(user)
    })
  }

  public getHasSignedIn(): Observable<boolean> {
    return this.hasSignedIn$.asObservable()
  }

  public getCurrentUser(): Observable<User> {
    return this.currentUser$.asObservable()
  }

  private setHasSignedIn(hasSignedIn): void {
    if (hasSignedIn) {
      const user: User = this.tokenService.currentUserData
      this.setCurrentUser(user)
    } else {
      this.setCurrentUser({})
    }
    this.hasSignedIn$.next(hasSignedIn)
  }

  private setCurrentUser(user: User): void {
    this.currentUser$.next(user)
  }

}
