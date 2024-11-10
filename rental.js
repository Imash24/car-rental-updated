// Add any additional interactivity specific to the rental page here

document.addEventListener('DOMContentLoaded', () => {
  console.log('Rental page loaded.');
  // You can add event listeners for user interaction if needed
});

function flipCard(cardElement) {
  // Toggle the 'flipped' class when the card is clicked
  cardElement.classList.toggle('flipped');
}


// tarrif changing

function updateTariff(option) {
  const tariffTable = document.getElementById("tariffTable");
  
  if (option === 'ac') {
    tariffTable.innerHTML = `
      <tr>
        <td>Day Rent:</td>
        <td>₹3,500</td>
      </tr>
      <tr>
        <td>Rate per Kilometer:</td>
        <td>₹18/km</td>
      </tr>
    `;
  } else if (option === 'nonAc') {
    tariffTable.innerHTML = `
      <tr>
        <td>Day Rent:</td>
        <td>₹3,000</td>
      </tr>
      <tr>
        <td>Rate per Kilometer:</td>
        <td>₹16/km</td>
      </tr>
    `;
  }
}

// book now button

function bookNow(vehicleName) {
  // Replace with your actual WhatsApp number (use international format without + or 00, e.g., 919876543210)
  const phoneNumber = '919790153339';

  // Construct the message based on the vehicle name
  let message = `Hello, I would like to enquire about the ${vehicleName}. Please provide me more details.`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);

  // Construct the WhatsApp API URL
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  // Redirect to WhatsApp
  window.open(whatsappUrl, '_blank');
}

