import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  http: HttpClient;
  baseUrl: string;
  public projects: Project[] = [];



  constructor(_http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
    this.http = _http;
    this.baseUrl = _baseUrl;
  }
  getProjects():Observable<Project[]> {

   this.http.get<Project[]> (this.baseUrl + 'projects').subscribe(result => {
     this.projects = result;
   }, error => console.error(error));
    return of(this.projects);
    
  }

  filterProjects(selectedType:string, selectedLang:string): Observable<Project[]> {
    if (selectedType == "All" && selectedLang == "All") {
      return of(this.projects);
    }
    else if (selectedLang == "All" && selectedType != "All") {
      return of(this.projects.filter(item => (item.type == selectedType)));
    }
    else if (selectedLang != "All" && selectedType == "All") {
      return of(this.projects.filter(item => (item.language == selectedLang)));
    }
    else {
        return of(this.projects.filter(item => item.language == selectedLang).filter(item => item.type == selectedType));
    }
  }
}
