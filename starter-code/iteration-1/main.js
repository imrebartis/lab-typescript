var myArray = ['buy food', 'fix phone', 'call home'];
function addTask(task) {
    myArray.push(this.task);
    console.log('=========== NEW TASK =========== Task ' + task + 'added to the list');
    console.log('Number of items:' + myArray.length);
}
function listAllTasks() {
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var i = myArray_1[_i];
        console.log(i);
    }
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    myArray.splice(index, 1);
    console.log("=========== TASK REMOVED =========== Task " + task);
    console.log("removed from the list");
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
