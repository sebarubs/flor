const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.98; // Se reduce de tamaño poco a poco
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Función para crear una animación de flor
function createFlower(x, y) {
    for (let i = 0; i < 20; i++) {
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        let size = Math.random() * 5 + 2;
        let color = `hsl(${Math.random() * 50 + 40}, 100%, 50%)`;
        particles.push(new Particle(x, y, size, color, speedX, speedY));
    }
}

// Animación de la flor
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size < 0.5) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

// Evento para generar la flor al hacer clic
canvas.addEventListener("click", (event) => {
    createFlower(event.clientX, event.clientY);
});

animate();
