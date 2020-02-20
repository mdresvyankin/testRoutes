import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedOneComponent } from './nested-one.component';

describe('NestedOneComponent', () => {
  let component: NestedOneComponent;
  let fixture: ComponentFixture<NestedOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
