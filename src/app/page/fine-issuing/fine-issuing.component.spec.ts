import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineIssuingComponent } from './fine-issuing.component';

describe('FineIssuingComponent', () => {
  let component: FineIssuingComponent;
  let fixture: ComponentFixture<FineIssuingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineIssuingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineIssuingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
