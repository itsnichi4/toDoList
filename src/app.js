import {renderToDoListTitle} from "./renderToDoListTitle.js";
import { createContainer } from "./createContainer"
import { b } from "./lib/builder";


export const app = {
    boot: () => {
      const appContainer = b('div', {
        className: "toDoList__app",
        children: [
          renderToDoListTitle(),
          createContainer(),
        ]
      });
  
      document.body.appendChild(appContainer);
    }
  }