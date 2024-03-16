import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModal3Component } from './my-modal3.component';

describe('MyModal3Component', () => {
  let component: MyModal3Component;
  let fixture: ComponentFixture<MyModal3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyModal3Component]
    });
    fixture = TestBed.createComponent(MyModal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
