
// JavaScript for dynamic calendar
const datesContainer = document.getElementById("dates");
const monthYearDisplay = document.getElementById("monthYear");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Initialize date variables
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Function to render calendar
function renderCalendar(month, year) {
    datesContainer.innerHTML = ""; // Clear previous dates

    // Get first day of the month
    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Last day

    // Display month and year
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    // Adjust first day (Monday start)
    const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1;

    // Fill empty days before the first date
    for (let i = 0; i < adjustedFirstDay; i++) {
        const emptyDiv = document.createElement("div");
        datesContainer.appendChild(emptyDiv);
    }

    // Add dates to the calendar
    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement("div");
        dateDiv.textContent = day;
        dateDiv.classList.add("p-2", "rounded-lg", "cursor-pointer", "hover:bg-zinc-500");
        // Highlight today
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dateDiv.classList.add("bg-yellow-500", "text-gray-900", "font-bold");
        }
        datesContainer.appendChild(dateDiv);
    }
}

// Event listeners for navigation buttons
prevButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Initial render
renderCalendar(currentMonth, currentYear);