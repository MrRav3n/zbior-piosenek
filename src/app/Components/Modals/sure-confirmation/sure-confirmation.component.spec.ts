import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SureConfirmationComponent } from './sure-confirmation.component';

describe('SureConfirmationComponent', () => {
  let component: SureConfirmationComponent;
  let fixture: ComponentFixture<SureConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SureConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SureConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
