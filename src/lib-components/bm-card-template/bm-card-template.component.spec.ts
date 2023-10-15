import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmCardTemplateComponent } from './bm-card-template.component';

describe('BmCardTemplateComponent', () => {
  let component: BmCardTemplateComponent;
  let fixture: ComponentFixture<BmCardTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmCardTemplateComponent]
    });
    fixture = TestBed.createComponent(BmCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
