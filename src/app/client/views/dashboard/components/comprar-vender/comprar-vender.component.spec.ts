import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarVenderComponent } from './comprar-vender.component';

describe('ComprarVenderComponent', () => {
  let component: ComprarVenderComponent;
  let fixture: ComponentFixture<ComprarVenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprarVenderComponent]
    });
    fixture = TestBed.createComponent(ComprarVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
