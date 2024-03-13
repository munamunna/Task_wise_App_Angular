import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDueTodosComponent } from './all-due-todos.component';

describe('AllDueTodosComponent', () => {
  let component: AllDueTodosComponent;
  let fixture: ComponentFixture<AllDueTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDueTodosComponent]
    });
    fixture = TestBed.createComponent(AllDueTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
