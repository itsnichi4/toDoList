import { b } from "../../lib/builder";
import { createAddTaskForm } from "./toDoList/addTaskForm";

export function createInbox() {
  const inbox = b("div", {
    className: "inbox",
    children: [
      b("div", {
        className: "inbox__title",
        textContent: "Inbox",
      }),
      b("div", {
        className: "inbox__messages",
        textContent: "No New Messages...",
      }),
      b("button", {
        className: "btn__add-task",
        textContent: "Add Task",
        addEventListener: ["click", function () {}, ],
      }),
      createAddTaskForm()
    ],
  });

  console.log(inbox);

  return inbox;
}
