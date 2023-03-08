import { b } from "./src/lib/builder";
import { createNavbar } from "./components/createNavBar";

export function createContainer () {
let container = b("div", {
    className: "container",
    children: [createNavbar()],
    
  });
  
  
  let body = document.body;
  body.appendChild(container);
  return container
}