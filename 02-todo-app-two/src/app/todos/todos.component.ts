import { Component, OnInit } from '@angular/core';

import { UpdateComponent } from '../update/update.component';
import { ModalComponent } from '../modal/modal.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	modal: boolean = false;
	updateModal: boolean = false;
	todos: Array<string> = ['Todo-1', 'Todo-2', 'Todo-3', 'Todo-4'];
	todo: string;
	index:number;
	currentTodoIndex: number;
  

	constructor() {
		//this.index = 0 ;
	}

	ngOnInit() {}

	// addTodo
	addTodo() {
		this.todos.push(this.todo);
		console.log('AddTodo function worked, New Todo is ->', this.todo);
		this.todo = '';
	}

	//editTodo(){
	editTodo(index: number, todoObject: Array<object>) {
		this.currentTodoIndex = index;
		this.todo = this.todos[index];
		this.updateModal = !this.updateModal;
		console.log('editTodo function in TodosComponent', this.todo);
	}

	//updateTodo
	updateTodo(todoObject) {
		this.updateModal = !this.updateModal;
		this.todo = '';
		this.todos[todoObject.index] = todoObject.task;
		console.log('updateTodo function', todoObject);
		this.currentTodoIndex = null;
		this.todo = '';
	}

	//deleteTodo
	deleteTodo(index) {
		// this.modal = !this.modal;
		let currentTodoIndex = this.todos.indexOf(this.todo);
		this.todos.splice(currentTodoIndex, 1);
		//index = currentTodoIndex; 
		this.modal = !this.modal;
	}

	modalToggle(index) {
		this.modal = !this.modal;
	}
}
