import { b } from "../../lib/builder";
export function labeledSelect(low, medium, high) {
  return b("div", {
    className: "labeled-select__container",
    children: [
      b("label", {
        className: "priority__label",
        textContent: "Priority",
      }),
      b("select", {
        className: "priority__input",
        name: "priority",
        children: [
          b("option", {
            value: low,
            textContent: low,
          }),
          b("option", {
            value: medium,
            textContent: medium,
          }),
          b("option", {
            value: high,
            textContent: high,
          }),
        ],
      }),
    ],
  })

}

