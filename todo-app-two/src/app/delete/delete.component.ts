import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodosComponent} from '../todos/todos.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  
  @Input() task:string = '' ;
  @Input() todo:string = '' ;

  @Input() index: number = 0 ;
  @Input() currentTodoIndex: number;

  @Output('delete') deleteTodoEventEmitter: EventEmitter<number> = new EventEmitter();


  ConfirmDeleteTodo(index) {
    this.deleteTodoEventEmitter.emit(this.index);
    console.log('In delete component', this.index );
  }

}
