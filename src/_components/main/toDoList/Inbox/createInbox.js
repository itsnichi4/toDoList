import { b } from "../../../../lib/builder";
import { createTaskForm, handleAddTaskFormInboxSubmit } from "../../../createform";
import { createTaskTable } from "./createTaskTable";


export function createInbox() {
  const inbox = b("div", {
    className: "inbox",
    children: [
      b("div", {
        className: "inbox__hide",
        children: [
          b("div", {
            className: "inbox__title",
            textContent: "Inbox",
          }),
          b("div", {
            className: "inbox__messages",
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
                  document.querySelector(".inbox__hide").style.display = "none"
              },
            ],
          }),
        ],
      }),

      createTaskForm("Inbox", handleAddTaskFormInboxSubmit),
      createTaskTable(),
    ],
  });

  console.log(inbox);

  return inbox;
}
