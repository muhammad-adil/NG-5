import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  modal = false;
}
