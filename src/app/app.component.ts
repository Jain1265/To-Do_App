import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwd-todo-list';
  constructor (){
  setTimeout(() => {
    this.title = 'cwh-todo-list';
  }, 2000);
}
}
