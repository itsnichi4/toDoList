import _ from "lodash";
import "../node_modules/@picocss/pico/css/pico.min.css";
import "./styles.css";

import { b } from "./lib/builder.js";
import { renderToDoListTitle } from "./components/renderToDoListTitle";
import { createNavbar } from "./components/createNavBar";



renderToDoListTitle()

let container = b("div", {
  className: "container",
  children: [createNavbar()],
  
});


let body = document.body;
body.appendChild(container);
