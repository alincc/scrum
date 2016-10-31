import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Project } from '../models/project.interface';
import * as ProjectActions from '../actions/projects.actions';

export interface State {
  projects: Project[],
  loading: boolean,
  loaded: boolean,
};

const initialState: State = {
  projects: [],
  loading: false,
  loaded: false,
};

export function reducer(state = initialState, action: ProjectActions.Actions): State {
  switch (action.type) {
    case ProjectActions.ActionTypes.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case ProjectActions.ActionTypes.LOAD_COMPLETE: {
      return {
        projects: action.payload,
        loading: false,
        loaded: true
      }
    }

    case ProjectActions.ActionTypes.ADD_COMPLETE: {
        const project = action.payload;

        return Object.assign({}, state, {
            projects: [...state.projects, project]
        });

    }

    case ProjectActions.ActionTypes.DELETE_COMPLETE: {
        const project = action.payload;

        return Object.assign({}, state, {
            projects: state.projects.filter(obj => obj._id !== project._id)
        });
    }

    default: {
      return state;
    }
  }
}

export function getProjects(state$: Observable<State>) {
  return state$.select(s => s.projects);
}
