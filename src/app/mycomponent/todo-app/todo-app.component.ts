import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  @Input()
  todo!: Todo;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); 
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
    
  }
  onclick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("onclick has been triggered")
  }

  onCheckBoxlick(_todo: any) {
  this.todoCheckbox.emit(_todo);
  }
}
