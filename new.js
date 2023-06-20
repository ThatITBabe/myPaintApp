const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let brushSize = 5;
let brushColor = '#000000';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = brushColor;
ctx.lineWidth = brushSize;

function startDrawing(e) {
  isDrawing = true;
  draw(e);
}

function stopDrawing() {
  isDrawing = false;
}

function draw(e) {
  if (!isDrawing) return;
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

document.getElementById('colorPicker').addEventListener('change', function(e) {
  brushColor = e.target.value;
  ctx.strokeStyle = brushColor;
});

document.getElementById('brushSize').addEventListener('input', function(e) {
  brushSize = e.target.value;
  ctx.lineWidth = brushSize;
});

document.getElementById('clearBtn').addEventListener('click', function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
