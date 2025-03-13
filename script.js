// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Carousel Rotation Logic
    let currentRotation = 0;

    function rotateCarousel(direction) {
        const carousel = document.getElementById('carousel');
        if (!carousel) {
            console.error("Carousel element not found!");
            return;
        }

        const cards = carousel.querySelectorAll('.card');
        const rotationIncrement = 120; // 120 degrees per card

        currentRotation = (currentRotation + direction * rotationIncrement + 360) % 360;

        cards.forEach((card, index) => {
            const rotation = (currentRotation + index * rotationIncrement) % 360;
            card.style.transform = `translate(-50%, -50%) rotateY(${rotation}deg) translateZ(250px)`;
        });
    }

    // Add click event listeners to feature items
    const feature1 = document.getElementById('feature1');
    const feature2 = document.getElementById('feature2');
    const feature3 = document.getElementById('feature3');

    if (feature1) feature1.addEventListener('click', () => rotateCarousel(-1));
    if (feature2) feature2.addEventListener('click', () => rotateCarousel(-1));
    if (feature3) feature3.addEventListener('click', () => rotateCarousel(1));

    // Add click event listeners to cards
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    if (card1) card1.addEventListener('click', () => rotateCarousel(0));
    if (card2) card2.addEventListener('click', () => rotateCarousel(-1));
    if (card3) card3.addEventListener('click', () => rotateCarousel(1));

    // Choose Your Role JS
    $(document).ready(function () {
        // Add click event to role cards
        $(".role-card").click(function () {
            // Remove active class from all role cards
            $(".role-card").removeClass("active");
            // Add active class to the clicked role card
            $(this).addClass("active");

            // Get the target content section ID
            var target = $(this).data("target");

            // Hide all content sections
            $(".content-section").removeClass("active");

            // Show the target content section
            $("#" + target).addClass("active");
        });
    });

// ✅ **This was missing**
});


