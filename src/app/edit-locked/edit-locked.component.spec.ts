import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLockedComponent } from './edit-locked.component';

describe('EditLockedComponent', () => {
  let component: EditLockedComponent;
  let fixture: ComponentFixture<EditLockedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLockedComponent]
    });
    fixture = TestBed.createComponent(EditLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
