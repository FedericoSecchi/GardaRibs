// Función para scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de aparición al hacer scroll
document.addEventListener("scroll", () => {
    const servicios = document.querySelectorAll(".servicio");
    const trigger = window.innerHeight / 1.2;

    servicios.forEach((servicio) => {
        const top = servicio.getBoundingClientRect().top;
        if (top < trigger) {
            servicio.classList.add("show");
        }
    });
});

// Reducir la velocidad de reproducción del video del Hero
document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".hero-video");
    if (video) {
        video.playbackRate = 0.5; // Ajustar el valor para cambiar la velocidad
    }
});

