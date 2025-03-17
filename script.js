const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Función para dibujar un pétalo
function drawPetal(x, y, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(20, -40, 40, 0);
    ctx.quadraticCurveTo(20, 40, 0, 0);
    ctx.fillStyle = "#ffcc00";
    ctx.fill();
    ctx.restore();
}

// Función para dibujar un girasol
function drawSunflower(x, y) {
    // Pétalos girando
    for (let i = 0; i < 12; i++) {
        drawPetal(x, y, (Math.PI / 6) * i);
    }

    // Centro del girasol
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "#663300";
    ctx.fill();

    // Tallo
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x, y + 100);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 6;
    ctx.stroke();
}

// Animación del girasol
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSunflower(canvas.width / 2, canvas.height / 2);
    requestAnimationFrame(animate);
}

animate();
