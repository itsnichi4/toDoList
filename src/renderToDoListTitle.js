import { b } from "./lib/builder";



export function renderToDoListTitle() {
  const container = b(
    "div",
    { id: "titleContainer", children: [b("h1", { textContent: "ToDoList"})] }

  );
console.log(container)
let body = document.body;
body.appendChild(container);

return container
}