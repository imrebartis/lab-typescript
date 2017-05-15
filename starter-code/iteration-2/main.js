"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.myArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log('=========== NEW TASK =========== Task ' + task + ' added to the list');
        console.log('Number of items: ' + this.myArray.length);
    };
    Todo.prototype.listAllTasks = function () {
        for (var i in this.myArray) {
            console.log(this.myArray[i]);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.myArray.indexOf(task);
        this.myArray.splice(index, 1);
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
