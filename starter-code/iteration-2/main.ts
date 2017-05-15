// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.

// Execution

class Todo implements TodoInterface {
   myArray: Array<string> = [];

    addTask(task:string):void{
      this.myArray.push(task);
      console.log('=========== NEW TASK =========== Task ' + task + ' added to the list');
      console.log('Number of items: ' + this.myArray.length);
    }

    listAllTasks():void{
      for (let i in this.myArray) {
    console.log(this.myArray[i]);
    }
  }

    deleteTask(task:string):void{
      let index = this.myArray.indexOf(task);
      this.myArray.splice(index, 1);
    }
}

let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
