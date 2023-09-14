import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, forkJoin } from 'rxjs';
import { Project } from '../../models/project.model';
import { DataServiceService } from '../../services/data-service.service';

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

  constructor(private route: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Project[]>(baseUrl + 'projects').subscribe(result => {
      this.projects = result;
      this.projectsFiltered = result;
    }, error => console.error(error));



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
  //public filtervalue() {
  //  this.dataService.filterProjects(this.selectedType, this.selectedLang)
  //    .subscribe(result => {
  //      this.projectsFiltered = result;

  //    }, error => console.error(error));
  //}
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
