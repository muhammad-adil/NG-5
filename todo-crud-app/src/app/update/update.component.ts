import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import {TodosComponent} from '../todos/todos.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  @Input() task: string = '';
  @Input() index: number = 0;
  @Output('edit') editTodoEventEmitter: EventEmitter<object> = new EventEmitter();
 
  //updateTodo
  updateTodo(index, task ) {
    this.editTodoEventEmitter.next({index: this.index, task: this.task});
    
    console.log('in updateTodo', {index: this.index, task: this.task}); 
  }

////deleteTodo(task: string) {
//   deleteTodo(index: number) {
//     // this.deleteTodoEventEmitter.next(task);
//     this.deleteTodoEventEmitter.next(index);
//     console.log('inside delete todo' , index )
// }
}
