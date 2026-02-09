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
    const tapOverlay = document.getElementById("tap-overlay");

    let isPlaying = false;
    let messageIndex = 0;

    // Try autoplay on page load (desktop)
    music.muted = false;
    music.play().then(() => {
        isPlaying = true;
        musicBtn.innerHTML = "🔊 Mute Music";
        // hide overlay if autoplay works
        if(tapOverlay) tapOverlay.style.display = "none";
    }).catch(err => {
        // Autoplay blocked, show overlay for mobile
        if(tapOverlay) tapOverlay.style.display = "flex";
        console.log("Autoplay blocked:", err);
    });

    // Overlay click for mobile to start music
    if(tapOverlay){
        tapOverlay.addEventListener("click", () => {
            music.muted = false;
            music.play().catch(err => console.log(err));
            isPlaying = true;
            musicBtn.innerHTML = "🔊 Mute Music";
            tapOverlay.style.display = "none";
        });
    }

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

        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;

        // Yes button font growth without cap
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }

    // Handle "Yes" button clicks
    window.handleYesClick = function() {
        window.location.href = "yes_page.html";
    }

});
