import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }
    ngOnInit(){
      // this.todos = [{ text: 'Todo 1'}, { text: 'Todo 2'}, { text: 'Todo 3'} ];
    }

    modal:boolean = false;
    todos: Array<string> = ['Test', 'Test 2', 'Test 3'];
    todo: string;
    currentTodoIndex: number = null;
  
    //addTodo
    addTodo() {
      this.todos.push(this.todo);
      console.log('new todo', this.todo);
      this.todo = '';
    }
  
    //editTodo
    editTodo(index: number, todoObject) {
      this.currentTodoIndex = index;
      this.todo = this.todos[index];
      this.modal = !this.modal;
      console.log('todos in' , this.todo)
      }
    
    //updateTodo
    updateTodo(todoObject) {
      this.modal = !this.modal
      this.todo = '' ;
      this.todos[todoObject.index] = todoObject.task;
      console.log('yes em in update', todoObject);
      this.currentTodoIndex = null;
      this.todo = '' ;
    }
  
    //deleteTodo
    deleteTodo(todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
  }    
}
