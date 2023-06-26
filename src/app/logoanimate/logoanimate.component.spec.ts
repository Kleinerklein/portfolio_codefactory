import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoanimateComponent } from './logoanimate.component';

describe('LogoanimateComponent', () => {
  let component: LogoanimateComponent;
  let fixture: ComponentFixture<LogoanimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoanimateComponent]
    });
    fixture = TestBed.createComponent(LogoanimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
