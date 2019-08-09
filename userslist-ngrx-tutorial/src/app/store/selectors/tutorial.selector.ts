import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ITutorialState } from '../state/tutorial.state';

const selectTutorials = (state: IAppState) => state.tutorials;

export const selectTutorialList = createSelector(
    selectTutorials,
    (state: ITutorialState) => state.tutorials
);

// export const selectSelectedUser = createSelector(
//     selectUsers,
//     (state: IUserState) => state.selectedUser
// );
