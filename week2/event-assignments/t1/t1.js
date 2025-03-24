// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here



const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('form');
const input = document.querySelector('input');

function renderTodoList() {
  ul.innerHTML = '';

  todoList.forEach(item => {
    const li = document.createElement('li');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed;

    // Create label
    const label = document.createElement('label');
    label.htmlFor = `todo-${item.id}`;
    label.textContent = item.task;
    if (item.completed) {
      label.style.textDecoration = 'line-through';
    }

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    // Append elements to li
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);

    // Append li to ul
    ul.appendChild(li);

    // Event listener for checkbox - updates completion status
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      label.style.textDecoration = item.completed ? 'line-through' : 'none';
      console.log('Updated todoList:', todoList);
    });

    // Event listener for delete button
    deleteBtn.addEventListener('click', () => {
      const index = todoList.findIndex(todo => todo.id === item.id);
      if (index !== -1) {
        todoList.splice(index, 1);
        ul.removeChild(li);
        console.log('Updated todoList:', todoList);
      }
    });
  });
}

// Event listener for Add Todo Item button
addBtn.addEventListener('click', () => {
  dialog.showModal();
});

// Event listener for form submission (adding new item)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value.trim();

  if (task) {
    // Generate new ID (max existing ID + 1)
    const newId = todoList.length > 0 ? Math.max(...todoList.map(item => item.id)) + 1 : 1;

    // Create new todo item
    const newItem = {
      id: newId,
      task: task,
      completed: false
    };

    // Add to array and re-render
    todoList.push(newItem);
    renderTodoList();

    // Reset and close dialog
    input.value = '';
    dialog.close();

    console.log('Updated todoList:', todoList);
  }
});

// Close dialog when clicking outside of it
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
});

// Initial render
renderTodoList();