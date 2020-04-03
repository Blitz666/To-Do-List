const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const todosList = document.getElementById("todosList");

addTaskButton.addEventListener("click", () => {
  console.log(taskInput.value);
  if (taskInput.value !== "") {
    const newTask = { description: taskInput.value, done: false };
    addTask(newTask).then((res) => {
      taskInput.value = "";
      fireGetAllTasks();
    });
  }
});

const fireGetAllTasks = () => {
  getAllTasks().then((tasks) => {
    generateList(tasks);
  });
};

fireGetAllTasks();

const fireDeleteTask = (task) => {
  deleteTask(task).then(() => {
    fireGetAllTasks();
  });
};

const generateList = (tasks) => {
  todosList.textContent = "";
  tasks.forEach((task) => {
    const newLi = document.createElement("li");
    newLi.textContent = `${task.description}`;
    const doneButton = document.createElement("button");
    doneButton.textContent = "done";
    doneButton.addEventListener("click", () => completeTask(task));
    newLi.appendChild(doneButton);
    const deleteButton = document.createElement("span");
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "trash-delete-icon.jpg";
    deleteIcon.width = "25";
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener("click", () => {
      fireDeleteTask(task);
    });

    newLi.appendChild(deleteButton);
    todosList.appendChild(newLi);
  });
};

// addTask(task).then(res => {
//   console.log(res);
// });

const completeTask = (task) => {
  console.log(task);
};
