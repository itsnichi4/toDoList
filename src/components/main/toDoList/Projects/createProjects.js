import { b } from "../../../../lib/builder";
import { createAddProjectForm } from "./createAddProjectForm";
import { createProjectTable } from "./addProjectsTable";
export function createProjects() {
    const projects = b("div", {
      className: "projects",
      children: [
        b("div", {
          className: "projects__hide",
          children: [
            b("div", {
              className: "projects__title",
              textContent: "Projects",
            }),
            b("div", {
              className: "projects__messages",
              textContent: `Below you can see your projects, or add new ones!`,
            }),
            b("button", {
                className: "add-project__btn",
                innerText: "Add New Project",
                addEventListener: [
                    "click", 
                    function () {
                        document.querySelector(".project-form").style.display =
                        "block";
                        document.querySelector(".projects__hide").style.display = "none"
                    }
          ],
        
        }),
    ],
}),
  createAddProjectForm(),
    createProjectTable()
      ],
    });
  
    console.log(projects);
  
    return projects;
  }