document.addEventListener("DOMContentLoaded", function () {

    // Register Button functionality
    const registerButton = document.querySelector(".btn1");
  
    if (registerButton) {
      registerButton.addEventListener("click", function () {
        showAlert("You have successfully registered! Please follow the instructions.");
      });
    } else {
      console.warn("Register button not found!");
    }
  
    // Contact Card functionality using event delegation
    const contactContainer = document.querySelector(".contact-container"); // Assuming a parent container for contact cards
  
    if (contactContainer) {
      contactContainer.addEventListener("click", function (event) {
        const button = event.target.closest(".btn");
        if (button) {
          const contactName = button.closest(".contact-card").querySelector("h2").textContent;
          showAlert(`You are contacting: ${contactName}`);
        }
      });
    } else {
      console.warn("Contact container not found!");
    }
  
    // Helper function for showing alerts (could be expanded to use more sophisticated notifications)
    function showAlert(message) {
      alert(message); // You can replace this with a more user-friendly method like a toast or modal
    }
  
  });
  