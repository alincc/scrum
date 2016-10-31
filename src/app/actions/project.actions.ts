import { Action } from '@ngrx/store';
import { Project } from '../models/project.interface';
import { type } from '../util';

export const ActionTypes = {
    SELECT:           type('[Project] Select'),
    SELECT_COMPLETE:  type('[Project] Select Complete'),
};

export class SelectAction implements Action {
    type = ActionTypes.SELECT;

    constructor(public payload: Project) { }
}

export class SelectCompleteAction implements Action {
    type = ActionTypes.SELECT_COMPLETE;

    constructor(public payload: Project) { }
}

export type Actions
    = SelectAction
    | SelectCompleteAction;
