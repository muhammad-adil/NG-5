import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodosComponent} from '../todos/todos.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  @Input() task = '' ;
  @Input() todo = '' ;

  @Input() index = 0 ;
  @Input() currentTodoIndex: number;

  @Output() deleteTodoEventEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }
  ngOnInit() { }

  ConfirmDeleteTodo(index) {
    this.deleteTodoEventEmitter.emit(index);
    console.log('In delete component', index );
  }

}
