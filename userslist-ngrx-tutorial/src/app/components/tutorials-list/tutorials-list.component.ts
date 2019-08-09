import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { ITutorial } from 'src/app/models/tutorial.model';
import { selectTutorialList } from 'src/app/store/selectors/tutorial.selector';
import * as TutorialActions from './../../store/actions/tutorial.actions';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.scss']
})
export class TutorialsListComponent implements OnInit {
  tutorials: Observable<ITutorial[]>;

  constructor(private store: Store<IAppState>) { 
    this.tutorials = store.pipe(select(selectTutorialList));
  }

  delTutorial(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

  ngOnInit() {
  }

}
