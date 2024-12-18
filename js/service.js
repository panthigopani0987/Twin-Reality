const slider = document.getElementById("service-slider");
const nextButton = document.getElementById("service-next");
const prevButton = document.getElementById("service-prev");

let currentIndex = 0; // Tracks the active slide
const slides = slider.children.length; // Total number of slides

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides; // Increment and loop back
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Move to the next slide
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides) % slides; // Decrement and loop back
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Move to the previous slide
});
