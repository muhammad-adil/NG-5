import { Component, OnInit } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }
    todos;
    text;

  ngOnInit() {
    this.todos = [{ text: 'Todo 1'}, { text: 'Todo 2'}, { text: 'Todo 3'} ];
  }

    addTodo() {
      this.todos.push({ text: this.text });
    }

    deleteTodo(todoText) {
      for ( let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].text === todoText) {
          this.todos.splice(i , 1);
        }
      }
      // this.todos.delete({text:this.text});
    }

    editTodo(todo) {
      this.text = todo.text;
    }

}
