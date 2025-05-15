
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// function goToPage2() {
//   document.getElementById('page1').classList.remove('active');
//   document.getElementById('page2').classList.add('active');
//   startTimer();
// }


function goToPage2() {
  // Step 1: Hide page1
  document.getElementById('page1').classList.remove('active');

  // Step 2: Show page-connected
  document.getElementById('page-connected').classList.add('active');
  document.getElementById('extra').style.display = 'block';

  // Step 3: After 2 seconds, hide page-connected and show page2
  setTimeout(function () {
    document.getElementById('page-connected').classList.remove('active');
    document.getElementById('extra').style.display = 'none';
    document.getElementById('page2').classList.add('active');
    startTimer(); // Step 4: Start timer
  }, 1000); // 2000ms = 2s
}





function startTimer() {
  let counter = 10;
  const timerEl = document.getElementById('timer');
  const interval = setInterval(() => {
    counter--;
    timerEl.textContent = counter;
    if (counter === 0) {
      clearInterval(interval);
      document.getElementById('page2').classList.remove('active');
      document.getElementById('page3').classList.add('active');
    }
  }, 1000);
}

const track = document.getElementById('carousel-track');
const track2 = document.getElementById('carousel-track2');
const totalSlides = 5;
let currentIndex = 0;

function moveCarousel() {
  currentIndex = (currentIndex + 1) % totalSlides;
  track.style.transform = `translateX(-${300 * currentIndex}px)`;
}

function moveCarousel2() {
  currentIndex = (currentIndex + 1) % totalSlides;
  track2.style.transform = `translateX(-${320 * currentIndex}px)`;
}


setInterval(moveCarousel, 5000); // 5 seconds interval
setInterval(moveCarousel2, 5000); // 5 seconds interval


const heroTrack = document.getElementById("hero-carousel-track");
const heroDots = document.querySelectorAll(".hero-dot");
let heroIndex = 0;

function heroUpdateCarousel() {
  heroIndex = (heroIndex + 1) % 3;
  heroTrack.style.transform = `translateX(-${200 * heroIndex}px)`;
  heroDots.forEach(dot => dot.classList.remove("hero-active"));
  heroDots[heroIndex].classList.add("hero-active");
}

setInterval(heroUpdateCarousel, 3000);



  const swiper = new Swiper(".hero-swiper-container", {
    slidesPerView: 3, // default: 3 visible
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



  function openBkash() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // bKash URI Scheme (example: "bkash://")
    const bkashScheme = "bkash://";
    const androidStoreURL = "https://play.google.com/store/apps/details?id=com.bkash.customerapp";
    const iosStoreURL = "https://apps.apple.com/us/app/bkash/id1203795917";

    const now = new Date().getTime();
    let storeURL = androidStoreURL;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      storeURL = iosStoreURL;
    }

    // Open the bKash app (or redirect if not installed)
    const timeout = setTimeout(function () {
      window.location.href = storeURL;
    }, 2000); // Wait for 2 seconds before redirecting

    // Try opening the app
    window.location.href = bkashScheme;

    // Cancel fallback if the app opens
    window.onblur = function () {
      clearTimeout(timeout);
    };
  }