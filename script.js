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

function girarCarta(elemento) {
    if (elemento.style.transform === "rotateY(180deg)") {
        elemento.style.transform = "rotateY(0deg)";
    } else {
        elemento.style.transform = "rotateY(180deg)";
    }
}

// Agregar girasoles aleatorios
document.addEventListener("DOMContentLoaded", function () {
    const girasolContainer = document.querySelector(".girasoles-container");

    for (let i = 0; i < 10; i++) {
        let girasol = document.createElement("div");
        girasol.classList.add("girasol-extra");
        girasol.style.top = Math.random() * 90 + "vh";
        girasol.style.left = Math.random() * 90 + "vw";
        girasolContainer.appendChild(girasol);
    }
});
