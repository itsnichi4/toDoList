interface BuildContext {
  children:[],
  onBuild:Function
  addEventListener:[]
}


export function b(tag:string, buildContext:BuildContext) {
  const element = document.createElement(tag);

  for (let property in buildContext) {
    switch (property) {
      case "addEventListener":
        element.addEventListener(...buildContext[property]);
        break;
      case "children":
        const childArray = Array.from(buildContext.children);
        element.append(...childArray);
        break;
      case "onBuild":
        buildContext.onBuild(element);
        break;
      default:
        element[property] = buildContext[property];
    }
  }

  return element;
}

