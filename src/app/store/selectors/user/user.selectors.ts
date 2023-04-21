import { createSelector } from '@ngrx/store';
import { USER_STATE, UserState } from '../../reducers/user/user.reducers';
import { State } from '../../reducers/reducer';
import { state } from '../selector';

const getUserState = createSelector(state, (state: State): UserState => state[USER_STATE]);

const getUserToken = createSelector(getUserState, (userState: UserState): string | null => userState.token);

export const userCredentialSelectors = {
  getUserToken
}
