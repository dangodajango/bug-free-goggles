import { canvas } from '../canvas/canvas-configuration.js';

export function createSvgGroup() {
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute('transform', 'translate(0,0) rotate(0) scale(1,1)');
  group.id = `g-${Date.now()}`;
  canvas.append(group);
  return group;
}

export function appendShapeToSvgGroup(shape, group) {
  if (!isShapePartOfAnyGroup(shape)) {
    canvas.removeChild(shape);
    group.append(shape);
    return true;
  } else {
    return false;
  }
}

function isShapePartOfAnyGroup(shape) {
  const groups = canvas.querySelectorAll('g');
  for (const group of groups) {
    if (group.querySelector(`#${shape.id}`)) {
      return true;
    }
  }
  return false;
}

export function ejectShapeFromSvgGroup(shape, group) {
  console.log(group);
  
  group.removeChild(shape);
  canvas.appendChild(shape);
}