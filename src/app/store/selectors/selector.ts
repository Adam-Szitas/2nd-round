import { createFeatureSelector } from '@ngrx/store';
import { FEATURE_NAME_STATE, State } from "../reducers/reducer";


export const state = createFeatureSelector<State>(FEATURE_NAME_STATE);
