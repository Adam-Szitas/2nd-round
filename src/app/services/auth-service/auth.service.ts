import { Injectable } from "@angular/core";
import { BaseService } from "../base.service";
import { HttpClient } from '@angular/common/http'
import { catchError } from "rxjs";
import { Router } from "@angular/router";
import { UserFacadeService } from "../facade/user-facade.service";

const AUTH_TOKEN = 'auth-token';

@Injectable()
export class AuthService extends BaseService{

  constructor(private httpClient: HttpClient, private router: Router, private userFacade: UserFacadeService){
    super();
  }

  //TODO use component container and Push (ngrx pipe) to get data from facade
  public isUserLoggedIn: boolean = !!this.userFacade.userData.userCredentials.userToken;

  public login(loginForm: {userName: string; password: string}): void{
    // const data: {}
    // this.httpClient.post(this.baseUrl.concat('/api/login'), data).pipe(
    //   catchError(handleHttpResponseError)
    // ).subscribe({
    //   next: (response: LoginResponse) => {
    //     localStorage.setItem(AUTH_TOKEN, response.token);
    //     this.router.navigateTo(['web/dashboard']);
    //   }
    // })

    localStorage.setItem(AUTH_TOKEN, 'Logged In');
  }

  public logout(): void{
    // this.httpClient.post(this.baseUrl.concat('/api/logout'), data).pipe(
    //   catchError(handleHttpResponseError)
    // ).subscribe({
    //   next: (response: LogoutResponse) => {
    //     localStorage.removeItem(AUTH_TOKEN);
    //     this.router.navigateTo(['']);
    //   }
    // })

    localStorage.removeItem(AUTH_TOKEN);
  }

  public getAccessToken(): string {
    return 'XYZ2252';
  }
}
