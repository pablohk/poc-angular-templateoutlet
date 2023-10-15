import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmCardTemplateOutletComponent } from './bm-card-template-outlet.component';

describe('BmCardTemplateOutletComponent', () => {
  let component: BmCardTemplateOutletComponent;
  let fixture: ComponentFixture<BmCardTemplateOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmCardTemplateOutletComponent]
    });
    fixture = TestBed.createComponent(BmCardTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
