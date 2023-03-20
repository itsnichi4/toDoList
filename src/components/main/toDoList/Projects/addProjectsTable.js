import {b} from "../../../../lib/builder";

import { createAddProjectTasksForm } from "./createAddProjectTasksForm";
import { createAddProjectForm } from "./createAddProjectForm";
import { createTaskTable } from "../Inbox/createTaskTable";


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
        id: projectName }),
        b("td", {
          children: [
            b("button", {
              textContent: "Delete",
              onclick: function() {
                
                tableBody.removeChild(tableRow);
                const index = savedProjects.indexOf(projectName);
                if (index > -1) {
                  savedProjects.splice(index, 1);
                  localStorage.setItem("projects", JSON.stringify(savedProjects));
                }
              },
            }),
            b("button", {
              textContent: "View & Add Tasks to Project",
              onclick: function() {
                document.querySelector(".projects").style.display = "none";
                const createProjectTable = createTaskTable();
                const projectForm = createAddProjectTasksForm(projectName);
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