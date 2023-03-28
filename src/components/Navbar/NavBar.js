import { b } from "../../lib/builder";
import { createToday } from "../../Pages/today";
import { createTaskForm } from "../form/form";
import { createInbox } from "../../Pages/inbox";
import { createProjects } from "../../Pages/projects";


export function createNavbar() {
    // Create navbar
    const navbar = b("nav", {
      className: "navbar",
      children: [
        b("a", {
          className: "navbar__logo",
          textContent: "LOGO",
        }),
        b("div", {
          className: "navbar__search",
          children: [
            b("i", {
              className: "fas fa-search",
            }),
            b("input", {
              className: "navbar__search-input",
              type: "text",
              placeholder: "Search tasks",
            }),
          ],
        }),
        b("div", {
          className: "navbar__menu",
          children: [
            b("a", {
              className: "navbar__menu-item",
              textContent: "Inbox",
              addEventListener: [
                "click",
                function () {
                  // Create inbox element and append it to display
                  
                  const display = document.querySelector("#display");
                  const inbox = createInbox(display); // pass display element as argument
                  const addForm = createTaskForm(display);
                  display.removeChild(display.lastChild)
                  display.innerHTML = "";
                  display.appendChild(inbox);
                  display.appendChild(addForm)
                },
              ],
            }),
            b("a", {
              className: "navbar__menu-item",
              textContent: "Today",
              addEventListener: [
                "click",
                function () {
                  console.log("today")
                  const display = document.querySelector("#display");
                  const today = createToday(display); // pass display element as argument
                  const addForm = createTaskForm(display);
                  display.removeChild(display.lastChild)
                  display.innerHTML = "";
                  display.appendChild(today);
                  display.appendChild(addForm)
                },
              ],
            }),
            b("a", {
              className: "navbar__menu-item",
              textContent: "Projects",
              addEventListener: [
                "click",
                function () {
                  const display = document.querySelector("#display");
                  const projects = createProjects(display)
              
                  display.removeChild(display.lastChild)
                  display.innerHTML = ""
                  display.appendChild(projects)
                  // display.appendChild(addFormProjects)
                },
              ],
            }),
          ],
        }),
      ],
    });
  console.log(navbar)
    return navbar;
  }