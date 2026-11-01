import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candles } from './candles';

describe('Candles', () => {
  let component: Candles;
  let fixture: ComponentFixture<Candles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Candles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Candles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
