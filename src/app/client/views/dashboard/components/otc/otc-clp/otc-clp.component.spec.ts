import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtcClpComponent } from './otc-clp.component';

describe('OtcClpComponent', () => {
  let component: OtcClpComponent;
  let fixture: ComponentFixture<OtcClpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtcClpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtcClpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
