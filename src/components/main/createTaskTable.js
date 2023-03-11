import { b } from "../../lib/builder";

export function createTaskTable() {
    let tasks = [];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const storedTasks = localStorage.getItem("tasks");
    console.log("storedTasks: ", storedTasks);
    if (storedTasks && typeof storedTasks === 'string') {
        tasks = JSON.parse(storedTasks);
      }
      
    
    
  
    const tasksTable = b("table", {
      className: "tasksTable",
      children: [
        b("thead", {
          children: [
            b("tr", {
              children: [
                b("th", { textContent: "Name" }),
                b("th", { textContent: "Description" }),
                b("th", { textContent: "Date" }),
                b("th", { textContent: "Status" }),
                b("th", { textContent: "Action" }),
              ],
            }),
          ],
        }),
        b("tbody"),
      ],
    });
  
    // Get the tbody element to append rows to
    const tbody = tasksTable.querySelector("tbody");
  
    // Loop through an array of tasks to create rows
    tasks.forEach((task) => {
      // Create the row
      const row = createTaskRow(task);
  
      // Append the row to the tbody
      tbody.appendChild(row);
    });
  
    return tasksTable;
  }
  

  function createTaskRow(task) {
    const row = b("tr", {
      children: [
        b("td", { textContent: task.name }),
        b("td", { textContent: task.description }),
        b("td", { textContent: task.date }),
        b("td", {
          children: [
            b("input", {
              type: "checkbox",
              checked: task.status === "done",
              onchange: (event) => {
                // Update the task's status property
                task.status = event.target.checked ? "done" : "not done";
  
                // Store tasks in local storage
                localStorage.setItem("tasks", JSON.stringify(tasks));
              },
            }),
            b("span", {
              textContent: task.status === "done" ? "Done" : "Not done",
            }),
          ],
        }),
        b("td", {
          children: [
            b("button", {
              textContent: "Remove",
              onclick: () => {
                // Remove row
                row.remove();
  
                // Remove task from array
                const index = tasks.indexOf(task);
                if (index > -1) {
                  tasks.splice(index, 1);
                }
  
                // Store tasks in local storage
                localStorage.setItem("tasks", JSON.stringify(tasks));
              },
            }),
          ],
        }),
      ],
    });
  
    return row;
  }