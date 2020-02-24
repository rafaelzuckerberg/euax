import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditAdministratorComponent } from './create-edit-administrator.component';

describe('CreateEditAdministratorComponent', () => {
  let component: CreateEditAdministratorComponent;
  let fixture: ComponentFixture<CreateEditAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
