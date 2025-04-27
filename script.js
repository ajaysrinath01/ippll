let queueNumber = 13; // Starting people ahead
let progress = 0; // Starting progress

const queueNumberElement = document.getElementById('queueNumber');
const progressElement = document.getElementById('progress');

// Function to simulate queue movement
function updateQueue() {
  if (queueNumber > 0) {
    queueNumber--;
    progress += (100 / 13); // Update progress proportionally
    queueNumberElement.textContent = queueNumber;
    progressElement.style.width = `${progress}%`;
  } else {
    // When queue is 0, redirect to booking page
    window.location.href = "booking.html"; // You can create booking.html separately
  }
}

// Update every 2 seconds
setInterval(updateQueue, 2000);
