import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import * as TutorialActions from './../../store/actions/tutorial.actions';

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.scss']
})
export class CreateTutorialComponent implements OnInit {

  constructor(private store: Store<IAppState>) { }

  addTutorial(name: string, url: string) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  ngOnInit() {
  }

}
