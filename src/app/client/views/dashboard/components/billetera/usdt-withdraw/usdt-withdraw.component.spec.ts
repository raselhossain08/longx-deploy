import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdtWithdrawComponent } from './usdt-withdraw.component';

describe('UsdtWithdrawComponent', () => {
  let component: UsdtWithdrawComponent;
  let fixture: ComponentFixture<UsdtWithdrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsdtWithdrawComponent]
    });
    fixture = TestBed.createComponent(UsdtWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
