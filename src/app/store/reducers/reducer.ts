import { combineReducers } from '@ngrx/store';
import { UserState, userCredentialsReducer } from './user/user.reducers';

export interface State{
  user: UserState;
}

export const FEATURE_NAME_STATE = 'state';

export const Reducer = combineReducers<State>({
  user: userCredentialsReducer,
})
