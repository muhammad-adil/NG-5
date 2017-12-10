import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodosComponent} from '../todos/todos.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  @Input() index:number = 0 ; 
  @Output() deleteTodoEventEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }
  ngOnInit() { }

  confirmDeleteTodo(index) {
    this.deleteTodoEventEmitter.emit(index);
  }

}
