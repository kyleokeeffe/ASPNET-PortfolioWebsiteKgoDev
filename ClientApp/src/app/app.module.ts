import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { ProjectItemComponent } from './pages/project-item/project-item.component';
import { AddEditProjectComponent } from './pages/projects/add-edit-project/add-edit-project.component';
import { AddEditSummaryComponent } from './pages/projects/add-edit-summary/add-edit-summary.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';
import { SubserviceComponent } from './pages/my-services/subservice/subservice.component';
import { ServiceComponent } from './pages/my-services/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    MyServicesComponent,
    ProjectItemComponent,
    AddEditProjectComponent,
    AddEditSummaryComponent,
    ProjectDetailsComponent,
    SubserviceComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'my-services', component: MyServicesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'add-edit', component: AddEditProjectComponent },
      { path: 'add-edit-summary/:id', component: AddEditSummaryComponent },
      { path: 'project-details/:id', component: ProjectDetailsComponent },
      { path: 'subservice', component: SubserviceComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
