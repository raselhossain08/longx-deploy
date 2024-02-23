import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdtDepositComponent } from './usdt-deposit.component';

describe('UsdtDepositComponent', () => {
  let component: UsdtDepositComponent;
  let fixture: ComponentFixture<UsdtDepositComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsdtDepositComponent]
    });
    fixture = TestBed.createComponent(UsdtDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
