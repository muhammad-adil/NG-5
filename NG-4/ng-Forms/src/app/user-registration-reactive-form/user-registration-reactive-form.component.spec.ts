import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationReactiveFormComponent } from './user-registration-reactive-form.component';

describe('UserRegistrationReactiveFormComponent', () => {
  let component: UserRegistrationReactiveFormComponent;
  let fixture: ComponentFixture<UserRegistrationReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistrationReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
