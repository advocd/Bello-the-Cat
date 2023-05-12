function testDivHandle(event) {
  var clicker = document.getElementById('clicker');
  clicker.classList.remove('hidden');
  clicker.innerHTML = " Hallo das ist ein text";
}

window.addEventListener("DOMContentLoaded", (event) => {
  // id=testdiv
  var testdiv = document.getElementById('testdiv');
  testdiv.addEventListener("click", testDivHandle);
});
