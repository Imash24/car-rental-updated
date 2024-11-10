// preloader
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 500);
});

// // learnmore button
// document.querySelectorAll(".learn-more").forEach((button) => {
//   button.addEventListener("click", () => {
//     alert("Learn more about our services on our dedicated page!");
//     // Alternatively, you could redirect to a specific URL:
//     // window.location.href = 'services.html';
//   });
// });

// Add hover effects to package cards
const packageCards = document.querySelectorAll(".package-card");
packageCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s, box-shadow 0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    card.style.transform = "scale(1)";
    card.style.transition = "transform 0.3s, box-shadow 0.3s";
  });
});

// Footer icons color change on hover
document.querySelectorAll(".contact-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.color = "#f1c40f";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#6c757d";
  });
});

// Animation effect using Typed.js
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#typed-text", {
    strings: [
      "Explore beautiful destinations with us!",
      "Enjoy a comfortable and affordable ride.",
      "Your journey, our priority!",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});

// Function to check if the banner is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Function to handle scroll events and trigger fade-in effect
function handleScroll() {
  const bannerText = document.querySelector(".banner-text");
  const banner = document.getElementById("banner");

  if (isInViewport(banner)) {
    console.log("Banner is in view");
    bannerText.style.opacity = "1"; // Show the text when banner is in the viewport
    bannerText.style.left = "40%"; // Move the text to the adjusted left position when visible
  } else {
    console.log("Banner is not in view");
    bannerText.style.opacity = "0"; // Hide the text when out of view
    bannerText.style.left = "50%"; // Reset the text back to center when hidden
  }
}

// Listen to scroll events
window.addEventListener("scroll", handleScroll);

// Ensure that the text is hidden initially on page load
document.addEventListener("DOMContentLoaded", function () {
  const bannerText = document.querySelector(".banner-text");
  bannerText.style.opacity = "0"; // Ensure it's hidden initially
  bannerText.style.left = "50%"; // Ensure it starts from the center when hidden
});

// Debounce function to limit scroll event execution
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Use debounce for the scroll event handler
window.addEventListener("scroll", debounce(handleScroll));
