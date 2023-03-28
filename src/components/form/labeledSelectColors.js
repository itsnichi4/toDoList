import { b } from "../../lib/builder";

export function LabelColorSelect(label, id, name, options) {
    return b("div", {
        className: "label-color-select__wrapper",
        children: [
          b("label", {
            textContent: label,
            htmlFor: id,
          }),
          b("select", {
            id,
            name,
            children: options.map((option) => {
              return b("option", {
                value: option,
                textContent: option,
              });
            }),
          }),
        ],
      })
    
  }
  