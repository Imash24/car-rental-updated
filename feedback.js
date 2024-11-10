// Scroll behavior for smooth transitions (optional)
document.querySelectorAll(".contact-card a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
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

// feedback via whatsapp
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedbackType = document.getElementById("feedbackType").value;
    const comments = document.getElementById("comments").value;

    // Create WhatsApp message
    const message = `Name: ${name}\nEmail: ${email}\nFeedback Type: ${feedbackType}\nComments: ${comments}`;
    const whatsappLink = `https://wa.me/+919790153339?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
    alert("Your feedback has been sent via WhatsApp!");
    document.getElementById("feedbackForm").reset();
  });
