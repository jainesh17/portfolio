import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WePromoteComponent } from './we-promote.component';

describe('WePromoteComponent', () => {
  let component: WePromoteComponent;
  let fixture: ComponentFixture<WePromoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WePromoteComponent]
    });
    fixture = TestBed.createComponent(WePromoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
