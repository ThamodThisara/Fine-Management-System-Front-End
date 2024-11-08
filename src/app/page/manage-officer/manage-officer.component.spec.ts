import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOfficerComponent } from './manage-officer.component';

describe('ManageOfficerComponent', () => {
  let component: ManageOfficerComponent;
  let fixture: ComponentFixture<ManageOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageOfficerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
