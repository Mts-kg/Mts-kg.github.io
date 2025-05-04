const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const emptyMessage = document.getElementById('emptyMessage');
const taskCount = document.getElementById('taskCount');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remover";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => {
    li.remove();
    updateUI();
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  updateUI();
}

function updateUI() {
  const taskItems = taskList.children.length;
  emptyMessage.style.display = taskItems === 0 ? 'block' : 'none';
  taskCount.textContent = `Tarefas: ${taskItems}`;
}

updateUI();
