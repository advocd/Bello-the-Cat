function DorfBaumDivHandle(event) {
  var clicker = document.getElementById('clicker');
  clicker.classList.remove('hidden');
  clicker.innerHTML = "Seltsam ein Laubbaum im Winter";
}

window.addEventListener("DOMContentLoaded", (event) => {
  // id=testdiv
  var testdiv = document.getElementById('dorf-baum');
  testdiv.addEventListener("click", DorfBaumDivHandle);
});
