import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import {TodosComponent} from '../todos/todos.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
//  @Input() todo;
  @Output() updateTodoEvent = new EventEmitter();
  
  todotext = 'avccc' ; 

  constructor() { }
  ngOnInit() {  }
 
  // message = this.todoText;
  //text = this.todo.text; 
    sendUpdatedTodo(){
      this.updateTodoEvent.emit(this.todotext)
    }
    
  // sendMessage() {
  //   this.messageEvent.emit(this.message)
  // }

}
