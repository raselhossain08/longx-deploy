import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInformationComponent } from './users-information.component';

describe('UsersInformationComponent', () => {
  let component: UsersInformationComponent;
  let fixture: ComponentFixture<UsersInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
