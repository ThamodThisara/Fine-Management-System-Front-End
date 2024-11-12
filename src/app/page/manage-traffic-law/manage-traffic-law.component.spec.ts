import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTrafficLawComponent } from './manage-traffic-law.component';

describe('ManageTrafficLawComponent', () => {
  let component: ManageTrafficLawComponent;
  let fixture: ComponentFixture<ManageTrafficLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTrafficLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTrafficLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
