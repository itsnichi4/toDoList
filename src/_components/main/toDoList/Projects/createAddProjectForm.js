import { b } from "../../../../lib/builder";

export function createAddProjectForm() {
  const form = b("form", {
    className: "project-form",
    children: [
      b("label", {
        textContent: "Project name:",
        htmlFor: "project-name-input",
      }),
      b("input", {
        type: "text",
        id: "project-name-input",
        name: "project-name",
      }),
      b("button", {
        type: "submit",
        textContent: "Add",
      }),
    ],
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const projectName = event.target.elements["project-name"].value; // Get project name from input field

    // Create new table row with project name and action buttons
    const tableBody = document.querySelector(".main-projects__table");
    const tableRow = b("tr", {
      children: [
        b("td", { textContent: projectName }),
        b("td", {
          children: [
            b("button", { textContent: "Delete" }),
            b("button", { textContent: "View & Add Tasks to Project" }),
          ],
        }),
      ],
    });
    tableBody.appendChild(tableRow); // Append row to table body

    // Save project name to local storage
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push(projectName);
    localStorage.setItem("projects", JSON.stringify(projects));

    form.reset(); // Reset form input field
  });

  return form;
}