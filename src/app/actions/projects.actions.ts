import { Action } from '@ngrx/store';
import { Project } from '../models/project.interface';
import { type } from '../util';

export const ActionTypes = {
    LOAD:             type('[Project] Load'),
    LOAD_COMPLETE:    type('[Project] Load Complete'),
    ADD:              type('[Project] Add'),
    ADD_COMPLETE:     type('[Project] Add Complete'),
    DELETE:           type('[Project] Delete'),
    DELETE_COMPLETE:  type('[Project] Delete Complete'),
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;
}

export class LoadCompleteAction implements Action {
    type = ActionTypes.LOAD_COMPLETE;

    constructor(public payload: Project[]) {}
}

export class AddAction implements Action {
    type = ActionTypes.ADD;

    constructor(public payload: Project) {}
}

export class AddCompleteAction implements Action {
    type = ActionTypes.ADD_COMPLETE;

    constructor(public payload: Project) {}
}

export class DeleteAction implements Action {
    type = ActionTypes.DELETE;

    constructor(public payload: Project) {}
}

export class DeleteCompleteAction implements Action {
    type = ActionTypes.DELETE_COMPLETE;

    constructor(public payload: Project) {}
}


export type Actions
    = LoadAction
    | LoadCompleteAction
    | AddAction
    | AddCompleteAction
    | DeleteAction
    | DeleteCompleteAction;
