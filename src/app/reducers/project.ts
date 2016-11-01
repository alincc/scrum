import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Project } from '../models/project.interface';
import * as ProjectActions from '../actions/project.actions';

export interface State {
    selected: Project,
    project: Project,
    loading: boolean,
    loaded: boolean,
};

const initialState: State = {
    selected: null,
    project: null,
    loading: false,
    loaded: false,
};

export function reducer(state = initialState, action: ProjectActions.Actions): State {
    switch (action.type) {

        case ProjectActions.ActionTypes.SELECT_COMPLETE: {
            const project = action.payload;

            return Object.assign({}, state, {
                selected: project
            });
        }

        case ProjectActions.ActionTypes.GET: {
            return Object.assign({}, state, {
                loading: true,
                loaded: false,
            });
        }

        case ProjectActions.ActionTypes.GET_COMPLETE: {
            const project = action.payload;

            return Object.assign({}, state, {
                project: project,
                loading: false,
                loaded: true,
            });
        }

        case ProjectActions.ActionTypes.UPDATE_COMPLETE: {
            const project = action.payload;

            return Object.assign({}, state, {
                project: project,
                loading: false,
                loaded: true,
            });
        }

        case ProjectActions.ActionTypes.ADD_FEATURE_COMPLETE: {
            const feature = action.payload;

            return Object.assign({}, state, {
                selected: Object.assign({}, state.selected, {
                    features: [...state.selected.features, feature]
                })
            });
        }

        case ProjectActions.ActionTypes.DELETE_FEATURE_COMPLETE: {
            const feature = action.payload;

            return Object.assign({}, state, {
                selected: Object.assign({}, state.selected, {
                    features: state.selected.features.filter(obj => obj._id !== feature.featureId)
                })
            });

        }

        case ProjectActions.ActionTypes.ADD_STORY_COMPLETE: {
            const story = action.payload.story;
            const feature = Object.assign({}, action.payload.feature, {
                stories: [...action.payload.feature.stories, story]
            });

            const index = state.selected.features.findIndex(obj => obj._id == feature._id);

            return Object.assign({}, state, {
                selected: Object.assign({}, state.selected, {
                    features: [
                        ...state.selected.features.slice(0, index),
                        feature,
                        ...state.selected.features.slice(index + 1)
                    ]
                })
            });
        }

        default: {
            return state;
        }

    }
}

export function getSelected(state$: Observable<State>) {
    return state$.select(s => s.selected);
}

export function getProject(state$: Observable<State>) {
    return state$.select(s => s.project);
}

export function getLoading(state$: Observable<State>) {
    return state$.select(s => s.loading);
}

export function getLoaded(state$: Observable<State>) {
    return state$.select(s => s.loaded);
}
