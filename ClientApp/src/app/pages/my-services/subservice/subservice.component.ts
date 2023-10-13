import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subservice',
  templateUrl: './subservice.component.html',
  styleUrls: ['./subservice.component.css']
})
export class SubserviceComponent {
  ngOnInit(): void {
  }
  @Input() title!: string;
  @Input() description!: string;
  @Input() filterValue!: string;
}
