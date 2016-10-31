import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import * as ProjectsActions from './actions/projects.actions';
import * as ProjectActions from './actions/project.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private project: any;

    constructor(private store: Store<State>) {

        this.store.select('project').subscribe(project => this.project = project);

        // If no project is selected but project exists
        // in localStorage, dispatch action to select it
        if (this.project.selected === null && localStorage.getItem('selectedProject')) {
            let selectedProject = localStorage.getItem('selectedProject');

            this.store.dispatch(new ProjectActions.SelectAction(JSON.parse(selectedProject)));
        }

        this.store.dispatch(new ProjectsActions.LoadAction());
    }
}
