import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBandComponent } from './main-band.component';

describe('MainBandComponent', () => {
  let component: MainBandComponent;
  let fixture: ComponentFixture<MainBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
