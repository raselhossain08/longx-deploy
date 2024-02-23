import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdtWalletComponent } from './usdt-wallet.component';

describe('UsdtWalletComponent', () => {
  let component: UsdtWalletComponent;
  let fixture: ComponentFixture<UsdtWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsdtWalletComponent]
    });
    fixture = TestBed.createComponent(UsdtWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
