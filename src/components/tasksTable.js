// import { b } from "../lib/builder.js";




// export function createTaskTable(display) {
//   const form = document.querySelector("#form");
//   const tasks = [];

//   const tasksTable = b("table", {
//     className: "tasksTable",
//     children: [
//       b("thead", {
//         children: [
//           b("tr", {
//             children: [
//               b("th", {textContent: "Name"}),
//               b("th", {textContent: "Description"}),
//               b("th", {textContent: "Time"}),
//               b("th", {textContent: "Status"}),
//             ],
//           }),
//         ],
//       }),
//       b("tbody"),
//     ],
//   });

//   display.appendChild(tasksTable);

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const taskName = form.elements[0].value;
//     const taskDescription = form.elements[1].value;
//     const time = form.elements[2].value;
//     const isDone = form.elements[3].checked;

//     const newTask = createTask(taskName, taskDescription, time, isDone);

//     tasks.push(newTask);

//     addTaskToTable(newTask);

//   });

//   function addTaskToTable(task) {
//     const newRow = b("tr", {
//       children: [
//         b("td", {textContent: task.name}),
//         b("td", {textContent: task.description}),
//         b("td", {textContent: task.time}),
//         b("td", {textContent: task.done ? "Done" : "Not done"}),
//       ],
//     });

//     tasksTable.querySelector("tbody").appendChild(newRow);
//   }


// }

