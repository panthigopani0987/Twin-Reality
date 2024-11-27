const slider_1 = document.getElementById("testimontal-slider");
const totalSlides_1 = slider_1.children.length;
let currentIndex_1 = 0;

function slideNext() {
    currentIndex_1 = (currentIndex_1 + 1) % totalSlides_1;
    slider_1.style.transform = `translateX(-${currentIndex_1 * 100}%)`;
}

// Set interval for automatic sliding
setInterval(slideNext, 3000); // Slides change every 3 seconds