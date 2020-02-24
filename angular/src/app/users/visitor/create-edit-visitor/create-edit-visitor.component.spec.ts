import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditVisitorComponent } from './create-edit-visitor.component';

describe('CreateEditVisitorComponent', () => {
  let component: CreateEditVisitorComponent;
  let fixture: ComponentFixture<CreateEditVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
