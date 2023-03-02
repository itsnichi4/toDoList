import _ from 'lodash';
import '../node_modules/@picocss/pico/css/pico.min.css';
import "./styles.css"

  const domBuilder = {
    createElement: function (elementType, className, id) {
      const element = document.createElement(elementType);
      if (className) {
        element.className = className;
      }
      if (id) {
        element.id = id;
      }
      return element;
    },
    appendTo: function (parentElement, childElement) {
      parentElement.appendChild(childElement);
    },
    createAndAppend: function (elementType, className, id, parentElement) {
      const element = this.createElement(elementType, className, id);
      if (parentElement) {
        this.appendTo(parentElement, element);
      }
      return element;
    },
  };

  const container = document.querySelector("#container");
  const title = domBuilder.createAndAppend("h1", "", "", container);


  title.textContent = "ToDoList";


// Create navbar
const display = domBuilder.createAndAppend("div", "display", "", container)

const navbar = domBuilder.createAndAppend("nav", "navbar", "", display);

const window = domBuilder.createAndAppend("div", "display", "", display);
window.textContent = "hello"



const logo = domBuilder.createAndAppend("a", "navbar__logo", "", navbar);
logo.textContent = "LOGO";


const search = domBuilder.createAndAppend("div", "navbar__search", "", navbar);


const searchIcon = domBuilder.createAndAppend("i", "fas fa-search", "", search);

const searchInput = domBuilder.createAndAppend("input", "navbar__search-input", "", search);
searchInput.type = "text";
searchInput.placeholder = "Search tasks";

const menu = domBuilder.createAndAppend("div", "navbar__menu", "", navbar);


const inboxItem = domBuilder.createAndAppend("a", "navbar__menu-item", "", menu);
inboxItem.textContent = "Inbox";


const todayItem = domBuilder.createAndAppend("a", "navbar__menu-item", "", menu);
todayItem.textContent = "Today";


const upcomingItem = domBuilder.createAndAppend("a", "navbar__menu-item", "", menu);
upcomingItem.textContent = "Upcoming";


const projectsItem = domBuilder.createAndAppend("a", "navbar__menu-item", "", menu);
projectsItem.textContent = "Projects";


const labelsItem = domBuilder.createAndAppend("a", "navbar__menu-item", "", menu);
labelsItem.textContent = "Labels";


const filtersItem = domBuilder.createAndAppend("a", "navbar__menu-item", "", menu);
filtersItem.textContent = "Filters";

const settingsItem = domBuilder.createAndAppend("a", "navbar__menu-item", "", menu);
settingsItem.textContent = "Settings";
 