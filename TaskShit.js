/* 
The prompt for this was creating by CHATGPT; The prompt follows:

Write a function that takes in a list of tasks, where each task has dependencies on other tasks, and returns a sequence in which the tasks can be completed. 
If the tasks have circular dependencies, the function should detect and handle them.

This is a work in progress as of 11/26/2024
*/

const tasks = [
    { name: "A", dependsOn: [], task: "change tires on the shitty honda civic sitting on cinderblocks in the front yard", done: false},
    { name: "B", dependsOn: ["A"], task: "jack off", done: false},
    { name: "C", dependsOn: ["B"], task: "sell crack", done: false},
    { name: "D", dependsOn: ["A", "B", "C"], task: "kill myself", done: false},
  ];

function taskChecker(inputTasks = tasks) { //default value is the tasks from earlier

}
taskChecker
