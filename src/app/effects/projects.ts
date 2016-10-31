import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProjectService } from '../services/project.service';
import * as ProjectsActions from '../actions/projects.actions';

@Injectable()
export class ProjectsEffects {

    constructor(
        private actions$: Actions,
        private svc: ProjectService
    ) { }

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(ProjectsActions.ActionTypes.LOAD)
        .switchMap(() => this.svc.load())
        .map(projects => new ProjectsActions.LoadCompleteAction(projects));

    @Effect()
    add$: Observable<Action> = this.actions$
        .ofType(ProjectsActions.ActionTypes.ADD)
        .map(action => action.payload)
        .switchMap(project => this.svc.create(project))
        .map(project => new ProjectsActions.AddCompleteAction(project));

    @Effect()
    delete$: Observable<Action> = this.actions$
        .ofType(ProjectsActions.ActionTypes.DELETE)
        .map(action => action.payload)
        .switchMap(project => this.svc.delete(project))
        .map(project => new ProjectsActions.DeleteCompleteAction(project));


}
