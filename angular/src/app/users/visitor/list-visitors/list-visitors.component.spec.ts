import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisitorsComponent } from './list-visitors.component';

describe('ListVisitorsComponent', () => {
  let component: ListVisitorsComponent;
  let fixture: ComponentFixture<ListVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
