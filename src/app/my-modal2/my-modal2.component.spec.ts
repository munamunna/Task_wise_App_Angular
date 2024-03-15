import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModal2Component } from './my-modal2.component';

describe('MyModal2Component', () => {
  let component: MyModal2Component;
  let fixture: ComponentFixture<MyModal2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyModal2Component]
    });
    fixture = TestBed.createComponent(MyModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
