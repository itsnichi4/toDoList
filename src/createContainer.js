import { b } from "./lib/builder";
import { createNavbar } from "./_components/main/toDoList/Navbar & Display/createNavBar";
import { createDisplay } from "./_components/main/toDoList/Navbar & Display/createDisplay";

export function createContainer () {
let createContainer = b("div", {
    className: "container",
    children: [createNavbar(), createDisplay()],
    
  });
  
  
  let body = document.body;
  body.appendChild(createContainer);
  return createContainer
}