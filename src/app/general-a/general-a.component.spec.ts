import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAComponent } from './general-a.component';

describe('GeneralAComponent', () => {
  let component: GeneralAComponent;
  let fixture: ComponentFixture<GeneralAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
