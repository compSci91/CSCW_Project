import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalreviewComponent } from './finalreview.component';

describe('FinalreviewComponent', () => {
  let component: FinalreviewComponent;
  let fixture: ComponentFixture<FinalreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
