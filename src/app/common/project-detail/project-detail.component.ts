import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.interface';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
    private _project: Project;

    private editing: {
        title: boolean,
        description: boolean,
    };

    @Input() set project(value) {
        this._project = Object.assign({}, value);
    }
    @Input() loaded: boolean;
    @Output() updateAction = new EventEmitter();

    constructor() {
        this.editing = {
            title: false,
            description: false
        };
    }

    get project() {
        return this._project;
    }

    ngOnInit() {}

    // Toggle edit mode for property
    toggleEdit(property: string): void {
        this.editing[property] = !this.editing[property];
    }

    // Handle update of project
    save(property: string): void {
        // Exit edit mode for the property
        this.editing[property] = false;

        // Emit the update action
        this.updateAction.emit(this._project);
    }

}
