import { b } from "../../lib/builder";

export function handleAddTaskProjectFormSubmit(event) {


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
     projectName: formData.get("projectName"),
    };
  
    // add new row to the task table
    addTaskToTable(task)

    // reset form fields
    event.target.reset();

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
      projectName:task.projectName,
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
  
  
}
  




