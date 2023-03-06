import { b } from "../lib/builder.js";



export function createInbox(display) {
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
        addEventListener: [
          "click",
          function() {
            let addFormShow = document.querySelector(".add-task__container")
            addFormShow.style.display = "block"
            let hideInbox = document.querySelector(".inbox")
            hideInbox.style.display = "none"
          },
        ],
      }),
    ],
  });

  display.appendChild(inbox);

  return inbox;
}
