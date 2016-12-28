import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos; 
  todoText;

  constructor() { }

  ngOnInit() {
    this.todos = [
      {text: 'Pickup kids at school'},
      {text: 'Meeting with boss'},
      {text: 'Dinner with wife'}

    ]
  }

  addTodo(){

    console.log(this.todoText);
    this.todos.push({text:this.todoText}); 

  }

  deleteTodo(delText){
    for(var i=0 ; i<this.todos.length; i++){
      if(this.todos[i].text == delText){
          this.todos.splice(i,1); 
      }
    }


  }

}
