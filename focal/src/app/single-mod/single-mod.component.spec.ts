import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleModComponent } from './single-mod.component';

describe('SingleModComponent', () => {
  let component: SingleModComponent;
  let fixture: ComponentFixture<SingleModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
