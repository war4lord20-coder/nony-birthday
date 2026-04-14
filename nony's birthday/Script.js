// COUNTDOWN
let birthday = new Date("April 16, 2026 00:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let diff = birthday - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);


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