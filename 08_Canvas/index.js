const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.strokeStyle = "BADASS";

ctx.lineCap = "round";
ctx.lineJoin = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue = 0;

let initialWidth = 8;

let width = initialWidth;
ctx.lineWidth = width;

function draw(e) {
  if (!isDrawing) return;
  if (width < 35) {
    width++;
  }
  ctx.lineWidth = width;
  ctx.strokeStyle = `hsl(${hue}, 100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue > 360) {
    hue = 0;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  width = initialWidth;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true;
});
canvas.addEventListener("mouseup", () => {
  width = initialWidth;
  isDrawing = false;
});
canvas.addEventListener("mouseout", () => {
  width = initialWidth;
  isDrawing = false;
});
