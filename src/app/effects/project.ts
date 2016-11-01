import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProjectService } from '../services/project.service';
import { FeatureService } from '../services/feature.service';
import * as ProjectActions from '../actions/project.actions';
import { Project } from '../models/project.interface';

@Injectable()
export class ProjectEffects {

    constructor(
        private actions$: Actions,
        private svc: ProjectService,
        private featureService: FeatureService
    ) { }

    @Effect()
    select$: Observable<Action> = this.actions$
        .ofType(ProjectActions.ActionTypes.SELECT)
        .switchMap((action) => this.svc.get(action.payload._id))
        .map(project => {
            this.svc.select(project);
            return new ProjectActions.SelectCompleteAction(project)
        });

    @Effect()
    get$: Observable<Action> = this.actions$
        .ofType(ProjectActions.ActionTypes.GET)
        .switchMap((action) => this.svc.get(action.payload))
        .map(project => new ProjectActions.GetCompleteAction(project));

    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(ProjectActions.ActionTypes.UPDATE)
        .switchMap((action) => this.svc.update(action.payload))
        .map(project => new ProjectActions.UpdateCompleteAction(project));

    @Effect()
    addFeature$: Observable<Action> = this.actions$
        .ofType(ProjectActions.ActionTypes.ADD_FEATURE)
        .switchMap((action) => {
            return this.svc.addFeature(action.payload.project, action.payload.feature)
        })
        .map(feature => new ProjectActions.AddFeatureCompleteAction(feature));

    @Effect()
    removeFeature$: Observable<Action> = this.actions$
        .ofType(ProjectActions.ActionTypes.DELETE_FEATURE)
        .switchMap((action) => this.svc.deleteFeature(action.payload.project, action.payload.feature))
        .map(feature => new ProjectActions.DeleteFeatureCompleteAction(feature));


    @Effect()
    addStory$: Observable<Action> = this.actions$
        .ofType(ProjectActions.ActionTypes.ADD_STORY)
        .switchMap((action) => {
            return this.featureService.addStory(action.payload.feature, action.payload.story)
        })
        .map(story => new ProjectActions.AddStoryCompleteAction(story));

    @Effect()
    deleteStory$: Observable<Action> = this.actions$
        .ofType(ProjectActions.ActionTypes.DELETE_STORY)
        .switchMap(action => this.featureService.deleteStory(action.payload))
        .map(story => new ProjectActions.DeleteStoryCompleteAction(story));

}
