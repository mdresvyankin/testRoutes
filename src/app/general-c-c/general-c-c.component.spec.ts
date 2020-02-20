import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCCComponent } from './general-c-c.component';

describe('GeneralCCComponent', () => {
  let component: GeneralCCComponent;
  let fixture: ComponentFixture<GeneralCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
