import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';

import { routes } from './routes';
import { reducer } from './reducers';
import { CreateProjectDialogComponent } from './common/create-project-dialog/create-project-dialog.component';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProjectDialogComponent
  ],
  entryComponents: [
    CreateProjectDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MaterialModule.forRoot(),

    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
