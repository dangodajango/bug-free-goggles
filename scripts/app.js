import appendCircleToCanvas from './circle-svg-creator.js';

const canvas = document.getElementById('canvas');

const clearCanvasButton = document.getElementById('clear-canvas');
clearCanvasButton.addEventListener('click', clearCanvas.bind(this, canvas));

const circleButton = document.getElementById('create-circle-button');
circleButton.addEventListener('click', appendCircleToCanvas.bind(this, canvas));

function clearCanvas(canvas) {
  canvas.innerHTML = '';
}