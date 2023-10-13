import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSummaryComponent } from './add-edit-summary.component';

describe('AddEditSummaryComponent', () => {
  let component: AddEditSummaryComponent;
  let fixture: ComponentFixture<AddEditSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
