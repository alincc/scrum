import { Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { ProjectComponent } from './containers/project/project.component';
import { BoardComponent } from './containers/board/board.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'project/:id',
    component: ProjectComponent
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
