import { b } from "../../lib/builder";

export function createTodayTaskTable() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    // Get the current date as a string, iso format YYYY-MM-DD
    const today = new Date().toISOString().slice(0, 10);
  
    // Filter the tasks so data matches today's date
    const todayTasks = tasks.filter((task) => task.date === today);
  
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
                    
                    // Update the corresponding row in the table
                    const rowStatus = row.querySelector("input[type='checkbox']").checked;
                    row.querySelector("span").textContent = rowStatus ? "Done" : "Not done";
                    
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
  
    const tbody = tasksTable.querySelector("tbody");
  
    todayTasks.forEach((task) => {
      const row = createTaskRow(task);
      tbody.appendChild(row);
    });
  
    return tasksTable;
  }
  