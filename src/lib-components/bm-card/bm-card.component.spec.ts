import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmCardComponent } from './bm-card.component';

describe('BmCardComponent', () => {
  let component: BmCardComponent;
  let fixture: ComponentFixture<BmCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmCardComponent]
    });
    fixture = TestBed.createComponent(BmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
