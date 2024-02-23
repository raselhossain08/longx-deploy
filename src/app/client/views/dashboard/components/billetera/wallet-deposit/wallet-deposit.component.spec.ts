import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletDepositComponent } from './wallet-deposit.component';

describe('WalletDepositComponent', () => {
  let component: WalletDepositComponent;
  let fixture: ComponentFixture<WalletDepositComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalletDepositComponent]
    });
    fixture = TestBed.createComponent(WalletDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
