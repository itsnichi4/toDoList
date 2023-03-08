import { b } from "../../../lib/builder";

export function createAddTaskForm() {
  const addTaskForm = b("div", {
    className: "add-task__container",
    children: [
      b("div", {
        className: "add-task-title__container",
        textContent: "Inbox",
      }),
      b("div", {
        className: "form__container",
        textContent: "Add task:",
        children: [
          b("form", {
            className: "add-task__form",
            children: [
              b("label", {
                className: "task-name__label",
                textContent: "Task Name",
              }),
              b("input", {
                className: "task-name__label",
              }),
              b("label", {
                className: "task-description__label",
                textContent: "Task Description",
              }),
              b("input", {
                className: "task-description__label",
              }),
              b("label", {
                className: "task-time__label",
                textContent: "Time",
              }),
              b("input", {
                className: "task-description__label",
              }),
              b("label", {
                className: "is-done__label",
                textContent: "Is Done?",
              }),
              b("input", {
                className: "is-done__checkbox",
                type: "checkbox",
              }),
              b("button", {
                className: "add-task__btn",
                value: "submit",
                type: "submit",
                innerText: "Add task",
              }),
              b("button", {
                className: "add-task-cancel__btn",
                innerText: "Cancel",
              }),
            ],
            
          }),
          
        ],
      }),
    ],
  });



  return addTaskForm;
}
