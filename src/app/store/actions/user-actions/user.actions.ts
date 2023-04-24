import { UserState } from "../../reducers/user/user.reducers";
import { createAction, props } from '@ngrx/store';

export const UserAction = {
  setCredentials: createAction('[user: credentials] set user credentials', props<{ userCredentials: UserState }>()),
  resetCredentials: createAction('[user: credentials] reset user credentials')
}
