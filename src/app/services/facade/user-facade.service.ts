import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserAction } from "src/app/store/actions/user-actions/user.actions";
import { UserState } from "src/app/store/reducers/user/user.reducers";
import { UserCredentialSelectors } from "src/app/store/selectors/user/user.selectors";
import { Observable } from 'rxjs';

@Injectable()
export class UserFacadeService{
  constructor(private store$: Store){}

  public get userData(){
    return {
      userCredentials: {
        userToken$: ((): Observable<string | null> => this.store$.select(UserCredentialSelectors.getUserToken))(),
        setCredentials: (credentials: UserState) => this.store$.dispatch(UserAction.setCredentials({ userCredentials: credentials })),
        resetCredentials: () => this.store$.dispatch(UserAction.resetCredentials())
      }
    }
  }
}
