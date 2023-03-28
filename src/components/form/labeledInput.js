import { b } from "../../lib/builder";
export function labeledInput(label, name, type) {
  return b("div", {
    className: `${name}__wrapper`,
    children: [
      b("label", {
        className: `${name}__label`,
        textContent: label,
      }),
      b("input", {
        className: `${name}__input`,
        name: name,
        type: type,
        required: true,
        pattern: "^(?=.*\\S)[A-Za-z0-9 ]+$",
      }),
    ],
  });
}
