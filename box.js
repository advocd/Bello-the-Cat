// Get all buttons with the class "click"
var buttons = document.querySelectorAll('.clickable');

// Attach click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
      var element = this.querySelector('.content');
      element.classList.toggle('visible');
  });
});