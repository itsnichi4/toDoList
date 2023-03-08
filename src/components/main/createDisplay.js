import { b } from "../../lib/builder";
import { createInbox } from "./createInbox";

export function createDisplay() {
  // Create display element
  const display = b("div", { id: "display", className: "display", textContent: "Hello", children: [createInbox()] });
  
  console.log(display)
  
  return display;

}
