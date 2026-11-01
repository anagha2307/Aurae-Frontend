import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCandle } from './view-candle';

describe('ViewCandle', () => {
  let component: ViewCandle;
  let fixture: ComponentFixture<ViewCandle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCandle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCandle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
