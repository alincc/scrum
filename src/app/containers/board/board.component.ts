import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Project } from '../../models/project.interface';
import { Feature } from '../../models/feature.interface';
import * as fromRoot from '../../reducers';
import * as ProjectActions from '../../actions/project.actions';
import { ProjectService } from '../../services/project.service';
import { FeatureService } from '../../services/feature.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

    private project: Project;

    private messages: {
        title: string,
        text: string,
        type?: string,
        icon?: string
    }[];

    constructor(
        private store: Store<fromRoot.State>,
        private projectService: ProjectService,
        private featureService: FeatureService,
    ) {
        this.messages = [];

        this.store.let(fromRoot.getProjectSelected)
            .subscribe(project => this.project = project);
    }

    ngOnInit() {
        if (!this.project) {
            this.messages.push({title: 'No project selected', text: 'Please select a project', type: 'warning', icon: 'add'});
        }
    }

    addFeature(feature) {
        if (this.project) {
            this.store.dispatch(new ProjectActions.AddFeatureAction({project: this.project, feature: feature}));
        }
        else {
            this.messages.push({title: 'No project selected', text: 'Please select a project', type: 'warning', icon: 'add'});
        }
    }

    deleteFeature(feature: Feature): void {
        this.store.dispatch(new ProjectActions.DeleteFeatureAction({project: this.project, feature: feature}));
    }

    addStory(data) {
        this.store.dispatch(new ProjectActions.AddStoryAction({project: this.project, feature: data.feature, story: data.story}))
    }

    messageEvent(message) {
        this.messages.push(message);
    }

}
