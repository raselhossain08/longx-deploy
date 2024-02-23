import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipWalletComponent } from './clip-wallet.component';

describe('ClipWalletComponent', () => {
  let component: ClipWalletComponent;
  let fixture: ComponentFixture<ClipWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClipWalletComponent]
    });
    fixture = TestBed.createComponent(ClipWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
