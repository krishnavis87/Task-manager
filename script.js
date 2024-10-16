
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var taskInput = document.getElementById('task-input');
    var taskDueDate = document.getElementById('task-due-date');
  
    var taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskInput.value}</span>
      <span>${taskDueDate.value}</span>
      <button class="complete-btn">Mark Complete</button>
      <button class="delete-btn">Delete</button>
    `;
  

    var completeBtn = taskItem.querySelector('.complete-btn');
    var deleteBtn = taskItem.querySelector('.delete-btn');
  
    completeBtn.addEventListener('click', function() {
      taskItem.classList.toggle('completed');
    });
  
    deleteBtn.addEventListener('click', function() {
      taskItem.remove();
    });
  

    document.getElementById('task-list').appendChild(taskItem);
  
    taskInput.value = '';
    taskDueDate.value = '';
  });
  
