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


// main functions

function updateTodoList() {
  ul.innerHTML = '';

  todoList.forEach(item => {
    const li = createTodoItem(item);
    ul.appendChild(li);
  });
}

// Helper functions
function createTodoItem(item) {
  const li = document.createElement('li');

  const checkbox = createCheckbox(item);
  const label = createLabel(item);
  const deleteBtn = createDeleteButton(item, li);

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  return li;
}

// fyncution to create checkbox
function createCheckbox(item) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${item.id}`;
  checkbox.checked = item.completed;

  checkbox.addEventListener('change', () => {
    item.completed = checkbox.checked;
    const label = document.querySelector(`label[for="todo-${item.id}"]`);
    label.style.textDecoration = item.completed ? 'line-through' : 'none';
    console.log('Updated todoList:', todoList);
  });

  return checkbox;
}

// fyncution to create label
function createLabel(item) {
  const label = document.createElement('label');
  label.htmlFor = `todo-${item.id}`;
  label.textContent = item.task;

  if (item.completed) {
    label.style.textDecoration = 'line-through';
  }

  return label;
}

// fyncution to create delete button
function createDeleteButton(item, li) {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    const index = todoList.findIndex(todo => todo.id === item.id);
    if (index !== -1) {
      todoList.splice(index, 1);
      ul.removeChild(li);
      console.log('Updated todoList:', todoList);
    }
  });

  return deleteBtn;
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
    updateTodoList();

    // Reset and close dialog
    input.value = '';
    dialog.close();
    console.log('Updated todoList:', todoList);
  }
});


// Initial  updating of todo list
document.addEventListener('DOMContentLoaded', () => {
  updateTodoList();
});
