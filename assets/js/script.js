var formEL = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event){
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //checks if theirs any input before user submits
    if (!taskNameInput || !taskTypeInput){
        alert("You need to fill out the task form!");
        return false;
    }

    //resets any user input
    formEL.reset();

    //package data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send obj as an argument to createTaskEl 
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj){
    //creates list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = 'task-info';
    //adds HTML content into div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    
    //add div into a list item
    listItemEl.appendChild(taskInfoEl);
    //add list item to entire list
    tasksToDoEl.appendChild(listItemEl);
}

formEL.addEventListener("submit", taskFormHandler);




