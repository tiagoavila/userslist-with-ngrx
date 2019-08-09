import { ITutorialState, initialTutorialState } from './../state/tutorial.state'
import * as TutorialActions from './../actions/tutorial.actions'

export function tutorialReducer(state: ITutorialState = initialTutorialState, action: TutorialActions.Actions) {

    // Section 3
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return {
                tutorials: [...state.tutorials, action.payload] 
            };
        case TutorialActions.REMOVE_TUTORIAL:
            state.tutorials.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}