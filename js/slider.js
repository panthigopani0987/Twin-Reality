const slider = document.getElementById("testimonial-slider");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});