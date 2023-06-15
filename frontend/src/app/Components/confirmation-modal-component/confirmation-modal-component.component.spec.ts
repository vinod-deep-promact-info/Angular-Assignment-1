import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationModalComponentComponent } from './confirmation-modal-component.component';

describe('ConfirmationModalComponentComponent', () => {
  let component: ConfirmationModalComponentComponent;
  let fixture: ComponentFixture<ConfirmationModalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationModalComponentComponent]
    });
    fixture = TestBed.createComponent(ConfirmationModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
