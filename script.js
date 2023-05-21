// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('count');

// Initialize task counter
let counter = 0;

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', completeTask);

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = '';
        counter++;
        updateTaskCount();
    }
}

// Function to delete a task
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
    counter--;
    updateTaskCount();
}

// Function to mark a task as completed
function completeTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('completed');
}

// Function to update the task count
function updateTaskCount() {
    taskCount.textContent = counter;
}

// Add event listener to the add button
addButton.addEventListener('click', addTask);