import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtcUsdtComponent } from './otc-usdt.component';

describe('OtcUsdtComponent', () => {
  let component: OtcUsdtComponent;
  let fixture: ComponentFixture<OtcUsdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtcUsdtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtcUsdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
