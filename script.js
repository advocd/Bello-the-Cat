function handleButtonClick(event) {
  console.log("clicked");
  var clicker = document.getElementById('clicker');
  console.log("est", clicker);
  clicker.classList.remove('hidden');
}

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("test");
  var clicker = document.getElementById('clicker');
  console.log(clicker);
  clicker.addEventListener("click", handleButtonClick);
});
