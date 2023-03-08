import { b } from "../../lib/builder";
import { createNavbar } from "./createNavBar";
import { createDisplay } from "./createDisplay";

export function createContainer () {
let createContainer = b("div", {
    className: "container",
    children: [createNavbar(), createDisplay()],
    
  });
  
  
  let body = document.body;
  body.appendChild(createContainer);
  return createContainer
}