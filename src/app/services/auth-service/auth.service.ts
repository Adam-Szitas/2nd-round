import { Injectable } from "@angular/core";
import { BaseService } from "../base.service";
import { UserFacadeService } from "../facade/user-facade.service";
import { Observable } from 'rxjs';

@Injectable()
export class AuthService extends BaseService {
  //TODO use component container and Push (ngrx pipe) to get data from facade

  public isUserLoggedIn$: Observable<string | null> = this.userFacade.userData.userCredentials.userToken$;

  constructor(private userFacade: UserFacadeService){
    super();
  }


  public login(loginForm: {userName: string; password: string}): void{
    // const data: {}
    // this.httpClient.post(this.baseUrl.concat('/api/login'), data).pipe(
    //   catchError(handleHttpResponseError)
    // ).subscribe({
    //   next: (response: LoginResponse) => {
    //     localStorage.setItem(AUTH_TOKEN, response.token);
    //     this.router.navigateByUrl(['web/dashboard']);
    //   }
    // })
    this.userFacade.userData.userCredentials.setCredentials({userName: loginForm.userName, token: 'Token'})
  }

  public logout(): void{
    // this.httpClient.post(this.baseUrl.concat('/api/logout'), data).pipe(
    //   catchError(handleHttpResponseError)
    // ).subscribe({
    //   next: (response: LogoutResponse) => {
    //     localStorage.removeItem(AUTH_TOKEN);
    //     this.router.navigateByUrl(['']);
    //   }
    // })

    this.userFacade.userData.userCredentials.resetCredentials();
  }

  public getAccessToken(): string {
    return 'XYZ2252';
  }
}
