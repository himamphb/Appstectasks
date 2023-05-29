let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canvasOffsetX = canvas.offsetLeft;
let canvasOffsetY = canvas.offsetTop;

canvas.height = window.innerHeight - canvasOffsetY;
canvas.width = window.innerWidth - canvasOffsetX;
ctx.strokeStyle = "white";
ctx.lineWidth = 5;

let color = "black";
let thickness = 5;
let isEraser = false;
let thicknessChanged = false;
let x = 0;

let draw = document.querySelector(".fa-pencil");
let eraser = document.querySelector(".fa-eraser");

let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    drawLine(e)
})

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.beginPath();
})

function drawLine(e) {
    console.log(e.clientX);
    if (!isDrawing) return;
    ctx.lineCap = "round";
    if (!isEraser) ctx.strokeStyle = color;
    if (thicknessChanged) ctx.lineWidth = thickness;
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", drawLine);

function enableDraw() {
    isEraser = false;
    draw.style.backgroundColor = "#088395";
    eraser.style.backgroundColor = "#fff";
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
}

function enableEraser() {
    isEraser = true;
    eraser.style.backgroundColor = "#088395";
    draw.style.backgroundColor = "#fff";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
}

function changeColor(col) {
    color = col;
}

function changeThickness(value) {
    document.querySelector(".thicknessValue").textContent = value;
    thicknessChanged = true;
    thickness = value;
}
