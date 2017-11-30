import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() task:string = '';
  @Input() todos;
  @Input() todo;

  @Input() index: number = 0;
  @Input() currentTodoIndex: number = null;
  @Output('edit') editTodoEventEmitter: EventEmitter<object> = new EventEmitter();
  
  //updateTodo
  updateTodo( index, task, todo, todos ){
    this.currentTodoIndex = index;
    this.todo = this.todos[index];
    this.editTodoEventEmitter.next({ index:this.index, task: this.task });
    console.log('in updateTodo', {index: this.index, task: this.task}); 
    }
}
