const tasksF = document.getElementById("tasks");
const addtaskBtn = document.getElementById("add-task");
const status = Object.freeze({
    pending:"pending",
    in_progress:"in progress",
    completed:"completed"
});
let myTasks =[
    {
        taskName:"firstTask",
        discription:"blablabla",
        taskId:1
    }
]
