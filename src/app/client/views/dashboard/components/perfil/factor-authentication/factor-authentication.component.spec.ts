import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorAuthenticationComponent } from './factor-authentication.component';

describe('FactorAuthenticationComponent', () => {
  let component: FactorAuthenticationComponent;
  let fixture: ComponentFixture<FactorAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactorAuthenticationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactorAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
