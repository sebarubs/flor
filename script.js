// Función para voltear las cartas
function voltearCarta(element) {
    element.classList.toggle("volteada");
}

// Música de fondo
window.onload = function() {
    const musica = document.getElementById("musica");
    musica.volume = 0.5; // Volumen al 50%
};

// Configuración de Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

// Dibujar pétalos girando
function drawPetal(x, y, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(20, -40, 40, 0);
    ctx.quadraticCurveTo(20, 40, 0, 0);
    ctx.fillStyle = "#FFD700"; // Amarillo girasol
    ctx.fill();
    ctx.restore();
}

// Dibujar un girasol animado
function drawSunflower(x, y) {
    // Rotación de pétalos
    for (let i = 0; i < 12; i++) {
        drawPetal(x, y, angle + (Math.PI / 6) * i);
    }

    // Centro del girasol
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "#8B4513"; // Marrón centro
    ctx.fill();

    // Tallo
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x, y + 100);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 6;
    ctx.stroke();
}

// Animación del girasol girando
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSunflower(canvas.width / 2, canvas.height / 2);
    angle += 0.01; // Gira lentamente
    requestAnimationFrame(animate);
}

animate();
