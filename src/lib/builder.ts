interface BuildContext {
  children: Node[];
  onBuild?: (element: Element) => void;
  addEventListener?: [type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions];
}

export function b(tag: string, buildContext: BuildContext): Element {
  const element = document.createElement(tag);

  for (let property in buildContext) {
    switch (property) {
      case "addEventListener":
        if (buildContext.addEventListener) {
          element.addEventListener(...buildContext.addEventListener);
        }
        break;
      case "children":
        const childArray = Array.from(buildContext.children);
        element.append(...childArray);
        break;
      case "onBuild":
        if (buildContext.onBuild) {
          buildContext.onBuild(element);
        }
        break;
      default:
        element[property] = buildContext[property];
    }
  }

  return element;
}
