import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Project } from '../models/project.interface';
import * as ProjectActions from '../actions/project.actions';

export interface State {
  project: Project
};

const initialState: State = {
  project: null
};

export function reducer(state = initialState, action: ProjectActions.Actions): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
