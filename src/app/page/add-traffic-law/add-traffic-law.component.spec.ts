import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrafficLawComponent } from './add-traffic-law.component';

describe('AddTrafficLawComponent', () => {
  let component: AddTrafficLawComponent;
  let fixture: ComponentFixture<AddTrafficLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTrafficLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrafficLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
