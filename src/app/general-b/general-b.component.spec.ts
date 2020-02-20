import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBComponent } from './general-b.component';

describe('GeneralBComponent', () => {
  let component: GeneralBComponent;
  let fixture: ComponentFixture<GeneralBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
