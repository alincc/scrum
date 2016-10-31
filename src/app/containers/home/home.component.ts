import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.interface';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as ProjectsActions from '../../actions/projects.actions';
import * as ProjectActions from '../../actions/project.actions';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: []
})
export class HomeComponent implements OnInit {

    projects$: Observable<Project[]>;
    projects: Project[];
    private form: FormGroup;

    constructor(
        private store: Store<fromRoot.State>,
        private projectService: ProjectService,
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            title: ['', Validators.required],
            description: [''],
        });

        this.projects$ = this.store.let(fromRoot.getProjects);
    }

    onSubmit(project: Project, valid: boolean): void {
        // Form need to be valid to submit
        if (valid) {
            this.store.dispatch(new ProjectsActions.AddAction(project));
        }
    }

    deleteProject(project: Project): void {
        this.store.dispatch(new ProjectsActions.DeleteAction(project));
    }

    selectProject(project: Project): void {
        this.store.dispatch(new ProjectActions.SelectAction(project));
    }

}
