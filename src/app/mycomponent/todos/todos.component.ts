import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'my_app',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // export class TodosComponent{

  localItem: string | null ;
  todos: Todo[];
  constructor(){ 
     
    this.localItem = localStorage.getItem("todos"); 
    if (this.localItem == null){
    this.todos =[
      // {
      //   sno: 1,
      //   title : "this is title1",
      //   desc: "description for 1",
      //   active : true
      // },
      // {
      //   sno: 2,
      //   title : "this is title2",
      //   desc: "description for 2",
      //   active : true
      // },
      // {
      //   sno: 3,
      //   title : "this is title3",
      //   desc: "description for 3",
      //   active : true
      // },
      // {
      //   sno: 4,
      //   title : "this is title4",
      //   desc: "description for 4",
      //   active : true
      // }
    ]
  }
  else{
    this.todos = JSON.parse(this.localItem);
  }
}
  ngOnInit(): void {

  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    // console.log(index);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  Todoadd(todo: Todo){
    console.log(todo);
    // const index = this.todos.indexOf(todo);
    // console.log(index);
    this.todos.push(todo )
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  
  Todotoggle (todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    // console.log(index);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
