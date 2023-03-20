import { b } from "../../../../lib/builder";



export function createAddProjectTasksForm(project) {

  const labelColors = ["red", "orange", "yellow", "green", "blue", "purple"];
  const addTaskForm = b("div", {
    className: "add-task__container",
    children: [
      b("div", {
        className: "add-task-title__container",
        textContent: project,
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
                textContent: "Label color:",
                htmlFor: "label-color-select",
              }),
              b("select", {
                id: "label-color-select",
                name: "labelColor", 
                children: labelColors.map((color) => {
                  return b("option", {
                    value: color,
                    textContent: color,
                  });
                }),
              }),
              
              b("label", {
                className: "priority__label",
                textContent: "Priority",
              }),
              b("select", {
                className: "priority__input",
                name: "priority",
                children: [
                  b("option", {
                    value: "low",
                    textContent: "Low",
                  }),
                  b("option", {
                    value: "medium",
                    textContent: "Medium",
                  }),
                  b("option", {
                    value: "high",
                    textContent: "High",
                  }),
                ],
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
                  () => {
                    
                    document.querySelector(
                      ".add-task__container"
                    ).style.display = "none";
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


  document.querySelector(".add-task__container").style.display = "none";
  document.querySelector(".projects__hide").style.display = "block";
  
  // extract form data
  const formData = new FormData(event.target);
  const task = {
    name: formData.get("taskName"),
    description: formData.get("taskDescription"),
    date: formData.get("taskDate"),
    priority: formData.get("priority"),
    labelColor: formData.get("labelColor"),

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
    priority: task.priority,
    labelColor: task.labelColor,
    projectName: project,
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
          b("span", {
            textContent: newTask.priority,
            className: `priority-${newTask.priority.toLowerCase()}`,
          }),
          b("span", {
            textContent: newTask.labelColor,
            className: `label-color-${newTask.labelColor.toLowerCase()}`,
          }),
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



