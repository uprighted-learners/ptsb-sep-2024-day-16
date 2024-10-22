let tasks = ["task 1", "task 2", "task 3", "task 4", "task 5"];

// add a task
function addTask() {
    let newTask = prompt("Enter a new task:");
    if (newTask) {
        tasks.push(newTask)
        console.log(tasks)
    } else {
        alert("Please enter a task")
        addTask();
    }
}

// remove a task
function removeTask() {
    let taskToRemove = prompt("Enter the task you want to remove:");
    console.log("task to remove: ", taskToRemove);
    let index = tasks.indexOf(taskToRemove);
    console.log("index of task to remove: ", index);

    if (index === -1) {
        alert("Task not found");
        removeTask();
    } else {
        tasks.splice(index, 1);
        console.log("updated list: ", tasks);
    }
}

// show all tasks
function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks to display.")
    } else {
        console.log("Tasks: ", tasks);
    }
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`)
    }
}

// number of tasks
function showTaskCount() {
    console.log(`You have ${tasks.length} task${tasks.length !== 1 ? "s" : ""} in your list.`);
}

// function to start the application
function startApp() {
    let action;
    do {
        action = prompt(
            "What do you want to do?\n" +
            "1. Add a task\n" +
            "2. Remove a task\n" +
            "3. Show all tasks\n" +
            "4. Show the number of tasks\n" +
            "5. Exit"
        );

        switch (action) {
            case "1":
                addTask();
                break;
            case "2":
                removeTask();
                break;
            case "3":
                displayTasks();
                break;
            case "4":
                showTaskCount();
                break;
            case "5":
                console.log("Exiting the application.");
                break;
            default:
                console.log("Please enter a valid option of 1 through 5.")
        }
    } while (action !== "5");
}

startApp();