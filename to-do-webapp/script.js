function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === "") return;

  const timestamp = new Date().toLocaleString();
  const li = createTaskElement(taskText, timestamp, false);

  document.getElementById('pendingList').appendChild(li);
  input.value = "";
}
function createTaskElement(text, time, isCompleted) {
  const li = document.createElement('li');
  if (isCompleted) li.classList.add('completed');
    const taskInfo = document.createElement('span');
   taskInfo.innerText = `${text} (${time})`;
  const btns = document.createElement('div');
  btns.className = 'task-buttons';
    const completeBtn = document.createElement('button');
  completeBtn.innerText = isCompleted ? "Undo" : "Complete";
  completeBtn.onclick = () => {
      li.remove();
    const newLi = createTaskElement(text, time, !isCompleted);
        document.getElementById(isCompleted ? 'pendingList' : 'completedList').appendChild(newLi);
  };
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = () => li.remove();
  btns.appendChild(completeBtn);
  btns.appendChild(deleteBtn);
  li.appendChild(taskInfo);
  li.appendChild(btns);

  return li;
}
