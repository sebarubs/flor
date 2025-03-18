function flipCard(card) {
    card.classList.toggle('flipped');
}

// 🎵 Música de fondo
document.getElementById("music-button").addEventListener("click", function() {
    let audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play();
        this.textContent = "⏸ Pausar música";
    } else {
        audio.pause();
        this.textContent = "🎵 Reproducir música";
    }
});

// 🌻 Animación de la flor
const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");

function drawFlower(x, y) {
    ctx.fillStyle = "#FFD700";
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.ellipse(x, y, 20, 40, (Math.PI / 5) * i, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#8B4513";
    ctx.fill();
}

function animateFlower() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFlower(150, 150);
    requestAnimationFrame(animateFlower);
}

animateFlower();
