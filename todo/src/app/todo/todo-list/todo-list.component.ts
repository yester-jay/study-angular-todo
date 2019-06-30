import { Component, OnInit } from '@angular/core';

export interface Section {
  title: string;
  due: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todo: Section[] = [
    {
      title: 'work - FXXXXX',
      due: new Date('7/10/19')
    },
    {
      title: 'homework - angular',
      due: new Date('7/10/19')
    },
    {
      title: 'eat',
      due: new Date('7/10/19')
    }
  ];
  done: Section[] = [
    {
      title: 'angular study',
      due: new Date('7/8/19')
    },
    {
      title: 'git hell',
      due: new Date('7/1/19')
    },
    {
      title: 'angular folder generate',
      due: new Date('6/30/19')
    },
    {
      title: 'work hard',
      due: new Date('6/28/19')
    },
    {
      title: 'FXXXXX',
      due: new Date('6/26/19')
    }
  ]

}
