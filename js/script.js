console.log('This website was created for Jireh Solutions by the CodeMark Team @https://codemark.app')
function formatPhoneNumber(input) {
    var phoneNumber = input.value.replace(/\D/g, '');
    var formattedPhoneNumber = '';
    if (phoneNumber.length > 0) {
      formattedPhoneNumber += '(' + phoneNumber.substring(0, 3);
    }
    if (phoneNumber.length > 3) {
      formattedPhoneNumber += ') ' + phoneNumber.substring(3, 6);
    }
    if (phoneNumber.length > 6) {
      formattedPhoneNumber += '-' + phoneNumber.substring(6, 10);
    }
    input.value = formattedPhoneNumber;
  }
  function displayPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'block';

        setTimeout(() => {
            popup.style.display = 'none';
        }, 5000);
    }
}
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formToSubmit");
  const submitButton = document.querySelector("#formToSubmit button[type='submit']");
  
  if (form) {
      form.addEventListener("submit", async function(event) {
          event.preventDefault();
          if (validateForm()) {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = '#333';
              const formData = new FormData(form);

              try {
                  const response = await fetch("https://backend-jirehinvestment.replit.app/submit-form", {
                      method: "POST",
                      body: formData
                  });

                  if (!response.ok) {
                      throw new Error("Network response was not ok");
                  }

                  const data = await response.json();
                  console.log("Email sent successfully");
                  console.log("Response:", data);
                  displayPopup('popupSuccess');
                  submitButton.disabled = false;
                  submitButton.style.backgroundColor = '#cbab85';
              } catch (error) {
                  console.error("Error sending email:", error.message);
                  displayPopup('popupError');
                  submitButton.disabled = false;
                  submitButton.style.backgroundColor = '#cbab85';
              }
          } else {
              alert("Please fill out all required fields.");
          }
      });
  } else {
      console.error("Form element not found in the DOM");
  }
});

function validateForm() {
  const requiredInputs = document.querySelectorAll('#formToSubmit input[required], #formToSubmit textarea[required]');
  let isValid = true;

  requiredInputs.forEach(input => {
      if (!input.value.trim()) {
          isValid = false;
      }
  });

  return isValid;
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.getElementById('contact');
      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}
