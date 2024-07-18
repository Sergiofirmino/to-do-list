function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;
    if (taskText === '') return;

    const tasksList = document.getElementById('tasks-list');

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => taskItem.remove();

    taskItem.appendChild(deleteButton);
    tasksList.appendChild(taskItem);

    taskItem.onclick = () => taskItem.classList.toggle('done');

    taskInput.value = '';
}
