import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Project } from '../models/project.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  constructor(private http: Http) { }

  create(project: Project): Observable<Project> {
    return this.http.post('http://localhost:3000/api/project', project)
                .map(res => res.json())
                .catch(err => err.json());
  }

}
