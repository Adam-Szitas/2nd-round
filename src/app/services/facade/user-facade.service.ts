import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserState } from "src/app/store/reducers/user/user.reducers";
import { userCredentialSelectors } from "src/app/store/selectors/user/user.selectors";


@Injectable()
export class UserFacadeService{
  constructor(private store$: Store){}

  public get userData(){
    return {
      userCredentials: {
        // userToken$: ((): Observable<string | null> => this.store$.select(userCredentialSelectors.getUserToken))(),
        userToken: true
      }
    }
  }
}
