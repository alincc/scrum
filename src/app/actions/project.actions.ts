import { Action } from '@ngrx/store';
import { Project } from '../models/project.interface';
import { type } from '../util';

export const ActionTypes = {
    SELECT:             type('[Project] Select'),
    SELECT_COMPLETE:    type('[Project] Select Complete'),
    GET:                type('[Project] Get'),
    GET_COMPLETE:       type('[Project] Get Complete'),
};

export class SelectAction implements Action {
    type = ActionTypes.SELECT;

    constructor(public payload: Project) {}
}

export class SelectCompleteAction implements Action {
    type = ActionTypes.SELECT_COMPLETE;

    constructor(public payload: Project) {}
}

export class GetAction implements Action {
    type = ActionTypes.GET;

    constructor(public payload: string) {}
}

export class GetCompleteAction implements Action {
    type = ActionTypes.GET_COMPLETE;

    constructor(public payload: Project) {}
}

export type Actions
    = SelectAction
    | SelectCompleteAction
    | GetAction
    | GetCompleteAction;
