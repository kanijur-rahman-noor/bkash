const holdButton = document.getElementById('holdButton');
const ring = document.querySelector('.progress-ring');

let interval;
let degrees = 0;
const holdTime = 2000; // Total hold time in ms
const step = 4; // Degrees per step
const intervalTime = holdTime / (360 / step); // <-- FIXED: now for full 360 degrees

const resetRing = () => {
  degrees = 0;
  ring.style.background = `conic-gradient(#ff4081 0deg, #ff4081 0deg, transparent 0deg, transparent 360deg)`;
};

const startHold = () => {
  interval = setInterval(() => {
    degrees += step;
    ring.style.background = `conic-gradient(#ff4081 0deg, #ff4081 ${degrees}deg, transparent ${degrees}deg, transparent 360deg)`;

    if (degrees >= 360) {
      clearInterval(interval);
      goToPage2();
      resetRing();
    }
  }, intervalTime);
};

const cancelHold = () => {
  clearInterval(interval);
  resetRing();
};

// Desktop
holdButton.addEventListener('mousedown', startHold);
holdButton.addEventListener('mouseup', cancelHold);
holdButton.addEventListener('mouseleave', cancelHold);

// Mobile
holdButton.addEventListener('touchstart', startHold);
holdButton.addEventListener('touchend', cancelHold);

