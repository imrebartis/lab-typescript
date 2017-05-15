// Add the reference to the interface
import {TodoItemInterface,TodoListInterface} from "./interfaces";
// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  constructor (public taskTitle: string) {}

  updatedAt: Date;
  status: boolean = false;

  toggleStatus():void {
    if (this.status === false) {
      this.status = true;
    }
    else {
      this.status = false;
    }

    this.updatedAt = new Date(new Date().getDate());
  }
}

class TodoList implements TodoListInterface {
    todoItems: Array<TodoItem> = [];

   addTask(task):void{
     this.todoItems.push(task);
     console.log('=========== NEW TASK =========== Task ' + task + ' added to the list');
     console.log('Number of items: ' + this.todoItems.length);
   }

   listAllTasks():void{
     for (let i in this.todoItems) {
   console.log(this.todoItems[i]);
   }
 }

   deleteTask(task:string):void{
     let index = this.todoItems.indexOf(task);
     this.todoItems.splice(index, 1);
   }
}

// Create class TodoList that implements the corresponding interface

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3.taskTitle));
console.log("Number of items:", myTodos.deleteTask(task4.taskTitle));
console.log("Number of items:", myTodos.deleteTask(task5.taskTitle));
//myTodos.listUncomplete();
