document.addEventListener("DOMContentLoaded", function () {
    const storedTasks = localStorage.getItem('tasks');
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(taskText, save = true) {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Enter a task:");
            return;
        }
        const li = document.createElement("li");
        li.textContent = taskText;

        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");

        btn.onclick = function () {
            taskList.removeChild(li);
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const newTasks = storedTasks.filter((task) => task != taskText)
            localStorage.setItem('tasks', JSON.stringify(newTasks));
        };

        li.appendChild(btn);
        taskList.appendChild(li);
        taskInput.value = "";

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    addButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        addTask(taskText)
    });
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }

    });
    loadTasks();
});