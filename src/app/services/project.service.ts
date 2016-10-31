import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Project } from '../models/project.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

    constructor(private http: Http) { }

    create(project: Project): Observable<Project> {
        let bodyString = JSON.stringify(project);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/project', bodyString, options)
            .map(res => res.json())
    }

    load(): Observable<Project[]> {
        return this.http.get('/api/project')
            .map((res: Response) => res.json());
    }

    update(project: Project): Observable<Project> {
        return this.http.put('/api/project/' + project._id, project)
            .map((res: Response) => res.json());
    }

    get(id): Observable<Project> {
        return this.http.get('/api/project/' + id)
            .map((res: Response) => res.json());
    }

    delete(project: Project): Observable<Project> {
        return this.http.delete('/api/project/' + project._id)
            .map((res: Response) => res.json());
    }

}
