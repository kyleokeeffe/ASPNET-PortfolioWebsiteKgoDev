import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { ProjectItemComponent } from './pages/project-item/project-item.component';
import { AddEditProjectComponent } from './pages/projects/add-edit-project/add-edit-project.component';
import { AddEditSummaryComponent } from './pages/projects/add-edit-summary/add-edit-summary.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProjectsComponent,
    AboutComponent,
    MyServicesComponent,
    ProjectItemComponent,
    AddEditProjectComponent,
    AddEditSummaryComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'my-services', component: MyServicesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'add-edit', component: AddEditProjectComponent },
      { path: 'add-edit-summary/:id', component: AddEditSummaryComponent },
      { path: 'project-details/:id', component: ProjectDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
