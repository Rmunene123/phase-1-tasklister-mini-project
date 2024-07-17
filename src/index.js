document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks-list');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // add the input values
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;
    const prioritySelect = document.getElementById('priority-select');
    const priority = prioritySelect.value;

    // Create new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;
    taskItem.dataset.priority = priority;

    switch (priority) {
      case 'high':
        taskItem.classList.add('priority-high');
        break;
      case 'medium':
        taskItem.classList.add('priority-medium');
        break;
      case 'low':
        taskItem.classList.add('priority-low');
        break;
      default:
        break;
    }

    // Adding  a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      taskItem.remove();
    });
    taskItem.appendChild(deleteButton);

    // Append task to the task list
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = '';
  });

});