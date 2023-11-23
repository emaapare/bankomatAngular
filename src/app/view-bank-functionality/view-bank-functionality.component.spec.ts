import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBankFunctionalityComponent } from './view-bank-functionality.component';

describe('ViewBankFunctionalityComponent', () => {
  let component: ViewBankFunctionalityComponent;
  let fixture: ComponentFixture<ViewBankFunctionalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBankFunctionalityComponent]
    });
    fixture = TestBed.createComponent(ViewBankFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
