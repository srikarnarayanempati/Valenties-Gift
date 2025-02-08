document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("landing").classList.remove("d-none");
});

function startVerification() {
    document.getElementById("landing").classList.add("d-none");
    showVerification(1);
}

function showVerification(step) {
    for (let i = 1; i <= 3; i++) {
        const section = document.getElementById(`verification-${i}`);
        if (section) {
            section.classList.add("d-none");
        }
    }
    const currentSection = document.getElementById(`verification-${step}`);
    if (currentSection) {
        currentSection.classList.remove("d-none");
    }
}

function sayYes() {
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        alert("Yes! I love you too, baby! ❤️");
    }, 500);
}

function moveButton(buttonId) {
    const button = document.getElementById(buttonId);
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Background Music Toggle
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        music.pause();
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

window.addEventListener("load", () => {
    music.play().catch(() => {
        console.log("Autoplay blocked. User must interact to play audio.");
    });
});


