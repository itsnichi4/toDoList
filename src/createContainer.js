import { b } from "./lib/builder";
import { createNavbar } from "./components/Navbar/NavBar";
import { createDisplay } from "./components/Navbar/Display";

export function createContainer () {
let createContainer = b("div", {
    className: "container",
    children: [createNavbar(), createDisplay()],
    
  });
  
  
  let body = document.body;
  body.appendChild(createContainer);
  return createContainer
}