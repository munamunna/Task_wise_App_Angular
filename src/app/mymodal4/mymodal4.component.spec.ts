import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mymodal4Component } from './mymodal4.component';

describe('Mymodal4Component', () => {
  let component: Mymodal4Component;
  let fixture: ComponentFixture<Mymodal4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mymodal4Component]
    });
    fixture = TestBed.createComponent(Mymodal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
