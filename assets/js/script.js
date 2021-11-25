var formEL = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event){
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.textContent = "new task";
    listItemEl.className = "task-item";
    tasksToDoEl.appendChild(listItemEl);
};

formEL.addEventListener("click", createTaskHandler);




