import { b } from "../../lib/builder";


export function createAddTaskFormToday() {
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



function handleAddTaskFormSubmit(event) {event.preventDefault();
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const date = now.getDate().toString().padStart(2, '0');
  const today = `${year}-${month}-${date}`;
  

  document.querySelector(".add-task__container").style.display = "none";
  document.querySelector(".today__hide").style.display = "block";
  // extract form data
  const formData = new FormData(event.target);
  const task = {
    name: formData.get("taskName"),
    description: formData.get("taskDescription"),
    date: today,
    done: formData.get("isDone"),
  };

  // add new row to the task table
  addTaskToTable(task);
  // reset form fields
  event.target.reset();
}


function addTaskToTable(task, today) {
  // Create a unique ID for the task
  const taskId = Date.now().toString();


  // Create a new task object with the ID
  const newTask = {
    id: taskId,
    name: task.name,
    description: task.description,
    date: today,
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



