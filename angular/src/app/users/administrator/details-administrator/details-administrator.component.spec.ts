import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdministratorComponent } from './details-administrator.component';

describe('DetailsAdministratorComponent', () => {
  let component: DetailsAdministratorComponent;
  let fixture: ComponentFixture<DetailsAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
