import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTCComponent } from './otc.component';

describe('OTCComponent', () => {
  let component: OTCComponent;
  let fixture: ComponentFixture<OTCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OTCComponent]
    });
    fixture = TestBed.createComponent(OTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
