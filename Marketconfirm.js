
const lendingForm = document.getElementById("clearFrom");

lendingForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form input values
  const title = document.getElementById("title").value;
  const email = document.getElementById("details").value; // Ensure this targets the correct input field
  const loanPeriod = document.querySelector('input[name="radio"]:checked').nextSibling.nodeValue.trim();

  // Prepare data for Firestore
  const formData = {
    title: title,
    email: email,
    loanPeriod: loanPeriod,
    timestamp: new Date(),
  };

  try {
    // Add data to Firestore and trigger the confirmation email
    await firebase.firestore().collection("lendingFormSubmissions").add(formData);
    alert("Form submitted successfully! A confirmation email has been sent.");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was an error submitting the form. Please try again.");
  }
});
