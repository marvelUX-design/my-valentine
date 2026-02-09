// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

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
    let messageIndex = 0;

    // Toggle background music
    window.toggleMusic = function() {
        if (!isPlaying) {
            music.muted = false;
            music.play().catch(err => console.log("Autoplay blocked:", err));
            musicBtn.innerHTML = "🔊 Mute Music";
            isPlaying = true;
        } else {
            music.pause();
            musicBtn.innerHTML = "🔇 Unmute Music";
            isPlaying = false;
        }
    }

    // Handle "No" button clicks
    window.handleNoClick = function() {
        const noButton = document.querySelector('.no-button');
        const yesButton = document.querySelector('.yes-button');

        // Change No button text
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;

        // Increase Yes button font size without cap
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }

    // Handle "Yes" button clicks
    window.handleYesClick = function() {
        window.location.href = "yes_page.html";
    }

});
