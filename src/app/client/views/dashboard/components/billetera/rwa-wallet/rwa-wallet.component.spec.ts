import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwaWalletComponent } from './rwa-wallet.component';

describe('RwaWalletComponent', () => {
  let component: RwaWalletComponent;
  let fixture: ComponentFixture<RwaWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RwaWalletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RwaWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
