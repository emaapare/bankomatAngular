import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankFunctionalityComponent } from './edit-bank-functionality.component';

describe('EditBankFunctionalityComponent', () => {
  let component: EditBankFunctionalityComponent;
  let fixture: ComponentFixture<EditBankFunctionalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBankFunctionalityComponent]
    });
    fixture = TestBed.createComponent(EditBankFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
