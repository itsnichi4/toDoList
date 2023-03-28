import { b } from "../../lib/builder";
import { createInbox } from "../../Pages/inbox";


export function createDisplay() {
  // Create display element
  const display = b("div", { id: "display", className: "display", children: [createInbox()] });
  
  console.log(display)
  
  return display;

}
