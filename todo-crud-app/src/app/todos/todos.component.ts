import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }
    todos;
    text;

  ngOnInit() {
    this.todos = [{ text: 'Todo 1'},{ text: 'Todo 2'},{ text: 'Todo 3'},];
  }

    addTodo(){
      this.todos.push({ text: this.text });
    }

}
