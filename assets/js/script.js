var formEL = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event){
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //creates list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = 'task-info';
    //adds HTML content into div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
    //add div into a list item
    listItemEl.appendChild(taskInfoEl);
    //add list item to entire list
    tasksToDoEl.appendChild(listItemEl);

};

formEL.addEventListener("submit", createTaskHandler);




