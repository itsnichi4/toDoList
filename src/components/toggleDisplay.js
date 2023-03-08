// import { createAddTaskForm } from "./addTaskForm.js";
// import { b } from "../lib/builder.js";

// export function toggleInbox(display) {
//     // Check if inbox exists in display
//     const existingInbox = display.querySelector(".inbox");
//     if (existingInbox) {
//       return;
//     }
  
//     // If !inbox, create it
//     const addForm = createAddTaskForm(display);
//     const inbox = createInbox();
  
//     display.appendChild(inbox);
//     display.appendChild(addForm);
//   }
  
  

// export function createInbox(display) {
//   const inbox = b("div", { className: "inbox" }, "Inbox");
//   inbox.addEventListener("click", () => {
//     toggleInbox(display);
//   });
//   return inbox;
// }
