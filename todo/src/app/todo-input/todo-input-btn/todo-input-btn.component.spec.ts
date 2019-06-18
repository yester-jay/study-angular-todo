import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputBtnComponent } from './todo-input-btn.component';

describe('TodoInputBtnComponent', () => {
  let component: TodoInputBtnComponent;
  let fixture: ComponentFixture<TodoInputBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInputBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
