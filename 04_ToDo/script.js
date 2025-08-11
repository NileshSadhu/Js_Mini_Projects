document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("task-btn");
    const todoList = document.getElementById("task-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => renderTask(task));

    addTaskButton.addEventListener("click", () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };
        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        todoInput.value = "";
    });

    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        li.className = "flex justify-between items-center bg-blue-100 rounded px-4 py-2 mb-2 cursor-pointer";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = task.text;
        if (task.completed) taskSpan.classList.add("line-through");

        taskSpan.addEventListener("click", () => {
            task.completed = !task.completed;
            taskSpan.classList.toggle("line-through");
            saveTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.className = "text-red-500 hover:text-red-700";
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks = tasks.filter((t) => t.id !== task.id);
            li.remove();
            saveTasks();
        });

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
