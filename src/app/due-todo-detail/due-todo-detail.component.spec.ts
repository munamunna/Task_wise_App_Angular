import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueTodoDetailComponent } from './due-todo-detail.component';

describe('DueTodoDetailComponent', () => {
  let component: DueTodoDetailComponent;
  let fixture: ComponentFixture<DueTodoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DueTodoDetailComponent]
    });
    fixture = TestBed.createComponent(DueTodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
