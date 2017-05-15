/*It adds the task to the array.
It prints a message indicating the insertion.
It returns the number of elements in the list after the insertion.*/

// Iteration 1
// 1. Create an array of strings

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

let myArray: Array<string> = ['buy food','fix phone','call home'];

function addTask(task):void {
    myArray.push(this.task);
    console.log('=========== NEW TASK =========== Task ' + task + 'added to the list');
    console.log('Number of items:' + myArray.length);

  }

// 3. Create a function to list all tasks, it must show in the console de task.
  function listAllTasks():void {
    for (let i of myArray) {
  console.log(i);
}
  }

// 4. Create a function to delete a task, you must find the task inside the array and delete it.


function deleteTask(task):void {
  let index = myArray.indexOf(task);
  myArray.splice(index, 1);
  console.log("=========== TASK REMOVED =========== Task " + task);
  console.log("removed from the list");
}

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
