/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BmIconComponent } from './bm-icon.component';

describe('BmIconComponent', () => {
  let component: BmIconComponent;
  let fixture: ComponentFixture<BmIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
