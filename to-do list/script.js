let tasks = [];

window.onload = function () {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
};

function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    input.value = '';
    saveTasks();
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task' + (task.completed ? ' completed' : '');

    li.innerHTML = `
      <div>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
        <span>${task.text}</span>
      </div>
      <button onclick="deleteTask(${index})">🗑️</button>
    `;

    list.appendChild(li);
  });
}
