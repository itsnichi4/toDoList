import { b } from "../../../lib/builder";


export function createAddTaskForm() {
  const addTaskForm = b("div", {
    className: "add-task__container",
    children: [
      b("div", {
        className: "add-task-title__container",
        textContent: "Inbox",
      }),
      b("div", {
        className: "form__container",
        textContent: "Add task:",
        children: [
          b("form", {
            className: "add-task__form",
            addEventListener: ["submit", handleAddTaskFormSubmit],
            children: [
              b("label", {
                className: "task-name__label",
                textContent: "Task Name",
              }),
              b("input", {
                className: "task-name__label",
                name: "taskName",
              }),
              b("label", {
                className: "task-description__label",
                textContent: "Task Description",
              }),
              b("input", {
                className: "task-description__label",
                name: "taskDescription",
              }),
              b("label", {
                className: "task-date__label",
                textContent: "Date",
              }),
              b("input", {
                className: "task-description__label",
                name: "taskDate",
                type: "date",
              }),

              b("button", {
                className: "add-task__btn",
                value: "submit",
                type: "submit",
                innerText: "Add task",
              }),
              b("button", {
                className: "add-task-cancel__btn",
                innerText: "Cancel",
                addEventListener: [
                  "click",
                  (event) => {
                    event.preventDefault();
                    document.querySelector(
                      ".add-task__container"
                    ).style.display = "none";
                    document.querySelector(".inbox__hide").style.display =
                      "block";
                    document.querySelector(".add-task__form").reset();
                  },
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return addTaskForm;
}

function handleAddTaskFormSubmit(event) {
  event.preventDefault(); // prevent form from refreshing the page
  document.querySelector(".add-task__container").style.display = "none";
  document.querySelector(".inbox__hide").style.display = "block";
  // extract form data
  const formData = new FormData(event.target);
  const task = {
    name: formData.get("taskName"),
    description: formData.get("taskDescription"),
    date: formData.get("taskDate"),
    done: formData.get("isDone"),
  };

  // add new row to the task table
  addTaskToTable(task);
  // reset form fields
  event.target.reset();
}

function addTaskToTable(task) {
  // Create a unique ID for the task
  const taskId = Date.now().toString();

  // Create a new task object with the ID
  const newTask = {
    id: taskId,
    name: task.name,
    description: task.description,
    date: task.date,
    done: false, // set default value of done to false
  };

  // Add the task to local storage
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(storedTasks));

  // Create a new row for the task
  const newRow = b("tr", {
    children: [
      b("td", { textContent: task.name }),
      b("td", { textContent: task.description }),
      b("td", { textContent: task.date }),
      b("td", {
        children: [
          b("input", {
            type: "checkbox",
            checked: false, // set default value of checkbox to false
            onchange: () => {
              newTask.done = !newTask.done; // update task object with new value of done
              updateTaskStatus(newRow, newTask.done);

              // Update the task in local storage
              const storedTasks =
                JSON.parse(localStorage.getItem("tasks")) || [];
              const updatedTasks = storedTasks.map((storedTask) =>
                storedTask.id === taskId
                  ? { ...storedTask, done: newTask.done }
                  : storedTask
              );
              localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            },
          }),
          newTask.done
            ? b("span", { textContent: "Done ✓", className: "status-done" })
            : b("span", {
                textContent: "Not done X",
                className: "status-not-done",
              }),
        ],
      }),
      b("td", {
        children: [
          b("button", {
            textContent: "Remove",
            onclick: () => {
              // Remove the row from the table
              newRow.remove();

              // Remove the task from local storage
              const storedTasks =
                JSON.parse(localStorage.getItem("tasks")) || [];
              const updatedTasks = storedTasks.filter(
                (storedTask) => storedTask.id !== taskId
              );
              localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            },
          }),
        ],
      }),
    ],
  });

  // Append the new row to the table
  document.querySelector("tbody").appendChild(newRow);

  return newRow;
}

function updateTaskStatus(row, done) {
  // Get the checkbox and status elements
  const checkbox = row.querySelector("input[type=checkbox]");
  const status = row.querySelector("span");

  // Update the checkbox and status elements based on the done value
  checkbox.checked = done;
  status.textContent = done ? "Done ✓" : "Not done X";
  status.className = done ? "status-done" : "status-not-done";
}

