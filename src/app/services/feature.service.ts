import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Feature } from '../models/feature.interface';
import { UserStory } from '../models/user-story.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeatureService {

    constructor(private http: Http) { }

    addStory(feature: Feature, story: any): Observable<Feature> {
        return this.http.put('/api/feature/' + feature._id + '/add-story', story)
            .map((res: Response) => res.json());
    }

    deleteStory(data): Observable<UserStory> {
        return this.http.delete('/api/story/remove/' + data.story._id + '/feature/' + data.feature._id)
            .map((res: Response) => res.json());
    }
}
