import { ITutorial } from './../../models/tutorial.model';

export interface ITutorialState {
    tutorials: ITutorial[];
}

var tutorial = {
    name: 'tutorial 1',
    url: 'http://google.com'
}

export const initialTutorialState: ITutorialState = {
    tutorials: [tutorial]
};