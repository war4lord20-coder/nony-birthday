// COUNTDOWN
let birthday = new Date("April 16, 2026 00:00:00").getTime();

let interval = setInterval(() => {
    let now = new Date().getTime();
    let diff = birthday - now;

    if (diff <= 0) {
        clearInterval(interval);

        // hide countdown
        document.getElementById("countdown").style.display = "none";

        // show birthday text
        document.getElementById("birthdayText").style.display = "block";

        // play music
        document.getElementById("bg-music").play();

        // launch fireworks 🎆
        launchFireworks();

        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

}, 1000);


// 🎆 Fireworks function
function launchFireworks() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            spread: 70,
            origin: { x: Math.random(), y: Math.random() - 0.2 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// SWIPER
new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
document.addEventListener("click", function () {
    document.getElementById("bg-music").play();
}, { once: true });