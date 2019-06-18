import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputTxtComponent } from './todo-input-txt.component';

describe('TodoInputTxtComponent', () => {
  let component: TodoInputTxtComponent;
  let fixture: ComponentFixture<TodoInputTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInputTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
