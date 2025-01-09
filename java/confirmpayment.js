document.addEventListener("DOMContentLoaded", function () {
    const confirmButton = document.getElementById("checkout-button");
  
    confirmButton.addEventListener("click", function (event) {
      event.preventDefault(); 
  
      // Get form inputs
      const fullName = document.querySelector('input[name="title"]').value;
      const email = document.querySelector('input[name="title"]').value;
      const address = document.querySelector('input[name="title"]').value;
      const city = document.querySelector('input[name="title"]').value;
      const state = document.querySelector('input[name="title"]').value;
      const zip = document.querySelector('input[name="title"]').value;
      const cardName = document.querySelector('input[name="title"]').value;
      const cardNumber = document.querySelector('input[name="title"]').value;
      const expMonth = document.querySelector('.month-input').value;
      const expYear = document.querySelector('.year-input').value;
      const cvv = document.querySelector('input[name="title"]').value;
  

      if (!fullName || !email || !address || !city || !state || !zip || !cardName || !cardNumber || !expMonth || !expYear || !cvv) {
        alert("Please fill in all fields correctly.");
        return;
      }
  
    
      confirmPayment();
    });
  

    function confirmPayment() {
      // Simulate a loading state or payment processing delay
      setTimeout(() => {
        alert("Payment confirmed! Thank you for your purchase.");
        // Redirect to a confirmation page or reset form
        window.location.href = "confirmation.html"; // Replace with your desired URL
      }, 1000); // Simulate delay
    }
  });
  