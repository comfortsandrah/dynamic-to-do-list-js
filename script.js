document.addEventListener("DOMContentLoaded",function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList =document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (!taskText) {
            alert("Enter a task:");   
        }else{
            const li = document.createElement("li");
            li.textContent = taskText;
            const btn = document.createElement("button");
            btn.textContent = "Remove";
            btn.className = "remove-btn";
            btn.addEventListener("click",function () {
                taskList.removeChild(li);                
            })
            li.appendChild(btn);
            taskList.appendChild(li);
            taskInput.value = "";
        }
        
    }

    

    addButton.addEventListener("click",addTask);    
    taskInput.addEventListener("keypress",function (event) {
        if (event.key === "Enter") {
            addTask();            
        }

    })
})