document.getElementById("playMusic").addEventListener("click", function () {
    var audio = document.getElementById("backgroundMusic");
    if (audio.paused) {
        audio.play();
        this.textContent = "⏸ Pausar música";
    } else {
        audio.pause();
        this.textContent = "▶ Reproducir música";
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
