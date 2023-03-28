import { b } from "../../lib/builder";


export function createFormButtons(title) {
  return b("div", {
    children: [
      b("button", {
        className: "add-task__btn",
        value: "submit",
        type: "submit",
        innerText: "Add task",
      }),
      b("button", {
        className: "add-task-cancel__btn",
        innerText: "Cancel",
        addEventListener: [
          "click",
          (event) => {
            event.preventDefault();
            document.querySelector(".add-task__container").style.display =
              "none";
            document.querySelector(`.${title}__hide`).style.display =
              "block";
            document.querySelector(".add-task__form").reset();
          },
        ],
      }),
    ],
  });
}
