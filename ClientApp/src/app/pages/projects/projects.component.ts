import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public projects: Project[] = [];
  public projectsFiltered: Project[] = [];

  selectTypeOptions = [
    "All",
    "WebApp",
    "Standalone"
  ];

  selectLangOptions = [
    "All",
    "CSharp",
    "Java"
  ]
  selectedType = "All"
  selectedLang = "All"

  constructor(private route:ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Project[]>(baseUrl + 'projects').subscribe(result => {
      this.projects = result;
    }, error => console.error(error));
    this.projectsFiltered = this.projects;
  }

  ngOnInit(): void {
    var filterValue = this.route.snapshot.paramMap.get("filter");
    if (filterValue) {
      this.selectedType = filterValue;
      this.valueSelected();
    }
  }
  updateTypeSelect(e: any) {
    this.selectedType = e.target.value;
    this.valueSelected();
  }

  updateLangSelect(e: any) {
    this.selectedLang = e.target.value;
    this.valueSelected();
  }
  public valueSelected() {
    if (this.selectedType == "All" && this.selectedLang == "All") {
      this.projectsFiltered = this.projects;
    }
    else if (this.selectedLang == "All" && this.selectedType != "All") {
      this.projectsFiltered = this.projects.filter(item => (item.type == this.selectedType));
    }
    else if (this.selectedLang != "All" && this.selectedType == "All") {
      this.projectsFiltered = this.projects.filter(item => (item.language == this.selectedLang));
    } else {
      this.projectsFiltered = this.projects.filter(item => item.language == this.selectedLang).filter(item => item.type == this.selectedType);
    }
  }
}
//interface Project {
//  id: string;
//  name: string;
//  type: number;
//  language: number;
//  description: string;
//}
