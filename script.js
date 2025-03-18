document.getElementById("musicButton").addEventListener("click", function () {
    var music = document.getElementById("music");
    if (music.paused) {
        music.play();
        this.textContent = "⏸️ Pausar música";
    } else {
        music.pause();
        this.textContent = "🎵 Reproducir música";
    }
});

// Animación de las cartas al hacer clic
document.querySelectorAll('.carta').forEach(carta => {
    carta.addEventListener('click', () => {
        carta.classList.toggle('flipped');
    });
});

// Dibujo de flores con Canvas
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const girasoles = [];

for (let i = 0; i < 15; i++) {
    girasoles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 50 + 30,
        angle: Math.random() * Math.PI * 2
    });
}

function drawGirasoles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    girasoles.forEach(flor => {
        const img = new Image();
        img.src = 'girasol.png';
        ctx.save();
        ctx.translate(flor.x, flor.y);
        ctx.rotate(flor.angle);
        ctx.drawImage(img, -flor.size / 2, -flor.size / 2, flor.size, flor.size);
        ctx.restore();
    });
}

setInterval(drawGirasoles, 50);
