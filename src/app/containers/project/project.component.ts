import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../reducers';
import * as ProjectActions from '../../actions/project.actions';
import { Project } from '../../models/project.interface';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    private project: Project;
    private loading$: Observable<boolean>;
    private loaded$: Observable<boolean>;

    constructor(
        private store: Store<fromRoot.State>,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.loading$ = store.let(fromRoot.getProjectLoading);
        this.loaded$ = store.let(fromRoot.getProjectLoaded);
        this.store.let(fromRoot.getProject)
            .subscribe(project => {
                this.project = project;
            });
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id']; // (+) converts string 'id' to a number

            this.store.dispatch(new ProjectActions.GetAction(id));
        });
    }

    // Update action from child componnent
    update(event: Project): void {
        this.store.dispatch(new ProjectActions.UpdateAction(event));
    }
}
