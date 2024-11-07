document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.querySelector('.newsletter input[type="email"]');
  const subscribeButton = document.querySelector('.newsletter .btn');
  const messageBox = document.querySelector('.message');

  subscribeButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      const emailValue = emailInput.value.trim();

    
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailPattern.test(emailValue)) {
          messageBox.textContent = "Please enter a valid email address.";
      } else {
          messageBox.textContent = `Thank you! Your email address "${emailValue}" has been added to our mailing list!`;
      }
  });
});
