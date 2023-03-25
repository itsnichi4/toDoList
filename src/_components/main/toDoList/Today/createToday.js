import { b } from "../../../../lib/builder";
import { createAddTaskFormToday } from "./addTaskFormToday";
import { createTodayTaskTable } from "./createTodayTaskTable";

export function createToday() {
    const today = b("div", {
      className: "today",
      children: [
        b("div", {
          className: "today__hide",
          children: [
            b("div", {
              className: "today__title",
              textContent: "today",
            }),
            b("div", {
              className: "today__messages",
              textContent: `Below you can see your tasks, or add new ones!`,
            }),
            b("button", {
              className: "btn__add-task",
              textContent: "Add Task",
              addEventListener: [
                "click",
                function () {
                  document.querySelector(".add-task__container").style.display =
                    "block";
                    document.querySelector(".today__hide").style.display = "none"
                },
              ],
            }),
          ],
        }),
  
        createAddTaskFormToday(),
        createTodayTaskTable(),
      ],
    });
  
    console.log(today);
  
    return today;
  }