import _ from "lodash";
import "../node_modules/@picocss/pico/css/pico.min.css";
import "./styles.css";

import { b } from "./lib/builder.js";
import { createNavbar, createDisplay } from "./components/mainContent.js";



let container = b("div", {
  className: "container",
  children: [createNavbar(), createDisplay()],
  
});


let body = document.body;
body.appendChild(container);
