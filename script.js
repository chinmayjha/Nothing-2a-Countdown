// Set the date we're counting down to
const countDownDate = new Date("March 5, 2024 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now;
    
    // Calculate days, hours, and minutes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    // Display the countdown in the "countdown" element
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m ";
    
    // If the countdown is over, display "EXPIRED"
    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

// Update the countdown immediately when loaded
updateCountdown();

// Update the countdown every minute
const countdownInterval = setInterval(updateCountdown, 60000); // Update every minute (60,000 milliseconds)
