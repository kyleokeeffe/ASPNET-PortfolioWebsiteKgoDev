import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  @Input() projectItem!: Project;


  goToProjectDetail(projectItem: Project) {
    const projectId = projectItem ? projectItem.id : null;
    this.router.navigate(['/project-details/' + projectItem.id]);
  }
}
