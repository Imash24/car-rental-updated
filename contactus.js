// Scroll behavior for smooth transitions (optional)
document.querySelectorAll('.contact-card a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Icon hover effect for contact icons
document.querySelectorAll(".contact-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.color = "#FFCB05";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#2F2959";
  });
});


// feedback section
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedbackType = document.getElementById('feedbackType').value;
    const comments = document.getElementById('comments').value;

    // Here you can handle the form data (e.g., send it to a server)
    // For demonstration, we'll just log it to the console
    console.log('Feedback Submitted:', { name, email, feedbackType, comments });

    // Show a success message (you can customize this as needed)
    alert('Thank you for your feedback, ' + name + '!');
    
    // Reset the form
    document.getElementById('feedbackForm').reset();
});
