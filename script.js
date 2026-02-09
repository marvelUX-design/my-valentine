const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const music = document.getElementById("bg-music");
const musicBtn = document.querySelector(".music-btn");

let isPlaying = false;

function toggleMusic() {
    if (!isPlaying) {
        music.muted = false;
        music.play();
        musicBtn.innerHTML = "🔊 Mute Music";
        isPlaying = true;
    } else {
        music.pause();
        musicBtn.innerHTML = "🔇 Unmute Music";
        isPlaying = false;
    }
}

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
