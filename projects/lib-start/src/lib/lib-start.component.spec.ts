import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibStartComponent } from './lib-start.component';

describe('LibStartComponent', () => {
  let component: LibStartComponent;
  let fixture: ComponentFixture<LibStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibStartComponent]
    });
    fixture = TestBed.createComponent(LibStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
