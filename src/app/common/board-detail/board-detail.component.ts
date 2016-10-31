import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.interface';
import { Feature } from '../../models/feature.interface';

@Component({
    selector: 'board-detail',
    templateUrl: './board-detail.component.html',
    styleUrls: ['./board-detail.component.scss']
})
export class BoardDetailComponent implements OnInit {

    @Input() project: any;
    @Output() addMessage = new EventEmitter();
    @Output() featureEmitter = new EventEmitter();
    @Output() deleteFeatureEmitter = new EventEmitter();
    @Output() storyEmitter = new EventEmitter();

    private nrOfStates: number = 5;

    constructor() { }

    ngOnInit() {}

    addFeature(title): void {
        this.featureEmitter.emit(title);
    }

    deleteFeature(feature: Feature): void {
        this.deleteFeatureEmitter.emit(feature);
    }

    addStory(feature: Feature, status: number, title: string): void {
        let data = {
            story: {
                title: title,
                status: status
            },
            feature: feature
        }

        this.storyEmitter.emit(data);
    }

}