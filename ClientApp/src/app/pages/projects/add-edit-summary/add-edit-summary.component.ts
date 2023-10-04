import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../models/project.model';
import { DataServiceService } from '../../../services/data-service.service';

@Component({
  selector: 'app-add-edit-summary',
  templateUrl: './add-edit-summary.component.html',
  styleUrls: ['./add-edit-summary.component.css']
})
export class AddEditSummaryComponent {
  thisId!: string;
  thisProject!: Project;
  constructor(private dataService:DataServiceService, private route: ActivatedRoute) {
    var projectId = this.route.snapshot.paramMap.get("id");
    this.thisId = projectId!;
    
    if (this.thisId) {
      this.dataService.getProject(this.thisId).subscribe(
        project => this.thisProject=project);
    }
  }
}
