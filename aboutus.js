// Optional JS for Adding Scroll-triggered Animations
window.addEventListener('scroll', function () {
  const heroContent = document.querySelector('.hero-content');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    heroContent.classList.add('animate-further');
  }
});
