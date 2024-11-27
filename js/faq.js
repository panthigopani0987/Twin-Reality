// JavaScript for toggling FAQ answers
document.addEventListener("DOMContentLoaded", function () {
    const faqHeaders = document.querySelectorAll(".faq-header");

    faqHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            if (content.classList.contains("hidden")) {
                content.classList.remove("hidden");
                icon.textContent = "-";
            } else {
                content.classList.add("hidden");
                icon.textContent = "+";
            }
        });
    });
});