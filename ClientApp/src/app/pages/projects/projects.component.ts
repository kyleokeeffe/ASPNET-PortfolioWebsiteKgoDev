import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public projects: Project[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Project[]>(baseUrl + 'projects').subscribe(result => {
      this.projects = result;
    }, error => console.error(error));
  }
}
interface Project {
  id: string;
  name: string;
  type: number;
  language: number;
  description: string;
}
