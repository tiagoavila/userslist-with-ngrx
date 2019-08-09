import { ITutorialState, initialTutorialState } from './tutorial.state';

export interface IAppState {
    tutorials: ITutorialState;
}

export const initialAppState: IAppState = {
    tutorials: initialTutorialState
  };
  
  export function getInitialState(): IAppState {
    return initialAppState;
  }