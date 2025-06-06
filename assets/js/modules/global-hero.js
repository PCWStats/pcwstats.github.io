document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with hero classes
    const heroes = document.querySelectorAll('.hero, .home-hero');

    // Only proceed if we found hero elements
    if (heroes.length > 0) {
        // Generate a random number between 1 and 46
        const randomImageNumber = Math.floor(Math.random() * 50) + 1;

        // Construct the new image URL
        const newImageUrl = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.jsdelivr.net/gh/PCWStats/Website-Images@main/hero-background/${randomImageNumber}.webp')`;

        // Apply the new background image to all hero elements
        heroes.forEach(hero => {
            hero.style.backgroundImage = newImageUrl;
        });
    }
});