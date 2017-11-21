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
    // text;
    // todos;
    // todoText;
    ngOnInit(){
      // this.todos = [{ text: 'Todo 1'}, { text: 'Todo 2'}, { text: 'Todo 3'} ];
    }
    //@Input() updatedTodoText;
    
    // addTodo() {
    //   this.todos.push({ text: this.text });
    // }

    // deleteTodo(todoText) {
    //   for ( let i = 0; i < this.todos.length; i++) {
    //     if ( this.todos[i].text === todoText) {
    //       this.todos.splice(i , 1);
    //     }
    //   }
    // }
    
    // receiveUpdatedTodo($event, todoText) {
    //   //this.todoText = $event
    //   console.log('update event*************' , $event , todoText )
    //   for ( let i = 0; i < this.todos.length; i++) {
    //     if ( this.todos[i].text === todoText) {
    //       this.todos[i] = $event;
    //     }

    //   }
    // }

    modal = false;
    todos: Array<string> = ['Test','iii'];
    todo: string;
    currentTodoIndex: number = null;
  
    addTodo() {
      this.todos.push(this.todo);
      console.log('new todo', this.todo);
      this.todo = '';
    }
  
    editTodo(index: number, todoObject) {
      this.modal = !this.modal;
      this.currentTodoIndex = index;
      this.todo = this.todos[index];
      //console.log('todos in' , this.todo)
      //console.log('in todoscomponent edit todo' ,  this.todo)
    }
  
    updateTodo(todoObject , todoText) {
      this.modal = !this.modal
      this.todos[todoObject.index] = todoObject.task;
      this.currentTodoIndex = null;
      //this.showUpdate = false;
      // this.todo = '' ;
    }
  
    // deleteTodo(todo: string) {
    deleteTodo(todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
  }    
}
