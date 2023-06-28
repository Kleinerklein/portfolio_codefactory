import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorobjectComponent } from './colorobject.component';

describe('ColorobjectComponent', () => {
  let component: ColorobjectComponent;
  let fixture: ComponentFixture<ColorobjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorobjectComponent]
    });
    fixture = TestBed.createComponent(ColorobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
