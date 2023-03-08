import { b } from "../lib/builder";

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
                  const addForm = createAddTaskForm(display);
                  
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
                  // Handle click on Today
                },
              ],
            }),
            b("a", {
              className: "navbar__menu-item",
              textContent: "Upcoming",
              addEventListener: [
                "click",
                function () {
                  // Handle click on Upcoming
                },
              ],
            }),
            b("a", {
              className: "navbar__menu-item",
              textContent: "Projects",
              addEventListener: [
                "click",
                function () {
                  // Handle click on Projects
                },
              ],
            }),
            b("a", {
              className: "navbar__menu-item",
              textContent: "Labels",
              addEventListener: [
                "click",
                function () {
                  // Handle click on Labels
                },
              ],
            }),
            b("a", {
              className: "navbar__menu-item",
              textContent: "Filters",
              addEventListener: [
                "click",
                function () {
                  // Handle click on Filters
                },
              ],
            }),
            b("a", {
              className: "navbar__menu-item",
              textContent: "Settings",
              addEventListener: [
                "click",
                function () {
                  // Handle click on Settings
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