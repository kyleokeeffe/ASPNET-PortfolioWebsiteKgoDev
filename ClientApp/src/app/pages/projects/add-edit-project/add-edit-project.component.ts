import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../../../models/project.model';
import { DataServiceService } from '../../../services/data-service.service';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css']
})
export class AddEditProjectComponent {

  newProject!: Project;
  constructor(private dataService: DataServiceService, private router:Router) {
   
  }
  onSubmit() {
    //this.submitted = true;
  }
  addProject(project: Project) {
    this.dataService.addProject(project);
    
    this.router.navigate(['/add-edit-summary/' + project.id]);
  }
}
