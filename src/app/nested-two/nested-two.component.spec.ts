import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedTwoComponent } from './nested-two.component';

describe('NestedTwoComponent', () => {
  let component: NestedTwoComponent;
  let fixture: ComponentFixture<NestedTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
