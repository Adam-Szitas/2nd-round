import { Action, createReducer, on } from '@ngrx/store';
import { UserAction } from '../../actions/user-actions/user.actions';

export interface UserState{
  userName: string | null;
  token: string | null;
}

const initialState: UserState = {
  userName: null,
  token: null
}

export const USER_STATE = 'user';

const reducer = createReducer(
  initialState,
  // on(UserAction.setCredentials, (state: UserState, { userCredentials }): UserState => {
  //   return {
  //     ...state,
  //     userName: userCredentials.userName,
  //     token: userCredentials.token
  //   }
  // })

  //TODO LOGOUT
)
export function userCredentialsReducer(state: UserState | undefined, action: Action): UserState{
  return reducer(state, action);
}
