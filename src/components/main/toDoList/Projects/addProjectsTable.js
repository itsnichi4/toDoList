import {b} from "../../../../lib/builder";
import { handleAddTaskProjectFormSubmit } from "./createAddProjectTasksForm";
import { createAddProjectForm } from "./createAddProjectForm";
import { createAddProjectTasksTable } from "./addProjectsTaskTable";
import { createTaskForm } from "../../../createform";

export function createProjectTable() {
  const tableBody = b("tbody", { id: "project-table-body" });

  const table = b("table", {
    className: "main-projects__table",
    children: [
      b("thead", {
        children: [
          b("tr", {
            children: [
              b("th", { textContent: "Project Name" }),
              b("th", { textContent: "Actions" }),
            ],
          }),
        ],
      }),
      tableBody,
    ],
  });

  const addProjectForm = createAddProjectForm(tableBody);
  table.appendChild(addProjectForm);

  // Retrieve existing projects from local storage, if any
  const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];

  // Populate table body with saved projects
  savedProjects.forEach((projectName) => {
    const tableRow = b("tr", {
      children: [
        b("td", { textContent: projectName,
        className: projectName }),
        b("td", { className: projectName,
          children: [
            b("button", {
              textContent: "Delete",
              onclick: function() {
                
                tableBody.removeChild(tableRow);
                const index = savedProjects.indexOf(projectName);
                if (index > -1) {
                  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                
                  // Filter the tasks so they match the project name
                  const filteredTasks = tasks.filter((task) => task.projectName !== projectName);
                
                  // Save filtered tasks to local storage
                  localStorage.setItem("tasks", JSON.stringify(filteredTasks));
                
                  // Remove project from savedProjects arr
                  savedProjects.splice(index, 1);
                
                  // Save the updated savedProjects arr to local storage
                  localStorage.setItem("projects", JSON.stringify(savedProjects));
                }
                
              },
            }),
            b("button", {
              textContent: "View & Add Tasks to Project",
              onclick: function() {
                const parentTd = this.parentNode;
                const parentTdClassName = parentTd.className;
                document.querySelector(".projects").style.display = "none";
                const createProjectTable = createAddProjectTasksTable(parentTdClassName);
                const projectForm = createTaskForm(projectName, handleAddTaskProjectFormSubmit.bind(null, projectName));
                display.appendChild(projectForm);
                display.appendChild(createProjectTable);
                
                projectForm.style.display = "block";

              },
            }),
            
          ],
        }),
      ],
    });
    tableBody.appendChild(tableRow);
  });

  return table;
}