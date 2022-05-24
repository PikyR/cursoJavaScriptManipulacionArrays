const tasks = [
  { name: 'Tarea 1', done: false},
  { name: 'Tarea 2', done: true},
  { name: 'Tarea 3', done: true},
  { name: 'Tarea 4', done: false},
];

const taskList = document.getElementById('taskList');

tasks.forEach( task => {
  let status;
  if (task.done) {
    status = "checked";
  } else {
    status = "";
  }

  taskList.innerHTML += `
    <label for="${task.name}">
      <input type="checkbox" name="ej" ${status}/>
      ${task.name}
    </label>
    <br>
  `
})