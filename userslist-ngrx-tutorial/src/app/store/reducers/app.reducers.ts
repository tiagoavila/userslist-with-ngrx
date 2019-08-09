import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { tutorialReducer } from './tutorial.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  tutorials: tutorialReducer
};
